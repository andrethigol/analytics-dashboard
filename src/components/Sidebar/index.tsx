// ============================================
// COMPONENTE: SIDEBAR (Quadro 1)
// ============================================
// Menu lateral de navegação entre as plataformas.
// Cada ícone representa uma fonte de dados.
// O item ativo fica destacado em azul.
// "use client" é necessário porque usamos
// useState (interatividade no navegador).

'use client'

import { useState } from 'react'
import {
  BarChart2,
  Search,
  TrendingUp,
  Target,
  Zap,
  Settings,
  LayoutDashboard,
} from 'lucide-react'

// Tipo que define cada item do menu
interface NavItem {
  id: string
  label: string
  icon: React.ReactNode
  color: string // cor do ícone quando ativo
}

// Lista de plataformas disponíveis no menu
const navItems: NavItem[] = [
  {
    id: 'overview',
    label: 'Visão Geral',
    icon: <LayoutDashboard size={20} />,
    color: 'text-blue-400',
  },
  {
    id: 'google-analytics',
    label: 'Google Analytics',
    icon: <BarChart2 size={20} />,
    color: 'text-orange-400',
  },
  {
    id: 'google-ads',
    label: 'Google Ads',
    icon: <Target size={20} />,
    color: 'text-green-400',
  },
  {
    id: 'search-console',
    label: 'Search Console',
    icon: <Search size={20} />,
    color: 'text-blue-400',
  },
  {
    id: 'meta-ads',
    label: 'Meta Ads',
    icon: <TrendingUp size={20} />,
    color: 'text-indigo-400',
  },
  {
    id: 'ubersuggest',
    label: 'Ubersuggest',
    icon: <Zap size={20} />,
    color: 'text-yellow-400',
  },
]

export default function Sidebar() {
  // Guarda qual item do menu está selecionado
  const [active, setActive] = useState('overview')

  return (
    <aside className="w-16 bg-gray-900 border-r border-gray-800 flex flex-col items-center py-4 gap-1 h-full">

      {/* Logo do projeto */}
      <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
        <BarChart2 size={18} className="text-white" />
      </div>

      {/* Itens de navegação */}
      <nav className="flex flex-col gap-1 flex-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            title={item.label} // tooltip ao passar o mouse
            className={`
              w-10 h-10 rounded-xl flex items-center justify-center
              transition-all duration-200 group relative
              ${active === item.id
                ? `bg-gray-700 ${item.color}`
                : 'text-gray-500 hover:bg-gray-800 hover:text-gray-300'
              }
            `}
          >
            {item.icon}

            {/* Tooltip com o nome da plataforma */}
            <span className="
              absolute left-14 bg-gray-800 text-white text-xs
              px-2 py-1 rounded-md whitespace-nowrap
              opacity-0 group-hover:opacity-100
              transition-opacity duration-200 pointer-events-none
              border border-gray-700 z-50
            ">
              {item.label}
            </span>
          </button>
        ))}
      </nav>

      {/* Botão de configurações no rodapé */}
      <button
        title="Configurações"
        className="w-10 h-10 rounded-xl flex items-center justify-center text-gray-500 hover:bg-gray-800 hover:text-gray-300 transition-all duration-200"
      >
        <Settings size={20} />
      </button>

    </aside>
  )
}