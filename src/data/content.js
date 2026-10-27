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
  role: "Founder and Director, SAR.Sense Geointelligence Lab · InSAR & Climate Hazards",
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
    "I am a geospatial researcher working on ground deformation and climate hazards. As Founder and Director of SAR.Sense Geointelligence Lab in Chittagong, I lead three projects that use PS-InSAR, SBAS and explainable machine learning to map where the ground is moving across Bangladesh, why, and how subsidence, landslides and flooding combine into hazard risk.",
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
      title: "Multi-hazard risk in deltaic regions",
      text: "How subsidence, landslides and monsoon rainfall overlap in the same places, and how InSAR slope deformation can feed early warning where ground data are scarce.",
      tags: ["Landslide early warning", "Multi-hazard risk", "Pluvial flooding"],
    },
    {
      icon: "brain",
      title: "Explainable AI for hazard susceptibility",
      text: "Machine-learning susceptibility models whose drivers planners can inspect and trust.",
      tags: ["XAI", "SHAP / LIME", "Susceptibility"],
    },
  ],
  questions: [
    "Where do subsidence, landslides and flooding overlap in Bangladesh, and how much does that overlap raise risk for the people living there?",
    "Which geological and human drivers best explain observed deformation — and can explainable models show planners where to act first?",
    "How can InSAR-based risk products be validated and made reliable where ground data are scarce?",
  ],
  cta: {
    title: "Open to funded PhD positions",
    text: "I am looking for a funded PhD in geohazards, climate vulnerability or Earth observation, ideally on InSAR-based deformation and multi-hazard risk assessment. I am ready to commit to it full-time.",
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
      "A one-stop desktop platform for geospatial researchers. It brings together Google Earth Engine, Python scripting, open data access, agentic AI and layout scripting, and attaches an academic reference to the result of every process.",
    facts: [
      { value: "312", label: "geospatial tools released, more in the pipeline" },
      { value: "27", label: "specialised domain toolboxes" },
      { value: "1,685", label: "automated backend tests" },
      { value: "271", label: "documented methods" },
    ],
    highlights: [
      { title: "One platform for the whole workflow", text: "Google Earth Engine, Python scripting, open data access, an AI agent and layout scripting in a single desktop application, so a study does not have to be stitched together across separate tools." },
      { title: "Google Earth Engine and open data", text: "Earth Engine, OSM, STAC, PostGIS and more are fetched and clipped to your study area automatically, so analysis starts from the data rather than from downloading it." },
      { title: "Python scripting, integrated", text: "An integrated Python console lets you script any step and mix code with the no-code interface." },
      { title: "Layout scripting with Python", text: "Build and repeat map layouts from scripts, so figures can be regenerated exactly when data or parameters change." },
      { title: "Hiron — agentic AI", text: "A native agent that plans and runs multi-step GIS and SAR workflows from plain-language instructions." },
      { title: "A reference after every process", text: "Every tool exports a report that cites the published method behind it, so each result comes with its academic reference." },
      { title: "SAR Studio — in the pipeline", text: "A dedicated SAR environment is in development for BanGIS Pro. It is not ready yet and is not part of the current release." },
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
    name: "Integrated Landslide Early Warning System",
    role: "Research Lead",
    period: "Jul. 2026 – Present",
    description:
      "Daily landslide early warning for Rangamati, the Rohingya camps (Ukhia/Teknaf) and Chattogram city hills, combining susceptibility, rainfall thresholds and InSAR slope deformation. So far: a landslide inventory of about 3,400 records from published catalogues, agency data and press reports, and a first terrain-only susceptibility baseline. Rainfall thresholds, InSAR slope deformation and a 2017–2026 alert hindcast are next.",
    facts: [
      { value: "3,400+", label: "landslide records in the inventory" },
      { value: "604", label: "well-located points used in the baseline (160 · 292 · 152)" },
      { value: "0.78", label: "AUC on held-out spatial blocks in the city hills (slope alone 0.72)" },
      { value: "54%", label: "of city-hill landslides fall in the top-scoring fifth of the area" },
    ],
    findings: [
      "On held-out spatial blocks the terrain-only model beats slope alone in the city hills (AUC 0.78 vs 0.72) and the camps (0.73 vs 0.49), but not in Rangamati (0.62 vs 0.64).",
      "A model trained on two sites does not transfer to the third (AUC 0.51–0.67, no better than slope alone), so each new site needs its own inventory.",
    ],
    note: "A baseline to beat, not a hazard map: the Rangamati points all lie along one road, and the camp points come from a single mapping study.",
    stackFigures: true,
    figures: [
      {
        src: asset("/images/research/ilews-susceptibility-maps.png"),
        alt: "Terrain-only landslide susceptibility maps for Rangamati and the road corridor, the Rohingya camps and the Chattogram city hills, with mapped landslide points.",
        title: "Where the baseline scores high",
        caption: "Terrain-only susceptibility at the three pilot sites; dots are the mapped landslides used (n = 160, 292, 152).",
      },
      {
        src: asset("/images/research/ilews-model-performance.png"),
        alt: "Held-out AUC compared with slope-only and logistic baselines, out-of-fold prediction-rate curves, and transfer to an unseen site.",
        title: "How it compares with simple baselines",
        caption: "Held-out AUC beats slope alone in the city hills and the camps but not in Rangamati, and does not transfer to an unseen site.",
      },
    ],
    github: "https://github.com/TowhidulIslam27/ILEWS",
  },
  {
    name: "Deformation Susceptibility with InSAR & XAI",
    role: "Research Lead",
    period: "Sept. 2025 – Present",
    description:
      "Explainable models that link PS-InSAR subsidence in Dhaka and Chattogram to geology, terrain and urban drivers, and test whether those drivers transfer between the two cities. About 64 candidate factors per city on a 100 m grid were screened down to 52 (Dhaka) and 45 (Chattogram), 40 of them shared for the transfer test, and added in groups under spatial block cross-validation. SHAP / LIME analysis and the transfer test are next.",
    facts: [
      { value: "~64", label: "candidate factors per city, screened to 52 (Dhaka) and 45 (Chattogram)" },
      { value: "17,622 · 5,142", label: "PS cells with a velocity value, Dhaka · Chattogram (100 m grid)" },
      { value: "0.50 · 0.64", label: "cross-validated R² with all factor groups (2 km blocks), Dhaka · Chattogram" },
      { value: "0.61 · 0.74", label: "R² of a model that only knows cell coordinates, the baseline to beat" },
    ],
    findings: [
      "Skill rises as factor groups are added. Dhaka R² goes 0.11 → 0.22 → 0.46 → 0.50 (terrain, then geology, then urban load and land cover, then fill history and groundwater proxies); Chattogram goes 0.38 → 0.44 → 0.64 → 0.64.",
      "The two cities behave differently: terrain alone explains a good part of the pattern in Chattogram but almost nothing in Dhaka, where urban load, land cover and fill history carry the skill.",
      "A coordinates-only model still beats all the factors together, so part of the subsidence follows a broad spatial signal the factors miss. Groundwater heads for Dhaka are the next model.",
    ],
    figures: [
      {
        src: asset("/images/research/xai-cv-skill.jpg"),
        alt: "Cross-validated R² of vertical velocity for each factor set in Dhaka and Chattogram, with gradient-boosted trees, random forest and linear models and a coordinates-only reference line.",
        title: "What each factor group adds",
        caption: "Cross-validated R² as factor groups are added; the dashed line, a model that only knows coordinates, is the bar to beat.",
      },
      {
        src: asset("/images/research/xai-factor-maps.jpg"),
        alt: "Maps of six explanatory factors, Dhaka beside Chattogram: elevation, height above nearest drainage, distance to the Holocene contact, pond and ditch share, land under development, and road density.",
        title: "The explanatory factors",
        caption: "Six of the factors, Dhaka beside Chattogram: terrain, hydrology, geology, land cover and urban load.",
      },
      {
        src: asset("/images/research/xai-study-area.jpg"),
        alt: "Study areas in Bangladesh, surface geology of Dhaka and Chattogram, vertical rate from PS-InSAR with GNSS stations, and its standard error.",
        title: "Study areas and measured subsidence",
        caption: "Surface geology, vertical rate 2017–2023 at the PS cells with the GNSS stations used for validation, and its standard error.",
      },
    ],
    github: "https://github.com/TowhidulIslam27/xai-urban-subsidence-bd",
  },
  {
    name: "Nationwide Land Deformation Map of Bangladesh",
    role: "Research Lead",
    period: "May 2025 – Present",
    description:
      "Processing the Sentinel-1 archive with PS-InSAR and SBAS to map subsidence and uplift for 2016–2024, deriving LOS velocity per persistent scatterer and decomposed vertical and east–west motion on a 100 m grid. Six cities are processed so far (Dhaka, Chattogram, Khulna, Barishal, Sylhet, Cumilla); other regions are in progress. A manuscript on the three largest cities is in preparation.",
    facts: [
      { value: "~275,000", label: "persistent scatterers across the six processed cities" },
      { value: "12", label: "Sentinel-1 stacks, one ascending and one descending per city" },
      { value: "~29,000", label: "100 m cells with decomposed vertical and east–west motion" },
      { value: "5", label: "continuous GNSS stations used for validation in the paper" },
    ],
    findings: [
      "Ground motion follows geology: in Dhaka the marsh clay and peat unit has the lowest median vertical velocity, and in Chattogram 20–33% of cells on valley alluvium, beach and dune sand and channel deposits subside faster than 5 mm/yr (depending on unit and time window).",
      "Building footprint density is only weakly related to vertical velocity (Spearman ρ ≈ −0.2 in all three cities), so urban load alone does not explain where the ground moves.",
    ],
    note: "Rates are relative to a local reference area and are not yet tied to GNSS; calibration against continuous GNSS stations is part of the manuscript.",
    figures: [
      {
        src: asset("/images/research/bgmo-study-area.jpg"),
        alt: "Map of Bangladesh with the Sentinel-1 frames used, and persistent scatterer density per 100 m cell in Dhaka, Khulna and Chattogram.",
        title: "Study area and data coverage",
        caption: "Sentinel-1 frames and persistent-scatterer density per 100 m cell in Dhaka, Khulna and Chattogram (about 220,000 scatterers).",
      },
      {
        src: asset("/images/research/bgmo-geology-load.jpg"),
        alt: "Geology maps with subsiding cells, vertical velocity by geological unit, and median velocity against building density and height for Dhaka, Chattogram and Khulna.",
        title: "Ground motion by geology and urban load",
        caption: "Vertical velocity by geological unit, and its weak relation to building density and height.",
      },
      {
        src: asset("/images/research/bgmo-data-coverage.png"),
        alt: "Bar chart of the Sentinel-1 acquisition period, number of scenes and persistent scatterers for the ascending and descending stack of each of the six processed cities.",
        title: "Data coverage in the six processed cities",
        caption: "Acquisition period, scenes and persistent scatterers (PS) for each ascending and descending stack, drawn from the repository's data table.",
      },
    ],
    github: "https://github.com/TowhidulIslam27/bGMO",
    website: "https://bgmo.sarsense.com/#bangladesh",
    paper: "https://github.com/TowhidulIslam27/bGMO/tree/main/docs/paper",
  },
];

