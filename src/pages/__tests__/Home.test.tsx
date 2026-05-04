import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Home from '../Home'

describe('Home page', () => {
  it('renders hero copy and CTA buttons', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: 'Full-Stack Software Engineer' })).toBeInTheDocument()
    expect(screen.getByAltText('Ryley Hynes headshot')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Explore Projects/i })).toHaveAttribute('href', '/projects')
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '/contact')
  })

  it('renders the about me section', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument()
    expect(screen.getByText(/environmental and healthcare sectors/i)).toBeInTheDocument()
  })
})
