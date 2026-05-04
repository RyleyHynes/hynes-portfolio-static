import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Projects from '@/pages/Projects'

describe('Projects page', () => {
  it('renders project cards', () => {
    render(
      <MemoryRouter>
        <Projects />
      </MemoryRouter>
    )

    expect(screen.getByText('Selected Projects')).toBeInTheDocument()
    expect(screen.getByText('Celium')).toBeInTheDocument()
    expect(screen.getByAltText('Celium project preview')).toHaveAttribute(
      'src',
      '/hynes-portfolio-static/mycelialNetwork.png'
    )
    expect(screen.queryByText(/End-to-end CRUD applications/i)).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'API Docs' })).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'View Project' })).toHaveClass('btn-primary')
    expect(screen.getByRole('link', { name: 'View Project' })).toHaveClass('btn-compact')
    expect(screen.getByRole('link', { name: 'Repository' })).toHaveClass('btn-primary')
    expect(screen.getByRole('link', { name: 'Repository' })).toHaveClass('btn-compact')
    expect(screen.getByText('Launch App')).toHaveClass('cursor-not-allowed')
    expect(screen.getByText('Launch App')).toHaveClass('btn-primary')
    expect(screen.getByText('Launch App')).toHaveClass('btn-compact')
    expect(screen.getByText('Hang tight, we are currently working on deploying celium')).toBeInTheDocument()
    expect(screen.getByText('C#')).toBeVisible()
    expect(screen.getByText('.NET')).toBeVisible()
    expect(screen.getByText('PostgreSQL')).toBeVisible()
    expect(screen.queryByText('Python/Django')).not.toBeInTheDocument()
    expect(screen.queryByText('SQLite')).not.toBeInTheDocument()
  })
})
