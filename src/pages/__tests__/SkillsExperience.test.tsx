import { render, screen } from '@testing-library/react'
import SkillsExperience from '../SkillsExperience'

describe('SkillsExperience page', () => {
  it('highlights tech stack intro', () => {
    render(<SkillsExperience />)

    expect(screen.getByRole('heading', { name: 'Tech Stack & Skills' })).toBeInTheDocument()
    expect(screen.getByText(/Full-stack engineer/i)).toBeInTheDocument()
  })

  it('renders all category cards with sample items', () => {
    render(<SkillsExperience />)

    expect(screen.getByRole('heading', { name: 'Frontend Engineering' })).toBeInTheDocument()
    expect(screen.getByText('TypeScript')).toBeVisible()
    expect(screen.getByRole('heading', { name: 'Backend & API Development' })).toBeInTheDocument()
    expect(screen.getByText('C#/.NET')).toBeVisible()
    expect(screen.getByRole('heading', { name: 'Testing & Quality' })).toBeInTheDocument()
    expect(screen.getByText('Vitest')).toBeVisible()
    expect(screen.getByRole('heading', { name: 'DevOps & Delivery' })).toBeInTheDocument()
    expect(screen.getByText('Azure DevOps pipelines')).toBeVisible()
  })

  it('omits narrative sections after the four main cards', () => {
    render(<SkillsExperience />)

    expect(screen.queryByRole('heading', { name: /What I’m Good At/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /How I Work/i })).not.toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /Recent Experience Highlights/i })).not.toBeInTheDocument()
    expect(screen.queryByText(/React\/TypeScript frontends/i)).not.toBeInTheDocument()
  })
})
