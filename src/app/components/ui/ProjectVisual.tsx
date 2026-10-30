import { cx } from './cx';

export type VisualKind = 'featured' | 'llm' | 'rag' | 'nlp' | 'agent' | 'pipeline' | 'multi-agent' | 'other';

const LINE = 'var(--line-strong)';
const ACCENT = 'var(--accent)';
const MINT = 'var(--success)';

// Motifs abstraits par catégorie de projet — purement décoratifs.
function Motif({ kind, gid }: { kind: VisualKind; gid: string }) {
  switch (kind) {
    // Grille de publications, quelques cases mises en avant (réseau social)
    case 'featured':
      return (
        <g>
          {Array.from({ length: 8 }).map((_, col) =>
            Array.from({ length: 4 }).map((_, row) => {
              const lit = (col * 3 + row * 5) % 7 === 0;
              return (
                <rect
                  key={`${col}-${row}`}
                  x={24 + col * 46}
                  y={18 + row * 46}
                  width="38"
                  height="38"
                  rx="9"
                  fill={lit ? `url(#${gid})` : 'none'}
                  stroke={lit ? 'none' : LINE}
                  opacity={lit ? 0.9 : 0.7}
                />
              );
            }),
          )}
        </g>
      );
    // Flux de tokens générés
    case 'llm':
      return (
        <g>
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2, 3].map((i) => {
              const w = [64, 38, 82, 50, 28, 70][(row * 4 + i) % 6];
              const x = 24 + [0, 76, 128, 222][i] + (row % 2) * 12;
              const last = row === 4 && i === 1;
              return (
                <rect key={`${row}-${i}`} x={x} y={30 + row * 30} width={w} height="12" rx="6"
                  fill={last ? ACCENT : 'none'} stroke={last ? 'none' : LINE} />
              );
            }),
          )}
          <rect x="196" y="150" width="3" height="14" fill={ACCENT} />
        </g>
      );
    // Documents découpés qui convergent vers une réponse
    case 'rag':
      return (
        <g>
          {[0, 1, 2].map((i) => (
            <g key={i}>
              <rect x={34 + i * 14} y={40 + i * 14} width="78" height="96" rx="10" fill="var(--surface)" stroke={LINE} />
              {[0, 1, 2, 3].map((l) => (
                <rect key={l} x={46 + i * 14} y={60 + i * 14 + l * 16} width={l === 3 ? 30 : 52} height="5" rx="2.5" fill={LINE} />
              ))}
            </g>
          ))}
          {[52, 84, 116, 148].map((y, i) => (
            <path key={y} d={`M150 ${y} C 230 ${y}, 250 100, 316 100`} fill="none" stroke={i === 1 ? ACCENT : LINE} strokeDasharray={i === 1 ? '0' : '3 5'} />
          ))}
          <circle cx="330" cy="100" r="16" fill={`url(#${gid})`} />
        </g>
      );
    // Ondes de texte analysé
    case 'nlp':
      return (
        <g fill="none">
          {[0, 1, 2, 3].map((i) => (
            <path key={i}
              d={`M0 ${70 + i * 22} C 60 ${40 + i * 22}, 120 ${110 + i * 22}, 200 ${70 + i * 22} S 340 ${40 + i * 22}, 400 ${70 + i * 22}`}
              stroke={i === 1 ? ACCENT : LINE} strokeWidth={i === 1 ? 2 : 1} />
          ))}
        </g>
      );
    // Boucle d'un agent autonome : lire → comprendre → répondre
    case 'agent':
      return (
        <g fill="none">
          <circle cx="200" cy="100" r="62" stroke={LINE} strokeDasharray="4 6" />
          <circle cx="200" cy="38" r="12" fill="var(--surface)" stroke={LINE} />
          <circle cx="254" cy="131" r="12" fill="var(--surface)" stroke={LINE} />
          <circle cx="146" cy="131" r="12" fill="var(--surface)" stroke={LINE} />
          <circle cx="200" cy="100" r="22" fill={`url(#${gid})`} />
          <path d="M214 42 A 62 62 0 0 1 258 116" stroke={ACCENT} strokeWidth="2" />
        </g>
      );
    // Étapes d'un pipeline planifié
    case 'pipeline':
      return (
        <g fill="none">
          <path d="M40 100 H 360" stroke={LINE} />
          {[0, 1, 2, 3, 4].map((i) => (
            <rect key={i} x={40 + i * 72} y={i % 2 ? 78 : 70} width="44" height={i % 2 ? 44 : 60} rx="10"
              fill={i === 2 ? `url(#${gid})` : 'var(--surface)'} stroke={i === 2 ? 'none' : LINE} />
          ))}
          <circle cx="360" cy="100" r="4" fill={MINT} />
        </g>
      );
    // Réseau de plusieurs agents qui collaborent
    case 'multi-agent': {
      const nodes = [[80, 60], [160, 140], [230, 50], [300, 120], [370, 70], [120, 170], [260, 175], [40, 130]];
      const edges = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4], [1, 5], [3, 6], [0, 7], [2, 4]];
      return (
        <g>
          {edges.map(([a, b], i) => (
            <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]}
              stroke={i === 2 || i === 3 ? ACCENT : LINE} strokeWidth={i === 2 || i === 3 ? 1.5 : 1} />
          ))}
          {nodes.map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i === 3 ? 14 : 8} fill={i === 3 ? `url(#${gid})` : 'var(--surface)'} stroke={i === 3 ? 'none' : LINE} />
          ))}
        </g>
      );
    }
    // Arcs concentriques neutres
    default:
      return (
        <g fill="none">
          {[30, 52, 74, 96].map((r, i) => (
            <circle key={r} cx="340" cy="40" r={r} stroke={i === 0 ? ACCENT : LINE} />
          ))}
        </g>
      );
  }
}

// uid : identifiant unique par visuel, pour que chaque SVG ait son propre dégradé
export default function ProjectVisual({ kind, uid, className }: { kind: VisualKind; uid: string; className?: string }) {
  const gid = `pv-${uid}`;
  return (
    <svg
      aria-hidden
      viewBox="0 0 400 200"
      preserveAspectRatio="xMidYMid slice"
      className={cx('w-full h-full', className)}
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--accent-hover)" />
          <stop offset="100%" stopColor="var(--accent-deep)" />
        </linearGradient>
      </defs>
      <Motif kind={kind} gid={gid} />
    </svg>
  );
}
