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
  title: { th: string; en: string; zh: string };
  category: ProjectCategory;
  tags: ProjectTag[];
  coverImage?: string;
  gallery?: string[];
  year: number;
  location: { th: string; en: string; zh: string };
  role: { th: string; en: string; zh: string };
  summary: { th: string; en: string; zh: string };
  description: { th: string; en: string; zh: string };
  featured?: boolean;
}

export const categoryLabels: Record<
  ProjectCategory,
  { th: string; en: string; zh: string }
> = {
  "landscape-intern": {
    th: "นักศึกษาฝึกงานภูมิสถาปัตยกรรม",
    en: "Landscape Architect Student Intern",
    zh: "景观建筑实习生",
  },
  "landscape-planning": {
    th: "ออกแบบภูมิทัศน์และผังพื้นที่",
    en: "Landscape Design and Site Planning",
    zh: "景观设计与场地规划",
  },
  "urban-planning": {
    th: "ผังเมือง",
    en: "Urban Planning Architecture",
    zh: "城市规划建筑",
  },
  "construction-drawing": {
    th: "แบบก่อสร้าง",
    en: "Construction Drawing",
    zh: "施工图",
  },
};

// Optional cover photo per category, shown on the Home page category grid.
// Leave a category out (or set it to undefined) to keep the flat color block.
export const categoryImages: Partial<Record<ProjectCategory, string>> = {
  "landscape-intern": "/images/resort-chiangmai/01.webp",
};

export const tagLabels: Record<ProjectTag, { th: string; en: string; zh: string }> = {
  architecture: { th: "สถาปัตยกรรม", en: "Architecture", zh: "建筑" },
  landscape: { th: "ภูมิสถาปัตยกรรม", en: "Landscape", zh: "景观" },
  interiors: { th: "ตกแต่งภายใน", en: "Interiors", zh: "室内设计" },
  urban: { th: "ผังเมือง", en: "Urban", zh: "城市" },
  construction: { th: "งานก่อสร้าง", en: "Construction", zh: "施工" },
  projects: { th: "ผลงาน", en: "Projects", zh: "作品" },
};

