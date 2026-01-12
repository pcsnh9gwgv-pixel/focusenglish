"use client";

export default function EquiposSection() {
  // UI-only “submit” para que el formulario se sienta real (sin backend aún).
  // No usamos useState para mantener este archivo como Server Component.
  // El feedback se hace con <dialog> (HTML nativo) controlado por JS inline en el submit handler.
  // Para evitar “use client”, lo dejamos como formulario clásico y mensaje visible con ancla.
  return (
    <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/7 to-white/4 p-6 md:p-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <div>
          <h2 className="text-[22px] font-black tracking-[-0.02em] text-white">Para equipos</h2>
          <p className="mt-2 text-[14px] leading-relaxed text-white/70">
            Formación de inglés profesional con seguimiento: rutas por objetivo, reporting y progreso por cohortes.
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              { t: "Reporting", d: "Visión del avance por persona y por equipo." },
              { t: "Cohortes", d: "Organiza grupos por rol u objetivo." },
              { t: "Seguimiento", d: "Objetivos semanales y consistencia." },
              { t: "Contenido real", d: "Emails, reuniones, entrevistas y presentaciones." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-white/10 bg-[#0B1220]/40 p-4">
                <div className="text-[13px] font-black text-white">{b.t}</div>
                <div className="mt-1 text-[13px] text-white/65">{b.d}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-[13px] text-white/60">
            <span className="font-black text-white/80">Nota:</span> en el siguiente paso conectaremos este formulario a
            Supabase (registro + verificación de email) para acceso a demo real.
          </div>
        </div>

        {/* Formulario UI-only */}
        <div className="rounded-2xl border border-white/10 bg-[#0B1220]/50 p-5">
          <div className="text-[14px] font-black text-white">Solicitar demo para equipos</div>
          <p className="mt-2 text-[13px] leading-relaxed text-white/65">
            Deja tus datos y preparamos acceso a una demo real (con validación de email).
          </p>

          <form
            className="mt-4 grid gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              const el = document.getElementById("equipos-ok");
              if (el) el.classList.remove("hidden");
              const form = e.currentTarget as HTMLFormElement;
              form.reset();
            }}
          >
            <input
              className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-[13px] text-white placeholder:text-white/35 outline-none focus:border-violet-400/60"
              placeholder="Nombre"
              name="name"
              required
            />
            <input
              className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-[13px] text-white placeholder:text-white/35 outline-none focus:border-violet-400/60"
              placeholder="Empresa"
              name="company"
              required
            />
            <input
              className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-[13px] text-white placeholder:text-white/35 outline-none focus:border-violet-400/60"
              placeholder="Email corporativo"
              name="email"
              type="email"
              required
            />
            <select
              className="h-11 w-full rounded-xl border border-white/10 bg-white/5 px-3 text-[13px] text-white outline-none focus:border-violet-400/60"
              name="size"
              defaultValue="1-10"
              required
            >
              <option value="1-10">1–10 personas</option>
              <option value="11-50">11–50 personas</option>
              <option value="51-200">51–200 personas</option>
              <option value="200+">200+ personas</option>
            </select>

            <button
              type="submit"
              className="mt-1 inline-flex h-11 items-center justify-center rounded-[14px] bg-violet-500 px-5 text-[13px] font-black text-white shadow-sm shadow-violet-500/25 hover:brightness-95"
            >
              Solicitar demo
            </button>

            <div className="text-[12px] text-white/50">
              (MVP) Aún sin envío. Lo conectamos con Supabase en el siguiente paso.
            </div>

            <div
              id="equipos-ok"
              className="hidden rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-[13px] text-emerald-50"
            >
              <div className="font-black">¡Recibido!</div>
              <div className="mt-1 text-emerald-50/80">
                Gracias. En el siguiente paso lo conectamos a registro + verificación de email para darte acceso a la demo real.
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}