export const academicProjects = [
  {
    name: "Slow-moving Landslide Deformation (Research at ITC)",
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
    role: "Founder and Director",
    location: "Chittagong, Bangladesh",
    period: "May 2025 – Present",
    bullets: [
      "Lead three InSAR and explainable-AI research projects on ground deformation and hazard risk.",
      "Coordinate a research team of 20+ members and 5 external collaborators across three units: hazards, agriculture & forestry, and water & environment.",
      "Co-supervise 3 senior theses from the Environmental Science Department of Asian University for Women (AUW), under a Memorandum of Agreement between the department and SAR.Sense (2026).",
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
    note: "Research: Assessing Spatiotemporal Deformation Pattern of a Slow-Moving Landslide in a Data-Sparse Region. Extended programme; completed with a full independent InSAR research project. Relevant coursework: Data-driven Hazard Modelling, Radar Remote Sensing.",
  },
  {
    school: "Erasmus University Rotterdam",
    degree: "MSc, Urban Management and Development — specialisation in Urban Environment, Sustainability and Climate Change",
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

// group: "prep" = lead-author manuscripts in preparation; "main" = hazards & climate-risk work; "other" = listed under "Other contributions".
export const publications = [
  {
    citation:
      "Islam, T., et al. (in preparation). Ground motion and infrastructure exposure in Bangladesh's three largest cities from multi-geometry PS-InSAR.",
    href: "https://github.com/TowhidulIslam27/bGMO/tree/main/docs/paper",
    tag: "In preparation",
    group: "prep",
  },
  {
    citation:
      "Islam, T., et al. (in preparation). Do the drivers of urban subsidence transfer between cities? An InSAR-XAI look into Dhaka and Chattogram City of Bangladesh.",
    href: "https://github.com/TowhidulIslam27/xai-urban-subsidence-bd",
    tag: "In preparation",
    group: "prep",
  },
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
