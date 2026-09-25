interface Site {
  name: string;
  tagline: { th: string; en: string; zh: string };
  heroStatement: { th: string; en: string; zh: string };
  heroCredit: { name: string; affiliation: string };
  aboutIntro: { th: string; en: string; zh: string };
  aboutPhilosophy: { th: string; en: string; zh: string };
  education: { th: string; en: string; zh: string }[];
  experience: { th: string; en: string; zh: string }[];
  portfolioUrl: string;
  cvUrl: string;
  contact: {
    email: string;
    phone: string;
    instagram?: string;
    line?: string;
  };
}

export const site: Site = {
  name: "",
  tagline: {
    th: "ภูมิสถาปนิก / สถาปนิกผังเมือง",
    en: "Landscape Architect / Urban Architect",
    zh: "景观设计师 / 景观建筑师 / 城市设计师 / 城市建筑师",
  },
  heroStatement: {
    th: "Portfolio",
    en: "Portfolio",
    zh: "作品集",
  },
  heroCredit: {
    name: "Duangphorn Wongjancharoen",
    affiliation: "MJU",
  },
  aboutIntro: {
    th: "เราหลงใหลในงานออกแบบและสนุกกับการสำรวจไอเดียผ่านพื้นที่ รูปแบบ และการนำเสนอทางภาพ เราชอบเปลี่ยนความคิดสร้างสรรค์ให้กลายเป็นพื้นที่และประสบการณ์ที่มีความหมายและสะท้อนความเป็นตัวเอง",
    en: "I’m passionate about design and love exploring ideas through space, form, and visual expression. I enjoy turning creative ideas into spaces and experiences that feel meaningful and personal.",
    zh: "我热爱设计，也喜欢通过空间、形式和视觉表达去探索不同的想法。我享受将创意转化为空间与体验，让每一个设计都具有意义，并展现独特的个人感受。",
  },
  aboutPhilosophy: {
    th: "เชื่อว่างานออกแบบที่ดีเกิดจากความเข้าใจในสถานที่ ผู้คน และเรื่องราวเบื้องหลังของแต่ละพื้นที่",
    en: "I believe good design comes from understanding the place, the people, and the story behind each space.",
    zh: "我相信，好的设计源于对场所、人以及每个空间背后故事的理解。",
  },
  education: [
    {
      th: "ปริญญาตรีสถาปัตยกรรมศาสตร์, มหาวิทยาลัยแม่โจ้",
      en: "Bachelor’s Degree in Landscape Architecture, Maejo University",
      zh: "景观建筑学学士学位，泰国梅州大学",
    },
  ],
  experience: [
    {
      th: "ฝึกงานด้านภูมิสถาปัตยกรรม\nLeL Design Studio | เฉิงตู, ประเทศจีน เม.ย. 2026 – มิ.ย. 2026",
      en: "Landscape Architecture internship, LeL Design Studio | Chengdu (成都), China | (APR 2026 – JUN 2026)",
      zh: "景观设计实习，LeL设计工作室 | 中国成都（2026年4月–6月）",
    },
  ],
  portfolioUrl: "https://heyzine.com/flip-book/2c8b14857c.html",
  cvUrl: "/files/cv_Duangphorn.pdf",
  contact: {
    email: "Duangphorn.wjj@gmail.com",
    phone: "(+66)82-653-8009",



    
  },
};
