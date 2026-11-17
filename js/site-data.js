/* EDIT ME: all content lives here. */
const SITE = {
  name: "Sathsara Yoshith",
  cvFile: "",                 // e.g. "assets/cv.pdf" (button hidden when empty)
  profileImage: "",           // e.g. "assets/images/me.jpg"
  bio: "I'm a Sri Lankan creative working across graphic design, video editing, motion graphics and photography. Replace this text with your own story.",
  highlights: ["Add an experience highlight here", "Add an achievement here"],
  boostora: {
    name: "Boostora LK", logo: "",           // e.g. "assets/logos/boostora.png"
    phone: "+94 77 668 3130", tel: "+94776683130", wa: "94776683130",
    waMessage: "Hello Boostora LK! I'm interested in your advertising and creative services. Can I get more information?",
    facebook: "", instagram: "", email: "",   // hidden until filled in
    testimonials: []                           // [{name:"", text:""}] shown only when filled
  }
};
const SKILLS = ["Photoshop","Illustrator","Premiere Pro","After Effects","Digital Advertising"];
const SERVICES = [
  ["Graphic Design","Logos, posters and brand visuals that look sharp everywhere.","✦"],
  ["Video Editing","Clean cuts, pacing and colour for reels, ads and films.","▶"],
  ["Motion Graphics","Animated titles, logos and explainers that hold attention.","◎"],
  ["Facebook Advertising","Targeted Facebook campaigns built around your goal.","f"],
  ["Instagram Advertising","Scroll-stopping creatives and Instagram campaigns.","◉"],
  ["Digital Creative Services","Social media content and complete digital promotion.","✧"]
];
const BOOSTORA_SERVICES = ["Facebook advertising","Instagram advertising","Meta advertising campaigns","Promotional creative design","Social media marketing","Digital brand promotion"];
const CATEGORIES = ["All Projects","Graphic Design","Poster Design","Branding","Video Editing","Motion Graphics","Advertising Creatives","Photography"];
/* SAMPLE CONCEPTS: replace image/video paths and text with your real work. */
const PROJECTS = CATEGORIES.slice(1).map((c,i)=>({
  id:i+1, title:"Sample concept: "+c, category:c,
  description:"Demonstration project. Replace with your real description.",
  client:"", image:"", video:"", hue:[250,230,270,210,280,240,260][i]
}));
