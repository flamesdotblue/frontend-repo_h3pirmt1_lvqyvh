import { ExternalLink, Tag } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Collab Board',
    description:
      'A multiplayer whiteboard with cursor presence, comments, and end-to-end sync. Built with WebRTC and CRDTs for conflict-free updates.',
    tech: ['React', 'TypeScript', 'WebRTC', 'CRDT'],
    link: 'https://example.com',
  },
  {
    title: 'API Performance Dashboard',
    description:
      'Observability dashboard tracking latency, error budgets, and throughput with streaming charts and rule-based alerts.',
    tech: ['Next.js', 'tRPC', 'Postgres', 'Tailwind'],
    link: 'https://example.com',
  },
  {
    title: 'Personal Knowledge Engine',
    description:
      'Local-first notes and search with embeddings, markdown, and offline-first sync. Privacy-friendly and blazing fast.',
    tech: ['React', 'Vite', 'SQLite', 'Lucene'],
    link: 'https://example.com',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 dark:text-white">
              Featured Projects
            </h2>
            <p className="mt-2 text-neutral-700 dark:text-neutral-300 max-w-2xl">
              A selection of recent work focused on performance, usability, and robust engineering.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-medium text-neutral-900 dark:text-white">
                  {p.title}
                </h3>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  aria-label={`Open ${p.title}`}
                >
                  <ExternalLink className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
                </a>
              </div>
              <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                {p.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center gap-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800/50 px-2 py-1 text-xs text-neutral-700 dark:text-neutral-300"
                  >
                    <Tag className="h-3 w-3" /> {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
