import { Modal } from './Modal'
import { contact } from '@/content'

interface TeamModalProps {
  isOpen: boolean
  onClose: () => void
}

interface TeamMember {
  name: string
  role: string
  description: string
  isHuman: boolean
  image?: string
  isOpen?: boolean
}

const teamMembers: TeamMember[] = [
  {
    name: 'Michael Haase',
    role: 'Founder & AI Enablement Consultant',
    description: 'VP Product at Jabra. Former Senior Director at Novo Nordisk, McKinsey Project Manager, and founder of Plant Jammer (AI food startup, €5mn raised). MSc Econometrics from LSE. Now helping companies unlock 10x productivity through AI empowerment.',
    isHuman: true,
    image: '/michael-haase.jpg',
  },
  {
    name: 'Claus',
    role: 'Problem Solver & System Architect',
    description: 'Trained on millions of GitHub repositories, Stack Overflow discussions, and technical documentation. Debugs complex multi-service architectures, traces issues across 10+ interconnected systems. MCP: GitHub integration for PR analysis. Skills: Feature Development, System Design, Root Cause Analysis.',
    isHuman: false,
    image: '/claus.png',
  },
  {
    name: 'Claudio',
    role: 'Code Reviewer & Security Auditor',
    description: 'Trained on OWASP Top 10, CVE databases, and enterprise codebases. Reviews 1000+ line PRs in seconds, catches SQL injection, XSS, and authentication flaws before they reach production. MCP: Git history analysis. Skills: Security Review, Performance Optimization, Tech Debt Detection.',
    isHuman: false,
    image: '/claudio.png',
  },
  {
    name: 'Claudia',
    role: 'Full-Stack Developer',
    description: 'Trained on React, TypeScript, Python, Node.js, and 50+ frameworks. Builds production apps from scratch—authentication, databases, APIs, testing. Deployed 100+ features across finance, healthcare, and e-commerce. MCP: Vercel, Supabase, Playwright. Skills: End-to-End Testing, CI/CD, Database Design.',
    isHuman: false,
    image: '/claudia.png',
  },
  {
    name: 'Claudieta',
    role: 'Microsoft 365 & Document Expert',
    description: 'Trained on millions of corporate presentations, financial models, and professional documents. Generates boardroom-ready PowerPoints with data visualizations, complex Excel models with pivot tables and macros, polished PDFs and Word docs. Skills: XLSX/DOCX/PPTX/PDF manipulation, Data Analysis, Visual Design.',
    isHuman: false,
    image: '/claudieta.png',
  },
  {
    name: 'Open Position',
    role: 'Claude Code Power User',
    description: `Interested in joining this journey? If you know a lot about Claude Code and want to help organizations transform how they work, reach out to ${contact.email}`,
    isHuman: false,
    isOpen: true,
  },
]

export function TeamModal({ isOpen, onClose }: TeamModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Meet the Team">
      <div className="py-4">
        {/* Humorous disclaimer */}
        <div className="mb-8">
          <p className="text-small text-text-muted italic text-center max-w-2xl mx-auto">
            "Time To Build" is Michael and his best agent friends—Claude in various
            professional disguises. Think of it as a one-person consulting firm with
            an exceptionally talented (and tireless) AI workforce. No HR issues.
            Amazing coffee budget ratio. 😊
          </p>
        </div>

        {/* Team grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`panel ${member.isOpen ? 'border-2 border-dashed border-coral' : 'bg-white'}`}
            >
              {/* Avatar */}
              <div className="mb-4 flex justify-center">
                {member.isOpen ? (
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl bg-cream-panel border-2 border-dashed border-coral">
                    ❓
                  </div>
                ) : member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-3xl bg-gradient-to-br from-coral to-orange-400 text-white">
                    🤖
                  </div>
                )}
              </div>

              <h3 className="text-lg font-serif font-semibold text-text-primary text-center mb-1">
                {member.name}
              </h3>
              <p className="text-small font-semibold text-coral text-center mb-3">
                {member.role}
              </p>
              <p className="text-small text-text-secondary text-center leading-relaxed">
                {member.description}
              </p>

              {/* LinkedIn link for Michael */}
              {member.isHuman && (
                <div className="mt-3 flex justify-center">
                  <a
                    href="https://www.linkedin.com/in/%F0%9F%8C%B1-michael-haase-5722b46/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-coral hover:text-text-primary transition-colors"
                    aria-label="LinkedIn profile"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Modal>
  )
}
