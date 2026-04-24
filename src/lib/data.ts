export const NAV_CONFIG = [
  { label: "Home", path: "/" },
  {
    label: "Services",
    path: "/services",
    children: [
      { label: "Corporate Consulting", path: "/services#cap-01" },
      { label: "Digital Transformation", path: "/services#cap-02" },
      { label: "Data & Strategy", path: "/services#cap-03" },
      { label: "Engagement Model", path: "/services#engagement-model" },
    ],
    featured: [
      {
        tag: "FEATURED",
        title: "Strategic Communications",
        body: "How leaders shape narrative in moments of consequence.",
        path: "/services#cap-01",
        image:
          "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop",
      },
      {
        tag: "INSIGHT",
        title: "AI in the boardroom",
        body: "Governance frameworks for the next decade.",
        path: "/services#cap-02",
        image:
          "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    label: "Engagements",
    path: "/engagements",
    children: [
      { label: "Government Mandates", path: "/engagements#cat-government" },
      { label: "Enterprise Advisory", path: "/engagements#cat-enterprise" },
      { label: "Data & Analytics", path: "/engagements#cat-data" },
      { label: "Capital Markets", path: "/engagements#cat-capital" },
    ],
    featured: [
      {
        tag: "CASE STUDY",
        title: "A landmark restructuring",
        body: "Re-architecting a multinational across three jurisdictions.",
        path: "/engagements",
        image:
          "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop",
      },
    ],
  },
  {
    label: "The Firm",
    path: "/firm",
    children: [
      { label: "Our Approach", path: "/firm#approach" },
      { label: "Leadership", path: "/firm#leadership" },
      { label: "Offices", path: "/firm#offices" },
      { label: "Careers", path: "/firm#careers" },
      { label: "Press", path: "/firm#press" },
    ],
    featured: [
      {
        tag: "THE FIRM",
        title: "Built for consequence",
        body: "An advisory firm purpose-made for executives, boards, and government.",
        path: "/firm#approach",
        image:
          "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80&auto=format&fit=crop",
      },
    ],
  },
  { label: "Contact", path: "/contact" },
];

export const PARTNER_DATA = [
  {
    id: "henrik",
    name: "Henrik Aaltonen",
    role: "Managing Partner & Co-founder",
    photo: "/images/about/about-founder.jpg",
    bio: "Henrik co-founded SERGE in 2015 after two decades advising governments and enterprise boards across Europe, North America, and Asia-Pacific. He leads the firm's most complex sovereign and enterprise mandates personally, with a focus on institutional operating reform and capital governance. Before SERGE, Henrik was a senior partner at two global advisory firms and served as an independent board advisor to six publicly listed companies. He holds degrees from the London School of Economics and INSEAD.",
  },
  {
    id: "eleanor",
    name: "Eleanor Marchetti",
    role: "Partner, Public Sector & Reform",
    photo: "/images/about/about-partner-1.jpg",
    bio: "Eleanor leads SERGE's public sector practice, specialising in institutional reform, service delivery transformation, and ministerial performance systems. She has advised governments across eight jurisdictions on operating model redesign and accountability architecture. Prior to joining SERGE, Eleanor held senior advisory roles at two sovereign wealth institutions and served as a strategic advisor to three national cabinets. She holds a master's degree in Public Administration from Oxford and a law degree from Sciences Po Paris.",
  },
  {
    id: "arjun",
    name: "Arjun Krishnan",
    role: "Partner, Capital & Governance",
    photo: "/images/about/about-partner-2.jpg",
    bio: "Arjun advises institutional investors, sovereign entities, and enterprise boards on capital allocation strategy, governance design, and cross-border transaction structure. He has led more than forty capital advisory mandates across Asia-Pacific, the Middle East, and Europe. Before SERGE, Arjun was a managing director at a leading global investment bank and a governance advisor to two sovereign wealth funds. He holds degrees from IIT Delhi and the Wharton School at the University of Pennsylvania.",
  },
  {
    id: "daniel",
    name: "Daniel Shimizu",
    role: "Partner, Technology & Data",
    photo: "/images/about/about-partner-3.jpg",
    bio: "Daniel leads SERGE's technology and data practice, focused on digital transformation strategy, decision infrastructure, and enterprise architecture. He has led platform consolidation and governance analytics programs for governments, financial institutions, and industrial groups across three continents. Prior to SERGE, Daniel was a principal architect at a global technology advisory firm and led digital strategy for two Fortune 500 companies. He holds a computer science degree from Stanford and an MBA from Chicago Booth.",
  },
];

export const CLIENTS = [
  { name: "Aeris Group", sector: "Enterprise", desc: "Operating model redesign and governance support across a multi-market enterprise program." },
  { name: "Nova Energy", sector: "Energy", desc: "Executive strategy office support for portfolio prioritization and cross-functional execution." },
  { name: "Civic Works", sector: "Government", desc: "Institutional transformation roadmap for service delivery modernization and accountability." },
  { name: "Arc Bank", sector: "Capital", desc: "Board decision intelligence framework with scenario-based planning and performance tracking." },
  { name: "Orbital Systems", sector: "Technology", desc: "Program recovery leadership for a delayed digital transformation portfolio." },
  { name: "Metropolis Authority", sector: "Public Sector", desc: "Public sector advisory on strategy execution, delivery governance, and risk visibility." },
];

export const PRINCIPLES = [
  { num: "01", text: "Define the problem before the solution.", italic: true },
  { num: "02", text: "Design for execution, not for the deck.", italic: false },
  { num: "03", text: "Quantify what leadership must decide.", italic: true },
  { num: "04", text: "Engage only where the outcome is consequential.", italic: false },
];

export const ENGAGEMENTS = [
  {
    index: "01",
    category: "Government",
    title: "National Service Reform",
    desc: "Three-year reform across nine jurisdictions. Operating-model redesign, platform consolidation, and a ministerial performance system now used as the federal reference standard.",
    kpi: { value: "03", label: "Year Program" },
    images: [
      "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80&auto=format&fit=crop",
    ],
  },
  {
    index: "02",
    category: "Enterprise",
    title: "Group Operating Restructure",
    desc: "Multi-business industrial group realigned around a single operating spine. Governance, capital allocation, and accountability redesigned to match strategic intent.",
    kpi: { value: "12", label: "Markets Aligned" },
    images: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop",
    ],
  },
];

export const WORK_TILES = [
  {
    index: "01",
    category: "Government",
    title: "National Service Reform",
    desc: "Three-year reform across nine jurisdictions. 38% faster case handling.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?w=1200&q=80&auto=format&fit=crop",
    wide: false,
  },
  {
    index: "02",
    category: "Enterprise",
    title: "Group Operating Restructure",
    desc: "Multi-business industrial group realigned around a single operating spine.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80&auto=format&fit=crop",
    wide: false,
  },
  {
    index: "03",
    category: "Data — Featured",
    title: "Executive Decision System",
    desc: "Board-grade decision infrastructure with continuous performance visibility, embedded in governance — not adjacent to it.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1800&q=80&auto=format&fit=crop",
    wide: true,
  },
  {
    index: "04",
    category: "Capital",
    title: "Sovereign Capital Review",
    desc: "$2.4B reallocated under a redesigned reporting and governance spine.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80&auto=format&fit=crop",
    wide: false,
  },
  {
    index: "05",
    category: "Enterprise",
    title: "Platform Consolidation",
    desc: "Twelve legacy systems retired into a single decision platform across two regions.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop",
    wide: false,
  },
  {
    index: "06",
    category: "Government — Featured",
    title: "Ministerial Performance System",
    desc: "Adopted as the federal reference standard for service-delivery accountability.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1800&q=80&auto=format&fit=crop",
    wide: true,
  },
];

export const SERVICES = [
  {
    id: "cap-01",
    num: "— 01",
    title: "Corporate Consulting",
    def: "Enterprise strategy, operating-model design, and executive decision support for organisations where structure determines outcome.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&auto=format&fit=crop",
    whatWeDo: [
      "Corporate strategy and portfolio architecture",
      "Operating-model and governance redesign",
      "Board and executive decision support",
      "Performance management systems",
    ],
    outcomes: [
      "A defensible decision the board can sign",
      "An operating spine that matches strategic intent",
      "Accountability lines that hold under pressure",
      "Measurable performance after we leave",
    ],
    formats: ["Diagnostic — 4 to 6 weeks", "Mandate — 3 to 9 months", "Embedded — 12 months+"],
  },
  {
    id: "cap-02",
    num: "— 02",
    title: "Digital Transformation",
    def: "Systems modernisation and platform integration delivered as enterprise change — not technology procurement.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600&q=80&auto=format&fit=crop",
    whatWeDo: [
      "Target architecture and platform consolidation",
      "Program recovery and delivery governance",
      "Vendor and contract restructuring",
      "Change adoption across the operating line",
    ],
    outcomes: [
      "A delivery plan leadership can underwrite",
      "Platforms that consolidate, not accumulate",
      "Risk surfaced early, in the language of the board",
      "Adoption measured, not assumed",
    ],
    formats: ["Diagnostic — 4 to 8 weeks", "Mandate — 6 to 18 months", "Embedded — 18 months+"],
  },
  {
    id: "cap-03",
    num: "— 03",
    title: "Data & Strategy",
    def: "Decision infrastructure for executives and ministers — auditable, repeatable, and built into governance, not adjacent to it.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80&auto=format&fit=crop",
    whatWeDo: [
      "Decision-architecture and scenario modelling",
      "Governance analytics and performance telemetry",
      "Data product and ownership design",
      "Board-grade reporting infrastructure",
    ],
    outcomes: [
      "Decisions that are auditable end to end",
      "Continuous performance visibility for the board",
      "One source of truth across the operating line",
      "Analytics that survive a change of leadership",
    ],
    formats: ["Diagnostic — 3 to 6 weeks", "Mandate — 4 to 12 months", "Embedded — 12 months+"],
  },
];

export const PROCESS_STEPS = [
  {
    num: "01",
    name: "Discovery",
    line: "Frame the situation. Define what leadership must decide.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80&auto=format&fit=crop",
  },
  {
    num: "02",
    name: "Diagnosis",
    line: "Quantify constraints. Eliminate the noise around the decision.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80&auto=format&fit=crop",
  },
  {
    num: "03",
    name: "Design",
    line: "Build the operating change and the governance to land it.",
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=600&q=80&auto=format&fit=crop",
  },
  {
    num: "04",
    name: "Develop",
    line: "Translate design into working systems, operating rituals, and team capability.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80&auto=format&fit=crop",
  },
  {
    num: "05",
    name: "Delivery",
    line: "Stay through implementation. Measure against the mandate.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
  },
];

export const PRESS_ITEMS = [
  { date: "Mar 2025", title: "SERGE advises on landmark federal service reform", outlet: "Financial Times" },
  { date: "Nov 2024", title: "Decision infrastructure: the new boardroom imperative", outlet: "Harvard Business Review" },
  { date: "Aug 2024", title: "How SERGE rebuilt a sovereign ministry's performance system", outlet: "Bloomberg" },
  { date: "Apr 2024", title: "Aaltonen: the advisor who only takes the hardest mandates", outlet: "The Economist" },
  { date: "Jan 2024", title: "Inside SERGE's capital governance framework", outlet: "Wall Street Journal" },
];

export const OFFICES = [
  {
    city: "New York",
    role: "Headquarters — Americas",
    address: "399 Park Avenue\nNew York, NY 10022",
    note: "Primary mandate operations for the Americas region and global sovereign engagements.",
  },
  {
    city: "London",
    role: "EMEA Office",
    address: "30 St Mary Axe\nLondon EC3A 8BF",
    note: "Europe, Middle East, and Africa mandate coverage. Cross-border transaction and capital advisory.",
  },
  {
    city: "Singapore",
    role: "APAC Office",
    address: "1 Raffles Quay\nSingapore 048583",
    note: "Asia-Pacific mandate coverage with particular depth in sovereign and data governance.",
  },
];

export const PRACTICE_AREAS = [
  {
    index: "01/",
    title: "Corporate Consulting",
    desc: "Enterprise strategy, operating-model design, and executive decision support for organizations where structure determines outcome.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=800&q=80&auto=format&fit=crop",
    ],
  },
  {
    index: "02/",
    title: "Digital Transformation",
    desc: "Systems modernization and platform integration delivered as enterprise-wide change, not technology procurement.",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80&auto=format&fit=crop",
    ],
  },
  {
    index: "03/",
    title: "Data & Strategy",
    desc: "Decision infrastructure for executives and ministers: auditable, repeatable, and built into governance, not adjacent to it.",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80&auto=format&fit=crop",
    ],
  },
];
