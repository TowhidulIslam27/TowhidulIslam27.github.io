// All portfolio copy lives here. Edit this file to update the site without touching layout code.

// Prefix for anything in /public — respects Vite's `base` config, so every public asset path
// below goes through this (the site is served from the domain root, towhidulislam27.github.io).
const BASE = import.meta.env.BASE_URL;
const asset = (path) =>
  `${BASE}${path
    .replace(/^\//, "")
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`;

export const profile = {
  name: "Towhidul Islam",
  role: "Geospatial Researcher · InSAR & Climate Hazards",
  tagline:
    "I study how land subsidence, landslides and flooding combine into risk in data-scarce deltas like Bangladesh — using SAR/InSAR, explainable AI and the tools I build to make that research reproducible.",
  location: "Chittagong, Bangladesh",
  email: "m.towhid92@gmail.com",
  phone: "+8801632211582",
  linkedin: "https://www.linkedin.com/in/towhidullslam/",
  github: "https://github.com/TowhidulIslam27",
  photo: asset("/ti.jpg"),
};

export const about = {
  paragraphs: [
    "I am a geospatial researcher working on ground deformation and climate hazards. As founder and research lead of SAR.Sense Geointelligence Lab in Chittagong, I lead three projects that use PS-InSAR, SBAS and explainable machine learning to map where the ground is moving across Bangladesh, why, and how it compounds flood risk in cities.",
    "I trained in Earth observation at ITC (University of Twente), urban management at IHS (Erasmus University Rotterdam), and geography at the University of Chittagong. My ITC research measured a slow-moving landslide with multi-sensor PSInSAR in a data-sparse region, and I have since deepened my InSAR time-series and deformation-modelling skills at the COMET InSAR Training Workshop (2025). My Erasmus thesis studied how pluvial flooding disrupts travel in Chittagong. Both questions now meet in my current work.",
    "When research is slowed by data sourcing or fragmented pipelines, I build the tools to fix it — which is how BanGIS Pro started. I am now looking for a funded PhD to take this work further.",
  ],
};

export const researchInterests = {
  intro:
    "How a changing climate becomes hazard and risk on the ground — and how Earth observation, InSAR and explainable AI can measure it early enough to act, especially in data-scarce deltas like Bangladesh.",
  areas: [
    {
      icon: "mountain",
      title: "Ground deformation from InSAR",
      text: "Subsidence and landslide motion from PS-InSAR and SBAS time series, validated with GNSS, in regions with little ground monitoring.",
      tags: ["PS-InSAR", "SBAS", "Subsidence", "Landslides"],
    },
    {
      icon: "waves",
      title: "Compound risk in deltaic cities",
      text: "How subsidence changes exposure to pluvial flooding and heat, and how households adapt — coupling InSAR with agent-based models.",
      tags: ["Pluvial flooding", "Compound risk", "Agent-based models"],
    },
    {
      icon: "brain",
      title: "Explainable AI for hazard susceptibility",
      text: "Machine-learning susceptibility models whose drivers planners can inspect and trust.",
      tags: ["XAI", "SHAP / LIME", "Susceptibility"],
    },
  ],
  questions: [
    "How much does land subsidence increase pluvial flood exposure in fast-growing deltaic cities, and where?",
    "Which geological and human drivers best explain observed deformation — and can explainable models show planners where to act first?",
    "How can InSAR-based risk products be validated and made reliable where ground data are scarce?",
  ],
  cta: {
    title: "Open to funded PhD positions",
    text: "I am looking for a funded PhD in geohazards, climate risk or Earth observation, ideally on InSAR-based deformation and compound flood risk. I am ready to commit to it full-time.",
  },
};

