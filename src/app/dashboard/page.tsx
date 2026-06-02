'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Charts from '@/components/Charts'
import { useAnalytics } from '@/lib/useAnalytics'

function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}m ${s}s`
}

function formatNumber(n: number): string {
  return n.toLocaleString('pt-BR')
}

function DashboardContent() {
  const searchParams = useSearchParams()
  const userId = searchParams.get('userId')
  const { metrics, chartData, properties, loading, error } = useAnalytics(userId)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 text-sm mt-1">
          {properties[0]?.displayName || 'Visão geral de todas as plataformas'}
        </p>
      </div>

      {loading && (
        <p className="text-gray-400 text-sm animate-pulse">Buscando dados reais...</p>
      )}

      {error && (
        <p className="bg-red-900 text-red-300 text-sm px-4 py-2 rounded-lg">{error}</p>
      )}

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <p className="text-xs text-gray-400 uppercase tracking-wider">Usuários Ativos</p>
          <p className="text-2xl font-bold text-white mt-1">
            {metrics ? formatNumber(metrics.activeUsers) : '—'}
          </p>
          <p className="text-xs text-gray-500 mt-1">últimos 30 dias</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <p className="text-xs text-gray-400 uppercase tracking-wider">Sessões</p>
          <p className="text-2xl font-bold text-white mt-1">
            {metrics ? formatNumber(metrics.sessions) : '—'}
          </p>
          <p className="text-xs text-gray-500 mt-1">últimos 30 dias</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <p className="text-xs text-gray-400 uppercase tracking-wider">Pageviews</p>
          <p className="text-2xl font-bold text-white mt-1">
            {metrics ? formatNumber(metrics.pageViews) : '—'}
          </p>
          <p className="text-xs text-gray-500 mt-1">últimos 30 dias</p>
        </div>
        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <p className="text-xs text-gray-400 uppercase tracking-wider">Duração Média</p>
          <p className="text-2xl font-bold text-white mt-1">
            {metrics ? formatDuration(metrics.avgSessionDuration) : '—'}
          </p>
          <p className="text-xs text-gray-500 mt-1">por sessão</p>
        </div>
      </div>

      <Charts chartData={chartData.length > 0 ? chartData : undefined} />
    </div>
  )
}

export default function DashboardPage() {
  return (
    <Suspense fallback={<div className="text-gray-400 p-6">Carregando...</div>}>
      <DashboardContent />
    </Suspense>
  )
}