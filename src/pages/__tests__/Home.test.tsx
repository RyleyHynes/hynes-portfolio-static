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

  it('does not render legacy about me content on the home page', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    )

    expect(screen.queryByRole('heading', { name: 'About Me' })).not.toBeInTheDocument()
    expect(screen.queryByText(/environmental and healthcare sectors/i)).not.toBeInTheDocument()
    expect(screen.getByText(/I build reliable, modern software/i)).toBeInTheDocument()
  })
})