export const softwareProjects = [
  {
    id: "bangis-pro",
    name: "BanGIS Pro",
    subtitle: "GIS Made Simple — a research platform for reproducible SAR and GIS workflows",
    org: "Begun independently · SAR.Sense Geointelligence Lab since 2025",
    period: "May 2024 – Present",
    description:
      "A desktop GIS for SAR and geospatial research, with Hiron, a native AI agent that plans and runs multi-step workflows from plain-language instructions.",
    facts: [
      { value: "312", label: "geospatial tools released, more in the pipeline" },
      { value: "27", label: "specialised domain toolboxes" },
      { value: "1,685", label: "automated backend tests" },
      { value: "271", label: "documented methods" },
    ],
    highlights: [
      { title: "SAR/InSAR from first principles", text: "Radiometric calibration, speckle filtering, Range-Doppler terrain correction and full InSAR, PolSAR and TomoSAR workflows." },
      { title: "Reproducible by design", text: "Every tool exports a report citing the published method behind it." },
      { title: "Hiron — a native AI agent", text: "Plans and runs multi-step GIS and SAR workflows from plain-language instructions." },
      { title: "Automatic data access", text: "Earth Engine, OSM, STAC, PostGIS and more — fetched and clipped to the study area." },
      { title: "Built for researchers who code", text: "Integrated Python console and scriptable layouts alongside the no-code interface." },
    ],
    stack: [
      "FastAPI",
      "React",
      "TypeScript",
      "MapLibre GL",
      "Tauri",
      "NumPy",
      "SciPy",
      "GDAL",
      "Python",
      "Groq LLM",
    ],
    video: {
      src: asset("/videos/BanGIS_Pro_Showcase_v3.mp4"),
      poster: asset("/videos/bangis-pro-poster.jpg"),
    },
    // Add screenshots here once they exist in /public/images, e.g. asset("/images/bangis-pro-1.jpg").
    images: [],
    // Add `github: "<repo url>"` once the repository is public.
    links: [
      // { label: "Live demo", href: "#" },
    ],
    featured: true,
  },
];

export const researchProjects = [
  {
    name: "InSAR–ABM Compound-Risk Framework for Chittagong",
    role: "Research Lead",
    period: "Nov. 2025 – Present",
    description: "Coupling InSAR, flood data and an agent-based model of households to test how drainage upgrades and groundwater management change flood–subsidence risk.",
  },
  {
    name: "Deformation Susceptibility with InSAR & XAI",
    role: "Research Lead",
    period: "Sept. 2025 – Present",
    description: "Building explainable models (SHAP / LIME) that link InSAR deformation to geological and human drivers, so planners see where the ground is moving and why.",
  },
  {
    name: "Nationwide Land Deformation Map of Bangladesh",
    role: "Research Lead",
    period: "May 2025 – Present",
    description: "Processing Sentinel-1 and ALOS-2 archives with PS-InSAR and SBAS to map subsidence and uplift for 2015–2025, with GNSS validation.",
  },
];

export const academicProjects = [
  {
    name: "Slow-moving Landslide Deformation (ITC thesis)",
    period: "Sep. 2023 – Apr. 2024",
    description: "Multi-sensor PSInSAR (Envisat, Sentinel-1) with geomorphological mapping in a data-sparse region; showed Sentinel-1 resolves finer deformation than Envisat.",
  },
  {
    name: "Soil–Plant Digital Twin (PySTEMMUS-SCOPE)",
    period: "Nov. 2023 – Feb. 2024",
    description: "Simulated energy fluxes, soil temperature and soil moisture at Harvard Forest under seasonal climate extremes.",
  },
  {
    name: "Physically-based Flood Modelling",
    period: "Feb. 2023 – Mar. 2023",
    description: "LISEM modelling of sequential levee breaches on the Maas and Waal; compared flood arrival, depth and velocity.",
  },
];

