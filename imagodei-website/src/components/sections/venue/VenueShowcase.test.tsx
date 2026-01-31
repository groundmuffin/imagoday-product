import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { VenueShowcase } from './VenueShowcase'
import type { Venue } from '@/types'

// Mock data
const mockVenue: Venue = {
  id: 'venue-001',
  name: 'Palatul Episcopal Romano Catolic',
  city: 'Oradea',
  country: 'România',
  description: 'Un cadru arhitectural și cultural de excepție.',
  photoUrl: '/images/venue/episcopal-palace-interior.jpg',
  photoAlt: 'Interior of the Roman Catholic Episcopal Palace',
  googleMapsUrl: 'https://maps.google.com/?q=Palatul+Episcopal+Romano+Catolic+Oradea',
}

const mockTranslations = {
  getDirections: 'Obține Indicații',
}

describe('VenueShowcase', () => {
  describe('Flow 1: View Venue Information', () => {
    it('renders the venue name prominently', () => {
      render(
        <VenueShowcase
          venue={mockVenue}
          translations={mockTranslations}
        />
      )
      expect(screen.getByRole('heading', { name: mockVenue.name })).toBeInTheDocument()
    })

    it('renders the location badge with city and country', () => {
      render(
        <VenueShowcase
          venue={mockVenue}
          translations={mockTranslations}
        />
      )
      expect(screen.getByText('Oradea, România')).toBeInTheDocument()
    })

    it('renders the venue description', () => {
      render(
        <VenueShowcase
          venue={mockVenue}
          translations={mockTranslations}
        />
      )
      expect(screen.getByText(mockVenue.description)).toBeInTheDocument()
    })

    it('renders the background photo with correct alt text', () => {
      render(
        <VenueShowcase
          venue={mockVenue}
          translations={mockTranslations}
        />
      )
      const img = screen.getByRole('img', { name: mockVenue.photoAlt })
      expect(img).toBeInTheDocument()
      // Next.js Image component transforms src to optimized URL
      expect(img.getAttribute('src')).toContain(encodeURIComponent(mockVenue.photoUrl))
    })

    it('renders the Get Directions button', () => {
      render(
        <VenueShowcase
          venue={mockVenue}
          translations={mockTranslations}
        />
      )
      expect(screen.getByRole('button', { name: /Obține Indicații/i })).toBeInTheDocument()
    })

    it('has accessible section landmark with id="venue"', () => {
      const { container } = render(
        <VenueShowcase
          venue={mockVenue}
          translations={mockTranslations}
        />
      )
      const section = container.querySelector('section#venue')
      expect(section).toBeInTheDocument()
    })
  })

  describe('Flow 2: Get Directions', () => {
    it('calls onGetDirections when button is clicked', () => {
      const onGetDirections = vi.fn()
      render(
        <VenueShowcase
          venue={mockVenue}
          translations={mockTranslations}
          onGetDirections={onGetDirections}
        />
      )

      fireEvent.click(screen.getByRole('button', { name: /Obține Indicații/i }))
      expect(onGetDirections).toHaveBeenCalledTimes(1)
    })

    it('works without onGetDirections callback (optional prop)', () => {
      render(
        <VenueShowcase
          venue={mockVenue}
          translations={mockTranslations}
        />
      )

      // Should not throw when clicking without callback
      expect(() => {
        fireEvent.click(screen.getByRole('button', { name: /Obține Indicații/i }))
      }).not.toThrow()
    })
  })

  describe('Component Interaction Tests', () => {
    it('renders full-screen height section', () => {
      const { container } = render(
        <VenueShowcase
          venue={mockVenue}
          translations={mockTranslations}
        />
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('min-h-screen')
    })

    it('renders gradient overlays for text contrast', () => {
      const { container } = render(
        <VenueShowcase
          venue={mockVenue}
          translations={mockTranslations}
        />
      )
      const gradients = container.querySelectorAll('.bg-gradient-to-t, .bg-gradient-to-r')
      expect(gradients.length).toBeGreaterThan(0)
    })

    it('renders corner geometric accent', () => {
      const { container } = render(
        <VenueShowcase
          venue={mockVenue}
          translations={mockTranslations}
        />
      )
      // Corner accent has specific positioning
      const cornerAccent = container.querySelector('.right-8.top-8, .sm\\:right-12.sm\\:top-12')
      expect(cornerAccent).toBeInTheDocument()
    })

    it('button has focus ring for keyboard accessibility', () => {
      render(
        <VenueShowcase
          venue={mockVenue}
          translations={mockTranslations}
        />
      )
      const button = screen.getByRole('button', { name: /Obține Indicații/i })
      expect(button.className).toContain('focus:ring')
    })
  })

  describe('Edge Cases', () => {
    it('handles long venue name', () => {
      const longNameVenue: Venue = {
        ...mockVenue,
        name: 'This Is A Very Long Venue Name That Should Wrap Appropriately On Smaller Screens',
      }
      render(
        <VenueShowcase
          venue={longNameVenue}
          translations={mockTranslations}
        />
      )
      expect(screen.getByRole('heading', { name: longNameVenue.name })).toBeInTheDocument()
    })

    it('handles long description', () => {
      const longDescVenue: Venue = {
        ...mockVenue,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '.repeat(10).trim(),
      }
      render(
        <VenueShowcase
          venue={longDescVenue}
          translations={mockTranslations}
        />
      )
      expect(screen.getByText(longDescVenue.description)).toBeInTheDocument()
    })

    it('renders with different photo URL', () => {
      const differentPhotoVenue: Venue = {
        ...mockVenue,
        photoUrl: '/images/alternate-venue.jpg',
      }
      render(
        <VenueShowcase
          venue={differentPhotoVenue}
          translations={mockTranslations}
        />
      )
      const img = screen.getByRole('img')
      // Next.js Image component transforms src to optimized URL
      expect(img.getAttribute('src')).toContain(encodeURIComponent('/images/alternate-venue.jpg'))
    })
  })
})
