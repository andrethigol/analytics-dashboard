// ============================================
// HOOK: useAnalytics
// ============================================
// Hook personalizado do React que busca dados
// reais do Google Analytics via nosso backend.
//
// "Hook" é uma função especial do React que
// gerencia estado e efeitos colaterais.
// Começa sempre com "use" por convenção.

'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001'

// Tipos dos dados que vamos receber
interface GAMetrics {
  activeUsers: number
  sessions: number
  pageViews: number
  bounceRate: number
  avgSessionDuration: number
  newUsers: number
}

interface GAChartData {
  date: string
  usuarios: number
  sessoes: number
  pageviews: number
}

interface GAProperty {
  name: string
  displayName: string
}

export function useAnalytics(userId: string | null) {
  const [metrics, setMetrics]       = useState<GAMetrics | null>(null)
  const [chartData, setChartData]   = useState<GAChartData[]>([])
  const [properties, setProperties] = useState<GAProperty[]>([])
  const [propertyId, setPropertyId] = useState<string | null>(null)
  const [loading, setLoading]       = useState(false)
  const [error, setError]           = useState<string | null>(null)

  // Busca as propriedades disponíveis quando tiver userId
  useEffect(() => {
    if (!userId) return

    async function fetchProperties() {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/api/analytics/properties/${userId}`
        )
        if (data.success && data.properties.length > 0) {
          setProperties(data.properties)
          // Seleciona a primeira propriedade automaticamente
          const firstId = data.properties[0].name.replace('properties/', '')
          setPropertyId(firstId)
        }
      } catch (err) {
        setError('Erro ao buscar propriedades do GA4')
      }
    }

    fetchProperties()
  }, [userId])

  // Busca métricas e dados do gráfico quando tiver propertyId
  useEffect(() => {
    if (!userId || !propertyId) return

    async function fetchData() {
      setLoading(true)
      setError(null)

      try {
        // Busca métricas e gráfico em paralelo
        const [metricsRes, chartRes] = await Promise.all([
          axios.get(`${BACKEND_URL}/api/analytics/metrics/${userId}/${propertyId}`),
          axios.get(`${BACKEND_URL}/api/analytics/chart/${userId}/${propertyId}`),
        ])

        if (metricsRes.data.success) setMetrics(metricsRes.data.metrics)
        if (chartRes.data.success)   setChartData(chartRes.data.chartData)

      } catch (err) {
        setError('Erro ao buscar dados do Google Analytics')
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [userId, propertyId])

  return {
    metrics,
    chartData,
    properties,
    propertyId,
    setPropertyId,
    loading,
    error,
  }
}