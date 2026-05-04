import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import CeliumProject from '@/pages/projects/CeliumProject'

describe('Celium project page', () => {
  it('renders key project messaging', () => {
    render(
      <MemoryRouter>
        <CeliumProject />
      </MemoryRouter>
    )

    expect(screen.getByText('Celium')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Back to Projects/i })).toHaveAttribute('href', '/projects')
    expect(screen.getByText('Built on connection.')).toBeInTheDocument()
    expect(screen.getByText('What it delivers')).toBeInTheDocument()
    expect(screen.getByText('Explore')).toBeInTheDocument()
  })
})
