(function () {
  "use strict";

  const processSteps = [
    {
      kicker: "Schritt 01 · Verstehen",
      title: "Ausgangslage klären",
      body: "Wir ordnen Prozesse, Daten, Werkzeuge und Mitarbeitende ein. So wird sichtbar, was schon trägt und was zuerst geklärt werden muss.",
      result: "Eine gemeinsame, belastbare Ausgangslage.",
    },
    {
      kicker: "Schritt 02 · Entscheiden",
      title: "Den richtigen Fall wählen",
      body: "Aus Ideen werden ein bis zwei umsetzbare Fälle. Entscheidend sind Nutzen, Aufwand, vorhandene Daten und die Menschen, die damit arbeiten.",
      result: "Ein sinnvoller Start – nicht die längste Wunschliste.",
    },
    {
      kicker: "Schritt 03 · Absichern",
      title: "Regeln und Zuständigkeiten klären",
      body: "Wir legen fest, wer was mit welchen Daten tun darf, wer Ergebnisse prüft und wer bei offenen Fragen entscheidet.",
      result: "Ein verständlicher Rahmen statt privater Einzellösungen.",
    },
    {
      kicker: "Schritt 04 · Umsetzen",
      title: "In den Ablauf einbauen",
      body: "Das Werkzeug wird in den tatsächlichen Arbeitsablauf integriert. Schnittstellen und Daten binden wir nur dort an, wo es für diesen Fall nötig ist.",
      result: "Eine Anwendung, die nicht neben der Arbeit steht.",
    },
    {
      kicker: "Schritt 05 · Verankern",
      title: "Menschen am eigenen Fall befähigen",
      body: "Führungskräfte und Mitarbeitende lernen nicht abstrakt, sondern direkt an der neuen Arbeitsweise – passend zu Rolle und Verantwortung.",
      result: "Wissen und Sicherheit im eigenen Team.",
    },
    {
      kicker: "Schritt 06 · Prüfen",
      title: "Wirkung vorher und nachher messen",
      body: "Wir vergleichen Zeit, Qualität, Nutzung, Nacharbeit oder Risiko mit euren Ausgangswerten. Was nicht hilft, wird angepasst oder gestoppt.",
      result: "Eine nachvollziehbare Weiter- oder Stopp-Entscheidung.",
    },
  ];

  const fitViews = {
    yes: {
      intro: "Typisch passend, wenn ihr konkrete Ergebnisse im Arbeitsalltag wollt.",
      items: [
        "Typischerweise 30 bis 150 Mitarbeitende im kleinen und mittleren Mittelstand.",
        "Zum Beispiel Ingenieur- oder Planungsbüro, Kanzlei, Softwarehaus oder Agentur.",
        "Eine kleine interne IT oder ein externer IT-Dienstleister reicht.",
        "Die Geschäftsführung arbeitet an Ziel und Entscheidungen mit.",
      ],
    },
    no: {
      intro: "Ein anderer Weg ist sinnvoller, wenn KI gerade alles auf einmal lösen soll.",
      items: [
        "Abläufe sind unklar, gleichzeitig soll KI sofort starten.",
        "Die Geschäftsführung möchte das Thema komplett abgeben.",
        "Ziel ist die Vollautomatisierung des gesamten Unternehmens.",
        "KI soll als Universallösung dienen, ohne klaren Arbeitsfall.",
      ],
    },
  };

  const offers = [
    {
      duration: "Ca. 8 Wochen",
      funding: "Fördermodul A · 50 % möglich",
      title: "Klarheit und bester Start",
      body: "Bestandsaufnahme, bewertete Fälle und geprüfte Wirtschaftlichkeit. Am Ende steht eine Empfehlung: welcher Fall trägt – und ob jetzt der richtige Startzeitpunkt ist.",
      effort: "Geschäftsführung: zwei bis drei Termine. Fachbereiche: ein bis zwei halbe Tage. IT und Datenschutz: punktuell zur Prüfung.",
      steps: [
        "Zielbild und Standort mit der Geschäftsführung klären.",
        "Drei bis fünf Potenzialfelder aus dem Unternehmen sammeln.",
        "Konkrete Fälle mit Mitarbeitenden bewerten.",
        "Nutzen und Aufwand mit IT und Technikpartner prüfen.",
      ],
      price: "ab 12.900 € netto",
      note: "Verbindlicher Preis nach dem Erstgespräch.",
    },
    {
      duration: "Ca. 12 Wochen",
      funding: "Fördermodul B · 50 % möglich",
      title: "Ersten Fall im Alltag einführen",
      body: "Ablauf aufgeräumt, Werkzeug ausgewählt und angebunden, Regeln formuliert, Menschen befähigt. Am Ende läuft die Anwendung im Alltag.",
      effort: "Vier bis zehn Testnutzerinnen und Testnutzer in mehreren kurzen Arbeits- und Testterminen. Eine verantwortliche Person steuert intern; IT und Datenschutz arbeiten punktuell mit.",
      steps: [
        "Wirkung festlegen: Zeit, Qualität, Durchlauf oder Entlastung.",
        "Beteiligte einbinden und am eigenen Fall befähigen.",
        "Arbeitsablauf klären und aufräumen.",
        "Werkzeug und technische Grundlage nur für diesen Fall bauen.",
        "Im Alltag testen und an eine benannte Person übergeben.",
      ],
      price: "ab 14.900 € netto",
      note: "Verbindlicher Preis nach dem Erstgespräch.",
    },
    {
      duration: "Fortlaufend",
      funding: "Monatlich kündbar",
      title: "Weitere Fälle selbst angehen",
      body: "Ein monatlicher Takt mit Ansprechpersonen im Haus. Wir werten die Nutzung aus, holen Wissen zu euch und begleiten die nächsten Fälle – mit dem Ziel, externe Beratung immer weniger zu brauchen.",
      effort: "Eine feste interne Ansprechperson und ein gemeinsamer Termin pro Monat. Weitere Personen kommen nur bei ihrem konkreten Fall dazu.",
      steps: [
        "Nutzung und Wirkung regelmäßig auswerten.",
        "Offene Fragen mit den internen Ansprechpersonen klären.",
        "Wissen für weitere Fälle im Unternehmen aufbauen.",
        "Verantwortung schrittweise vollständig übergeben.",
      ],
      price: "ab 1.450 € netto / Monat",
      note: "Monatlich kündbar.",
    },
  ];

  function setTabs(container, active, selector) {
    const tabs = Array.from(container.querySelectorAll(selector));
    tabs.forEach((tab, index) => {
      const selected = index === active;
      tab.setAttribute("aria-selected", selected ? "true" : "false");
      tab.setAttribute("tabindex", selected ? "0" : "-1");
    });
  }

  function bindArrowNavigation(container, selector, activate) {
    container.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End"].includes(event.key)) return;
      const tabs = Array.from(container.querySelectorAll(selector));
      const current = tabs.indexOf(document.activeElement);
      if (current < 0) return;
      event.preventDefault();
      let next = current;
      if (["ArrowRight", "ArrowDown"].includes(event.key)) next = (current + 1) % tabs.length;
      if (["ArrowLeft", "ArrowUp"].includes(event.key)) next = (current - 1 + tabs.length) % tabs.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabs.length - 1;
      tabs[next].focus();
      activate(tabs[next], next);
    });
  }

  const process = document.querySelector("[data-process]");
  if (process) {
    const tabs = process.querySelector(".process__tabs");
    const panel = process.querySelector("#process-panel");
    const render = (button, index) => {
      const item = processSteps[index];
      setTabs(process, index, "[data-process-tab]");
      panel.setAttribute("aria-labelledby", button.id);
      process.querySelector("[data-process-kicker]").textContent = item.kicker;
      process.querySelector("[data-process-title]").textContent = item.title;
      process.querySelector("[data-process-body]").textContent = item.body;
      process.querySelector("[data-process-result]").textContent = item.result;
    };
    tabs.addEventListener("click", (event) => {
      const button = event.target.closest("[data-process-tab]");
      if (button) render(button, Number(button.dataset.processTab));
    });
    bindArrowNavigation(tabs, "[data-process-tab]", render);
  }

  const fit = document.querySelector("[data-fit-switcher]");
  if (fit) {
    const controls = fit.querySelector(".fit-switcher__controls");
    const panel = fit.querySelector("#fit-panel");
    const buttons = Array.from(fit.querySelectorAll("[data-fit]"));
    const render = (button) => {
      const key = button.dataset.fit;
      const item = fitViews[key];
      buttons.forEach((candidate) => {
        const selected = candidate === button;
        candidate.setAttribute("aria-selected", selected ? "true" : "false");
        candidate.setAttribute("tabindex", selected ? "0" : "-1");
      });
      panel.setAttribute("aria-labelledby", button.id);
      fit.querySelector("[data-fit-intro]").textContent = item.intro;
      fit.querySelector("[data-fit-list]").innerHTML = item.items.map((text) => `<li>${text}</li>`).join("");
    };
    controls.addEventListener("click", (event) => {
      const button = event.target.closest("[data-fit]");
      if (button) render(button);
    });
    bindArrowNavigation(controls, "[data-fit]", (button) => render(button));
  }

  const explorer = document.querySelector("[data-offer-explorer]");
  if (explorer) {
    const tabs = explorer.querySelector(".offer-explorer__tabs");
    const panel = explorer.querySelector("#offer-panel");
    const render = (button, index) => {
      const offer = offers[index];
      setTabs(explorer, index, "[data-offer-tab]");
      panel.setAttribute("aria-labelledby", button.id);
      explorer.querySelector("[data-offer-duration]").textContent = offer.duration;
      explorer.querySelector("[data-offer-funding]").textContent = offer.funding;
      explorer.querySelector("[data-offer-title]").textContent = offer.title;
      explorer.querySelector("[data-offer-body]").textContent = offer.body;
      explorer.querySelector("[data-offer-effort]").textContent = offer.effort;
      explorer.querySelector("[data-offer-steps]").innerHTML = offer.steps.map((text) => `<li>${text}</li>`).join("");
      explorer.querySelector("[data-offer-price]").textContent = offer.price;
      explorer.querySelector("[data-offer-price-note]").textContent = offer.note;
    };
    tabs.addEventListener("click", (event) => {
      const button = event.target.closest("[data-offer-tab]");
      if (button) render(button, Number(button.dataset.offerTab));
    });
    bindArrowNavigation(tabs, "[data-offer-tab]", render);
  }

  const menuButton = document.querySelector("[data-menu-button]");
  const siteNav = document.querySelector("[data-site-nav]");
  if (menuButton && siteNav) {
    const closeMenu = () => {
      menuButton.setAttribute("aria-expanded", "false");
      siteNav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    };
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") !== "true";
      menuButton.setAttribute("aria-expanded", open ? "true" : "false");
      siteNav.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
    });
    siteNav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu();
    });
  }
})();
