import { MapPin } from "lucide-react";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <section id="sobre-mi" className="section-container py-16">
      <div className="grid gap-10 rounded-2xl border border-border bg-surface p-6 sm:p-10 md:grid-cols-[auto_1fr] md:items-center">
        {/*
          Avatar provisional (monograma). Reemplazar por una fotografía
          profesional real en public/images/ cuando esté disponible.
        */}
        <div
          aria-hidden="true"
          className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 text-4xl font-bold text-white"
        >
          {profile.initials}
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="text-2xl font-bold sm:text-3xl">Sobre mí</h2>
          <p className="text-muted">{profile.bio}</p>
          <p className="flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} />
            {profile.location}
          </p>
        </div>
      </div>
    </section>
  );
}
