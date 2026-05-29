// ============================================
// PÁGINA PRINCIPAL DO DASHBOARD
// ============================================
// Esta é a página que aparece em
// localhost:3000/dashboard
// Por enquanto vamos colocar cards de métricas
// estáticas para montar a estrutura visual.
// Depois vamos substituir pelos dados reais das APIs.

export default function DashboardPage() {
  return (
    <div className="space-y-6">

      {/* Cabeçalho da página */}
      <div>
        <h1 className="text-2xl font-bold text-white">Dashboard</h1>
        <p className="text-gray-400 text-sm mt-1">
          Visão geral de todas as plataformas
        </p>
      </div>

      {/* LINHA DE CARDS — métricas rápidas */}
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

      {/* ÁREA DOS GRÁFICOS — placeholder por enquanto */}
      <div className="grid grid-cols-2 gap-4">

        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800 h-64 flex items-center justify-center">
          <p className="text-gray-600 text-sm">Gráfico Google Analytics (em breve)</p>
        </div>

        <div className="bg-gray-900 rounded-xl p-4 border border-gray-800 h-64 flex items-center justify-center">
          <p className="text-gray-600 text-sm">Gráfico Meta Ads (em breve)</p>
        </div>

      </div>

    </div>
  )
}