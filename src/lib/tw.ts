/** Shared Tailwind utility strings — no custom CSS classes */
export const tw = {
  gradientText:
    "inline-block bg-gradient-to-br from-purple-400 via-indigo-400 to-pink-400 bg-clip-text pb-1 leading-normal text-transparent",
  card: "rounded-3xl border border-purple-400/30 bg-white/80 shadow-lg shadow-indigo-500/10 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-purple-400/50 hover:shadow-xl hover:shadow-purple-400/20 [html[data-theme=dark]_&]:border-purple-400/25 [html[data-theme=dark]_&]:bg-[#18132a]/80",
  cardSm:
    "rounded-2xl border border-purple-400/30 bg-white/80 shadow-md backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-400/50 [html[data-theme=dark]_&]:border-purple-400/25 [html[data-theme=dark]_&]:bg-[#18132a]/80",
  btnPrimary:
    "inline-block rounded-2xl bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 px-8 py-3 text-center font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-400/30",
  btnOutline:
    "inline-block rounded-2xl border-2 border-purple-400/60 bg-white/80 px-8 py-3 text-center font-semibold text-purple-400 backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-500 [html[data-theme=dark]_&]:border-purple-400/50 [html[data-theme=dark]_&]:bg-[#18132a]/80 [html[data-theme=dark]_&]:text-purple-300",
  badge:
    "rounded-full border border-purple-400/30 bg-white/80 text-purple-400 backdrop-blur-sm [html[data-theme=dark]_&]:border-purple-400/25 [html[data-theme=dark]_&]:bg-[#18132a]/80 [html[data-theme=dark]_&]:text-purple-300",
  text: "text-purple-700 [html[data-theme=dark]_&]:text-purple-200",
  muted: "text-indigo-500 [html[data-theme=dark]_&]:text-indigo-300",
  navBg:
    "border-purple-400/30 bg-white/85 backdrop-blur-md [html[data-theme=dark]_&]:border-purple-400/25 [html[data-theme=dark]_&]:bg-[#0a0814]/90",
  surfaceSoft: "bg-violet-100 [html[data-theme=dark]_&]:bg-[#12101f]",
  input:
    "w-full rounded-xl border border-purple-400/30 bg-violet-100 px-4 py-3 text-purple-700 transition-all focus:outline-none focus:ring-2 focus:ring-purple-400/50 [html[data-theme=dark]_&]:border-purple-400/25 [html[data-theme=dark]_&]:bg-[#12101f] [html[data-theme=dark]_&]:text-purple-200",
  divider:
    "mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500",
  display: "font-[Zen_Maru_Gothic,M_PLUS_Rounded_1c,ui-rounded,sans-serif]",
  navLink:
    "relative px-3 py-2 text-sm font-medium text-indigo-500 transition-all duration-300 ease-out hover:text-purple-400 aria-[current=true]:text-purple-400",
  themeBtn:
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-purple-400/30 bg-white/80 text-purple-400 transition-all hover:scale-105 hover:border-purple-400/50 hover:shadow-md hover:shadow-purple-400/20 [html[data-theme=dark]_&]:border-purple-400/25 [html[data-theme=dark]_&]:bg-[#18132a]/80",
  avatarRing:
    "rounded-full bg-gradient-to-r from-purple-400 via-indigo-500 to-pink-500 p-1 shadow-lg shadow-purple-400/30",
  pageBg: "bg-violet-50 [html[data-theme=dark]_&]:bg-[#0a0814]",
} as const;
