export const COLORS = {
  black: "#0a0a0a",
  white: "#f5f0e8",
  yellow: "#FFE600",
  red: "#FF2200",
  blue: "#0026FF",
  green: "#00FF41",
};

export const skills = [
  {
    label: "HTML & CSS",
    style: "s1",
    quip: "You wrote your first website in HTML. So did everyone. But yours actually looked good.",
  },
  {
    label: "JavaScript",
    style: "s2",
    quip: "The language of the internet. Also the language of suffering. You speak both fluently.",
  },
  {
    label: "React + Next",
    style: "s3",
    quip: "Virtual DOM. Hooks. Server components. You live here now.",
  },
  {
    label: "Node.js",
    style: "s4",
    quip: "JavaScript but on the server. The backend had no idea what was coming.",
  },
  {
    label: "Zustand",
    style: "s5",
    quip: "Redux but for people who respect themselves.",
  },
  {
    label: "Redux",
    style: "s1",
    quip: "You know it. You survived it. You replaced it with Zustand.",
  },
  {
    label: "MongoDB",
    style: "s2",
    quip: "NoSQL. Schema-optional. Production-optimized. The vibe.",
  },
  {
    label: "Express.js",
    style: "s3",
    quip: "RESTful APIs so fast they have been reported for speeding.",
  },
  {
    label: "Tailwind CSS",
    style: "s4",
    quip: "Utility-first. Inline styles but make it fashion.",
  },
  {
    label: "GitHub",
    style: "s5",
    quip: "Where code goes to live, die, and be force-pushed.",
  },
  {
    label: "AWS EC2",
    style: "s1",
    quip: "You touched production servers. They did not crash. That is an achievement.",
  },
  {
    label: "Typesense",
    style: "s2",
    quip: "Search that actually finds things. Witchcraft.",
  },
  {
    label: "Payload CMS",
    style: "s3",
    quip: "Headless CMS. Like WordPress but you can look your friends in the eye.",
  },
  {
    label: "AI Tools",
    style: "s4",
    quip: "Writing code 2–3x faster. The robots work FOR you here.",
  },
  {
    label: "Vercel",
    style: "s5",
    quip: "git push → deployed. Peak developer experience. You deserve this.",
  },
];

export const achievements = [
  {
    icon: "🏆",
    title: "DHADHICHI AWARD",
    desc: "Recipient of the prestigious Dhadhichi Award for whole-body donation to medical science. Not a bug. Not a typo.",
    popup:
      "The most unhinged achievement to put on a dev portfolio. Sudev pledged his whole body to medical science, which, honestly, is more commitment than most people show in code reviews. Respect.",
  },
  {
    icon: "🔦",
    title: "LIGHTHOUSE SURVIVOR",
    desc: "Inherited a Lighthouse score of 33. Did not quit. Did not cry (publicly). Brought it to 85+. This is a character arc.",
    popup:
      "Started with a 33. That score was so bad, Google was sending concerned emails. Fixed it to 85+. The site now loads before you even click the link. Probably.",
  },
  {
    icon: "💯",
    title: "PERFECT SEO SCORE",
    desc: "100/100. On Lighthouse. For SEO. Do you know how rare this is? Neither does Sudev, but he will put it on every resume forever.",
    popup:
      "The perfect score. Google personally called to say the sitemaps were immaculate. (They did not call but the score was 100 so same energy.)",
  },
  {
    icon: "❓",
    title: "FORMER S...",
    desc: "The resume says 'Former S' and then stops. A mystery. A legend. An enigma wrapped in a Tailwind className.",
    popup:
      "We do not know what S stands for. The resume cut off there. Possibilities include: Secretary, Superhero, Sorcerer, or just Steve.",
  },
];

export const brags = [
  "▌ Currently writing cleaner code than you ▌",
  "▌ Zustand changed my life. Ask me how. ▌",
  "▌ Coffee → Code → Deploy → Repeat ▌",
  "▌ 'Works on my machine' — Sudev, before fixing it ▌",
  "▌ 2–3x faster with AI. HR does not know what this means. ▌",
  "▌ Lighthouse score of 100. No big deal. (Big deal.) ▌",
  "▌ Full-stack means I own all the bugs ▌",
];

export const avatarLines = [
  "ok ok ok",
  "i said ok!!",
  "please stop",
  "this is a professional portfolio",
  "i'm calling HR",
  "...fine. i like it.",
];

export const lhRows = [
  {
    label: "Performance",
    before: "33",
    after: "85+",
    width: "85%",
    color: COLORS.green,
  },
  {
    label: "SEO",
    before: "??",
    after: "100",
    width: "100%",
    color: COLORS.yellow,
  },
  {
    label: "Search Latency",
    before: "slow",
    after: "FAST",
    width: "95%",
    color: "#00bfff",
  },
  {
    label: "Redux in Codebase",
    before: "100%",
    after: "ZERO",
    width: "5%",
    color: COLORS.red,
  },
];

export const skillStyles = {
  s1: {
    background: COLORS.yellow,
    color: COLORS.black,
    border: `3px solid ${COLORS.yellow}`,
  },
  s2: {
    background: "transparent",
    color: COLORS.yellow,
    border: `3px solid ${COLORS.yellow}`,
  },
  s3: {
    background: COLORS.red,
    color: COLORS.white,
    border: `3px solid ${COLORS.red}`,
  },
  s4: {
    background: "transparent",
    color: COLORS.white,
    border: `3px solid ${COLORS.white}`,
  },
  s5: {
    background: COLORS.green,
    color: COLORS.black,
    border: `3px solid ${COLORS.green}`,
  },
};