export const experience = [
  {
    org: "SAR.Sense Geointelligence Lab",
    role: "Founder & Research Lead",
    location: "Chittagong, Bangladesh",
    period: "May 2025 – Present",
    bullets: [
      "Lead three InSAR and explainable-AI research projects on deformation and compound flood risk.",
      "Coordinate a research team of 20+ members and 5 external collaborators across three units: hazards, agriculture & forestry, and water & environment.",
      "Built BanGIS Pro, the lab's research GIS platform; teach remote sensing and geospatial AI through SAR.Sense Academy.",
    ],
  },
  {
    org: "icddr,b — Nutrition Research Division",
    role: "GIS Consultant (National)",
    location: "Dhaka, Bangladesh",
    period: "Jan. 2025 – May 2025",
    bullets: [
      "Designed the spatial sampling framework for the One Nutrition Coverage Survey with IFPRI and Johns Hopkins University: 64 enumeration areas in Dhaka, Sylhet, Khulna and Rangpur.",
      "Built Kobo-linked field maps that raised field data accuracy by about 30%.",
      "Trained 15 researchers in GIS workflows.",
    ],
  },
  {
    org: "Red Cross Red Crescent Climate Centre",
    role: "Junior Researcher",
    location: "The Hague, Netherlands",
    period: "Feb. 2021 – Jul. 2021",
    bullets: [
      "Set Rajshahi's heat threshold at 38 °C from 30 years of meteorological records (1990–2020).",
      "Mapped ward-level heat hotspots with Landsat surface temperature, NDVI and NDWI.",
      "Co-authored the ARRCC / UK Met Office study; its recommendations were adopted by Rajshahi City Corporation.",
    ],
  },
  {
    org: "Halishahar School of Artillery",
    role: "GIS Training Instructor (part-time)",
    location: "Chittagong, Bangladesh",
    period: "Jan. 2017 – Aug. 2019",
    bullets: [
      "Taught ArcGIS for military intelligence and counter-bombardment to 20 army officers; pre/post-course tests showed a 60% gain in ArcGIS competency.",
    ],
  },
  {
    org: "University of Chittagong — Dept. of Geography and Environmental Studies",
    role: "Research Assistant (part-time, alongside MS)",
    location: "Chittagong, Bangladesh",
    period: "Apr. 2017 – Aug. 2019",
    bullets: [
      "Analysed trends, impacts and management of lightning disasters in Bangladesh; supervised 6 undergraduate researchers.",
    ],
  },
  {
    org: "Asian University for Women · Dept. of Statistics, University of Chittagong",
    role: "Guest Training Instructor (week-long courses)",
    location: "Chittagong, Bangladesh",
    period: "May 2017 · Aug. 2026",
    bullets: [
      "Asian University for Women (Aug. 2026): GIS and remote sensing course covering spatial data fundamentals, geographic data layers and flood susceptibility modelling, with hands-on lab sessions.",
      "Dept. of Statistics, University of Chittagong (May 2017): ArcGIS fundamentals course.",
    ],
  },
];

// Field/work photos shown at the end of the Experience section. Missing files are skipped
// silently, so it's safe to add or rename these — just keep the filename in `src` matching
// what's actually in /public/images/experience/.
export const experiencePhotos = [
  { src: asset("/images/experience/Lecturing on Spatial Data.JPG"), caption: "Lecturing on spatial data fundamentals, Asian University for Women" },
  { src: asset("/images/experience/During a lecture on flood susceptibility modelling.jpg"), caption: "Walking through flood susceptibility modelling, Asian University for Women" },
  { src: asset("/images/experience/Conducting session on remote sensing.JPG"), caption: "Conducting geospatial training, Asian University for Women" },
  { src: asset("/images/experience/Helping out a hands on GIS session.jpg"), caption: "Hands-on support during a GIS workshop, Asian University for Women" },
  { src: asset("/images/experience/Explaining geographic layers.JPG"), caption: "Explaining how geographic data layers stack, Asian University for Women" },
  { src: asset("/images/experience/Lecturing on remote sensing.JPG"), caption: "Introducing remote sensing concepts, Asian University for Women" },
  { src: asset("/images/experience/On a GIS for defense session.jpg"), caption: "GIS training for army officers, School of Artillery" },
  { src: asset("/images/experience/At the end of a fundamental GIS course.jpg"), caption: "Closing a one-week ArcGIS course, Department of Statistics, University of Chittagong" },
];

export const education = [
  {
    school: "University of Twente (ITC)",
    degree: "PgD, Geo-Information Science and Earth Observation — specialisation in Natural Hazards and Disaster Risk Reduction",
    period: "Aug. 2021 – Apr. 2024",
    location: "Enschede, The Netherlands",
    note: "Research: Assessing Spatiotemporal Deformation Pattern of a Slow-Moving Landslide in a Data-Sparse Region",
  },
  {
    school: "Erasmus University Rotterdam",
    degree: "MSc, Urban Management and Development",
    period: "Sept. 2019 – Jan. 2021",
    location: "Rotterdam, The Netherlands",
    note: "Research: Effects of Pluvial Urban Flood on Intracity Travel Behavior: The Case of Chittagong City, Bangladesh",
  },
  {
    school: "University of Chittagong",
    degree: "MS, Geography and Environmental Studies",
    period: "Jan. 2017 – Oct. 2018",
    location: "Chittagong, Bangladesh",
    note: "Research: Climatic Anomalies and Thunderstorm Intensity Over Bangladesh: A Spatiotemporal Analysis",
  },
  {
    school: "University of Chittagong",
    degree: "BSc, Geography and Environmental Studies",
    period: "Feb. 2012 – May 2016",
    location: "Chittagong, Bangladesh",
  },
];

