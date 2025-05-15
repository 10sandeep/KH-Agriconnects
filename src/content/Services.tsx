export interface Service {
  id: number;
  title: string;
  image: string;
  overview: string;
  whyItMatters: string;
  whoItsFor: string[];
  howItWorks: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Custom Hiring Services of Agricultural Machinery",
    image: "/images/custom-hiring.jpg",
    overview:
      "KH AGRICONNECT enables farmers to rent high-quality farm equipment on demand. This reduces capital investment and boosts operational efficiency.",
    whyItMatters:
      "Small and marginal farmers often can't afford advanced machinery. Our platform makes modern mechanization accessible, enhancing productivity and minimizing labor dependency.",
    whoItsFor: [
      "Small and marginal farmers",
      "FPOs (Farmer Producer Organizations)",
      "Agri-entrepreneurs managing multiple farms",
    ],
    howItWorks:
      "Farmers can book equipment such as cultivators, transplanters, harvesters, and drones via mobile app, website, or local KH agents. We ensure timely delivery, trained operator support, and maintenance services.",
  },
  {
    id: 2,
    title: "Contract Farming (Min. 25 Acres)",
    image: "/images/contract-farming.jpg",
    overview:
      "We offer structured, secure contract farming models using mechanized cultivation tailored to the region and available resources.",
    whyItMatters:
      "Idle or mismanaged farmland results in lost income. Our solution brings in technology, expertise, and guaranteed revenue.",
    whoItsFor: [
      "Landowners with idle or underutilized land",
      "Agribusinesses seeking stable crop supply",
      "Institutions managing large agricultural plots",
    ],
    howItWorks:
      "We sign a legal agreement with the landowner and take care of crop planning, input supply & management, mechanized operations, and market linkage.",
  },
  {
    id: 3,
    title: "Training in Present and Futuristic Agri-Tech",
    image: "/images/agri-training.jpg",
    overview:
      "We provide short-term and long-term training on emerging agri-tech, machinery, and digital farming.",
    whyItMatters:
      "India’s agricultural future depends on skilled manpower. We’re preparing rural youth and agri-preneurs for the next generation of farming.",
    whoItsFor: [
      "Rural youth and students",
      "Aspiring agri-preneurs",
      "FPO staff and machinery operators",
    ],
    howItWorks:
      "Training is delivered through workshops, simulators, hands-on field sessions, and academic partnerships.",
  },
  {
    id: 4,
    title: "Agricultural Machinery Consultancy",
    image: "/images/machinery-consultancy.jpg",
    overview:
      "We advise individuals and institutions on choosing the right equipment and maximizing ROI through informed decision-making.",
    whyItMatters:
      "Improper equipment leads to losses and low productivity. Our guidance ensures effective investment and maximum output.",
    whoItsFor: [
      "Progressive individual farmers",
      "Agri-tech startups",
      "Government or CSR-backed farm projects",
    ],
    howItWorks:
      "Our consultancy includes on-ground assessment, terrain-based machine analysis, procurement support, and training.",
  },
  {
    id: 5,
    title: "Custom Equipment Design & Development",
    image: "/images/custom-equipment.jpg",
    overview:
      "When standard equipment doesn’t meet specific farm needs, we step in to design and prototype custom solutions.",
    whyItMatters:
      "Many Indian farms, especially in hilly or tribal areas, need context-specific tools. Imported machines often don't fit our realities.",
    whoItsFor: [
      "Progressive farmers facing unique challenges",
      "Research institutions and KVKs",
      "NGOs working in difficult geographies",
    ],
    howItWorks:
      "We understand the problem, design and fabricate a prototype, test in field conditions, and support local production.",
  },
  {
    id: 6,
    title: "Buyer & Seller Sourcing Gateway",
    image: "/images/sourcing-gateway.jpg",
    overview:
      "We connect genuine buyers with verified sellers of agricultural produce, machinery, and inputs ensuring transparency and fair pricing.",
    whyItMatters:
      "Middlemen often reduce farmer profits. A trusted platform ensures farmers get the right price and buyers get assured quality.",
    whoItsFor: [
      "Farmers and FPOs",
      "Institutional buyers, exporters, traders",
      "Agri-input companies",
    ],
    howItWorks:
      "We aggregate listings, verify stakeholders, manage negotiations, and offer logistics support if required.",
  },
  {
    id: 7,
    title: "Export of Agricultural Commodities",
    image: "/images/export-agri.jpg",
    overview:
      "KH AGRICONNECT facilitates the export of Indian agricultural produce by ensuring quality compliance, packaging, and buyer connections.",
    whyItMatters:
      "India produces world-class crops, but only a fraction reaches international markets. We help bridge that gap.",
    whoItsFor: [
      "Farmers with surplus or export-grade produce",
      "FPOs aiming for global reach",
      "Government export schemes (APEDA, etc.)",
    ],
    howItWorks:
      "We guide producers on export standards, conduct quality checks, arrange certifications, and link them with overseas buyers.",
  },
];
