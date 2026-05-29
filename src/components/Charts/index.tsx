// ============================================
// COMPONENTE: CHARTS (Quadro 2)
// ============================================
// Gráficos do dashboard usando Recharts.
// Por enquanto com dados mockados (falsos)
// no mesmo formato que virão das APIs reais.
// Quando integrarmos as APIs, só precisamos
// trocar os dados — os gráficos ficam iguais.

'use client'

import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

// --- DADOS MOCKADOS ---
// Simulam o que virá do Google Analytics
const gaData = [
  { date: '01/05', usuarios: 1200, sessoes: 1800, pageviews: 4200 },
  { date: '08/05', usuarios: 1900, sessoes: 2400, pageviews: 5100 },
  { date: '15/05', usuarios: 1600, sessoes: 2100, pageviews: 4800 },
  { date: '22/05', usuarios: 2400, sessoes: 3200, pageviews: 7200 },
  { date: '29/05', usuarios: 2100, sessoes: 2900, pageviews: 6400 },
]

// Simulam o que virá do Google Ads + Meta Ads
const adsData = [
  { date: '01/05', google: 850, meta: 620 },
  { date: '08/05', google: 1100, meta: 890 },
  { date: '15/05', google: 780,  meta: 1050 },
  { date: '22/05', google: 1350, meta: 920 },
  { date: '29/05', google: 1200, meta: 1100 },
]

// Simulam o que virá do Search Console
const searchData = [
  { date: '01/05', cliques: 3200, impressoes: 28000 },
  { date: '08/05', cliques: 4100, impressoes: 32000 },
  { date: '15/05', cliques: 3800, impressoes: 30000 },
  { date: '22/05', cliques: 5200, impressoes: 41000 },
  { date: '29/05', cliques: 4800, impressoes: 38000 },
]

// --- SUBCOMPONENTE: título de cada card ---
function ChartCard({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle: string
  children: React.ReactNode
}) {
  return (
    <div className="bg-gray-900 rounded-xl p-4 border border-gray-800">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <p className="text-xs text-gray-500 mb-4">{subtitle}</p>
      {children}
    </div>
  )
}

// --- COMPONENTE PRINCIPAL ---
export default function Charts() {
  return (
    <div className="space-y-4">

      {/* Gráfico 1 — Usuários ao longo do tempo (linha) */}
      <ChartCard
        title="Google Analytics"
        subtitle="Usuários, sessões e pageviews nos últimos 30 dias"
      >
        <ResponsiveContainer width="100%" height={220}>
          <LineChart data={gaData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
            <XAxis dataKey="date" stroke="#6b7280" tick={{ fontSize: 11 }} />
            <YAxis stroke="#6b7280" tick={{ fontSize: 11 }} />
            <Tooltip
              contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: 8 }}
              labelStyle={{ color: '#fff' }}
            />
            <Legend wrapperStyle={{ fontSize: 11 }} />
            <Line type="monotone" dataKey="usuarios"  stroke="#3b82f6" strokeWidth={2} dot={false} name="Usuários" />
            <Line type="monotone" dataKey="sessoes"   stroke="#10b981" strokeWidth={2} dot={false} name="Sessões" />
            <Line type="monotone" dataKey="pageviews" stroke="#8b5cf6" strokeWidth={2} dot={false} name="Pageviews" />
          </LineChart>
        </ResponsiveContainer>
      </ChartCard>

      {/* Gráficos 2 e 3 lado a lado */}
      <div className="grid grid-cols-2 gap-4">

        {/* Gráfico 2 — Investimento em Ads (barras) */}
        <ChartCard
          title="Investimento em Ads"
          subtitle="Google Ads vs Meta Ads (R$)"
        >
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={adsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
              <XAxis dataKey="date" stroke="#6b7280" tick={{ fontSize: 11 }} />
              <YAxis stroke="#6b7280" tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: 8 }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Bar dataKey="google" fill="#3b82f6" name="Google Ads" radius={[4,4,0,0]} />
              <Bar dataKey="meta"   fill="#8b5cf6" name="Meta Ads"   radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Gráfico 3 — Search Console (linha) */}
        <ChartCard
          title="Search Console"
          subtitle="Cliques orgânicos vs impressões"
        >
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={searchData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f2937" />
              <XAxis dataKey="date" stroke="#6b7280" tick={{ fontSize: 11 }} />
              <YAxis stroke="#6b7280" tick={{ fontSize: 11 }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#111827', border: '1px solid #374151', borderRadius: 8 }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend wrapperStyle={{ fontSize: 11 }} />
              <Line type="monotone" dataKey="cliques"    stroke="#f59e0b" strokeWidth={2} dot={false} name="Cliques" />
              <Line type="monotone" dataKey="impressoes" stroke="#6b7280" strokeWidth={2} dot={false} name="Impressões" />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

      </div>
    </div>
  )
}