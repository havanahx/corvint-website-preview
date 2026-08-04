// Corvint Preview — Interaktivität für Startseite
// Zwei Bereiche: Fall-Umschalter (drei Fälle) + Problem-Liste (vier Probleme).
// Daten stehen weiter unten und sind identisch mit Design-Handoff (v2).

(function () {
  "use strict";

  const F = [
    {
      name: "Angebote erstellen",
      wer: "Vertrieb und Projektleitung",
      vorher: "210 Min",
      nachher: "75 Min",
      balken: "36%",
      menge: "40",
      stunden: "90 Std",
      schritte: [
        {
          n: "01",
          name: "Anfrage prüfen",
          ki: false,
          detail: "Kommt herein wie bisher. Hier ändert sich nichts.",
        },
        {
          n: "02",
          name: "Unterlagen auswerten",
          ki: true,
          detail:
            "Leistungsverzeichnis und Vorgaben werden gelesen und gegen frühere Projekte gehalten.",
        },
        {
          n: "03",
          name: "Entwurf schreiben",
          ki: true,
          detail:
            "Text und Kalkulationsgerüst auf Basis eurer eigenen Vorlagen.",
        },
        {
          n: "04",
          name: "Freigeben und senden",
          ki: false,
          detail:
            "Fachliche Prüfung, Preisentscheidung, Versand. Der Mensch unterschreibt.",
        },
      ],
      annahmen: [
        "40 Angebote im Monat, gemessen über drei Monate",
        "Prüfung durch einen Menschen bleibt in jedem Fall enthalten",
        "Ohne Neuanschaffung von Software gerechnet",
      ],
    },
    {
      name: "Ausschreibungen sichten",
      wer: "Geschäftsführung und Bauleitung",
      vorher: "90 Min",
      nachher: "25 Min",
      balken: "28%",
      menge: "60",
      stunden: "65 Std",
      schritte: [
        {
          n: "01",
          name: "Eingänge sammeln",
          ki: true,
          detail: "Portale und Postfach werden täglich zusammengeführt.",
        },
        {
          n: "02",
          name: "Passung bewerten",
          ki: true,
          detail:
            "Abgleich mit euren Kriterien: Gewerk, Volumen, Region, Termin.",
        },
        {
          n: "03",
          name: "Entscheiden",
          ki: false,
          detail:
            "Zusagen und Absagen entscheidet die Geschäftsführung, nicht das Werkzeug.",
        },
        {
          n: "04",
          name: "Weitergeben",
          ki: false,
          detail:
            "Der Fall geht mit Kurzbegründung in die Angebotsbearbeitung.",
        },
      ],
      annahmen: [
        "60 gesichtete Ausschreibungen im Monat",
        "Kriterien werden einmal festgelegt und quartalsweise geprüft",
        "Fehlentscheidungen bleiben möglich, deshalb die menschliche Freigabe",
      ],
    },
    {
      name: "Protokolle und Nachverfolgung",
      wer: "Projektteams",
      vorher: "45 Min",
      nachher: "12 Min",
      balken: "27%",
      menge: "80",
      stunden: "44 Std",
      schritte: [
        {
          n: "01",
          name: "Termin aufzeichnen",
          ki: false,
          detail:
            "Mit Zustimmung aller Beteiligten, geregelt in der KI-Richtlinie.",
        },
        {
          n: "02",
          name: "Protokoll erstellen",
          ki: true,
          detail:
            "Struktur nach eurer Vorlage, Fachbegriffe aus euren Projekten.",
        },
        {
          n: "03",
          name: "Aufgaben ableiten",
          ki: true,
          detail:
            "Wer macht was bis wann, als Vorschlag mit Verweis auf die Stelle im Gespräch.",
        },
        {
          n: "04",
          name: "Prüfen und verteilen",
          ki: false,
          detail:
            "Die Projektleitung korrigiert und gibt frei. Korrekturen fließen in die Vorlage zurück.",
        },
      ],
      annahmen: [
        "80 Termine im Monat mit Protokollpflicht",
        "Aufzeichnung nur mit Einwilligung, sonst Mitschrift",
        "Ablage im bestehenden Projektordner, kein neues System",
      ],
    },
  ];

  const P = [
    {
      titel: "Jeder macht irgendwas",
      ist: "Ein paar nutzen private Konten, andere warten auf Freigaben. Wo die Projektdaten landen, weiß niemand so genau.",
      antwort:
        "Regeln und Zuständigkeiten werden benannt: wer darf was, mit welchen Daten, und wer entscheidet im Zweifel. Eine freigegebene Umgebung statt zehn privater Konten.",
    },
    {
      titel: "Die Lizenz arbeitet am härtesten",
      ist: "Die Werkzeuge sind gekauft, der Pilot läuft seit einem halben Jahr im Test. Immerhin funktioniert die monatliche Abbuchung tadellos.",
      antwort:
        "Der Pilot bekommt ein Ziel oder ein Ende. Ein Anwendungsfall, der sich rechnet, mit offengelegten Annahmen.",
    },
    {
      titel: "Schulung erledigt, Alltag unverändert",
      ist: "Alle fanden den Workshop spannend. Am Montag danach beginnt die Arbeit wieder genau wie am Freitag davor.",
      antwort:
        "Befähigung passend zur Rolle, am eigenen Fall statt im Allgemeinen. Was am Montag nicht ankommt, war keine Einführung.",
    },
    {
      titel: "Der Anfang fehlt",
      ist: "Es gibt Ideen, Anbieter und offene Fragen. Womit ihr anfangen sollt, bleibt die schwierigste davon.",
      antwort:
        "Ein erster, überschaubarer Schritt: Standortbestimmung, dann ein Fall, der tragen soll. Der zweite geht danach deutlich schneller.",
    },
  ];

  // SVG-Marker
  const beak =
    '<svg class="beak" viewBox="0 0 40 22" width="22" height="13" aria-hidden="true"><path fill="#0E3EFF" d="M2 3 38 11 3 19c-4-5-4-11-1-16Z"></path></svg>';

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[c]));
  }

  // Fall-Umschalter
  function initFaelle() {
    const tabsEl = document.querySelector("[data-faelle-tabs]");
    if (!tabsEl) return;

    const stepsEl = document.querySelector("[data-faelle-steps]");
    const oldEl = document.querySelector("[data-effort-old]");
    const newEl = document.querySelector("[data-effort-new]");
    const barEl = document.querySelector("[data-effort-bar]");
    const mengeEl = document.querySelector("[data-monthly-menge]");
    const stundenEl = document.querySelector("[data-monthly-stunden]");
    const annahmenEl = document.querySelector("[data-annahmen]");

    // Tabs rendern
    tabsEl.setAttribute("role", "tablist");
    tabsEl.innerHTML = F.map(
      (f, i) => `
      <button class="tab" role="tab" type="button"
        id="fall-tab-${i}" aria-controls="fall-panel"
        aria-selected="${i === 0 ? "true" : "false"}"
        tabindex="${i === 0 ? "0" : "-1"}"
        data-fall="${i}">
        <span class="tab__name">${esc(f.name)}</span>
        <span class="tab__who">${esc(f.wer)}</span>
      </button>`
    ).join("");

    function render(i) {
      const f = F[i];
      // Tabs
      tabsEl.querySelectorAll(".tab").forEach((btn, idx) => {
        btn.setAttribute("aria-selected", idx === i ? "true" : "false");
        btn.setAttribute("tabindex", idx === i ? "0" : "-1");
      });
      // Schritte
      stepsEl.innerHTML = f.schritte
        .map(
          (s) => `
        <div class="step ${s.ki ? "step--ki" : ""}">
          <div class="step__meta">
            <span class="step__n">${esc(s.n)}</span>
            <span class="step__who">${s.ki ? "KI" : "MENSCH"}</span>
          </div>
          <div class="step__title">${esc(s.name)}</div>
          <div class="step__body">${esc(s.detail)}</div>
        </div>`
        )
        .join("");
      // Auswertung
      oldEl.textContent = f.vorher;
      newEl.textContent = f.nachher;
      barEl.style.width = f.balken;
      mengeEl.textContent = f.menge;
      stundenEl.textContent = f.stunden;
      // Annahmen
      annahmenEl.innerHTML = f.annahmen
        .map(
          (t) => `
        <div class="assumptions__item">
          ${beak}
          <span class="assumptions__text">${esc(t)}</span>
        </div>`
        )
        .join("");
    }

    // Klick + Keyboard
    tabsEl.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-fall]");
      if (!btn) return;
      const i = parseInt(btn.dataset.fall, 10);
      render(i);
    });
    tabsEl.addEventListener("keydown", (e) => {
      if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)) return;
      const tabs = Array.from(tabsEl.querySelectorAll(".tab"));
      const current = tabs.findIndex(
        (t) => t.getAttribute("aria-selected") === "true"
      );
      let next = current;
      if (e.key === "ArrowLeft") next = (current - 1 + tabs.length) % tabs.length;
      if (e.key === "ArrowRight") next = (current + 1) % tabs.length;
      if (e.key === "Home") next = 0;
      if (e.key === "End") next = tabs.length - 1;
      render(next);
      tabs[next].focus();
      e.preventDefault();
    });

    render(0);
  }

  // Problem-Liste
  function initProbleme() {
    const listEl = document.querySelector("[data-probleme-list]");
    if (!listEl) return;

    const istEl = document.querySelector("[data-prob-ist]");
    const antwortEl = document.querySelector("[data-prob-antwort]");

    listEl.setAttribute("role", "tablist");
    listEl.setAttribute("aria-orientation", "vertical");
    listEl.innerHTML = P.map(
      (p, i) => `
      <button class="problem" role="tab" type="button"
        id="prob-tab-${i}" aria-controls="prob-panel"
        aria-selected="${i === 0 ? "true" : "false"}"
        tabindex="${i === 0 ? "0" : "-1"}"
        data-prob="${i}">
        <span class="problem__n">${String(i + 1).padStart(2, "0")}</span>
        <span class="problem__title">${esc(p.titel)}</span>
      </button>`
    ).join("");

    function render(i) {
      const p = P[i];
      listEl.querySelectorAll(".problem").forEach((btn, idx) => {
        btn.setAttribute("aria-selected", idx === i ? "true" : "false");
        btn.setAttribute("tabindex", idx === i ? "0" : "-1");
      });
      istEl.textContent = p.ist;
      antwortEl.textContent = p.antwort;
    }

    listEl.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-prob]");
      if (!btn) return;
      render(parseInt(btn.dataset.prob, 10));
    });
    listEl.addEventListener("keydown", (e) => {
      if (!["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) return;
      const items = Array.from(listEl.querySelectorAll(".problem"));
      const current = items.findIndex(
        (t) => t.getAttribute("aria-selected") === "true"
      );
      let next = current;
      if (e.key === "ArrowUp") next = (current - 1 + items.length) % items.length;
      if (e.key === "ArrowDown") next = (current + 1) % items.length;
      if (e.key === "Home") next = 0;
      if (e.key === "End") next = items.length - 1;
      render(next);
      items[next].focus();
      e.preventDefault();
    });

    render(0);
  }

  function initMenu() {
    const nav = document.querySelector("[data-nav]");
    const toggle = document.querySelector("[data-menu-toggle]");
    const close = document.querySelector("[data-menu-close]");
    if (!nav || !toggle) return;

    function setOpen(open) {
      nav.dataset.open = open ? "true" : "false";
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
      document.body.classList.toggle("is-menu-open", open);
      if (open && close) close.focus();
      else if (!open) toggle.focus();
    }

    toggle.addEventListener("click", () => setOpen(nav.dataset.open !== "true"));
    if (close) close.addEventListener("click", () => setOpen(false));

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && nav.dataset.open === "true") setOpen(false);
    });

    // Klick auf Nav-Link im Overlay schließt es (bei Anker-Links auf Startseite hilfreich)
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        if (nav.dataset.open === "true") setOpen(false);
      })
    );

    // Bei Größer-Wechsel Zustand zurücksetzen (Overlay verschwindet per CSS)
    const mq = window.matchMedia("(min-width: 901px)");
    mq.addEventListener("change", (e) => {
      if (e.matches) setOpen(false);
    });
  }

  // Scroll-Spy für Anchor-Nav (Unterseiten mit Sidebar)
  function initAnchorNav() {
    const nav = document.querySelector("[data-anchor-nav]");
    if (!nav) return;
    const links = Array.from(nav.querySelectorAll("[data-anchor-link]"));
    if (!links.length) return;
    const sections = links
      .map((l) => document.getElementById(l.getAttribute("href").slice(1)))
      .filter(Boolean);
    if (!sections.length) return;

    function setActive(id) {
      links.forEach((l) => {
        const active = l.getAttribute("href") === "#" + id;
        if (active) l.setAttribute("aria-current", "location");
        else l.removeAttribute("aria-current");
      });
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length) setActive(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
  }

  document.addEventListener("DOMContentLoaded", () => {
    initFaelle();
    initProbleme();
    initMenu();
    initAnchorNav();
  });
})();
