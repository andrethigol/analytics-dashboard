// ============================================
// PÁGINA PRINCIPAL DO DASHBOARD
// ============================================
// Agora importamos o componente Charts real
// no lugar dos placeholders anteriores.

import Charts from '@/components/Charts'

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      {/* Cabeçalho */}
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 text-sm mt-1">
          Visão geral de todas as plataformas
        </p>
      </div>

      {/* Cards de métricas rápidas */}
      <div className="grid grid-cols-4 gap-4">

        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <p className="text-xs text-gray-400 uppercase tracking-wider">Usuários Ativos</p>
          <p className="text-2xl font-bold text-white mt-1">4.500</p>
          <p className="text-xs text-green-400 mt-1">↑ 12% vs semana anterior</p>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <p className="text-xs text-gray-400 uppercase tracking-wider">Investimento Ads</p>
          <p className="text-2xl font-bold text-white mt-1">R$ 3.200</p>
          <p className="text-xs text-red-400 mt-1">↓ 5% vs semana anterior</p>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <p className="text-xs text-gray-400 uppercase tracking-wider">Cliques Orgânicos</p>
          <p className="text-2xl font-bold text-white mt-1">12.800</p>
          <p className="text-xs text-green-400 mt-1">↑ 8% vs semana anterior</p>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
          <p className="text-xs text-gray-400 uppercase tracking-wider">Score do Domínio</p>
          <p className="text-2xl font-bold text-white mt-1">47</p>
          <p className="text-xs text-gray-400 mt-1">→ estável</p>
        </div>

      </div>

      {/* Gráficos */}
      <Charts />

    </div>
  )
}