export const skills = [
  {
    group: "SAR / InSAR",
    icon: "satellite",
    items: ["SNAP", "LiCSBAS", "PyGMTSAR", "SARscape", "Time-series InSAR (PS / SBAS)", "Sentinel-1 & ALOS-2", "GNSS validation"],
  },
  {
    group: "Geospatial Development & Web GIS",
    icon: "code",
    items: ["React", "TypeScript", "JavaScript", "FastAPI", "Tauri", "MapLibre GL"],
  },
  {
    group: "Programming & Spatial Analytics",
    icon: "database",
    items: ["Python (GeoPandas, Rasterio, NumPy)", "R", "MATLAB", "PostgreSQL / PostGIS", "Explainable ML (SHAP / LIME)", "LaTeX"],
  },
  {
    group: "GIS & Earth Observation Platforms",
    icon: "globe",
    items: ["ArcGIS Pro", "QGIS", "Google Earth Engine", "ENVI", "ERDAS IMAGINE", "ILWIS", "GRASS GIS", "LISEM"],
  },
];


export const languages = [
  { name: "English", detail: "IELTS Academic 7.0 overall, CEFR C1 (L 7.0, R 7.5, W 6.5, S 7.0) — Aug. 2026" },
];

// group: "main" = hazards & climate-risk work, listed first; "other" = listed under "Other contributions".
export const publications = [
  {
    citation:
      "Uddin, M.S., Mahmud, K., Islam, T., & Rahman, M.A. (2026). Explainable machine learning assessment of hydroclimatic and land-surface controls on agricultural drought in North-Western Bangladesh. Journal of Hydrology.",
    tag: "Under review",
    group: "main",
  },
  {
    citation:
      "Subedi, A., Islam, T., Khan, R., Hassan, A., Hoogesteger, S. (2022). Identification of heat threshold and heat hotspots in Rajshahi, Bangladesh. Red Cross Red Crescent Climate Centre (ARRCC programme).",
    href: "https://heathealth.info/resources/identification-of-heat-threshold-and-heat-hotspots-in-rajshahi-bangladesh/",
    tag: "Technical report",
    group: "main",
  },
  {
    citation:
      "Uddin, M.S., Mitra, B., Rahman, M.S., Mahmud, K., Islam, T., Rahman, S.M., & Rahman, M.M. (2026). Integrating shared socioeconomic pathways and deep learning for future CO₂ emission forecasts in major European Union economies. Environment, Development and Sustainability.",
    tag: "Minor revision",
    group: "other",
  },
  {
    citation:
      "Uddin, M.S., Mahmud, K., Rahaman, M.A., Mitra, B., Rahman, S.M., Islam, T., Rahman, M.M., & Rahman, M.S. (in review). Hands-on geomatics for marine conservation. In Marine biodiversity dynamics in the Arabian Peninsula. Springer.",
    tag: "Book chapter, under review",
    group: "other",
  },
  {
    citation:
      "Sultana, N.N., Jabeed, A., Rahman, M.A., Hasan, S., Islam, T., Podder, S., Mallick, S.S., Akter, H., Nath, T.K., Ullah, M.S., & Paul, A. (2021). COVID-19 in Bangladeshi Daily Newspapers: A Thematic Analysis of Media Coverage. Journal of Global Communication, 14(2), 70–84.",
    href: "https://indianjournals.com/article/jgc-14-2-002",
    tag: "Published",
    group: "other",
  },
];

export const awards = [
  { name: "ITC Excellence Scholarship", year: "Aug. 2021 – Jul. 2023", body: "Partial scholarship · PgD in Geo-Information Science and Earth Observation, University of Twente" },
  { name: "OKP Scholarship (Nuffic)", year: "Sept. 2019 – Aug. 2020", body: "Full scholarship · MSc in Urban Management and Development, Erasmus University Rotterdam" },
  { name: "Full-Free Master's Stipend", year: "Jul. 2016 – Jun. 2017", body: "MS in Geography and Environmental Studies, University of Chittagong" },
];
