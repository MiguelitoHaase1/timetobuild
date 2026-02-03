import { Modal } from './Modal'
import { contact } from '@/content'

interface TeamModalProps {
  isOpen: boolean
  onClose: () => void
}

const teamMembers = [
  {
    name: 'Michael Haase',
    role: 'Founder & AI Enablement Consultant',
    description: 'VP Product at Jabra. Former Senior Director at Novo Nordisk, McKinsey Project Manager, and founder of Plant Jammer (AI food startup, €5mn raised). MSc Econometrics from LSE. Now helping companies unlock 10x productivity through AI empowerment.',
    isHuman: true,
  },
  {
    name: 'Claus',
    role: 'Problem Solver & System Architect',
    description: 'Trained on millions of GitHub repositories, Stack Overflow discussions, and technical documentation. Debugs complex multi-service architectures, traces issues across 10+ interconnected systems. MCP: GitHub integration for PR analysis. Skills: Feature Development, System Design, Root Cause Analysis.',
    isHuman: false,
  },
  {
    name: 'Claudio',
    role: 'Code Reviewer & Security Auditor',
    description: 'Trained on OWASP Top 10, CVE databases, and enterprise codebases. Reviews 1000+ line PRs in seconds, catches SQL injection, XSS, and authentication flaws before they reach production. MCP: Git history analysis. Skills: Security Review, Performance Optimization, Tech Debt Detection.',
    isHuman: false,
  },
  {
    name: 'Claudia',
    role: 'Full-Stack Developer',
    description: 'Trained on React, TypeScript, Python, Node.js, and 50+ frameworks. Builds production apps from scratch—authentication, databases, APIs, testing. Deployed 100+ features across finance, healthcare, and e-commerce. MCP: Vercel, Supabase, Playwright. Skills: End-to-End Testing, CI/CD, Database Design.',
    isHuman: false,
  },
  {
    name: 'Claudieta',
    role: 'Microsoft 365 & Document Expert',
    description: 'Trained on millions of corporate presentations, financial models, and professional documents. Generates boardroom-ready PowerPoints with data visualizations, complex Excel models with pivot tables and macros, polished PDFs and Word docs. Skills: XLSX/DOCX/PPTX/PDF manipulation, Data Analysis, Visual Design.',
    isHuman: false,
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
                {member.isHuman ? (
                  <img
                    src="/michael-haase.jpg"
                    alt="Michael Haase"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                ) : (
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl ${
                    member.isOpen
                      ? 'bg-cream-panel border-2 border-dashed border-coral'
                      : 'bg-gradient-to-br from-coral to-orange-400 text-white'
                  }`}>
                    {member.isOpen ? '❓' : '🤖'}
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
            </div>
          ))}
        </div>
      </div>
    </Modal>
  )
}
