import { technologyGroups } from "@/data/technologies";

export default function Technologies() {
  return (
    <section id="tecnologias" className="section-container py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">Tecnologías</h2>
      <p className="mt-2 max-w-2xl text-muted">
        El stack que uso habitualmente para llevar un proyecto de la idea a producción.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {technologyGroups.map((group) => (
          <div key={group.category} className="rounded-xl border border-border bg-surface p-6">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent">
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-3 py-1 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
