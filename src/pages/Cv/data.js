const utdanningItems = [
  {
    title: "Sivilingeniør, Fysikk og matematikk",
    subtitle: "NTNU, Trondheim",
    date: "2020 - 2026",
  },
  {
    title: "Studiespesialisering",
    subtitle: "Lillestrøm videregående skole",
    date: "2017 - 2020",
  },
];

const jobberfaringItems = [
  {
    title: "Summer Intern R&D",
    subtitle: "Q-free",
    date: "Juni 2025 – Aug 2025",
    oppgaveTekst: [
      "Skrive C-kode ment for STM32.",
      "Sample høyfrekvent signal med ADC.",
      "Lagre data på SD-kort.",
      "Lodding.",
    ],
  },
  {
    title: "Summer Intern Frontend",
    subtitle: "NAV IT",
    date: "Juni 2024 – Aug 2024",
    oppgaveTekst: [
      "Videreutvikle nettside skrevet i React.",
      "Utvikle admin-verktøy for å opprette, redigere og slette nyhetsmeldinger.",
    ],
  },
  {
    title: "Summer Intern Data Scientist",
    subtitle: "NAV IT",
    date: "Juni 2023 – Aug 2023",
    oppgaveTekst: [
      "Evaluerte eksisterende brukerstøtte for NAV IT.",
      "Utnyttet GLM til å predikere arbeidsledighetsvarighet.",
      "Dokumenterte og visualiserte prosjektresultater.",
    ],
  },
  {
    title: "Internship",
    subtitle: "Zerolytics",
    date: "Nov 2022 - Jan 2023",
    oppgaveTekst: [
      "Aggregerte data fra ulike kilder relatert til stålindustriens klimaavtrykk.",
      "Automatiserte datainnhenting fra ustandardiserte PDF-filer.",
    ],
  },
];

const vervItems = [
  {
    title: "PVV",
    subtitle: "Drift medlem",
    date: "Aug 2024 - nå",
    oppgaveTekst: ["Drift av PVV maskiner", "Nix"],

  },
  {
    title: "Orbit NTNU",
    subtitle: "Medlem i ADCS",
    date: "Sep 2023 - Aug 2024",
    oppgaveTekst: ["Satellittsimuleringer i Matlab.", "Utviklet RK4 i C."],
  },
  {
    title: "Cogito NTNU",
    subtitle: "Medlem",
    date: "Sep 2022 - Jan 2023",
    oppgaveTekst: ["Fremme læring og interesse for kunstig intelligens."],
  },
];

const ferdigheterItems = [
  "Python", "PyTorch", "C", "C++", "JavaScript", "React", "Astro", "HTML", "CSS", "Matlab"
];


export const Cvdata = {
  vervItems,
  jobberfaringItems,
  utdanningItems,
  ferdigheterItems,
};

export async function GET() {
  return new Response(JSON.stringify(Cvdata), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}

