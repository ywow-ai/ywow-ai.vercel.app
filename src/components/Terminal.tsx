// import { useState, useEffect, useRef } from "react";

// const Terminal = ({
//   isOpen,
//   onClose,
// }: {
//   isOpen: boolean;
//   onClose: () => void;
// }) => {
//   type History = { type: "input" | "output" | "error"; content: string[] };
//   const [input, setInput] = useState("");
//   const [history, setHistory] = useState<History[]>([]);
//   const [commandHistory, setCommandHistory] = useState<string[]>([]);
//   const [historyIndex, setHistoryIndex] = useState(-1);
//   const inputRef = useRef<HTMLInputElement | null>(null);
//   const terminalRef = useRef<HTMLDivElement | null>(null);

//   const commands: Record<string, { output?: string[]; action?: string }> = {
//     help: {
//       output: [
//         "Available commands:",
//         "  help          - Show this help message",
//         "  whoami        - Display user information",
//         "  ls            - List skills and directories",
//         "  cat [file]    - Read file contents",
//         "  skills        - Show detailed skills breakdown",
//         "  neofetch      - Display system information",
//         "  clear         - Clear terminal screen",
//         "  exit          - Close terminal",
//         "",
//         "Navigation:",
//         "  Ctrl+K or `   - Toggle terminal",
//         "  Esc           - Close terminal",
//         "  Arrow Up/Down - Navigate command history",
//       ],
//     },
//     whoami: {
//       output: [
//         "ywow-ai",
//         "",
//         "Role: Fullstack Developer & System Architect",
//         "Status: Debugging reality...",
//         "Location: /dev/null",
//         "Shell: zsh (arch btw)",
//       ],
//     },
//     ls: {
//       output: [
//         "total 7",
//         "drwxr-xr-x  skills/",
//         "drwxr-xr-x  projects/",
//         "drwxr-xr-x  devops/",
//         "-rw-r--r--  philosophy.txt",
//         "-rw-r--r--  README.md",
//         "-rwxr-xr-x  deploy.sh",
//         "-rw-r--r--  nginx.conf",
//       ],
//     },
//     "ls skills": {
//       output: [
//         "Frontend:",
//         "  next.js  react.js  tailwind.css  jetpack-compose",
//         "",
//         "Backend:",
//         "  elysia.js  prisma  postgresql  phoenix  elixir",
//         "",
//         "DevOps:",
//         "  nginx  load-balancer  docker  kubernetes  arch-linux",
//         "",
//         "Security:",
//         "  better-auth  jwt  oauth  ssl/tls",
//       ],
//     },
//     "cat philosophy.txt": {
//       output: [
//         '"Data flows like water in a clear river -',
//         'transparent, purposeful, and elegant."',
//         "",
//         "- ywow-ai",
//       ],
//     },
//     "cat README.md": {
//       output: [
//         "# ywow-ai",
//         "",
//         "A fictional character from a game,",
//         "now debugging reality one line at a time.",
//         "",
//         "## Stack",
//         "- Frontend: Next.js, Tailwind CSS",
//         "- Backend: Elysia.js, Phoenix, Elixir",
//         "- Database: PostgreSQL with Prisma",
//         "- Mobile: Jetpack Compose",
//         "- Infrastructure: nginx, load balancers",
//         "",
//         "## Philosophy",
//         "Clean code, optimized systems, elegant solutions.",
//       ],
//     },
//     skills: {
//       output: [
//         "╔════════════════════════════════════════════╗",
//         "║         TECHNICAL EXPERTISE                ║",
//         "╠════════════════════════════════════════════╣",
//         "║ Frontend Development        ████████░░ 85% ║",
//         "║ Backend Architecture        █████████░ 90% ║",
//         "║ DevOps & Infrastructure     ████████░░ 80% ║",
//         "║ Mobile Development          ███████░░░ 75% ║",
//         "║ Database Optimization       █████████░ 88% ║",
//         "║ System Architecture         ████████░░ 82% ║",
//         "║ Network Engineering         ████████░░ 85% ║",
//         "╚════════════════════════════════════════════╝",
//         "",
//         "Specializations:",
//         "  • Load Balancing & Traffic Management",
//         "  • Microservices Architecture",
//         "  • Real-time Data Processing",
//         "  • Performance Optimization",
//         "  • Security & Authentication",
//       ],
//     },
//     neofetch: {
//       output: [
//         "                   -`                    ywow-ai@reality",
//         "                  .o+`                   ───────────────",
//         "                 `ooo/                   OS: Arch Linux (btw)",
//         "                `+oooo:                  Host: Virtual Reality",
//         "               `+oooooo:                 Kernel: 6.x-gaming",
//         "               -+oooooo+:                Uptime: ∞ days",
//         "             `/:-:++oooo+:               Shell: zsh",
//         "            `/++++/+++++++:              Resolution: 4K@144Hz",
//         "           `/++++++++++++++:             DE: i3-gaps",
//         "          `/+++ooooooooooooo/`           WM: i3wm",
//         "         ./ooosssso++osssssso+`          Terminal: kitty",
//         "        .oossssso-````/ossssss+`         CPU: AMD Ryzen (OC)",
//         "       -osssssso.      :ssssssso.        Memory: Optimized",
//         "      :osssssss/        osssso+++.       ",
//         "     /ossssssss/        +ssssooo/-       Skills: Full-stack++",
//         "   `/ossssso+/:-        -:/+osssso+-     Passion: 100%",
//         "  `+sso+:-`                 `.-/+oso:    Status: Coding",
//         " `++:.                           `-/+/   ",
//         " .`                                 `/   ",
//       ],
//     },
//     clear: {
//       action: "clear",
//     },
//     exit: {
//       action: "close",
//     },
//   };

