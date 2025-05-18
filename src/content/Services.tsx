import PICTURE1 from '../assets/Picture1.png'
import PICTURE2 from '../assets/Picture2.png'
import PICTURE3 from '../assets/Picture3 (2).png'
import PICTURE4 from '../assets/picture4 (2).png'
import PICTURE5 from '../assets/Picture5 (2).png'
import PICTURE6 from '../assets/Picture6.png'
import PICTURE7 from '../assets/Picture7.png'


export interface Service {
  id: number;
  title: string;
  image: string;
  tagline : string;
  overview: string;
  whyItMatters: string;
  whoItsFor: string[];
  howItWorks: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Custom hiring services of all agricultural machineries ",
    image: PICTURE1,
    tagline:"Empowering farmers with access to modern tools without the burden of ownership.",
    overview:
      "KH AGRICONNECT enables farmers to rent high-quality farm equipment on a need basis, helping them reduce capital expenditure and increase operational efficiency.",
    whyItMatters:
      "Small and marginal farmers often cannot afford advanced equipment. Our service democratizes access to modern mechanization, increasing productivity and reducing labor dependency.",
    whoItsFor: [
      "Community-Based Farmer Groups— Informal collectives at village or cluster level.",
      "FPOs and Agricultural NGOs— Registered groups supported by government or non-profits for collective farming and market access.",
      "Large-Scale Individual Farmers— Farmers with extensive land and mechanized operations.",
      "Aggregated Small and Marginal Farmers — Smallholders grouped to manage atleast 20 acres collectively.",
      "Agri-Entrepreneurs with Multi-Farm Operations — Individuals or firms managing several farms, often via contract farming",
    ],
    howItWorks:
      "Farmers can book equipment all agricultural equipment via mobile, web, or local agents. We ensure timely delivery and operator support",
  },
  {
    id: 2,
    title: "Contract Farming of lands with area of minimum 25 acres",
    image: PICTURE2,
    tagline :"Collaborative farming for assured returns and sustainable land use.",
    overview:
      "We offer structured and secure contract farming models that incorporate mechanized cultivation of suitable crops, tailored to the specific area and resource availability. Our approach ensures assured returns for landowners and optimized, consistent production for buyers.",
    whyItMatters:
      "Unutilized or mismanaged land leads to revenue loss. Our contract farming brings in technology, best practices, and assured returns.",
    whoItsFor: [
      "Landowners seeking income from idle farmland",
      "Agribusinesses looking for assured supply",
      "Institutions managing large plots",
    ],
    howItWorks:
      "We enter a legal agreement with the landowner. KH AGRICONNECT provides end-to-end operations including crop planning and input management as well as labor.",
  },
  {
    id: 3,
    title: "Training farmers on present and futuristic machines",
    image: PICTURE3,
    tagline:"Equipping rural youth and farmers with future-ready agri-tech skills.",
    overview:
      "We offer short-term and long-term training programs focused on emerging agricultural technologies, farm machinery operations, and digital farming.",
    whyItMatters:
      "The future of farming is high-tech. Without skilled manpower, India risks falling behind in smart agriculture adoption.",
    whoItsFor: [
      "Rural youth",
      "Aspiring agri-preneurs",
      "FPO and NGO staffs as well as machinery operators",
    ],
    howItWorks:
      "Training is delivered via workshops, live demos, simulator tools, and hands-on sessions in collaboration with industry partners and universities.",
  },
  {
    id: 4,
    title: "Consultancy services for appropriate agricultural machineries",
    image: PICTURE4,
    tagline:"Guiding farmers and agri-entrepreneurs to choose the right tools for maximum yield.",
    overview:
      "KH agriconnect  assist individuals in selecting the most suitable machinery for specific tasks that require mechanized solutions",
    whyItMatters:
      "Wrong equipment choices lead to losses, downtime, and low productivity. Our advisory ensures every rupee spent delivers results.",
    whoItsFor: [
      "Individual progressive farmers",
      "Agri- startups",
      "FPOs and NGOs",
    ],
    howItWorks:
      "Our consultancy offers expert guidance in selecting the right machinery based on farmer needs, along with regular on-ground inspections to ensure effective implementation.",
  },
  {
    id: 5,
    title: "Custom equipment design and development as per the farmer requirement",
    image: PICTURE5,
    tagline:"Tailor-made innovations to solve real farmer problems.",
    overview:
      "We develop custom machinery solutions when standard equipment doesn't fit unique farm needs, and also provide necessary modifications to existing commercial machines as per farmer specifications.",
    whyItMatters:
      "Many commercially available machines do not perform efficiently across all regions due to local variations. To ensure optimal performance, selected machines are customized with necessary modifications. Indian farms often require context-specific tools, as imported machinery may not suit local farming conditions",
    whoItsFor: [
      "Progressive farmers facing unique challenges",
      "Research institutions and KVKs",
      "NGOs working in difficult geographies",
    ],
    howItWorks:
      "We identify the problem, design and develop a functional prototype, conduct field testing, and facilitate local manufacturing for scalable adoption",
  },
  {
    id: 6,
    title: "Buyers / sellers sourcing gateway",
    image: PICTURE6,
    tagline:"Connecting producers to markets.",
    overview:
      "KH AgriConnect acts as a trusted transparency platform that connects verified sellers with genuine buyers of agricultural produce, machinery, and agri-inputs. We ensure fair pricing and help farmers access the Minimum Support Price (MSP) wherever applicable.",
    whyItMatters:
      "Middlemen often reduce farmer profits. A trusted platform ensures farmers get the right price and buyers get assured quality.",
    whoItsFor: [
      "Farmers and Farmer Producer Organizations (FPOs)",
      "NGOs working with farming communities",
      "Institutional buyers, exporters, and agri-traders",
      "Agri-input companies",
    ],
    howItWorks:
      "We aggregate listings of produce and agri-resources, verify both parties, facilitate negotiations, and offer logistics support if needed. Farmers and stakeholders can connect with KH AgriConnect through a simple phone call or by enrolling via our official website.",
  },
  {
    id: 7,
    title: "Purchase of export quality Agricultural commodities",
    image: PICTURE7,
    tagline:"Procuring Premium Indian Produce for International Buyers.",
    overview:
      "KH AgriConnect ensures timely procurement of export-quality agricultural produce directly from farmers. By bridging the gap between farms and global markets, we reduce post-harvest losses and enhance farmer incomes.",
    whyItMatters:
      "A significant portion of export-quality agricultural produce goes to waste due to delayed actions, poor post-harvest handling, and inadequate cold storage infrastructure. KH AgriConnect addresses this challenge by ensuring timely procurement of premium agri-products, preserving their quality and maximizing their export potential",
    whoItsFor: [
      "Organic Farmers",
      "Producers of Export-Grade Agricultural Commodities",
      "GHigh-Value Commercial Crop Growers",
    ],
    howItWorks:
      "KH Agriconnect collaborates with farmers to identify export-quality produce at the right time. We ensure timely procurement and maintain quality through efficient logistics and cold storage. The produce is then linked to international markets, reducing waste and maximizing value.",
  },
];