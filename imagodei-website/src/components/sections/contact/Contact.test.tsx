import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from './Contact'

const mockContactProps = {
  closingQuote: 'Test quote for the closing section.',
  contacts: [
    {
      id: 'contact-1',
      email: 'test@example.com',
      label: 'Test Contact',
    },
    {
      id: 'contact-2',
      email: 'another@example.com',
      label: 'Another Contact',
    },
  ],
}

const mockEmptyContacts = {
  closingQuote: 'Test quote',
  contacts: [],
}

describe('Contact', () => {
  describe('Flow 1: View Contact Information', () => {
    it('renders the closing quote prominently', () => {
      render(<Contact {...mockContactProps} />)

      expect(screen.getByText(mockContactProps.closingQuote)).toBeInTheDocument()
    })

    it('displays decorative quotation mark', () => {
      render(<Contact {...mockContactProps} />)

      // The quotation mark is aria-hidden, so we check by its content (rendered as left double quote)
      const quoteMark = screen.getByText('\u201C')
      expect(quoteMark).toBeInTheDocument()
      expect(quoteMark).toHaveAttribute('aria-hidden', 'true')
    })

    it('displays both email links with labels', () => {
      render(<Contact {...mockContactProps} />)

      expect(screen.getByText('Test Contact')).toBeInTheDocument()
      expect(screen.getByText('test@example.com')).toBeInTheDocument()
      expect(screen.getByText('Another Contact')).toBeInTheDocument()
      expect(screen.getByText('another@example.com')).toBeInTheDocument()
    })

    it('has decorative divider between quote and contacts', () => {
      const { container } = render(<Contact {...mockContactProps} />)

      // Check for the divider structure (the dot element)
      const dividerDot = container.querySelector('.rounded-full.bg-sky-400\\/60')
      expect(dividerDot).toBeInTheDocument()
    })
  })

  describe('Flow 2: Click Email Link', () => {
    it('calls onEmailClick callback when email link is clicked', async () => {
      const user = userEvent.setup()
      const onEmailClick = vi.fn()

      render(<Contact {...mockContactProps} onEmailClick={onEmailClick} />)

      const emailLink = screen.getByRole('link', { name: /test@example.com/i })
      await user.click(emailLink)

      expect(onEmailClick).toHaveBeenCalledWith('test@example.com')
    })

    it('has mailto: href on email links', () => {
      render(<Contact {...mockContactProps} />)

      const emailLinks = screen.getAllByRole('link')
      expect(emailLinks[0]).toHaveAttribute('href', 'mailto:test@example.com')
      expect(emailLinks[1]).toHaveAttribute('href', 'mailto:another@example.com')
    })

    it('email links are keyboard accessible', () => {
      render(<Contact {...mockContactProps} />)

      const emailLinks = screen.getAllByRole('link')
      emailLinks.forEach((link) => {
        expect(link).not.toHaveAttribute('tabindex', '-1')
      })
    })
  })

  describe('Component Rendering', () => {
    it('renders section with aria-labelledby for accessibility', () => {
      render(<Contact {...mockContactProps} />)

      const section = screen.getByRole('region')
      expect(section).toHaveAttribute('aria-labelledby', 'contact-heading')
    })

    it('has the correct id for navigation', () => {
      const { container } = render(<Contact {...mockContactProps} />)

      const section = container.querySelector('#contact')
      expect(section).toBeInTheDocument()
    })

    it('applies dark background styling', () => {
      const { container } = render(<Contact {...mockContactProps} />)

      const section = container.querySelector('section')
      expect(section).toHaveClass('bg-zinc-950')
    })

    it('renders mail icons for each contact', () => {
      const { container } = render(<Contact {...mockContactProps} />)

      // Lucide icons render as SVG elements
      const svgIcons = container.querySelectorAll('svg')
      expect(svgIcons.length).toBe(mockContactProps.contacts.length)
    })
  })

  describe('Empty State', () => {
    it('still displays the quote when contacts array is empty', () => {
      render(<Contact {...mockEmptyContacts} />)

      expect(screen.getByText('Test quote')).toBeInTheDocument()
    })

    it('does not break layout with no contacts', () => {
      const { container } = render(<Contact {...mockEmptyContacts} />)

      const section = container.querySelector('section')
      expect(section).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('handles long quote text', () => {
      const longQuote =
        'This is a very long quote that should wrap appropriately on the page without breaking the layout. It contains multiple sentences and tests the responsiveness of the text container.'

      render(<Contact closingQuote={longQuote} contacts={[]} />)

      expect(screen.getByText(longQuote)).toBeInTheDocument()
    })

    it('handles long email addresses', () => {
      const props = {
        closingQuote: 'Test',
        contacts: [
          {
            id: 'long-email',
            email: 'verylongemailaddress.that.might.break.layout@example.com',
            label: 'Long Email',
          },
        ],
      }

      render(<Contact {...props} />)

      expect(
        screen.getByText('verylongemailaddress.that.might.break.layout@example.com')
      ).toBeInTheDocument()
    })
  })
})