export const projects: Project[] = [
  //intern project 1
  {
    slug: "shanxi-huangcheng-xiangfu",
    title: {
      th: "โครงการอุทยานวัฒนธรรมและการท่องเทียวเชิงนิเวศอุตสาหกรรมนําส้มสายชู หวงเฉิงเซียงฝู มณฑลซานซี ระยะพัฒนาและปรับรายละเอียดแนวคิดการออกแบบ",
      en: "Shanxi huangcheng xiangfu vinegar culture and ecotourism experience park",
      zh: "山西皇城相府醋文化生态旅游体验园",
    },
    category: "landscape-intern",
    tags: ["architecture", "landscape", "projects"],
    coverImage: "/images/resort-chiangmai/01.webp",
    year: 2023,
    location: {
      th: "หวงเฉิงเซียงฝู, มณฑลซานซี, ประเทศจีน",
      en: "HuangCheng, Xiangfu, China",
      zh: "中国山西省皇城相府",
    },
    role: {
      th: "ฝึกงานภูมิสถาปัตยกรรม",
      en: "Landscape Architecture Intern",
      zh: "景观建筑实习生",
    },
    summary: {
      th: "โครงการออกแบบโรงงานน้ำส้มสายชู ออกแบบแนวคิดพื้นที่สีเขียวรอบอุทยาน ให้เข้าบริบทของพื้นที่",
      en: "Integrating green spaces with the site and surrounding environment.",
      zh: "为醋厂周边设计绿地概念，使其与场地环境相融合，并加强与周边环境的联系。",
    },
    description: {
      th: "งานนี้เป็นส่วนหนึ่งของการฝึกงานที่ได้ร่วมออกแบบภูมิทัศน์ของโรงงานน้ำส้มสายชู แนวคิดการออกแบบ (设计概念) “大地酿造”– “การบ่มเพาะจากผืนแผ่นดิน” (BREWED BY THE EARTH) ใช้ผืนแผ่นดินเป็นรากฐาน และใช้กาลเวลาเป็นแกนหลัก เพื่อถ่ายทอดเอกลักษณ์ของภูมิสถานและเสน่ห์ของนําส้มสายชูซานซี การเติบโตของพืชและการดํารงอยู่ของมนุษย์ล้วนเป็นส่วนหนึ่งของวัฏจักรธรรมชาติ ทั้งสองต่างพึ่งพา เกื้อกูลและเชื่อมโยงซึ่งกันและกัน การออกแบบจึงใช้พืชพรรณเป็นสื่อในการสะท้อนการเปลี่ยนแปลงของกาลเวลา การเติบโต และการสืบต่อของชีวิต",
      en: "As part of my internship, I contributed to the landscape design of a vinegar factory in Shanxi. The concept, “Brewed by the Earth,” draws from the relationship between land, time, and nature—reflecting the cultural identity of Shanxi vinegar through the landscape. Vegetation becomes a medium for expressing growth, seasonal change, and the continuity of life, creating a landscape that connects people, nature, and the character of the site.",
      zh: "本项目是实习期间参与的醋厂景观设计。设计概念“大地酿造”以土地为根基、以时间为主线，传达出山西醋文化与场地风土的独特魅力。植物的生长与人的存在皆是自然循环的一部分，二者相互依存、彼此联系。设计以植物作为媒介，反映时间的流转、生命的成长与延续。",
    },
    featured: true,
  },
  //intern project 2
  {
    slug: "bu-tiange-winery",
    title: {
      th: "ข้อเสนอการออกแบบสถาปัตยกรรมสำหรับโรงบ่มไวน์ Bu Tiange",
      en: "Architectural design proposal for bu tiange winery",
      zh: "步天歌酒庄建筑设计（体验式工厂）",
    },
    category: "landscape-intern",
    tags: ["architecture", "landscape", "projects"],
    coverImage: "/images/resort-chiangmai/01.webp",
    year: 2024,
    location: {
      th: "เทือกเขาเฮ่อหลาน, หนิงเซี่ย, ประเทศจีน",
      en: "Helan Mountain, Ningxia, China",
      zh: "中国宁夏贺兰山",
    },
    role: {
      th: "แนวคิดการออกแบบ • วางผังพื้นที่ • ออกแบบพืชพรรณ • จัดวางพืชพรรณ • ผังบริเวณ",
      en: "Design Concept • Spatial Planning • Planting Design • Vegetation Layout • Site Planning",
      zh: "设计概念 • 空间规划 • 植物设计 • 植物配置 • 场地规划"
    },
    summary: {
      th: "การวางผังและออกแบบโรงบ่มไวน์ผสมผสานปรัชญาเต๋าเข้ากับธรรมชาติ เชื่อมโยงผู้คน วัฒนธรรม และพื้นที่ เพื่อสร้างประสบการณ์แห่งความสงบ",
      en: "Master Planning & Experiential Winery Design Blending Taoist philosophy with nature to connect people, culture, and space through a tranquil experience.",
      zh: "葡萄酒庄园规划与体验式设计融合道家哲学与自然，连接人与文化、空间，营造宁静的体验。",
    },
    description: {
      th: "BU TIANGE WINERY เป็นโครงการออกแบบพื้นที่และภูมิทัศน์สำหรับโรงบ่มไวน์เชิงประสบการณ์ โดยได้รับแรงบันดาลใจจากปรัชญาเต๋าและแนวคิดความกลมกลืนระหว่างมนุษย์กับธรรมชาติ การออกแบบพัฒนา 2 แนวคิดหลัก ได้แก่ Rhythm of the Moon และ Escape in the Garden โดยใช้แสง พื้นที่เปิด และ Softscape เพื่อเชื่อมโยงสถาปัตยกรรม ไร่องุ่น และประสบการณ์ของผู้ใช้งานให้เป็นหนึ่งเดียว",
      en: "BU TIANGE WINERY is an experiential winery spatial and landscape design project inspired by Taoist philosophy and the harmony between humans and nature. Two key concepts, Rhythm of the Moon and Escape in the Garden, explore the relationship between architecture, vineyards, and landscape through natural light, open spaces, and softscape.",
      zh: "步天歌酒庄是一个以体验式酒庄为核心的空间与景观设计项目，灵感来源于道家哲学及人与自然和谐共生的理念。设计发展出“月之韵律（Rhythm of the Moon）”与“园中逸境（Escape in the Garden）”两个核心概念，并通过自然光、开放空间及软景设计，将建筑、葡萄园与使用者体验融为一体。",
    },
    featured: false,
  },
  //landscape-planning 1
  {
    slug: "resort-chiangmai",
    title: {
      th: "โครงการออกแบบรีสอร์ทเชียงใหม่",
      en: "Resort Chiang Mai",
      zh: "清迈度假村设计项目",
    },
    category: "landscape-planning",
    tags: ["architecture", "landscape", "projects"],
    coverImage: "/images/resort-chiangmai/01.webp",
    year: 2024,
    location: { th: "เชียงใหม่, ประเทศไทย", en: "Chiang Mai, Thailand", zh: "泰国 清迈" },
    role: { th: "ออกแบบภูมิทัศน์และวางผัง", en: "Landscape Design & Planning", zh: "景观设计与规划" },
    gallery: [
      "/images/shanxi-huangcheng-xiangfu/01.webp",
      "/images/shanxi-huangcheng-xiangfu/01.webp",
    ],
    summary: {
      th: "แรงบันดาลใจจากดอกเสี้ยวและ “เวียง” ผสานธรรมชาติและวัฒนธรรมล้านนาผ่านภูมิทัศน์ที่เปลี่ยนแปลงตามฤดูกาล",
      zh: "以羊蹄甲花与“城”的概念为灵感，融合自然与兰纳文化，营造随季节变化的景观体验。",
      en: "Inspired by the Bauhinia flower and “Wiang,” integrating nature and Lanna culture through a seasonal landscape.",
    },
    description: {
      th: "โครงการรีสอร์ทเชียงใหม่ได้รับแรงบันดาลใจจาก “ดอกเสี้ยว” ภายใต้แนวคิด “ความหลากหลายที่รวมเป็นหนึ่ง” สะท้อนความสัมพันธ์ระหว่างธรรมชาติ วิถีชีวิต และวัฒนธรรมล้านนา แนวคิดของ “เวียง” ถูกนำมาตีความใหม่ให้เป็นโครงสร้างหลักของรีสอร์ทร่วมสมัย โดยผังแม่บทพัฒนาจากโครงสร้างของดอกเสี้ยว แกนกลางเปรียบเสมือนเกสร ทำหน้าที่เป็นหัวใจของโครงการและเชื่อมต่อไปยังพื้นที่พักอาศัยแต่ละ “คุ้ม” ที่กระจายตัวออกคล้ายกลีบดอก ระบบทางสัญจรได้รับแรงบันดาลใจจากเส้นใบ เพื่อสร้างการเคลื่อนไหวที่ต่อเนื่องและเป็นธรรมชาติ การออกแบบพืชพรรณใช้แนวคิด “Rhythm of Nature” และ “From Flower to Wiang” โดยเลือกใช้พืชท้องถิ่นและพรรณไม้ที่มีช่วงเวลาออกดอกแตกต่างกัน เพื่อสร้างภูมิทัศน์ที่เปลี่ยนแปลงตามฤดูกาล พร้อมนำสภาพภูมิประเทศเดิมมาเป็นองค์ประกอบสำคัญในการกำหนดผัง การสัญจร ลำดับพื้นที่ และประสบการณ์ของผู้ใช้งาน",
      en: "Resort Chiang Mai is inspired by the Bauhinia flower and the concept of “Diversity United as One,” reflecting the relationship between nature, local lifestyle, and Lanna culture. The traditional idea of “Wiang” is reinterpreted as the spatial framework of a contemporary resort. The master plan draws from the biological structure of the Bauhinia flower, with a central axis representing the stamen and acting as the heart of the project, connecting individual accommodation clusters or “Khum” that spread outward like petals. Circulation paths are inspired by the branching veins of Bauhinia leaves, creating a continuous and natural movement throughout the site. The planting design follows the concepts of “Rhythm of Nature” and “From Flower to Wiang,” using native plants and species with different flowering periods to create a dynamic landscape that changes with the seasons. The existing topography is integrated as a key design element, shaping the master plan, circulation, spatial hierarchy, and overall user experience.",
      zh: "清迈度假村项目的设计灵感来源于羊蹄甲花，并以“多元共生，融为一体”为核心理念，体现自然、当地生活方式与兰纳文化之间的联系。传统“Wiang（城邦）”概念被重新诠释为当代度假村的空间结构。总体规划借鉴羊蹄甲花的生物形态，以中央轴线象征花蕊，作为项目的核心，并连接向外展开如花瓣般的各个住宿组团“Khum”。交通与步行系统则受到羊蹄甲叶脉自然延伸形态的启发，营造连续、自然且流畅的空间体验。植物设计以“Rhythm of Nature（自然的韵律）”和“From Flower to Wiang（从花到城邦）”为核心，通过选用本地植物及不同花期的植物，使景观随季节变化呈现不同的空间氛围。同时，项目充分利用原有地形，将其作为总体规划、交通组织、空间层级及使用者体验的重要设计基础。"
    },
    featured: true,
  },
  //landscape-planning 2
  {
    slug: "wat-phra-that-doi-saket",
    title: { th: "โครงการออกแบบวัดพระธาตุดอยสะเก็ด", en: "Wat Phra That Doi Saket Design", zh: "帕塔多伊萨克寺设计项目" },
    category: "landscape-planning",
    tags: ["architecture", "landscape", "projects"],
    coverImage: "/images/resort-chiangmai/01.webp",
    year: 2021,
    location: { th: "ดอยสะเก็ด, เชียงใหม่, ประเทศไทย", en: "Doi Saket, Chiang Mai, Thailand", zh: "泰国, 清迈府, 多伊萨克" },
    role: { th: "ออกแบบโซนตลาดโยนกและพืชพรรณ", en: "Yonok Market Zone & Planting Design", zh: "约诺克市场区域与植物设计" },
    summary: {
      th: "",
      en: "",
      zh: "",
    },
    description: {
      th: "โครงการออกแบบวัดพระธาตุดอยสะเก็ดพัฒนาขึ้นจากแนวคิด “ฉัพพรรณรังสี” หรือรัศมี 6 ประการของพระพุทธเจ้า โดยนำแสงธรรมชาติมาเป็นองค์ประกอบหลักในการสร้างประสบการณ์ทางสถาปัตยกรรม ช่องเปิดที่จัดวางอย่างเป็นจังหวะทำให้แสงและเงาเปลี่ยนแปลงไปตลอดทั้งวัน สื่อถึงการแผ่ขยายของปัญญาและพระธรรมไปในทุกทิศทาง การออกแบบเชื่อมโยงแสง วัสดุ พื้นที่ และเส้นทางสัญจร เพื่อสร้างช่วงเวลาแห่งความสงบ การพิจารณา และการตระหนักรู้ สถาปัตยกรรมจึงเปรียบเสมือน “ภาชนะแห่งแสง” ที่ถ่ายทอดความหมายทางจิตวิญญาณให้กลายเป็นประสบการณ์ที่ผู้ใช้งานสามารถสัมผัสได้ผ่านแสง พื้นที่ และเวลา",
      en: "Wat Phra That Doi Saket is designed around the concept of “Chapphaphannaransi,” the six radiant rays of the Buddha. Natural light becomes a key architectural element, with alternating openings creating an evolving rhythm of light and shadow throughout the day. This movement represents the spreading of wisdom and Dharma in all directions while guiding visitors through moments of stillness, contemplation, and mindful movement. Light, materials, spatial sequence, and circulation are integrated to connect spiritual meaning with human experience. The architecture becomes a “Vessel of Light,” transforming intangible sacredness into a tangible spatial experience through the perception of light, space, and time.",
      zh: "帕塔多伊萨克寺的设计以佛陀“六色光（Chapphaphannaransi）”为核心概念，将自然光作为塑造建筑空间体验的重要元素。通过有节奏地设置建筑开口，使光与影随着时间不断变化，象征智慧与佛法向四面八方传播。空间设计结合自然光、材料、空间序列与流线，引导使用者在行进过程中体验宁静、冥想与觉知。建筑因此被赋予“光之容器”的意义，将无形的神圣精神转化为可被感知的空间体验，并通过光、空间与时间建立人与佛教精神之间的联系。"
    },
    featured: false,
  },
  //landscape-planning 3
  {
    slug: "nation-forest-park",
    title: {
      th: "โครงการออกแบบอุทยานป่าไม้แห่งชาติ จังหวัดแพร่",
      en: "National Forest Park Design",
      zh: "国家森林公园设计项目"
    },
    category: "landscape-planning",
    tags: ["architecture", "landscape", "projects"],
    coverImage: "/images/koh-phi-phi-resort/cover.webp",
    year: 2021,
    location: { th: "อำเภอเมืองแพร่ จังหวัดแพร่ ประเทศไทย", en: "Mueang Phrae, Phrae, Thailand", zh: "泰国, 帕府, 帕府市" },
    role: { th: "ออกแบบภูมิทัศน์ วางผังพื้นที่ และพืชพรรณ", en: "Landscape Planning & Planting Design", zh: "景观规划与植物设计" },
    summary: {
      th: "",
      en: "",
      zh: "",
    },
    description: {
      th: "โครงการ National Forest Park จังหวัดแพร่ มุ่งสร้างพื้นที่ที่เชื่อมโยงธรรมชาติ วัฒนธรรม และประสบการณ์ของผู้ใช้งาน ผ่านแนวคิด “The Carved Trail” ซึ่งใช้เส้นทางและงานประติมากรรมไม้แกะสลักเป็นสื่อในการนำผู้คนเรียนรู้และสำรวจพื้นที่ โครงการแบ่งออกเป็น 3 โซนที่ได้รับแรงบันดาลใจจากภาษาและวัฒนธรรมล้านนา สะท้อนอัตลักษณ์ของจังหวัดแพร่และแนวคิด “การกลับบ้าน” สู่ดินแดนแห่งไม้สัก ผังพื้นที่พัฒนาตามเส้นทางเดิมของสวนรุกขชาติเพื่อรักษาระบบนิเวศ พร้อมเพิ่มพื้นที่สำนักงาน นิทรรศการ เวิร์กช็อป เส้นทางวิ่งและเดิน รวมถึง Skywalk ที่ทำหน้าที่เป็นแลนด์มาร์กและพื้นที่เรียนรู้ธรรมชาติในระดับเรือนยอดไม้ การออกแบบพืชพรรณเน้นการอนุรักษ์พันธุ์ไม้พื้นถิ่นและพืชสมุนไพรเดิม พร้อมสนับสนุนช่างฝีมือท้องถิ่น งานไม้ และกิจกรรมชุมชน เพื่อสร้างพื้นที่เรียนรู้ แลกเปลี่ยนองค์ความรู้ และส่งเสริมความยั่งยืนทั้งด้านสังคม วัฒนธรรม และเศรษฐกิจ",
      en: "The National Forest Park project in Phrae is designed as a landscape that connects nature, culture, and user experience through the concept of “The Carved Trail,” where carved wooden sculptures guide visitors through a journey of learning, exploration, and discovery. The project is organized into three zones inspired by Lanna language and culture, reflecting the identity of Phrae and the idea of “returning home” to the land of teak. The spatial layout follows the existing arboretum pathways to preserve the site's ecological character while introducing new functions such as offices, exhibition spaces, workshops, running and walking routes, and a Skywalk that serves as a new landmark and canopy-level learning experience. The planting design focuses on preserving native and medicinal plants, while the project also supports local artisans, woodworkers, community activities, and knowledge exchange to promote long-term social, cultural, ecological, and economic sustainability.",
      zh: "帕府国家森林公园项目旨在通过“The Carved Trail（雕刻之径）”的设计概念，将自然、文化与使用者体验连接起来。项目利用木雕艺术作为空间导引，引导游客在游览过程中进行学习、探索与发现。整体空间划分为三个区域，其概念来源于兰纳语言与文化，并通过“归乡”的主题体现帕府作为柚木之乡的自然、历史与文化特色。总体规划沿用现有植物园的道路系统，以保护原有生态环境，同时引入办公、展览、工作坊、跑步与步行路径等新功能。Skywalk 被打造为项目的新地标，使游客能够从树冠层高度体验并学习自然环境。植物设计强调保留原有乡土植物与药用植物，同时结合当地工匠、木工技艺、社区活动与知识交流，促进项目在社会、文化、生态与经济层面的可持续发展。"
    },
    featured: false,
  },
  //landscape-planning 4
  {
    slug: "gpo-botanic-garden",
    title: {
      th: "โครงการออกแบบสวนสมุนไพร องค์การเภสัชกรรม",
      en: "The Herbal Garden (GPO Botanic Garden)",
      zh: "政府制药组织草药植物园设计项目"
    },
    category: "landscape-planning",
    tags: ["architecture", "landscape", "projects"],
    coverImage: "/images/koh-phi-phi-resort/cover.webp",
    year: 2021,
    location: { th: "ชลบุรี, ประเทศไทย", en: "Chonburi, Thailand", zh: "泰国, 春武里府" },
    role: { th: "ออกแบบภูมิทัศน์ วางผังพื้นที่ และออกแบบพืชพรรณ", en: "Landscape Planning & Planting Design", zh: "景观规划与植物设计" },
    summary: {
      th: "",
      en: "",
      zh: "",
    },
    description: {
      th: "โครงการสวนสมุนไพรขององค์การเภสัชกรรมได้รับแรงบันดาลใจจากความสัมพันธ์ระหว่าง “ดิน น้ำ ภูเขา และวิถีชีวิต” โดยนำภูมิปัญญาท้องถิ่นด้านสมุนไพร การแพทย์พื้นบ้าน เครื่องปั้นดินเผา ความเชื่อ และองค์ความรู้ดั้งเดิมมาตีความเป็นภูมิทัศน์ร่วมสมัย แนวคิด “Earth Brow” สะท้อนสายสัมพันธ์ระหว่างผู้คน ผืนดิน และวัฒนธรรม ผ่านการแปลงรูปทรงของภูมิประเทศ น้ำ และภูเขาให้กลายเป็นเส้นสายและรูปแบบของผัง โครงการแบ่งพื้นที่ออกเป็น 5 โซน เชื่อมต่อกันด้วยเส้นทางที่ชัดเจนและมีจุด Node สำหรับการเปลี่ยนผ่านและกิจกรรมร่วมกัน การจัดวาง Softscape ช่วยสร้างพื้นที่ที่ไหลต่อเนื่อง ขณะที่ Hardscape กำหนดขอบเขตและหน้าที่ของแต่ละพื้นที่ พืชสมุนไพรท้องถิ่นทั้งฤทธิ์ร้อนและฤทธิ์เย็นถูกนำมาใช้เป็นทั้งทรัพยากรทางการแพทย์ วัฒนธรรม และการเรียนรู้ เพื่อถ่ายทอดภูมิปัญญาจากคนรุ่นก่อนและพัฒนาให้พื้นที่เป็นแหล่งเรียนรู้ด้านสมุนไพรและธรรมชาติในอนาคต",
      en: "The Herbal Garden of the Government Pharmaceutical Organization is inspired by the relationship between earth, water, mountains, and traditional ways of life. Local knowledge of herbal medicine, traditional healing, pottery, beliefs, and ancestral wisdom is reinterpreted into a contemporary cultural landscape. The “Earth Brow” concept reflects the deep connection between people, land, and local culture, transforming the forms of terrain, water, and mountains into lines and patterns that guide the overall layout. The project is organized into five zones connected by clear circulation paths and key nodes for interaction and transition. Softscape planting creates flowing spatial experiences, while hardscape elements define functional areas. Local medicinal plants, including both warming and cooling herbs, are preserved and integrated as medical, cultural, and educational resources. The project aims to become a future learning hub where visitors can explore herbal knowledge, traditional practices, and ways of living closely connected to nature.",
      zh: "政府制药组织草药植物园的设计灵感来源于土地、水、山脉与传统生活方式之间的关系。项目将当地草药知识、传统疗愈、陶艺、信仰以及祖传智慧重新诠释为当代文化景观。“Earth Brow（土地之脉）”概念强调人与土地及地方文化之间的深厚联系，并将地形、水体与山脉的形态转化为线条与图案，形成整体规划的设计语言。项目划分为五个主要区域，通过清晰的动线及重要节点连接，为交流、活动与空间转换提供场所。植物软景用于营造连续流动的空间体验，而硬质景观则界定不同功能区域。设计同时保留并运用当地具有温性与凉性特征的药用植物，使其成为医疗、文化及教育资源，并传承长者与传统疗愈者的知识。未来，该项目可发展成为草药与自然学习中心，让访客通过探索、体验与实践，了解与自然紧密相连的传统生活方式。"
    },
    featured: false,
  },
  //urban-planning 1
  {
    slug: "green-liab-duan-public-space",
    title: { th: "โครงการออกแบบพื้นที่สาธารณะใต้ทางด่วนเลียบด่วน", en: "Green (Liab Duan) Expressway Public Space", ch: "曼谷沿高速公路桥下公共空间设计项目" },
    category: "urban-planning",
    tags: ["landscape", "urban"],
    coverImage: "/images/koh-phi-phi-resort/cover.webp",
    year: 2023,
    location: { th: "กรุงเทพมหานคร, ประเทศไทย", en: "Bangkok, Thailand", zh: "泰国, 曼谷" },
    role: { th: "ออกแบบพื้นที่สาธารณะ ภูมิทัศน์ และวางผังพื้นที่", en: "Public Space, Landscape & Spatial Planning", zh: "公共空间、景观与空间规划设计" }, 
    summary: {
      th: "",
      en: "",
      zh: "",
    },
    description: { 
      th: "โครงการ Green (Liab Duan) Expressway Public Space – Zone C: Sport Field พัฒนาพื้นที่ใต้ทางด่วนให้เป็นพื้นที่สาธารณะและชุมชนเพื่อสุขภาพ ภายใต้แนวคิด “Urban Spectrum” ซึ่งสะท้อนความหลากหลายของผู้ใช้งานและกิจกรรม โดยเปลี่ยนพื้นที่ที่เคยถูกละเลยให้เป็น Third Place สำหรับกีฬา สุขภาพ และกิจกรรมของชุมชน การออกแบบให้ความสำคัญกับการเข้าถึงและการเชื่อมต่อระหว่างพื้นที่ พร้อมปรับระดับพื้น ระบบระบายน้ำ พื้นผิวซึมน้ำ และโครงสร้างพื้นฐานสีเขียวเพื่อเพิ่มความปลอดภัยและความยืดหยุ่นของพื้นที่ ระบบจัดการน้ำฝนประกอบด้วย Rain → Slope → Trench → Rain Garden → Underground Tank → Drip Irrigation → Overflow เพื่อช่วยลดน้ำท่วม ปรับปรุงคุณภาพน้ำ และนำน้ำกลับมาใช้กับพื้นที่สีเขียว นอกจากนี้ยังเลือกใช้พืชท้องถิ่นและพืชทนร่ม พร้อมออกแบบพื้นที่อเนกประสงค์เพื่อส่งเสริมการออกกำลังกาย ปฏิสัมพันธ์ของชุมชน และคุณภาพชีวิตในเมือง",  
      en: "Green (Liab Duan) Expressway Public Space – Zone C: Sport Field transforms the under-expressway area into an active health-oriented community space through the concept of “Urban Spectrum.” The spectrum represents diverse users and activities, turning a previously neglected site into a shared third place for sports, wellness, and community life. The design improves accessibility and connectivity while introducing slope grading, drainage, permeable paving, and resilient green infrastructure. An integrated stormwater management system follows the sequence Rain → Slope → Trench → Rain Garden → Underground Tank → Drip Irrigation → Overflow, helping to reduce flooding, improve water quality, and reuse rainwater for landscape irrigation. Local and shade-tolerant planting strengthens the environmental character of the site, while flexible multi-use spaces encourage physical activity, social interaction, and community well-being.",     
      zh: "Green（Liab Duan）高速公路桥下公共空间 Zone C：运动区，以“Urban Spectrum（城市光谱）”为核心概念，将原本被忽视的桥下空间转化为充满活力的健康社区公共空间。“光谱”象征不同使用者与多样化活动，使场地成为集运动、健康与社区交流于一体的城市第三空间。设计重点改善场地的可达性与区域连接，并通过地形坡度调整、排水系统、透水铺装及绿色基础设施提升空间的安全性与韧性。雨洪管理系统采用“降雨 → 坡地 → 排水沟 → 雨水花园 → 地下储水池 → 滴灌 → 溢流”的循环方式，以减少积水、改善水质并将雨水重新用于景观灌溉。同时选用本地及耐阴植物营造可持续绿色环境，并设置灵活的多功能活动空间，促进运动、社区互动与城市生活品质。" },
    featured: true,
  },
  //urban-planning 2
  {
    slug: "bangkok-park-of-the-future",
    title: { th: "โครงการออกแบบ Bangkok 2023: สวนสาธารณะแห่งอนาคต", en: "Bangkok 2023: Park of the Future", zh: "曼谷2023：未来公园设计项目" },
    category: "urban-planning",
    tags: ["landscape", "urban"],
    coverImage: "/images/koh-phi-phi-resort/cover.webp",
    year: 2023,
    location: {
      th: "กรุงเทพฯ, ประเทศไทย",
      en: "Bangkok, Thailand",
      zh: "泰国曼谷",
    },
    role: { th: "ออกแบบแนวคิด วางผังพื้นที่ และออกแบบภูมิทัศน์เมือง", en: "Concept Design, Spatial Planning & Urban Landscape Design", zh: "概念设计、空间规划与城市景观设计" },
    summary: {
      th: "",
      en: "",
      zh: "",
    },
    description: { 
      th: "Bangkok 2023: Park of the Future เป็นโครงการที่ตั้งอยู่บนจินตภาพของอนาคตกรุงเทพฯ ในภาวะวิกฤต ซึ่งอาหาร น้ำสะอาด และคุณภาพอากาศได้รับผลกระทบจากกิจกรรมของมนุษย์ แนวคิดหลักของโครงการคือ “Optimize – Living in Balance” โดยมุ่งสร้างสมดุลระหว่างการจัดการน้ำและอาหาร การเพิ่มพื้นที่สีเขียวและระบบนิเวศที่ดีในเมือง รวมถึงการออกแบบพื้นที่สาธารณะที่เข้าถึงง่ายและตอบสนองต่อชุมชน โครงการพัฒนาในรูปแบบโมดูลที่เชื่อมต่อกันเป็นเครือข่าย แต่ละโมดูลรองรับฟังก์ชันที่แตกต่างกัน เช่น การผลิตอาหาร การประกอบอาหาร พื้นที่นั่งพัก การเก็บน้ำ การกักเก็บพลังงาน และการขยายพื้นที่สีเขียว โมดูลลอยน้ำถูกออกแบบให้มีความยืดหยุ่นสูง โดยด้านล่างสามารถเป็นที่อยู่อาศัยของสิ่งมีชีวิตน้ำ ช่วยส่งเสริมความหลากหลายทางชีวภาพและเชื่อมธรรมชาติเข้ากับเมือง โครงการสะท้อนแนวคิด “New Hope City” ที่เสนอแนวทางการอยู่ร่วมกันอย่างพอเหมาะ พึ่งพาทรัพยากรอย่างรู้คุณค่า และสร้างอนาคตเมืองที่ยั่งยืนมากขึ้น",  

      en: "Bangkok 2023: Park of the Future is based on a dystopian vision of Bangkok, where food security, clean water, and air quality are at risk due to human activities. The project is guided by the concept of “Optimize – Living in Balance,” aiming to create equilibrium between water and food management, urban green spaces and healthy ecosystems, and accessible public space for the community. The design is developed through interconnected modular units, each supporting different functions such as food production, cooking, serving, picnicking, water collection, and energy storage. These modules form a flexible network that expands green space, reduces heat, and supports urban resilience. Floating modules are designed with adaptive capacity, while their undersides provide habitats for aquatic life, promoting biodiversity and ecological integration. The project presents the idea of a “New Hope City,” where future urban living is shaped by moderation, resource awareness, and sustainable coexistence between people, nature, and infrastructure.",
      zh: "“曼谷2023：未来公园”项目建立在对未来曼谷的反乌托邦想象之上：由于人类活动的影响，食物安全、清洁水源与空气质量都面临风险。项目以“Optimize – Living in Balance（优化——平衡生活）”为核心理念，致力于在水与食物管理、城市绿地与健康生态系统，以及社区可达且可使用的公共空间之间建立平衡。设计采用彼此连接的模块化单元系统，每个模块承担不同功能，例如食物生产、烹饪、共享用餐、野餐、雨水收集与能源储存。这些模块共同形成灵活的城市网络，可扩展绿地、缓解热环境，并提升城市韧性。漂浮模块具有高度适应性，其底部还可作为水生生物栖息地，促进生物多样性并加强自然与城市之间的融合。项目提出“New Hope City（新希望城市）”的愿景，强调以适度、资源意识与可持续共存为基础，构建未来城市生活的新模式。" },
    featured: false,
  },
  //urban-planning 3
  {
    slug: "saan-wiang-chiang-mai-walkable-city",
    title: { th: "โครงการออกแบบและพัฒนาภูมิสถาปัตยกรรมชุมชนย่านการค้าเมืองเก่าทับเที่ยง", en: "Thap Thiang Old City Creative Community Design", zh: "塔天老城创意社区景观设计项目" }, 
    category: "urban-planning",
    tags: ["landscape", "urban"],
    coverImage: "/images/koh-phi-phi-resort/cover.webp",
    year: 2023,
    location: { th: "ทับเที่ยง จังหวัดตรัง ประเทศไทย", en: "Thap Thiang, Trang, Thailand", zh: "泰国 董里府 塔天" }, 
    role: { th: "ออกแบบภูมิทัศน์ชุมชน วางผังพื้นที่ และฟื้นฟูย่านเมืองเก่า", en: "Community Landscape, Spatial Planning & Urban Regeneration", zh: "社区景观、空间规划与老城更新设计" },  
    summary: {
      th: "ผังปลูกพืชพรรณสำหรับสวนสาธารณะริมแม่น้ำ เน้นพันธุ์ไม้ท้องถิ่นที่ทนน้ำท่วมตามฤดูกาล",
      en: "A planting plan for a riverside public park, favoring native species tolerant of seasonal flooding.",
      zh: "为滨水公共公园制定的种植规划，优先选用耐季节性洪涝的本地物种。",
    },
    description: { 
      th: "โครงการพัฒนาย่านการค้าเมืองเก่าทับเที่ยงมุ่งฟื้นฟูพื้นที่ประวัติศาสตร์ควบคู่กับการส่งเสริมเศรษฐกิจสร้างสรรค์ โดยได้รับแรงบันดาลใจจากวัฒนธรรมร้านโกปีและแนวคิด “The Table” ซึ่งมองโต๊ะเป็นมากกว่าเฟอร์นิเจอร์ แต่เป็นพื้นที่แห่งการพบปะ การสื่อสาร และการสร้างสรรค์ร่วมกัน โครงการสำรวจและประเมินคุณค่าของอาคารเดิมเพื่อกำหนดแนวทางอนุรักษ์ ซ่อมแซม ปรับใช้ และฟื้นฟูให้เหมาะสมกับสภาพและคุณค่าทางประวัติศาสตร์ พื้นที่ถูกพัฒนาเป็น 3 โซนหลัก ได้แก่ “Work Table” บริเวณหอนาฬิกาและโรงแรมเก่า เพื่อสร้างชุมชนสร้างสรรค์และพื้นที่ทำงาน “Reception Table” บริเวณตลาดเทศบาล เพื่อฟื้นฟูต้นกำเนิดวัฒนธรรมโกปีและสร้างพื้นที่พบปะของชุมชน และ “Leisure Table” บริเวณคลองห้วยยาง เพื่อฟื้นฟูพื้นที่ริมน้ำด้วยระบบบำบัดน้ำ พืชบำบัด Rain Garden พื้นที่นั่งพัก และกิจกรรมสาธารณะ นอกจากนี้ยังเสนอแนวทางปรับปรุงด้านหน้าอาคารริมคลองโดยอาศัยความร่วมมือโดยสมัครใจระหว่างเจ้าของอาคาร ภาครัฐ และชุมชน เพื่อยกระดับภูมิทัศน์ อัตลักษณ์ และคุณค่าทางวัฒนธรรมของย่านอย่างยั่งยืน",  

      en: "The Thap Thiang Old City Creative Community project revitalizes the historic commercial district while supporting the creative economy. Inspired by local Kopi coffee-shop culture, the concept of “The Table” transforms everyday gathering spaces into platforms for communication, collaboration, and creative exchange. Existing buildings were surveyed and assessed to establish appropriate strategies for preservation, repair, adaptive reuse, and structural rehabilitation according to their condition and cultural value. The project is organized into three key zones: the “Work Table” around the clock tower and an old hotel, reimagined as a creative community and workspace; the “Reception Table” at the municipal market, strengthening its role as the origin of local Kopi culture and a social-commercial hub; and the “Leisure Table” along Huai Yang Canal, where water treatment, rain gardens, shaded seating, and small activity spaces help reconnect people with the historic waterfront. Voluntary façade improvement guidelines are also proposed to encourage collaboration between property owners, government agencies, and the community while strengthening the area's cultural identity and urban character.", 
    
      zh: "塔天老城创意社区项目旨在通过历史街区更新与创意经济发展，重新激活传统商业社区。设计灵感来源于当地“Kopi”咖啡店文化，并以“The Table（桌子）”为核心概念，将桌子视为交流、聚会、协作与创意活动发生的平台。项目首先对现有建筑进行调查与价值评估，并根据建筑状况及历史文化价值提出保护、修缮、适应性改造及结构修复等不同策略。整体规划分为三个主要区域：“Work Table（工作之桌）”位于钟楼及老酒店周边，将其转化为创意社区与工作空间；“Reception Table（迎宾之桌）”位于市政市场，通过更新商业、停车及公共交流空间，强化当地Kopi文化与社区生活；“Leisure Table（休闲之桌）”位于Huai Yang运河沿岸，通过水处理系统、生态植物、雨水花园、遮荫座椅及活动空间恢复滨水公共生活。项目同时提出自愿参与的沿河建筑立面改善方案，鼓励业主、政府与社区共同参与，以提升老城的景观品质、文化价值与地方认同。" },
    featured: false,
  },
  //urban-planning 4
  {
    slug: "thap-thiang-design-and-development",
    title: {
      th: "ผังปลูกสวนสาธารณะริมน้ำ",
      en: "Riverside Park Planting Plan",
      zh: "滨水公园种植规划",
    },
    category: "urban-planning",
    tags: ["landscape", "urban"],
    coverImage: "/images/koh-phi-phi-resort/cover.webp",
    year: 2023,
    location: {
      th: "กรุงเทพฯ, ประเทศไทย",
      en: "Bangkok, Thailand",
      zh: "泰国曼谷",
    },
    role: {
      th: "ผู้ช่วยออกแบบภูมิทัศน์",
      en: "Landscape Design Assistant",
      zh: "景观设计助理",
    },
    summary: {
      th: "ผังปลูกพืชพรรณสำหรับสวนสาธารณะริมแม่น้ำ เน้นพันธุ์ไม้ท้องถิ่นที่ทนน้ำท่วมตามฤดูกาล",
      en: "A planting plan for a riverside public park, favoring native species tolerant of seasonal flooding.",
      zh: "为滨水公共公园制定的种植规划，优先选用耐季节性洪涝的本地物种。",
    },
    description: {
      th: "โครงการนี้ศึกษาพันธุ์ไม้ท้องถิ่นที่เหมาะกับพื้นที่ริมแม่น้ำที่มีน้ำท่วมตามฤดูกาล แล้วจัดทำผังปลูกที่แบ่งโซนตามระดับความชื้นของดิน เพื่อให้สวนสาธารณะดูแลรักษาง่ายในระยะยาวและยังคงร่มเงาให้ผู้ใช้งานได้ตลอดปี",
      en: "This project researched native plant species suited to a riverside site with seasonal flooding, then produced a planting plan zoned by soil moisture level — keeping long-term maintenance low while providing shade for park visitors year-round.",
      zh: "本项目研究了适合季节性洪涝滨水场地的本地植物物种，并据此制定按土壤湿度分区的种植规划——在保持长期低维护成本的同时，全年为公园游客提供遮荫。",
    },
    featured: false,
  },
  //urban-planning 5
  {
    slug: "three-kings-monument-square",
    title: {
      th: "ผังปลูกสวนสาธารณะริมน้ำ",
      en: "Riverside Park Planting Plan",
      zh: "滨水公园种植规划",
    },
    category: "urban-planning",
    tags: ["landscape", "urban"],
    coverImage: "/images/koh-phi-phi-resort/cover.webp",
    year: 2023,
    location: {
      th: "กรุงเทพฯ, ประเทศไทย",
      en: "Bangkok, Thailand",
      zh: "泰国曼谷",
    },
    role: {
      th: "ผู้ช่วยออกแบบภูมิทัศน์",
      en: "Landscape Design Assistant",
      zh: "景观设计助理",
    },
    summary: {
      th: "ผังปลูกพืชพรรณสำหรับสวนสาธารณะริมแม่น้ำ เน้นพันธุ์ไม้ท้องถิ่นที่ทนน้ำท่วมตามฤดูกาล",
      en: "A planting plan for a riverside public park, favoring native species tolerant of seasonal flooding.",
      zh: "为滨水公共公园制定的种植规划，优先选用耐季节性洪涝的本地物种。",
    },
    description: {
      th: "โครงการนี้ศึกษาพันธุ์ไม้ท้องถิ่นที่เหมาะกับพื้นที่ริมแม่น้ำที่มีน้ำท่วมตามฤดูกาล แล้วจัดทำผังปลูกที่แบ่งโซนตามระดับความชื้นของดิน เพื่อให้สวนสาธารณะดูแลรักษาง่ายในระยะยาวและยังคงร่มเงาให้ผู้ใช้งานได้ตลอดปี",
      en: "This project researched native plant species suited to a riverside site with seasonal flooding, then produced a planting plan zoned by soil moisture level — keeping long-term maintenance low while providing shade for park visitors year-round.",
      zh: "本项目研究了适合季节性洪涝滨水场地的本地植物物种，并据此制定按土壤湿度分区的种植规划——在保持长期低维护成本的同时，全年为公园游客提供遮荫。",
    },
    featured: false,
  },
  //construction 1
  {
    slug: "landscape-constryction-drawing-water-feature",
    title: {
      th: "แบบก่อสร้างวิลล่าเนินเขา",
      en: "Hillside Villa Construction Set",
      zh: "山坡别墅施工图纸",
    },
    category: "construction-drawing",
    tags: ["construction", "architecture"],
    coverImage: "/images/koh-phi-phi-resort/cover.webp",
    year: 2024,
    location: {
      th: "เชียงใหม่, ประเทศไทย",
      en: "Chiang Mai, Thailand",
      zh: "泰国清迈",
    },
    role: {
      th: "ผู้จัดทำแบบก่อสร้าง",
      en: "Construction Drawing Preparation",
      zh: "施工图绘制",
    },
    summary: {
      th: "ชุดแบบก่อสร้างและรายละเอียดงานฐานรากสำหรับวิลล่าที่ตั้งอยู่บนพื้นที่ลาดเอียง",
      en: "A full construction drawing set and foundation details for a villa built on sloped terrain.",
      zh: "为坡地别墅提供完整的施工图纸及基础工程详图。",
    },
    description: {
      th: "งานนี้ครอบคลุมการจัดทำแบบก่อสร้างชุดสมบูรณ์ ตั้งแต่แบบฐานราก แบบโครงสร้างกันดินสำหรับพื้นที่ลาดเอียง ไปจนถึงรายละเอียดงานปูพื้นภายนอกและระบบระบายน้ำรอบอาคาร เพื่อให้ทีมก่อสร้างนำไปใช้อ้างอิงหน้างานได้จริง",
      en: "This work covered a complete construction drawing package — from foundation plans and retaining structure details for the sloped site, to exterior paving details and the surrounding drainage system — prepared for direct use on site by the construction team.",
      zh: "本工作涵盖完整的施工图纸包——从基础平面图、坡地挡土结构详图，到室外铺装详图及建筑周边排水系统，供施工团队在现场直接参考使用。",
    },
    featured: false,
  },
  //construction 2
  {
    slug: "drawing-home-landscape-design",
    title: {
      th: "แบบก่อสร้างวิลล่าเนินเขา",
      en: "Hillside Villa Construction Set",
      zh: "山坡别墅施工图纸",
    },
    category: "construction-drawing",
    tags: ["construction", "architecture"],
    coverImage: "/images/koh-phi-phi-resort/cover.webp",
    year: 2024,
    location: {
      th: "เชียงใหม่, ประเทศไทย",
      en: "Chiang Mai, Thailand",
      zh: "泰国清迈",
    },
    role: {
      th: "ผู้จัดทำแบบก่อสร้าง",
      en: "Construction Drawing Preparation",
      zh: "施工图绘制",
    },
    summary: {
      th: "ชุดแบบก่อสร้างและรายละเอียดงานฐานรากสำหรับวิลล่าที่ตั้งอยู่บนพื้นที่ลาดเอียง",
      en: "A full construction drawing set and foundation details for a villa built on sloped terrain.",
      zh: "为坡地别墅提供完整的施工图纸及基础工程详图。",
    },
    description: {
      th: "งานนี้ครอบคลุมการจัดทำแบบก่อสร้างชุดสมบูรณ์ ตั้งแต่แบบฐานราก แบบโครงสร้างกันดินสำหรับพื้นที่ลาดเอียง ไปจนถึงรายละเอียดงานปูพื้นภายนอกและระบบระบายน้ำรอบอาคาร เพื่อให้ทีมก่อสร้างนำไปใช้อ้างอิงหน้างานได้จริง",
      en: "This work covered a complete construction drawing package — from foundation plans and retaining structure details for the sloped site, to exterior paving details and the surrounding drainage system — prepared for direct use on site by the construction team.",
      zh: "本工作涵盖完整的施工图纸包——从基础平面图、坡地挡土结构详图，到室外铺装详图及建筑周边排水系统，供施工团队在现场直接参考使用。",
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
