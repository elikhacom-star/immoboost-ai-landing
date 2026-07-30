// ImmoBoost AI — Multilingue FR / NL / EN
const i18n = {
  fr: {
    'nav.features': 'Fonctionnalités',
    'nav.demo': 'Démo',
    'nav.cases': 'Cas clients',
    'nav.pricing': 'Tarifs',
    'nav.faq': 'FAQ',
    'header.cta': '📅 Démo personnalisée',
    'hero.badge.belgian': '🇧🇪 Conçu pour les agents immobiliers belges',
    'hero.badge.rgpd': '🔒 RGPD — données en Belgique',
    'hero.badge.ai': '⚡ 30 min pour démarrer',
    'hero.title': 'Vos agents passent <span class="hl">8h/semaine</span> en tâches répétitives.<br>ImmoBoost AI leur en rend <span class="hl">6</span>.',
    'hero.sub': "L'assistant IA qui automatise vos annonces, estimations, leads et documents. Conçu pour les agents immobiliers belges. Conforme RGPD.",
    'hero.cta1': '🎥 Démo en direct (3 min)',
    'hero.cta2': '📅 Démo personnalisée pour mon agence',
    'hero.trust.1': '✓ Sans engagement',
    'hero.trust.2': '✓ Formation incluse',
    'hero.trust.3': '✓ Support en français',
    'pain.title': 'Ce que vous faites <span class="hl">aujourd\'hui</span> sans ImmoBoost',
    'feat.title': "Ce qu'ImmoBoost <span class=\"hl\">fait pour vous</span>",
    'examples.title': 'Concrètement, <span class="hl">ça donne quoi</span> ?',
    'cases.title': 'Ils ont <span class="hl">multiplié leurs ventes</span> grâce à ImmoBoost',
    'pricing.title': 'Tarifs <span class="hl">transparents</span>',
    'faq.title': 'Questions <span class="hl">fréquentes</span>',
    'cta.title': 'Prêt à <span class="hl">vendre 3x plus vite</span> ?',
    'cta.sub': '✓ Réponse sous 24h garantie · ✓ Sans engagement · ✓ Formation offerte ce mois-ci',
    'cta.cta1': '⚡ Tester gratuitement maintenant',
    'cta.cta2': '📅 Réserver ma démo',
  },
  nl: {
    'nav.features': 'Functies',
    'nav.demo': 'Demo',
    'nav.cases': 'Klantcases',
    'nav.pricing': 'Prijzen',
    'nav.faq': 'FAQ',
    'header.cta': '📅 Demo op maat',
    'hero.badge.belgian': '🇧🇪 Ontworpen voor Belgische vastgoedmakelaars',
    'hero.badge.rgpd': '🔒 RGPD — gegevens in België',
    'hero.badge.ai': '⚡ 30 min om te starten',
    'hero.title': 'Uw makelaars besteden <span class="hl">8u/week</span> aan repetitieve taken.<br>ImmoBoost AI geeft hen <span class="hl">6u</span> terug.',
    'hero.sub': 'De AI-assistent die uw advertenties, schattingen, leads en documenten automatiseert. Ontworpen voor Belgische vastgoedmakelaars. RGPD-conform.',
    'hero.cta1': '🎥 Live demo (3 min)',
    'hero.cta2': '📅 Demo op maat voor mijn kantoor',
    'hero.trust.1': '✓ Zonder verbintenis',
    'hero.trust.2': '✓ Opleiding inbegrepen',
    'hero.trust.3': '✓ Ondersteuning in het Nederlands',
    'pain.title': 'Wat u <span class="hl">vandaag</span> doet zonder ImmoBoost',
    'feat.title': 'Wat ImmoBoost <span class="hl">voor u doet</span>',
    'examples.title': 'Concreet, <span class="hl">wat levert het op</span> ?',
    'cases.title': 'Zij hebben hun <span class="hl">verkoop verdrievoudigd</span> dankzij ImmoBoost',
    'pricing.title': 'Transparante <span class="hl">prijzen</span>',
    'faq.title': 'Veelgestelde <span class="hl">vragen</span>',
    'cta.title': 'Klaar om <span class="hl">3x sneller te verkopen</span> ?',
    'cta.sub': '✓ Antwoord binnen 24u gegarandeerd · ✓ Zonder verbintenis · ✓ Opleiding deze maand gratis',
    'cta.cta1': '⚡ Nu gratis testen',
    'cta.cta2': '📅 Boek mijn demo',
  },
  en: {
    'nav.features': 'Features',
    'nav.demo': 'Demo',
    'nav.cases': 'Case studies',
    'nav.pricing': 'Pricing',
    'nav.faq': 'FAQ',
    'header.cta': '📅 Book a demo',
    'hero.badge.belgian': '🇧🇪 Built for Belgian real estate agents',
    'hero.badge.rgpd': '🔒 GDPR — data hosted in Belgium',
    'hero.badge.ai': '⚡ 30 min to get started',
    'hero.title': 'Your agents spend <span class="hl">8h/week</span> on repetitive tasks.<br>ImmoBoost AI gives them <span class="hl">6h</span> back.',
    'hero.sub': 'The AI assistant that automates your listings, valuations, leads and documents. Built for Belgian real estate agents. GDPR-compliant.',
    'hero.cta1': '🎥 Live demo (3 min)',
    'hero.cta2': '📅 Book a custom demo for my agency',
    'hero.trust.1': '✓ No commitment',
    'hero.trust.2': '✓ Training included',
    'hero.trust.3': '✓ English support available',
    'pain.title': 'What you do <span class="hl">today</span> without ImmoBoost',
    'feat.title': 'What ImmoBoost <span class="hl">does for you</span>',
    'examples.title': 'In practice, <span class="hl">what does it look like</span> ?',
    'cases.title': 'They <span class="hl">tripled their sales</span> with ImmoBoost',
    'pricing.title': 'Transparent <span class="hl">pricing</span>',
    'faq.title': 'Frequently <span class="hl">asked questions</span>',
    'cta.title': 'Ready to <span class="hl">sell 3x faster</span> ?',
    'cta.sub': '✓ Reply within 24h guaranteed · ✓ No commitment · ✓ Training free this month',
    'cta.cta1': '⚡ Try it free now',
    'cta.cta2': '📅 Book my demo',
  }
};

let currentLang = 'fr';

function setLang(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  const dict = i18n[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang;
  localStorage.setItem('ib-lang', lang);
}

function initLang() {
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  const saved = localStorage.getItem('ib-lang') || 'fr';
  setLang(saved);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLang);
} else {
  initLang();
}
