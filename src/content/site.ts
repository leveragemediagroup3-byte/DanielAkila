// All website copy lives here, so text can be edited without touching the design.

export const site = {
  brand: {
    name: "Daniel Akila",
    eyebrow: "Thought Leader · Business Strategist · Keynote Speaker",
    tagline: "…towards an enlightened, empowered and excellent people.",
  },

   nav: [
    { label: "About", href: "/about" },
    { label: "Speaking", href: "/speaking" },
    { label: "DANMAC", href: "/danmac" },
    { label: "SLF", href: "/slf" },
    { label: "Insights", href: "/insights" },
    { label: "Contact", href: "/contact" },
  ],

  cta: { label: "Book Daniel", href: "#book" },

    gallery: {
    label: "In Pictures",
    heading: "Stages, rooms and conversations.",
  },
  
  hero: {
    lineOne: "Helping founders move from",
    lineTwo: "Passion to Profit to Posterity.",
    text: "Daniel Akila is the Founder and CEO of DANMAC Consulting, a serial entrepreneur and keynote speaker. He helps founders and organisations turn vision into sustainable enterprise, and enterprise into legacy.",
    primary: { label: "Book Daniel", href: "#book" },
    secondary: { label: "Explore the work", href: "#expertise" },
  },

  mission: {
    label: "The Leader's Question",
    intro: "Someone must constantly be asking:",
    questions: ["What is changing?", "What are we missing?", "What lies ahead?"],
    closingLead: "That someone is",
    closingHighlight: "you.",
  },

  expertise: {
    label: "Expertise",
    heading: "Where strategy becomes action.",
    intro:
      "Daniel sits on the boards and management teams of respected organisations and companies, providing strategy and building the systems and structures that let them grow.",
    items: [
      { title: "Business Strategy", text: "Clear direction, sharp priorities and plans built to be executed." },
      { title: "Leadership Development", text: "Equipping emerging and established leaders with purpose, tools and mindset." },
      { title: "Entrepreneurship", text: "Turning ideas and courage into ventures that last." },
      { title: "Financial & Business Growth", text: "Financial discipline and sustainable growth for founders and firms." },
      { title: "Institutional Development", text: "Building the systems and structures that let organisations outlive their founders." },
      { title: "Executive Mentorship", text: "Candid, long-term guidance for leaders carrying real responsibility." },
      { title: "Public Speaking", text: "Keynotes and talks that give a room direction." },
      { title: "Organisational Transformation", text: "Helping organisations change deliberately, not accidentally." },
    ],
  },

  framework: {
    label: "The Framework",
    heading: "Passion. Profit. Posterity.",
    intro: "Three stages every enduring enterprise moves through, and the thinking behind everything Daniel does.",
    stages: [
      {
        number: "01",
        title: "Passion",
        keywords: "Purpose · Vision · Courage · Ideas",
        text: "Every enterprise begins with conviction. Passion is the purpose, vision and courage that start something worth building.",
      },
      {
        number: "02",
        title: "Profit",
        keywords: "Strategy · Systems · Execution · Growth",
        text: "Conviction needs structure. Profit is strategy, systems and disciplined execution that make growth sustainable.",
      },
      {
        number: "03",
        title: "Posterity",
        keywords: "Leadership · Legacy · Institutions · Impact",
        text: "The real test is what remains. Posterity is leadership, legacy and institutions that carry the work beyond one person.",
      },
    ],
  },

  about: {
    label: "About Daniel",
    heading: "Building businesses. Developing leaders. Shaping institutions.",
    paragraphs: [
      "Daniel Akila is the Founder and CEO of DANMAC Consulting, a serial entrepreneur, keynote speaker and life coach.",
      "He serves on the boards and management of reputable organisations and companies, providing strategy and building systems and structure.",
      "Through mentorship, advocacy and platforms for thought leadership, he is raising bold leaders for Africa's transformation.",
    ],
    highlights: [
      "Founder & CEO, DANMAC Consulting",
      "Serial entrepreneur",
      "Keynote speaker and life coach",
      "Board and management adviser",
    ],
    visionQuote: "We will build the North, then Nigeria, and ultimately Africa.",
    visionLabel: "The Northern Vision",
    visionText:
      "Daniel is confronting poverty, ignorance and mediocrity with advocacy, platforms for thought leadership and strategic mentorship.",
    link: { label: "Read Daniel's story", href: "/about" },
  },

  speaking: {
    label: "Keynote Speaking",
    heading: "Ideas worth gathering a room for.",
    text: "Daniel speaks to conference audiences, companies and institutions about leadership, enterprise and the long view.",
    topics: [
      "Keynote speaking",
      "Leadership talks",
      "Entrepreneurship",
      "Business strategy",
      "Financial literacy and business growth",
      "Organisational transformation",
      "Youth and next-generation leadership",
    ],
    cta: { label: "Invite Daniel to Speak", href: "#book" },
  },

  danmac: {
    label: "DANMAC Consulting",
    fullName: "Daniel Akila Mentorship and Consulting",
    heading: "Strategy for organisations ready to move.",
    text: "DANMAC is the consulting arm of Daniel Akila. It is also the platform behind the SLF Conferences and the Mentorship Programs.",
    arms: [
      {
        title: "Consulting & Advisory",
        text: "Business advisory, organisational strategy, leadership and capacity development for organisations ready to move.",
      },
      {
        title: "SLF Conferences",
        text: "DANMAC organises the Success, Leadership and Finance Conference, a platform for strategic conversations that began in September 2024.",
      },
      {
        title: "Mentorship Programs",
        text: "Mentorship for emerging leaders and visionaries, giving them the purpose, tools and mindset to lead boldly and impact generations.",
      },
    ],
    servicesLabel: "What DANMAC does",
    services: [
      "Consulting",
      "Business advisory",
      "Organisational strategy",
      "Leadership",
      "Capacity development",
      "Transformation",
    ],
    cta: { label: "Explore DANMAC", href: "/danmac" },
  },

  slf: {
    label: "SLF Conference",
    title: "SLF",
    subtitle: "Success · Leadership · Finance",
    since: "Since September 2024",
    heading: "A platform for transgenerational minds.",
    text: "In a world shaped by uncertainty and rapid change, the ability to integrate success, leadership and finance is no longer a personal ambition. It is a societal imperative. SLF, organised by DANMAC, is a strategic movement committed to shaping transgenerational minds and mobilising transformative agency.",
    focus: [
      "Leadership",
      "Business",
      "Finance",
      "Institutional thinking",
      "Strategic conversations",
      "High-level networking",
    ],
    editionsLabel: "The editions",
    editions: [
      { year: "2024", title: "Raising the Bar, Going Exponential", parts: [] as string[] },
      { year: "2025", title: "Disruption", parts: ["People", "Culture", "Money"] },
      { year: "2026", title: "Disruptors", parts: ["Personal", "Institutional", "National"] },
    ],
    galleryLabel: "Gallery",
    galleryHeading: "Moments from the room.",
    cta: { label: "Explore SLF", href: "/slf" },
  },

  insights: {
    label: "Insights",
    heading: "Thinking worth keeping.",
    text: "Essays and perspectives on leadership, enterprise and building institutions that last.",
    categories: [
      "Leadership",
      "Business",
      "Finance",
      "Strategy",
      "Entrepreneurship",
      "Personal Development",
      "Institutional Development",
    ],
    // PLACEHOLDER titles. Replace with real articles when published.
    featured: [
      { category: "Leadership", title: "Why legacy is a strategy, not a sentiment", featured: true },
      { category: "Entrepreneurship", title: "From passion to profit: the founder's second decision" },
      { category: "Institutional Development", title: "Building organisations that outlive their founders" },
    ],
    cta: { label: "Read all insights", href: "/insights" },
  },

  engagement: {
    label: "Engage",
    heading: "Let's build what matters.",
    text: "Tell us what you are working on, and we will point you to the right conversation.",
    options: [
      { title: "Speaking & Keynotes", text: "For conference organisers, companies and institutions." },
      { title: "Consulting & Advisory", text: "For organisations seeking strategic support." },
      { title: "Executive Coaching", text: "For leaders and executives." },
      { title: "Training & Partnerships", text: "For organisations seeking training, capacity development or collaboration." },
    ],
  },

  contact: {
    email: "info@danielakila.org",
    phone: "+234 810 055 1304",
    address: "No. 14 Ebele Okeke Crescent, Wuye, Abuja, Nigeria",
    social: [
      { label: "LinkedIn", href: "https://www.linkedin.com/in/danielakila/" },
      { label: "Instagram", href: "https://instagram.com/officialdanielakila" },
      { label: "Facebook", href: "https://web.facebook.com/daniel.akila" },
    ],
    formFields: [
      "Full Name",
      "Organisation",
      "Email",
      "Phone",
      "Engagement Type",
      "Event / Project Name",
      "Preferred Date",
      "Location / Delivery Mode",
      "Budget Range (optional)",
      "Message",
    ],
  },

  footer: {
    statement: "Thought Leader · Business Strategist · Keynote Speaker",
    copyright: "Daniel Akila. All rights reserved.",
  },

  // Headings and intros for the inner pages (built in later steps)
  pages: {
    about: {
      title: "The thinking behind the work.",
      intro: "Who Daniel is, what he believes, and the future he is building.",
      meta: "About Daniel Akila: Founder and CEO of DANMAC Consulting, business strategist, keynote speaker and life coach.",
    },
    speaking: {
      title: "Keynotes that give a room direction.",
      intro: "Topics, formats and how to invite Daniel to your event.",
      meta: "Book Daniel Akila for keynotes on leadership, entrepreneurship, business strategy and organisational transformation.",
    },
    danmac: {
      title: "The consulting arm behind the work.",
      intro: "Consulting, mentorship and capacity development from Daniel Akila Mentorship and Consulting.",
      meta: "DANMAC Consulting: business advisory, organisational strategy, leadership and capacity development.",
    },
    slf: {
      title: "Success. Leadership. Finance.",
      intro: "The flagship conference for strategic conversations on leadership, business and finance.",
      meta: "The SLF Conference: Success, Leadership and Finance, a platform for institutional thinking and strategic conversations.",
    },
    insights: {
      title: "Essays, ideas and perspectives.",
      intro: "Essays and perspectives from Daniel Akila.",
      meta: "Insights from Daniel Akila on leadership, business, finance, strategy and institutional development.",
    },
    contact: {
      title: "Start a conversation.",
      intro: "Choose the kind of conversation you want to have, then tell us a little about it.",
      meta: "Contact Daniel Akila for speaking, consulting, executive coaching, training and partnerships.",
    },
  },
}