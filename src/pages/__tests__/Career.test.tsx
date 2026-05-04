import { render, screen, within } from '@testing-library/react'
import Career from '../Career'

describe('Career page', () => {
  it('renders primary heading and HCA experience', () => {
    render(<Career />)

    expect(screen.getByRole('heading', { name: 'Career' })).toBeInTheDocument()
    expect(screen.queryByText(/straightforward, reliable software/i)).not.toBeInTheDocument()
    const hcaSection = screen.getByText(/HCA Healthcare/i).closest('section')
    expect(hcaSection).toBeTruthy()
    expect(within(hcaSection as HTMLElement).getByText(/Application Engineer II/)).toBeInTheDocument()
  })

  it('lists continued education and UT callouts in the intended order', () => {
    render(<Career />)

    expect(screen.getByRole('heading', { name: 'Nashville Software School' })).toBeInTheDocument()
    expect(screen.getByText(/Full-Stack Web Development Certificate/)).toBeInTheDocument()
    expect(screen.getByText(/Environmental & Soil Science/i)).toBeInTheDocument()

    const hca = screen.getByRole('heading', { name: 'Full-stack Application Engineer' })
    const nss = screen.getByRole('heading', { name: 'Nashville Software School' })
    const state = screen.getByRole('heading', { name: 'State of Tennessee' })
    const ut = screen.getByRole('heading', { name: 'University of Tennessee, Knoxville' })

    expect(hca.compareDocumentPosition(nss) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(nss.compareDocumentPosition(state) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
    expect(state.compareDocumentPosition(ut) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
  })

  it('renders Tennessee state progression timeline', () => {
    render(<Career />)

    const timeline = screen.getByText(/Environmental Scientist progression/i).closest('section') as HTMLElement
    const roleHeadings = within(timeline).getAllByRole('heading', { level: 5 })
    expect(roleHeadings[0]).toHaveTextContent(/Environmental Scientist II/i)
    expect(roleHeadings[1]).toHaveTextContent(/Environmental Scientist I/i)
  })
})