//   type Commands = typeof commands;

//   useEffect(() => {
//     if (isOpen && inputRef.current) {
//       inputRef.current.focus();
//     }
//   }, [isOpen]);

//   useEffect(() => {
//     if (terminalRef.current) {
//       terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
//     }
//   }, [history]);

//   useEffect(() => {
//     const handleKeyDown = (e: KeyboardEvent) => {
//       if (isOpen && e.key === "Escape") {
//         onClose();
//       }
//     };
//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [isOpen, onClose]);

//   const handleCommand = (cmd: string) => {
//     const trimmedCmd = cmd.trim();
//     if (!trimmedCmd) return;

//     setCommandHistory((prev) => [...prev, trimmedCmd]);
//     setHistoryIndex(-1);

//     const newHistory: History[] = [
//       ...history,
//       { type: "input", content: trimmedCmd },
//     ];

//     const command = commands[trimmedCmd.toLowerCase() as keyof Commands];

//     if (command) {
//       if (command.action === "clear") {
//         setHistory([]);
//         setInput("");
//         return;
//       }
//       if (command.action === "close") {
//         onClose();
//         return;
//       }
//       setHistory([
//         ...newHistory,
//         { type: "output", content: command.output ?? [] },
//       ]);
//     } else {
//       setHistory([
//         ...newHistory,
//         {
//           type: "error",
//           content: [
//             `Command not found: ${trimmedCmd}`,
//             'Type "help" for available commands.',
//           ],
//         },
//       ]);
//     }

//     setInput("");
//   };

//   const handleKeyDown = (e: KeyboardEvent) => {
//     if (e.key === "Enter") {
//       handleCommand(input);
//     } else if (e.key === "ArrowUp") {
//       e.preventDefault();
//       if (commandHistory.length > 0) {
//         const newIndex =
//           historyIndex === -1
//             ? commandHistory.length - 1
//             : Math.max(0, historyIndex - 1);
//         setHistoryIndex(newIndex);
//         setInput(commandHistory[newIndex]);
//       }
//     } else if (e.key === "ArrowDown") {
//       e.preventDefault();
//       if (historyIndex !== -1) {
//         const newIndex = historyIndex + 1;
//         if (newIndex >= commandHistory.length) {
//           setHistoryIndex(-1);
//           setInput("");
//         } else {
//           setHistoryIndex(newIndex);
//           setInput(commandHistory[newIndex]);
//         }
//       }
//     }
//   };

//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
//       onClick={onClose}
//     >
//       <div
//         className="w-full max-w-4xl h-[600px] bg-black/95 border-2 border-green-500/50 rounded-lg shadow-2xl shadow-green-500/20 flex flex-col overflow-hidden terminal-window"
//         onClick={(e) => e.stopPropagation()}
//         data-testid="terminal-window"
//       >
//         {/* Terminal Header */}
//         <div className="flex items-center justify-between px-4 py-2 bg-green-900/20 border-b border-green-500/30">
//           <div className="flex items-center gap-2">
//             <div
//               className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 cursor-pointer"
//               onClick={onClose}
//             ></div>
//             <div className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-400 cursor-pointer"></div>
//             <div className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-400 cursor-pointer"></div>
//           </div>
//           <div className="text-green-400 text-sm font-mono">
//             ywow-ai@terminal ~ zsh
//           </div>
//           <div className="text-green-400/50 text-xs font-mono">
//             Press Esc to close
//           </div>
//         </div>

//         {/* Terminal Content */}
//         <div
//           ref={terminalRef}
//           className="flex-1 overflow-y-auto p-4 font-mono text-sm text-green-400 terminal-content"
//         >
//           {/* Welcome Message */}
//           {history.length === 0 && (
//             <div className="mb-4 text-green-400/70">
//               <div>Welcome to ywow-ai's terminal!</div>
//               <div>Type "help" for available commands.</div>
//               <div className="mt-2 text-cyan-400">
//                 Tip: Try "neofetch" or "skills"
//               </div>
//               <div className="mt-1 text-green-500/50">
//                 ─────────────────────────────────
//               </div>
//             </div>
//           )}

//           {/* Command History */}
//           {history.map((item, index) => (
//             <div key={index} className="mb-2">
//               {item.type === "input" && (
//                 <div className="flex gap-2">
//                   <span className="text-cyan-400">❯</span>
//                   <span className="text-white">{item.content}</span>
//                 </div>
//               )}
//               {item.type === "output" && (
//                 <div className="ml-4 whitespace-pre-wrap text-green-400">
//                   {item.content.map((line, i) => (
//                     <div key={i}>{line}</div>
//                   ))}
//                 </div>
//               )}
//               {item.type === "error" && (
//                 <div className="ml-4 text-red-400">
//                   {item.content.map((line, i) => (
//                     <div key={i}>{line}</div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           ))}

//           {/* Current Input Line */}
//           <div className="flex gap-2 items-center">
//             <span className="text-cyan-400">❯</span>
//             <input
//               ref={inputRef}
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleKeyDown}
//               className="flex-1 bg-transparent outline-none text-white caret-green-400"
//               autoFocus
//               data-testid="terminal-input"
//             />
//             <span className="animate-pulse text-green-400">▋</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Terminal;
