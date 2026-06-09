// ============================================
// COMPONENTE: PAINEL DE IA (Quadro 3)
// ============================================
// Exibe análises e insights gerados pelo
// ChatGPT com base nos dados reais do dashboard.
// O usuário clica em "Analisar" e a IA gera
// um relatório automático dos dados.

'use client'

import { useState } from 'react'
import axios from 'axios'
import { Sparkles, RefreshCw, TrendingUp } from 'lucide-react'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001'

interface AIPanelProps {
  metrics?: {
    activeUsers: number
    sessions: number
    pageViews: number
    bounceRate: number
    avgSessionDuration: number
    newUsers: number
  } | null
  chartData?: {
    date: string
    usuarios: number
    sessoes: number
    pageviews: number
  }[]
  propertyName?: string
}

export default function AIPanel({ metrics, chartData, propertyName }: AIPanelProps) {
  const [analysis, setAnalysis] = useState<string>('')
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState<string | null>(null)

  async function handleAnalyze() {
    if (!metrics) return

    setLoading(true)
    setError(null)
    setAnalysis('')

    try {
      const { data } = await axios.post(`${BACKEND_URL}/api/ai/analyze`, {
        metrics,
        chartData,
        platform: 'Google Analytics',
        propertyName,
      })

      if (data.success) {
        setAnalysis(data.analysis)
      }
    } catch (err) {
      setError('Erro ao gerar análise. Verifique a chave da OpenAI.')
    } finally {
      setLoading(false)
    }
  }

  // Formata o texto markdown simples em parágrafos
  function formatAnalysis(text: string) {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <p key={i} className="font-semibold text-white mt-3 mb-1">
            {line.replace(/\*\*/g, '')}
          </p>
        )
      }
      if (line.startsWith('1.') || line.startsWith('2.') || line.startsWith('3.') || line.startsWith('4.')) {
        return (
          <p key={i} className="font-semibold text-blue-400 mt-3 mb-1">
            {line}
          </p>
        )
      }
      if (line.startsWith('-')) {
        return (
          <p key={i} className="text-gray-300 text-xs pl-2 py-0.5">
            {line}
          </p>
        )
      }
      if (line.trim() === '') return null
      return (
        <p key={i} className="text-gray-300 text-xs py-0.5">
          {line}
        </p>
      )
    })
  }

  return (
    <aside className="w-80 bg-gray-900 border-l border-gray-800 flex flex-col h-full">

      {/* Cabeçalho */}
      <div className="p-4 border-b border-gray-800">
        <div className="flex items-center gap-2">
          <Sparkles size={16} className="text-yellow-400" />
          <h2 className="text-sm font-semibold text-white">Análise IA</h2>
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Insights automáticos com ChatGPT
        </p>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">

        {/* Sem dados */}
        {!metrics && (
          <div className="bg-gray-800 rounded-lg p-3">
            <p className="text-xs text-gray-400">
              Conecte o Google Analytics para gerar análises automáticas.
            </p>
          </div>
        )}

        {/* Com dados — botão de análise */}
        {metrics && !analysis && !loading && (
          <div className="space-y-3">
            <div className="bg-gray-800 rounded-lg p-3 space-y-2">
              <div className="flex items-center gap-2">
                <TrendingUp size={14} className="text-blue-400" />
                <p className="text-xs font-semibold text-white">
                  {propertyName || 'Google Analytics'}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <p className="text-xs text-gray-500">Usuários</p>
                  <p className="text-sm font-bold text-white">
                    {metrics.activeUsers.toLocaleString('pt-BR')}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Sessões</p>
                  <p className="text-sm font-bold text-white">
                    {metrics.sessions.toLocaleString('pt-BR')}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Pageviews</p>
                  <p className="text-sm font-bold text-white">
                    {metrics.pageViews.toLocaleString('pt-BR')}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Rejeição</p>
                  <p className="text-sm font-bold text-white">
                    {(metrics.bounceRate * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleAnalyze}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles size={14} />
              Gerar Análise com IA
            </button>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-400">
              <RefreshCw size={14} className="animate-spin" />
              <p className="text-xs">Analisando dados...</p>
            </div>
            <div className="space-y-2 animate-pulse">
              <div className="h-3 bg-gray-700 rounded w-full" />
              <div className="h-3 bg-gray-700 rounded w-4/5" />
              <div className="h-3 bg-gray-700 rounded w-3/4" />
              <div className="h-3 bg-gray-700 rounded w-full" />
              <div className="h-3 bg-gray-700 rounded w-2/3" />
            </div>
          </div>
        )}

        {/* Análise gerada */}
        {analysis && (
          <div className="space-y-3">
            <div className="bg-gray-800 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles size={12} className="text-yellow-400" />
                <p className="text-xs font-semibold text-yellow-400">
                  Análise gerada pela IA
                </p>
              </div>
              <div className="text-xs leading-relaxed">
                {formatAnalysis(analysis)}
              </div>
            </div>

            <button
              onClick={handleAnalyze}
              className="w-full bg-gray-700 hover:bg-gray-600 text-gray-300 text-xs py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw size={12} />
              Gerar nova análise
            </button>
          </div>
        )}

        {/* Erro */}
        {error && (
          <div className="bg-red-900 rounded-lg p-3">
            <p className="text-xs text-red-300">{error}</p>
          </div>
        )}

      </div>
    </aside>
  )
}