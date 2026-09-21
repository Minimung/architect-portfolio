export type ProjectCategory =
  | "landscape-intern"
  | "landscape-planning"
  | "urban-planning"
  | "construction-drawing";

export type ProjectTag =
  | "architecture"
  | "landscape"
  | "interiors"
  | "urban"
  | "construction"
  | "projects";

export interface Project {
  slug: string;
  title: { th: string; en: string };
  category: ProjectCategory;
  tags: ProjectTag[];
  coverImage?: string;
  year: number;
  location: { th: string; en: string };
  role: { th: string; en: string };
  summary: { th: string; en: string };
  description: { th: string; en: string };
  featured?: boolean;
}

export const categoryLabels: Record<ProjectCategory, { th: string; en: string }> = {
  "landscape-intern": {
    th: "นักศึกษาฝึกงานภูมิสถาปัตยกรรม",
    en: "Landscape Architect Student Intern",
  },
  "landscape-planning": {
    th: "ออกแบบภูมิทัศน์และผังพื้นที่",
    en: "Landscape Design and Site Planning",
  },
  "urban-planning": {
    th: "ผังเมือง",
    en: "Urban Planning Architecture",
  },
  "construction-drawing": {
    th: "แบบก่อสร้าง",
    en: "Construction Drawing",
  },
};

export const tagLabels: Record<ProjectTag, { th: string; en: string }> = {
  architecture: { th: "สถาปัตยกรรม", en: "Architecture" },
  landscape: { th: "ภูมิสถาปัตยกรรม", en: "Landscape" },
  interiors: { th: "ตกแต่งภายใน", en: "Interiors" },
  urban: { th: "ผังเมือง", en: "Urban" },
  construction: { th: "งานก่อสร้าง", en: "Construction" },
  projects: { th: "ผลงาน", en: "Projects" },
};

