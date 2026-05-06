import React from 'react'
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
}

function LegalContent({ type }) {
  const content = LEGAL_CONTENT[type]
  if (!content) return null

  return (
    <>
      <h2 className="legal__title">{content.title}</h2>
      <p className="legal__updated">Last updated: {content.lastUpdated}</p>
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
      </div>
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
    <main className="legal-page">
      <div className="container legal-page__inner">
        <LegalContent type={type} />
        <div className="legal-page__actions">
          <button className="btn btn-primary" onClick={onBack}>Close</button>
        </div>
      </div>
    </main>
  )
}
