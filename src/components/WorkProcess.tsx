import { workProcess } from "@/data/profile";

export default function WorkProcess() {
  return (
    <section id="proceso" className="section-container py-16">
      <h2 className="text-2xl font-bold sm:text-3xl">Cómo trabajo</h2>
      <p className="mt-2 max-w-2xl text-muted">
        Un proceso simple y transparente, pensado para que sepas en qué etapa está tu
        proyecto en todo momento.
      </p>

      <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {workProcess.map((item) => (
          <li key={item.step} className="rounded-xl border border-border bg-surface p-6">
            <span className="text-3xl font-bold text-accent/40">{item.step}</span>
            <h3 className="mt-3 font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-muted">{item.description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
