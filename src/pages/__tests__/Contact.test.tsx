import { render, screen, within } from '@testing-library/react'
import Contact from '../Contact'
import { profile } from '@/data/profile'

describe('Contact page', () => {
  it('renders the contact heading without helper pitch content', () => {
    render(<Contact />)

    expect(screen.getByRole('heading', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.queryByText(/Ways I can help/)).not.toBeInTheDocument()
    expect(screen.queryByText('UI engineering')).not.toBeInTheDocument()
  })

  it('shows key contact links with correct targets', () => {
    render(<Contact />)

    const phoneHref = `tel:${profile.phone.replace(/[^0-9+]/g, '')}`
    expect(screen.getByRole('link', { name: profile.phone })).toHaveAttribute('href', phoneHref)
    expect(screen.getByRole('link', { name: profile.email })).toHaveAttribute('href', `mailto:${profile.email}`)
    const linkedinCard = screen.getByText('LinkedIn').closest('li') as HTMLElement
    expect(within(linkedinCard).getByRole('link', { name: /@ryleyhynes/i })).toHaveAttribute('href', profile.linkedin)
    const githubCard = screen.getByText('GitHub').closest('li') as HTMLElement
    expect(within(githubCard).getByRole('link', { name: /@RyleyHynes/i })).toHaveAttribute('href', profile.github)
  })
})