export const projects: Project[] = [
  {
    slug: "koh-phi-phi-resort",
    title: { th: "รีสอร์ทเกาะพีพี", en: "The Resort Hotel on Koh Phi Phi" },
    category: "landscape-intern",
    tags: ["architecture", "landscape", "projects"],
    coverImage: "/images/koh-phi-phi-resort/cover.webp",
    year: 2023,
    location: { th: "กระบี่, ประเทศไทย", en: "Krabi, Thailand" },
    role: { th: "ฝึกงานภูมิสถาปัตยกรรม", en: "Landscape Architecture Intern" },
    summary: {
      th: "รีสอร์ทริมหน้าผาที่ออกแบบภูมิทัศน์แบบขั้นบันไดให้กลมกลืนกับสภาพเนินเขาเดิม",
      en: "A clifftop resort with a terraced landscape design that follows the natural slope of the hillside.",
    },
    description: {
      th: "งานนี้เป็นส่วนหนึ่งของการฝึกงานที่ได้ร่วมออกแบบภูมิทัศน์ของรีสอร์ทบนเกาะพีพี โจทย์หลักคือการวางผังพืชพรรณและทางเดินให้ลดการปรับหน้าดินเดิมให้น้อยที่สุด ใช้โครงสร้างไม้แบบขั้นบันไดเพื่อรักษาต้นไม้ใหญ่ที่มีอยู่และเปิดวิวทะเลจากทุกระดับ",
      en: "Part of an internship contributing to the landscape design for a resort on Koh Phi Phi. The brief focused on planting and pathway layouts that minimize regrading of the original terrain. A stepped timber structure preserves existing mature trees while opening sea views from every level.",
    },
    featured: true,
  },
  {
    slug: "pier-restaurant",
    title: { th: "ร้านอาหารริมท่าเรือ", en: "The Pier Restaurant" },
    category: "landscape-planning",
    tags: ["architecture", "interiors", "projects"],
    year: 2022,
    location: { th: "ภูเก็ต, ประเทศไทย", en: "Phuket, Thailand" },
    role: { th: "ผู้ช่วยออกแบบผังพื้นที่", en: "Site Planning Assistant" },
    summary: {
      th: "ร้านอาหารริมชายหาดที่วางผังพื้นที่กลางแจ้งให้เชื่อมต่อกับเส้นทางเดินสาธารณะริมน้ำ",
      en: "A beachfront restaurant with outdoor seating planned to connect naturally with the public waterfront walkway.",
    },
    description: {
      th: "โครงการนี้เน้นการออกแบบผังพื้นที่ให้พื้นที่นั่งกลางแจ้งของร้านเชื่อมต่อกับทางเดินสาธารณะริมน้ำอย่างเป็นธรรมชาติ โดยใช้ระดับพื้นและวัสดุปูพื้นเป็นตัวกำหนดขอบเขตแทนรั้วหรือกำแพง ทำให้บรรยากาศเปิดโล่งแต่ยังคงความเป็นส่วนตัวให้ลูกค้า",
      en: "This project focused on site planning that lets the restaurant's outdoor seating flow naturally into the public waterfront path. Floor level changes and paving materials define boundaries instead of fences or walls, keeping the atmosphere open while still giving guests a sense of privacy.",
    },
    featured: true,
  },
  {
    slug: "canal-district-masterplan",
    title: { th: "ผังแม่บทย่านคลอง", en: "Canal District Masterplan" },
    category: "urban-planning",
    tags: ["urban", "landscape", "projects"],
    year: 2021,
    location: { th: "อยุธยา, ประเทศไทย", en: "Ayutthaya, Thailand" },
    role: { th: "ผู้ช่วยที่ปรึกษาผังเมือง", en: "Urban Design Assistant" },
    summary: {
      th: "ผังแม่บทฟื้นฟูย่านริมคลองประวัติศาสตร์ให้เป็นพื้นที่สาธารณะและการค้าขนาดย่อม",
      en: "A revitalization masterplan turning a historic canal-side district into public space and small-scale commerce.",
    },
    description: {
      th: "โครงการนี้ทำงานร่วมกับชุมชนท้องถิ่นเพื่อฟื้นฟูย่านริมคลองที่เคยเป็นศูนย์กลางการค้าในอดีต แผนแม่บทเสนอทางเดินริมน้ำ พื้นที่ตลาดชุมชน และแนวทางการอนุรักษ์อาคารเก่า โดยยังคงเปิดพื้นที่ให้เกิดกิจกรรมทางเศรษฐกิจใหม่ ๆ ได้",
      en: "This project worked closely with the local community to revive a canal-side district that was once a historic trading hub. The masterplan proposes a waterfront walkway, a community market space, and heritage conservation guidelines, while leaving room for new economic activity.",
    },
    featured: true,
  },
  {
    slug: "hillside-villa-construction-set",
    title: { th: "แบบก่อสร้างวิลล่าเนินเขา", en: "Hillside Villa Construction Set" },
    category: "construction-drawing",
    tags: ["construction", "architecture"],
    year: 2024,
    location: { th: "เชียงใหม่, ประเทศไทย", en: "Chiang Mai, Thailand" },
    role: { th: "ผู้จัดทำแบบก่อสร้าง", en: "Construction Drawing Preparation" },
    summary: {
      th: "ชุดแบบก่อสร้างและรายละเอียดงานฐานรากสำหรับวิลล่าที่ตั้งอยู่บนพื้นที่ลาดเอียง",
      en: "A full construction drawing set and foundation details for a villa built on sloped terrain.",
    },
    description: {
      th: "งานนี้ครอบคลุมการจัดทำแบบก่อสร้างชุดสมบูรณ์ ตั้งแต่แบบฐานราก แบบโครงสร้างกันดินสำหรับพื้นที่ลาดเอียง ไปจนถึงรายละเอียดงานปูพื้นภายนอกและระบบระบายน้ำรอบอาคาร เพื่อให้ทีมก่อสร้างนำไปใช้อ้างอิงหน้างานได้จริง",
      en: "This work covered a complete construction drawing package — from foundation plans and retaining structure details for the sloped site, to exterior paving details and the surrounding drainage system — prepared for direct use on site by the construction team.",
    },
    featured: false,
  },
  {
    slug: "riverside-park-planting-plan",
    title: { th: "ผังปลูกสวนสาธารณะริมน้ำ", en: "Riverside Park Planting Plan" },
    category: "landscape-planning",
    tags: ["landscape", "urban"],
    year: 2023,
    location: { th: "กรุงเทพฯ, ประเทศไทย", en: "Bangkok, Thailand" },
    role: { th: "ผู้ช่วยออกแบบภูมิทัศน์", en: "Landscape Design Assistant" },
    summary: {
      th: "ผังปลูกพืชพรรณสำหรับสวนสาธารณะริมแม่น้ำ เน้นพันธุ์ไม้ท้องถิ่นที่ทนน้ำท่วมตามฤดูกาล",
      en: "A planting plan for a riverside public park, favoring native species tolerant of seasonal flooding.",
    },
    description: {
      th: "โครงการนี้ศึกษาพันธุ์ไม้ท้องถิ่นที่เหมาะกับพื้นที่ริมแม่น้ำที่มีน้ำท่วมตามฤดูกาล แล้วจัดทำผังปลูกที่แบ่งโซนตามระดับความชื้นของดิน เพื่อให้สวนสาธารณะดูแลรักษาง่ายในระยะยาวและยังคงร่มเงาให้ผู้ใช้งานได้ตลอดปี",
      en: "This project researched native plant species suited to a riverside site with seasonal flooding, then produced a planting plan zoned by soil moisture level — keeping long-term maintenance low while providing shade for park visitors year-round.",
    },
    featured: false,
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((project) => project.featured);
}

export function getProjectsByCategory(category: ProjectCategory) {
  return projects.filter((project) => project.category === category);
}
