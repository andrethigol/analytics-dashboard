// ============================================
// LAYOUT PRINCIPAL DA APLICAÇÃO
// ============================================
// Agora importamos o componente Sidebar real
// no lugar dos placeholders que tínhamos antes.

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Analytics Dashboard',
  description: 'Dashboard unificado de marketing e analytics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-950 text-white overflow-hidden">

          {/* QUADRO 1 — Sidebar com navegação real */}
          <Sidebar />

          {/* QUADRO 2 — Área principal dos gráficos */}
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>

          {/* QUADRO 3 — Painel de IA */}
          <aside className="w-80 bg-gray-900 border-l border-gray-800 p-4">
            <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              Análise IA
            </h2>
            <div className="bg-gray-800 rounded-lg p-3 text-sm text-gray-400">
              Selecione uma fonte de dados para gerar insights automáticos.
            </div>
          </aside>

        </div>
      </body>
    </html>
  )
}