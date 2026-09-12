// ============================================================
// YOGI STUNT SCHOOL – SITE CONTENT
// Edit this file to update all text on the website.
// ============================================================

export const siteContent = {

  // ── NAV ──────────────────────────────────────────────────
  nav: {
    brand: "YSS",
    brandFull: "Yogi Stunt School",
    logo: "/images/image_6.png",
    links: ["Home", "About", "Programs", "Gallery", "Testimonials", "Contact", "FAQ"],
  },

  // ── HERO ─────────────────────────────────────────────────
  hero: {
    tagline: "DARE TO BE FEARLESS",
    headline: "Yogi Stunt School",
    subheadline: "Training Passion, Promoting Safety.",
    cta1: "Explore Programs",
    cta2: "Watch Showreel",
    badge: "East India's 1st Track-Based Stunt School · Patna, Bihar",
  },

  // ── STATS BAR ─────────────────────────────────────────────
  stats: [
     { value: "15+", label: "Years Experience" },
    { value: "100+", label: "Students Trained" },
    { value: "5", label: "Training Days/Week" },
  ],

  // ── ABOUT ────────────────────────────────────────────────
  about: {
    sectionTag: "Our Story",
    headline: "East India's Most Trusted Stunt Training Program",
    paragraphs: [
      "Yogi Stunt School is a motorcycle stunt training and rider education brand operated by Yogi Pvt. Ltd.",
      "Yogi Stunt School provides professional motorcycle stunt training, rider education, stunt shows, competitions and related motorsport services, with a strong focus on safety and responsible riding.",
      "Led by Sudhanshu (15+ years of experience), Yogi Stunt School is East India's first track-based stunt school built for safe, scientific stunt learning.",
      "We train on a private controlled track with timer-based sessions, daily warm-up drills, machine support, and constant supervision to ensure visible progress.",
      "Official Partners of Patna Traffic Police for road safety awareness.",
      "Our mission is clear: promote responsible riding, ban public-road stunts, and build real stunt skills through discipline and safety-first training.",
    ],
    highlights: [
      { icon: "🏁", title: "Private Track Access", desc: "All advanced stunt practice happens on controlled private tracks only." },
      { icon: "🛡️", title: "No Gear = No Practice", desc: "Mandatory safety gear and strict supervision in every session." },
      { icon: "🚦", title: "Traffic Police Collaboration", desc: "Official collaboration with Patna Traffic Police and road safety initiatives." },
    ],
  },

  // ── PROGRAMS ─────────────────────────────────────────────
  programs: {
    sectionTag: "What We Teach",
    headline: "Program Comparison",
    subheadline: "Choose your 1, 2, or 3-month track-based training journey.",
    items: [
      {
        id: 1,
        icon: "🥉",
        title: "1-Month Master",
        duration: "20 Classes (1 hr/day, 5 days/week)",
        level: "Beginner",
        desc: "Build fundamentals with wheelie machine control, zero circle basics, initial stoppie, and body balance work.",
        highlights: ["Training Fee: ₹20,000", "Registration: ₹1,000", "Bonus on full payment: +2 sessions"],
      },
      {
        id: 2,
        icon: "🥈",
        title: "2-Month Pro Rider",
        duration: "40 Classes (1 hr/day, 5 days/week)",
        level: "Intermediate",
        desc: "Progress from machine to real bike with long wheelies, rolling stoppie, drifting, and flow control.",
        highlights: ["Training Fee: ₹30,000", "Registration: ₹1,000", "Bonus on full payment: +4 sessions"],
      },
      {
        id: 3,
        icon: "🥇",
        title: "3-Month Elite",
        duration: "60 Classes (1 hr/day, 5 days/week)",
        level: "Advanced",
        desc: "Master circle wheelie, controlled drifting, human compass, headstand basics, and complete stunt flow.",
        highlights: ["Training Fee: ₹36,000", "Registration: ₹1,000", "Bonus on full payment: +10 sessions"],
      },
    ],
  },

  // ── GALLERY ──────────────────────────────────────────────
  gallery: {
    sectionTag: "Behind the Scenes",
    headline: "In Action",
    subheadline: "A glimpse into life at YSS.",
  },

  // ── VIDEO REEL ───────────────────────────────────────────
  // Replace the youtubeId values with your actual YouTube video IDs.
  // Example: for https://www.youtube.com/watch?v=dQw4w9WgXcQ, the ID is dQw4w9WgXcQ
  reel: {
    sectionTag: "In Their Words",
    headline: "Joining Videos",
    subheadline: "Real students on why they joined Yogi Stunt School.",
    videos: [
      { youtubeId: 'rp0KU4DEX28' },
      { youtubeId: 'MJy3oxVS9hQ' },
      { youtubeId: 'VRZ1Uxp0cVQ' },
      { youtubeId: 'rcpp4w7gY2U' },
      { youtubeId: 'ZxEoo7KuH8A' },
      { youtubeId: '2WMSbqswohM' },
      { youtubeId: 'sAurVN6DUXM' },
      { youtubeId: 'mnqO2f7Y-AQ' },
      { youtubeId: 'R4jEpeZZf1o' },
      { youtubeId: 'CQS-ezsYs-k' },
      { youtubeId: 'iU6velRNFvA' },
      { youtubeId: 'LcoPVC3TrjA' },
    ],
  },

  // ── TESTIMONIALS ─────────────────────────────────────────
  // Review videos, shown after-course-completion. `label` is not displayed —
  // it's used only for accessibility (screen readers / iframe title).
  testimonials: {
    sectionTag: "Student Stories",
    headline: "What Our Students Say",
    subheadline: "Review videos after course completion.",
    videos: [
      { youtubeId: 'LIuGRB5pL5Q', label: 'Raj from Giridih after 1 month review' },
      { youtubeId: 'mnqO2f7Y-AQ', label: 'Wheelie after 5 classes' },
      { youtubeId: 'KboK7rUbrM4', label: 'Sonu from Muzaffarpur after 35 classes' },
      { youtubeId: 'q8fraJisWOs', label: 'Rahul from Ranchi after 15 days' },
      { youtubeId: 'Ek4M6XRksEU', label: 'World record by Mantu from Ranchi' },
      { youtubeId: '_VPz3qouXB4', label: 'Mantu from Ranchi after 17 classes' },
      { youtubeId: 'PgSkOjiTVWI', label: 'Manoj from Gorakhpur, UP after 3 months' },
      { youtubeId: 'xycEd5VbRyY', label: 'Priyanshu from Samastipur after 3-day crash course' },
      { youtubeId: '7tRckGyZBb8', label: 'Sonu from Dhanbad after 25 days' },
      { youtubeId: 'zGleKDI2SHc', label: 'Dashrath from Bihar Sharif, day 1 reaction' },
      { youtubeId: 'c9j3T1DGrdw', label: 'Harsh from Deoghar, her mom visited our school' },
    ],
  },

  // ── CONTACT ──────────────────────────────────────────────
  contact: {
    sectionTag: "Get In Touch",
    info: [
      { icon: "📍", label: "Location One", value: "JALALPUR FUUN, opp. Gangaajal City, near Loknayak Jayaprakash Narayan Bridge, Sonepur, Sahapur Diara, Bihar 841101", url: "https://maps.app.goo.gl/R7KrFHJbtXndraK96" },
       { icon: "📍", label: "Location Two", value: "2nd Branch: Ghirne Amusement Park, Danapur Naubatpur Rd, Faridpur, Patna, Bihar 801113", url: "https://maps.app.goo.gl/F7SESpEfb33ZXzts6" },
      { icon: "📞", label: "Phone", value: "+91 9296877891" },
      { icon: "✉️", label: "Email", value: "info@yogistuntschool.com" },
    ],
    formLabels: {
      name: "Your Name",
      email: "Email Address",
      phone: "Phone Number",
      program: "Interested Program",
      addOn: "Add-On",
      message: "Your Message",
      consent: "I agree to receive communication from Yogi Stunt School on above provided details.",
      submit: "Send Enquiry",
    },
  },

  // ── FOOTER ───────────────────────────────────────────────
  footer: {
    tagline: "Training Passion, Promoting Safety.",
    copyright: `© ${new Date().getFullYear()} Yogi Stunt School. All rights reserved.`,
    quickLinks: ["Home", "About", "Programs", "Gallery", "Testimonials", "Contact", "Privacy Policy", "Terms and Condition", "FAQ"],
    links: ["Privacy Policy", "Terms and Condition", "FAQ"],
    businessDetails: [
      { label: "Brand", value: "Yogi Stunt School — A brand of Yogi Pvt. Ltd." },
      { label: "Legal Name", value: "Thriving Worldwide Yogi Private Limited" },
      { label: "Registered Office", value: "C/O: Sudhanshu Shekhar, 92, PNT Colony, SK Nagar, Phulwari, Kidwaipuri, Patna 800001, Bihar" },
      { label: "GST No.", value: "10AALCT0135D1Z1" },
      { label: "CIN No.", value: "U85211BR2024PTC069503" },
    ],
    social: [
      { name: "Instagram", url: "https://www.instagram.com/yogi_stunt_school?utm_source=qr&igsh=MW9hOWhqa3Z3MnZ5cw==" },
      { name: "YouTube", url: "https://youtube.com/@yogistuntschool" },
      { name: "Facebook", url: "https://www.facebook.com/YOGISTUNTSCHOOL/" },
      { name: "WhatsApp", url: "https://wa.me/919296877891?text=Hi%20Yogi%20Stunt%20School%2C%20I%E2%80%99m%20contacting%20you%20through%20your%20website.%20I%E2%80%99d%20like%20to%20know%20more%20about%20stunt%20training" },
    ],
  },
}
