import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import { siteContent } from '../../content/siteContent'
import './Legal.css'

const LEGAL_CONTENT = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'May 6, 2026',
    sections: [
      {
        heading: 'Information We Collect',
        points: [
          'We may collect your name, email address, phone number, and training interest when you contact us.',
          'If enquiry forms are enabled later, submitted details are used only for admissions and support communication.',
          'We do not intentionally collect sensitive personal data unless required for safety or legal compliance.',
        ],
      },
      {
        heading: 'How We Use Your Information',
        points: [
          'To respond to enquiries and provide training-related information.',
          'To schedule calls, confirm program details, and share admission updates.',
          'To improve service quality and communication with students.',
        ],
      },
      {
        heading: 'Data Sharing',
        points: [
          'We do not sell your personal data.',
          'We may share data with trusted service providers (hosting, messaging, analytics) only when operationally needed.',
          'We may disclose information if required by law or competent authority.',
        ],
      },
      {
        heading: 'Data Security & Retention',
        points: [
          'Reasonable administrative and technical safeguards are used to protect personal information.',
          'Data is retained only as long as necessary for admissions, training operations, or legal compliance.',
        ],
      },
      {
        heading: 'Your Rights',
        points: [
          'You may request correction or deletion of your personal information, subject to legal obligations.',
          'You may contact us to ask how your data is being handled.',
        ],
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'May 6, 2026',
    sections: [
      {
        heading: 'Acceptance of Terms',
        points: [
          'By using this website, you agree to these Terms of Service.',
          'If you do not agree, please discontinue use of the website.',
        ],
      },
      {
        heading: 'Website Use',
        points: [
          'Content is provided for informational purposes related to Yogi Stunt School programs.',
          'You agree not to misuse the site, attempt unauthorized access, or interfere with normal operation.',
        ],
      },
      {
        heading: 'Program & Pricing Information',
        points: [
          'Program details, schedules, and pricing may change without prior notice.',
          'Final admission, payment terms, and policy details are confirmed directly by the school.',
        ],
      },
      {
        heading: 'Safety and Responsibility',
        points: [
          'Stunt training carries risk and must be performed under expert supervision in controlled environments only.',
          'Public-road stunt riding is prohibited and not endorsed by Yogi Stunt School.',
        ],
      },
      {
        heading: 'Limitation of Liability',
        points: [
          'To the maximum extent permitted by law, Yogi Stunt School is not liable for indirect or consequential damages arising from website use.',
          'Users are responsible for verifying critical program decisions directly with official school contacts.',
        ],
      },
      {
        heading: 'Governing Law',
        points: [
          'These terms are governed by applicable laws of India.',
          'Any disputes are subject to jurisdiction of competent courts in Bihar.',
        ],
      },
    ],
  },
  faq: {
    title: 'Frequently Asked Questions',
    lastUpdated: 'May 31, 2026',
    categories: [
      {
        key: 'training-learning',
        label: 'Training & Learning',
        sections: [
          {
            heading: 'Do beginners join?',
            points: [
              'Yes.',
              'Most students join with little or no stunt riding experience. Training starts with foundational drills and progresses step-by-step toward advanced techniques.',
            ],
          },
          {
            heading: 'Which motorcycle do I need for stunt training?',
            points: [
              'You can start learning stunt riding on almost any motorcycle, even a 100cc bike.',
              'Bringing your own motorcycle is optional.',
              'You can use your own bike or rent a training motorcycle from Yogi Stunt School, subject to availability.',
            ],
          },
          {
            heading: 'Can people above 35 or 40 years old learn stunt riding?',
            points: [
              'Absolutely.',
              'Age is not the deciding factor. Proper training, discipline, and consistency matter more.',
              'We have successfully trained multiple students above 35 years of age, including doctors, lawyers, police officers, and business owners.',
              'Since training is conducted in a controlled and supervised environment, many mature riders learn efficiently and safely.',
            ],
          },
          {
            heading: 'How long does it take to learn a wheelie?',
            points: [
              'Learning speed varies from student to student.',
              'Factors include riding experience, confidence, consistency, and practice quality.',
              'However, approximately 95% of our students learn wheelie fundamentals within one month of structured training.',
            ],
          },
          {
            heading: "What if I don't learn a wheelie within one month?",
            points: [
              'Every student learns at a different pace.',
              'While approximately 95% of students learn wheelie fundamentals within one month, some riders require additional practice and coaching.',
              'If you are looking for a more assured learning path, special training packages with additional support and specific learning conditions may be available. Please contact us for details.',
            ],
          },
          {
            heading: 'Will I start doing wheelies on the first day?',
            points: [
              'No.',
              'Students first learn safety procedures, bike control, balance, body positioning, and essential riding fundamentals before progressing toward wheelie training.',
            ],
          },
          {
            heading: 'Is stunt riding only about wheelies?',
            points: ['No.', 'Stunt riding includes:'],
            bullets: [
              'Wheelies',
              'Stoppies',
              'Balance control',
              'Slow-speed control',
              'Motorcycle handling skills',
              'Rider confidence and control',
            ],
          },
          {
            heading: 'Do you guarantee that I will learn stunts?',
            points: [
              'Standard training programs focus on coaching, guidance, and skill development.',
              'For students looking for guaranteed learning outcomes, special training packages with additional conditions and requirements may be available. Please contact us for details.',
            ],
          },
        ],
      },
      {
        key: 'safety-legal',
        label: 'Safety & Legal',
        sections: [
          {
            heading: 'Is stunt riding safe?',
            points: [
              'Stunt riding involves risk, but training at Yogi Stunt School is conducted in a controlled practice environment under expert supervision with strict safety protocols.',
              'All training focuses on safe and responsible riding practices.',
            ],
          },
          {
            heading: 'Can I perform stunts on public roads after training?',
            points: [
              'No.',
              'Yogi Stunt School strongly discourages performing stunts on public roads.',
              'We actively promote road safety and responsible riding.',
              'We have worked closely with Patna Traffic Police on road safety awareness programs and campaigns promoting safe riding practices and discouraging stunt riding on public roads.',
              'Our goal is to create skilled riders who respect traffic rules and understand rider responsibility.',
              '#FollowTrafficRules #DontStuntOnRoads',
            ],
          },
          {
            heading: 'Safety gear required?',
            points: ['Yes.', 'The following safety gear is mandatory for all students:', 'No safety gear means no practice.'],
            bullets: ['Helmet', 'Riding Jacket', 'Elbow Guards', 'Gloves', 'Riding Shoes'],
          },
          {
            heading: 'Will I damage my motorcycle while learning?',
            points: [
              'Minor wear and tear is possible in any riding activity.',
              'However, our structured training methods are designed to reduce unnecessary damage and help students learn progressively rather than through repeated crashes.',
              'Students are taught proper techniques, bike control, and risk management from day one.',
            ],
          },
          {
            heading: 'What is the biggest mistake beginners make?',
            points: [
              'Trying to learn from social media videos without proper guidance.',
              'Most accidents happen when riders skip fundamentals, safety procedures, and structured training.',
            ],
          },
        ],
      },
      {
        key: 'fees-enrollment',
        label: 'Fees & Enrollment',
        sections: [
          {
            heading: 'Training duration?',
            points: [
              'You can choose a 1-month, 2-month, or 3-month training program depending on your goals, experience level, and desired learning outcomes.',
            ],
          },
          {
            heading: 'Course fees?',
            points: ['Current training fees are:', 'Please contact the team for complete enrollment details and current offers.'],
            bullets: [
              '1 Month Training: ₹20,000',
              '2 Month Training: ₹30,000',
              '3 Month Training: ₹36,000',
            ],
          },
          {
            heading: 'Hostel availability?',
            points: [
              'Accommodation support can be arranged through optional add-on facilities.',
              'Please contact the team for current availability and pricing.',
            ],
          },
          {
            heading: 'Minimum age?',
            points: [
              'Minimum age depends on safety assessment, physical capability, and batch requirements.',
              'Please contact Yogi Stunt School to confirm eligibility.',
            ],
          },
          {
            heading: 'Will I get a certificate?',
            points: [
              'Yes.',
              'Students enrolled in a minimum 2-month training package are eligible to receive a training completion certificate from Yogi Stunt School.',
            ],
          },
          {
            heading: 'How do I join a batch?',
            points: ['Fill out the enquiry form or contact us directly through WhatsApp.', 'Our team will guide you regarding:'],
            bullets: [
              'Batch availability',
              'Training plans',
              'Fees',
              'Accommodation options',
              'Enrollment procedures',
            ],
          },
        ],
      },
      {
        key: 'career-future',
        label: 'Career & Future',
        sections: [
          {
            heading: 'What career opportunities exist after learning stunt riding?',
            points: ['Career opportunities may include:', 'Success depends on skill level, professionalism, consistency, and experience.'],
            bullets: [
              'Professional Stunt Athlete',
              'Brand Demonstrations',
              'Motorcycle Events',
              'Safety Awareness Programs',
              'Content Creation',
              'Film and Commercial Stunt Work',
            ],
          },
          {
            heading: 'Can stunt riding become a full-time career?',
            points: [
              'Yes.',
              'Many riders earn through performances, sponsorships, content creation, training, and commercial stunt work.',
              'Like any sport, long-term success requires dedication, skill development, discipline, and continuous practice.',
            ],
          },
          {
            heading: 'Why should I learn from Yogi Stunt School instead of YouTube?',
            points: [
              'YouTube can show techniques.',
              'A professional coach can identify mistakes, correct bad habits, and provide immediate feedback.',
              'Structured training helps riders learn faster, safer, and with significantly lower risk.',
              'Yogi Stunt School has trained 100+ students and has collaborated with Traffic Police on road safety awareness initiatives, making it one of the most experienced stunt training institutes in the region.',
            ],
          },
        ],
      },
    ],
  },
}

