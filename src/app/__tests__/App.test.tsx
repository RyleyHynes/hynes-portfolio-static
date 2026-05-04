import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from '../App'

describe('App shell', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('renders primary navigation links', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '/projects')
    expect(screen.queryByRole('link', { name: 'Celium' })).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Career' })).toBeInTheDocument()
  })

  it('places Projects after Career in the nav', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    const career = screen.getByRole('link', { name: 'Career' })
    const projects = screen.getByRole('link', { name: 'Projects' })
    expect(career.compareDocumentPosition(projects) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('keeps the current nav item blue', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: 'Projects' })).toHaveClass('navlink-active')
  })

  it('places About Me after Tech Stack & Skills in the nav', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    )

    const skills = screen.getByRole('link', { name: 'Tech Stack & Skills' })
    const about = screen.getByRole('link', { name: 'About Me' })
    expect(skills.compareDocumentPosition(about) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('exposes accessibility skip link', () => {
    render(
      <MemoryRouter initialEntries={['/projects']}>
        <App />
      </MemoryRouter>
    )

    expect(screen.getByRole('link', { name: /skip to content/i })).toHaveAttribute('href', '#content')
  })
})
