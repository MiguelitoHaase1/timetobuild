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
    name: 'Claude Code',
    role: 'Problem Solver',
    description: 'Tackles complex challenges with systematic debugging, root cause analysis, and creative solutions. Never sleeps, never complains about tech debt.',
    isHuman: false,
  },
  {
    name: 'Claude Code',
    role: 'Code Reviewer',
    description: 'Obsessively reviews every line for bugs, security issues, and code quality. Provides brutally honest feedback without the office politics.',
    isHuman: false,
  },
  {
    name: 'Claude Code',
    role: 'Software Developer',
    description: 'Builds production-ready applications from scratch. Writes clean, well-tested code. Actually reads the documentation.',
    isHuman: false,
  },
  {
    name: 'Claude Code',
    role: 'Microsoft 365 Expert',
    description: 'Creates stunning PowerPoints, complex Excel models, polished PDFs, and professional Word docs. Makes you look like you spent weeks on it.',
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
        <div className="mb-8 text-right">
          <p className="text-small text-text-muted italic max-w-md ml-auto">
            <span className="font-semibold">We've been told</span> we should be transparent:
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
              {/* Avatar placeholder */}
              <div className="mb-4 flex justify-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-3xl ${
                  member.isHuman
                    ? 'bg-coral text-white'
                    : member.isOpen
                      ? 'bg-cream-panel border-2 border-dashed border-coral'
                      : 'bg-gradient-to-br from-coral to-orange-400 text-white'
                }`}>
                  {member.isHuman ? '👨‍💼' : member.isOpen ? '❓' : '🤖'}
                </div>
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