function LegalContent({ type }) {
  const content = LEGAL_CONTENT[type]
  const [activeFaqCategory, setActiveFaqCategory] = useState(
    LEGAL_CONTENT.faq.categories[0].key
  )

  useEffect(() => {
    if (type === 'faq') {
      setActiveFaqCategory(LEGAL_CONTENT.faq.categories[0].key)
    }
  }, [type])

  if (!content) return null

  const isFaq = type === 'faq'
  const activeCategory = isFaq
    ? content.categories.find(category => category.key === activeFaqCategory) || content.categories[0]
    : null

  return (
    <>
      <h2 className="legal__title">{content.title}</h2>
      <p className="legal__updated">Last updated: {content.lastUpdated}</p>
      {isFaq ? (
        <>
          <div className="legal__faq-tabs">
            {content.categories.map(category => (
              <button
                key={category.key}
                className={`legal__faq-tab ${activeFaqCategory === category.key ? 'legal__faq-tab--active' : ''}`}
                onClick={() => setActiveFaqCategory(category.key)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="legal__sections">
            {activeCategory.sections.map((section, idx) => (
              <section key={idx} className="legal__section">
                <h3>{section.heading}</h3>
                <div className="legal__lead-lines">
                  {section.points.map((point, pointIndex) => (
                    <p key={pointIndex}>{point}</p>
                  ))}
                </div>
                {section.bullets && (
                  <ul className="legal__list-tight">
                    {section.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </>
      ) : (
        <div className="legal__sections">
          {content.sections.map((section, idx) => (
            <section key={idx} className="legal__section">
              <h3>{section.heading}</h3>
              <ul>
                {section.points.map((point, pointIndex) => (
                  <li key={pointIndex}>{point}</li>
                ))}
              </ul>
            </section>
          ))}

          <section className="legal__section legal__section--business">
            <h3>Business Information</h3>
            <ul>
              {siteContent.footer.businessDetails.map(item => (
                <li key={item.label}><strong>{item.label}</strong> {item.value}</li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </>
  )
}

export function LegalModal({ type, onClose, onOpenPage }) {
  if (!type) return null

  return (
    <div className="legal-modal" onClick={onClose} role="presentation">
      <div className="legal-modal__panel" onClick={e => e.stopPropagation()}>
        <button className="legal-modal__close" onClick={onClose} aria-label="Close legal popup">✕</button>
        <LegalContent type={type} />
        <div className="legal-modal__actions">
          <button className="btn btn-outline" onClick={onClose}>Close</button>
          <button className="btn btn-primary" onClick={() => onOpenPage(type)}>Open Full Page</button>
        </div>
      </div>
    </div>
  )
}

export function LegalPage({ type, onBack }) {
  return (
    <>
      <Navbar />
      <main className="legal-page">
        <div className="container legal-page__inner">
          <LegalContent type={type} />
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
