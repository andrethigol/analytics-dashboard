// ============================================
// LAYOUT PRINCIPAL DA APLICAÇÃO
// ============================================
// Este arquivo envolve TODAS as páginas do
// projeto. É aqui que importamos as fontes,
// definimos o título da aba do navegador e
// adicionamos elementos que aparecem em todas
// as telas (como o menu lateral).

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Fonte principal do projeto
const inter = Inter({ subsets: ['latin'] })

// Metadados que aparecem na aba do navegador
export const metadata: Metadata = {
  title: 'Analytics Dashboard',
  description: 'Dashboard unificado de marketing e analytics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode  // representa a página atual sendo exibida
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* 
          Layout de 3 colunas conforme o esboço:
          - Sidebar (Quadro 1): menu de navegação
          - Main (Quadro 2): área dos gráficos
          - AIPanel (Quadro 3): painel de IA
          Por enquanto placeholders — vamos construir cada um
        */}
        <div className="flex h-screen bg-gray-950 text-white overflow-hidden">

          {/* QUADRO 1 — Menu lateral */}
          <aside className="w-16 bg-gray-900 border-r border-gray-800 flex flex-col items-center py-4 gap-4">
            <div className="w-8 h-8 bg-blue-600 rounded-lg" />
            <nav className="flex flex-col gap-2 mt-4">
              <div className="w-8 h-8 bg-gray-700 rounded-lg" />
              <div className="w-8 h-8 bg-gray-700 rounded-lg" />
              <div className="w-8 h-8 bg-gray-700 rounded-lg" />
              <div className="w-8 h-8 bg-gray-700 rounded-lg" />
            </nav>
          </aside>

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