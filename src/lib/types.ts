// ============================================
// TIPOS GLOBAIS DO PROJETO ANALYTICS DASHBOARD
// ============================================
// Aqui definimos os "moldes" dos dados que
// vamos receber de cada API. O TypeScript usa
// isso para garantir que não usamos dados
// errados em nenhum lugar do projeto.

// --- GOOGLE ANALYTICS ---
export interface GAMetrics {
  activeUsers: number        // usuários ativos no período
  sessions: number           // total de sessões
  pageViews: number          // total de visualizações
  bounceRate: number         // taxa de rejeição (%)
  avgSessionDuration: number // duração média da sessão (segundos)
  newUsers: number           // novos usuários
}

// --- GOOGLE ADS ---
export interface GoogleAdsMetrics {
  impressions: number   // quantas vezes o anúncio foi exibido
  clicks: number        // quantas vezes foi clicado
  cost: number          // valor gasto (R$)
  conversions: number   // quantas conversões gerou
  ctr: number           // taxa de clique (clicks/impressions %)
  cpc: number           // custo por clique médio (R$)
}

// --- META ADS (Facebook/Instagram) ---
export interface MetaAdsMetrics {
  impressions: number  // exibições do anúncio
  reach: number        // pessoas únicas alcançadas
  clicks: number       // cliques no anúncio
  spend: number        // valor gasto (R$)
  cpm: number          // custo por mil impressões (R$)
  ctr: number          // taxa de clique (%)
}

// --- GOOGLE SEARCH CONSOLE ---
export interface SearchConsoleMetrics {
  totalClicks: number      // cliques vindos do Google
  totalImpressions: number // vezes que apareceu no Google
  avgCTR: number           // taxa de clique média (%)
  avgPosition: number      // posição média nos resultados
}

// --- UBERSUGGEST ---
export interface UbersuggestMetrics {
  domainScore: number       // pontuação de autoridade do domínio
  organicKeywords: number   // total de palavras-chave orgânicas
  organicTraffic: number    // estimativa de tráfego orgânico
  organicCost: number       // valor estimado do tráfego (R$)
}

// --- TIPO GERAL DE PERÍODO ---
// Usado em todos os componentes para filtrar datas
export interface DateRange {
  from: string  // data início (formato: YYYY-MM-DD)
  to: string    // data fim   (formato: YYYY-MM-DD)
}

// --- FONTES DISPONÍVEIS NO MENU ---
// Define quais integrações existem no sistema
export type DataSource =
  | 'google-analytics'
  | 'google-ads'
  | 'search-console'
  | 'meta-ads'
  | 'ubersuggest'