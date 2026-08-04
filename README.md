# corvint-website-preview

Preview-Build der neuen corvint.de Startseite.

**Nicht live.** Diese Version liegt nur zur Abstimmung hier — `noindex`/`nofollow` in allen Metas, `robots.txt` blockt Crawler, GitHub Pages läuft auf Sub-URL, nicht auf der echten Domain.

## Was hier zusammengeführt wird

Zwei Quellen fließen ein:

- **Design-Handoff** (`design_handoff_corvint_startseite/README.md` — extern) — Layout, Design-Tokens, Interaktionsverhalten, Kernstruktur der Startseite. High-fidelity, alle Werte final.
- **Cowork-Entwürfe** (`WEbsite/vorschlag-claude/` — extern) — Nav-Struktur, echte Links (Calendly, Selbstcheck, Über), Meta-Texte.

Ergebnis: Design-Sprache (minimal, zahlengetrieben, kein Radius, keine Schatten) + Cowork-Content und -URLs. Die Zahlen in Hero und Ablauf-Sektion sind bewusst **Beispielrechnungen** — mit expliziter Fußnote, so wie das Design-Handoff es vorsieht.

## Aufbau

- `index.html` — Startseite (Design v2 aus dem Handoff, in Semantik-HTML neu gebaut)
- `assets/style.css` — Design-Tokens und Layout, mobil ab ~1080px reduziert, ab ~720px einspaltig
- `assets/app.js` — Interaktivität für die zwei Bereiche (Fall-Umschalter, Problem-Liste). Vanilla JS, keine Abhängigkeiten.
- `assets/raven-mark.svg`, `assets/favicon.svg` — Markenzeichen
- Alle übrigen Seiten (`angebot.html` etc.) sind Platzhalter — kommen im nächsten Schritt an die neue Sprache.

## Preview lokal öffnen

```
open index.html
```

Oder per lokalem Server (empfohlen, damit Fonts sauber laden):

```
python3 -m http.server 4173
# dann http://localhost:4173 im Browser
```

## Deployment

GitHub Pages läuft aus `main` / `/` (Root). Nach jedem Push aktualisiert sich die Preview-URL automatisch. Die URL steht in den Repo-Settings unter *Pages*.
