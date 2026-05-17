// ============================================================
// YOGI STUNT SCHOOL – SITE CONTENT
// Edit this file to update all text on the website.
// ============================================================

export const siteContent = {

  // ── NAV ──────────────────────────────────────────────────
  nav: {
    brand: "YSS",
    brandFull: "Yogi Stunt School",
    logo: "/images/yss-logo.png",
    links: ["Home", "About", "Programs", "Gallery", "Testimonials", "Contact"],
  },

  // ── HERO ─────────────────────────────────────────────────
  hero: {
    tagline: "DARE TO BE FEARLESS",
    headline: "Yogi Stunt School",
    subheadline: "Training Passion, Promoting Safety, Building Skills.",
    cta1: "Explore Programs",
    cta2: "Watch Showreel",
    badge: "East India's 1st Track-Based Stunt School · Patna, Bihar",
  },

  // ── STATS BAR ─────────────────────────────────────────────
  stats: [
    { value: "100+", label: "Students Trained" },
    { value: "15+", label: "Years Experience" },
    { value: "5", label: "Training Days/Week" },
  ],

  // ── ABOUT ────────────────────────────────────────────────
  about: {
    sectionTag: "Our Story",
    headline: "East India's Most Trusted Stunt Training Program",
    paragraphs: [
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
        highlights: ["Training Fee: ₹40,000", "Registration: ₹1,000", "Bonus on full payment: +4 sessions"],
      },
      {
        id: 3,
        icon: "🥇",
        title: "3-Month Elite",
        duration: "60 Classes (1 hr/day, 5 days/week)",
        level: "Advanced",
        desc: "Master circle wheelie, controlled drifting, human compass, headstand basics, and complete stunt flow.",
        highlights: ["Training Fee: ₹60,000", "Registration: ₹1,000", "Bonus on full payment: +10 sessions"],
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
    sectionTag: "Showreel",
    headline: "Watch Us in Action",
    subheadline: "Real stunts. Real performers. No shortcuts.",
    videos: [
      { youtubeId: '3Hcjd8KR41M', title: '1-Month Master: Basics to Control' },
      { youtubeId: '3Hcjd8KR41M', title: '2-Month Pro Rider: Flow & Drifting' },
      { youtubeId: '3Hcjd8KR41M', title: '3-Month Elite: Circle Wheelie to Full Flow' },
    ],
  },

  // ── TESTIMONIALS ─────────────────────────────────────────
  testimonials: {
    sectionTag: "Student Stories",
    headline: "What Our Students Say",
    items: [
      {
        name: "Rider Community",
        role: "YSS Student Batch",
        quote: "The timer-based sessions and private track changed our learning speed. Every class is focused and measurable.",
        rating: 5,
      },
      {
        name: "Safety First Learner",
        role: "2-Month Program",
        quote: "The best part is strict safety discipline. No gear, no practice. That mindset gives confidence and real control.",
        rating: 5,
      },
      {
        name: "Progress-Focused Student",
        role: "3-Month Elite",
        quote: "From wheelie machine basics to complete stunt flow, the progression system is clear and highly effective.",
        rating: 5,
      },
      {
        name: "Verified Results",
        role: "YSS Alumni",
        quote: "Daily tracking and social video uploads keep us accountable. Results are visible week by week.",
        rating: 5,
      },
    ],
  },

  // ── CONTACT ──────────────────────────────────────────────
  contact: {
    sectionTag: "Get In Touch",
    headline: "Start Your Journey",
    subheadline: "Registration starts at ₹1,000. Choose your slot and begin safe stunt training in Patna.",
    info: [
      { icon: "📍", label: "Location", value: "JALALPUR FUUN, opp. Gangaajal City, near Loknayak Jayaprakash Narayan Bridge, Sonepur, Sahapur Diara, Bihar 841101", url: "https://maps.app.goo.gl/R7KrFHJbtXndraK96" },
      { icon: "📞", label: "Phone", value: "+91 93344 77891" },
      { icon: "✉️", label: "Email", value: "info@yogistuntschool.com" },
      { icon: "🕐", label: "Schedule", value: "1 hr/day, 5 days/week + 1 rest day + 1 maintenance day" },
    ],
    formLabels: {
      name: "Your Name",
      email: "Email Address",
      phone: "Phone Number",
      program: "Interested Program",
      message: "Your Message",
      consent: "I agree to receive communication from Yogi Stunt School on above provided details.",
      submit: "Send Enquiry",
    },
  },

  // ── FOOTER ───────────────────────────────────────────────
  footer: {
    tagline: "Train Hard. Perform Bold. Stay Safe.",
    copyright: `© ${new Date().getFullYear()} Yogi Stunt School. All rights reserved.`,
    quickLinks: ["Home", "About", "Programs", "Gallery", "Testimonials", "Contact", "Privacy Policy", "Terms and Condition"],
    links: ["Privacy Policy", "Terms and Condition"],
    businessDetails: [
      { label: "GST No.", value: "10AALCT0135D1Z1" },
      { label: "CIN No.", value: "U85211BR2024PTC069503" },
    ],
    social: [
      { name: "Instagram", url: "https://www.instagram.com/yogi_stunt_school?utm_source=qr&igsh=MW9hOWhqa3Z3MnZ5cw==" },
      { name: "YouTube", url: "https://youtube.com/@yogistuntschool" },
      { name: "Facebook", url: "https://www.facebook.com/YOGISTUNTSCHOOL/" },
    ],
  },
}
