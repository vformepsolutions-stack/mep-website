import React from 'react'
import { X, MapPin, Building, Calendar, CheckCircle2, Shield, ArrowRight } from 'lucide-react'

export interface ProjectDetail {
  title: string
  category: string
  location: string
  client: string
  capacity: string
  year: string
  scope: string[]
  image: string
  description: string
}

interface ProjectModalProps {
  project: ProjectDetail | null
  onClose: () => void
  onContactClick: (projectName: string) => void
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onContactClick }) => {
  if (!project) return null

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content card-glass" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close project modal">
          <X size={20} />
        </button>

        <div className="modal-grid">
          <div className="modal-image-wrap">
            <img src={project.image} alt={project.title} className="modal-img" />
            <div className="modal-tag">{project.category}</div>
          </div>

          <div className="modal-details">
            <h2 className="modal-title">{project.title}</h2>

            <div className="modal-meta-grid">
              <div className="meta-item">
                <Building size={16} className="text-cyan" />
                <div>
                  <small>Client</small>
                  <strong>{project.client}</strong>
                </div>
              </div>

              <div className="meta-item">
                <MapPin size={16} className="text-cyan" />
                <div>
                  <small>Location</small>
                  <strong>{project.location}</strong>
                </div>
              </div>

              <div className="meta-item">
                <Shield size={16} className="text-cyan" />
                <div>
                  <small>System / Capacity</small>
                  <strong>{project.capacity}</strong>
                </div>
              </div>

              <div className="meta-item">
                <Calendar size={16} className="text-cyan" />
                <div>
                  <small>Completion</small>
                  <strong>{project.year}</strong>
                </div>
              </div>
            </div>

            <p className="modal-desc">{project.description}</p>

            <div className="modal-scope">
              <h4>Scope of Engineering Executed</h4>
              <ul>
                {project.scope.map((item, idx) => (
                  <li key={idx}>
                    <CheckCircle2 size={16} className="text-cyan" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="modal-actions">
              <button
                className="button button--full"
                onClick={() => {
                  onClose()
                  onContactClick(project.title)
                }}
              >
                <span>Discuss Similar Project Requirements</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
