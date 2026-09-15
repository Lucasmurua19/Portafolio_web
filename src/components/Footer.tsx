import { profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="section-container flex flex-col items-center gap-2 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p>
          {profile.name} — {profile.role}
        </p>
        <p>&copy; {year}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
