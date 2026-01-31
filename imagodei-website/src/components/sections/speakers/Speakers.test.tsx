import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Speakers } from './Speakers'
import { SpeakerCard } from './SpeakerCard'
import type { Speaker } from '@/types'

// Mock speaker data
const mockFeaturedSpeakers: Speaker[] = [
  {
    id: 'speaker-001',
    name: 'Dr. Noreen Herzfeld',
    title: 'Professor of Theology and Computer Science',
    expertise: 'AI & Ethics',
    featured: true,
    photo: '/speakers/noreen-herzfeld.jpg',
    bio: 'Dr. Noreen Herzfeld is a professor of Theology and Computer Science at College of Saint Benedict.',
  },
  {
    id: 'speaker-002',
    name: 'Timmy Ghiurău',
    title: 'Innovation Director, Volvo Cars',
    expertise: 'Innovation & Futures',
    featured: true,
    photo: '/speakers/timmy-ghiurau.jpg',
    bio: 'Timmy Ghiurău is an innovation director and technology ethics architect.',
  },
]

const mockOtherSpeakers: Speaker[] = [
  {
    id: 'speaker-003',
    name: 'Dr. Natan Mladin',
    title: 'Senior Researcher, Theos Think Tank',
    expertise: 'Technology Ethics & Theology',
    featured: false,
    photo: '/speakers/natan-mladin.jpg',
    bio: 'Natan Mladin is a Senior Researcher in technology ethics at Theos think tank in London.',
  },
  {
    id: 'speaker-004',
    name: 'Dr. Susana Dragomir',
    title: 'Founder & Director, EU SPIN',
    expertise: 'Strategic Communication',
    featured: false,
    photo: '/speakers/susana-dragomir.jpg',
    bio: 'Dr. Susana Dragomir is an expert in strategic communication.',
  },
  {
    id: 'speaker-005',
    name: 'Daniel Alb',
    title: 'VP of Product, Faithbase',
    expertise: 'Technology & AI',
    featured: false,
    photo: '/speakers/daniel-alb.jpg',
    bio: 'Daniel Alb is a product leader and entrepreneur in technology and AI.',
  },
]

const allSpeakers = [...mockFeaturedSpeakers, ...mockOtherSpeakers]

// Mock translations
const mockTranslations = {
  title: 'Speakers',
  subtitle: 'Keynote & Facilitators',
  description: 'World-renowned experts in artificial intelligence, ethics, and theology',
  keynoteSpeakers: 'Keynote Speakers',
  facilitators: 'Facilitators & Panelists',
  clickToReadBio: 'Click to read bio',
  clickToCollapse: 'Click to collapse',
}

describe('Speakers Section', () => {
  describe('Flow 1: View Speakers', () => {
    it('renders the section title', () => {
      render(<Speakers speakers={allSpeakers} translations={mockTranslations} />)
      expect(screen.getByRole('heading', { name: mockTranslations.title })).toBeInTheDocument()
    })

    it('renders the subtitle', () => {
      render(<Speakers speakers={allSpeakers} translations={mockTranslations} />)
      expect(screen.getByText(mockTranslations.subtitle)).toBeInTheDocument()
    })

    it('renders featured speakers at the top', () => {
      render(<Speakers speakers={allSpeakers} translations={mockTranslations} />)
      mockFeaturedSpeakers.forEach((speaker) => {
        expect(screen.getByText(speaker.name)).toBeInTheDocument()
      })
    })

    it('renders other speakers in the grid below', () => {
      render(<Speakers speakers={allSpeakers} translations={mockTranslations} />)
      mockOtherSpeakers.forEach((speaker) => {
        expect(screen.getByText(speaker.name)).toBeInTheDocument()
      })
    })

    it('displays speaker titles', () => {
      render(<Speakers speakers={allSpeakers} translations={mockTranslations} />)
      allSpeakers.forEach((speaker) => {
        expect(screen.getByText(speaker.title)).toBeInTheDocument()
      })
    })
  })

  describe('Flow 2: Expand Speaker Bio', () => {
    it('shows "Click to read bio" hint on each card', () => {
      render(<Speakers speakers={allSpeakers} translations={mockTranslations} />)
      const hints = screen.getAllByText(mockTranslations.clickToReadBio)
      expect(hints.length).toBe(allSpeakers.length)
    })

    it('expands bio when card is clicked', async () => {
      const user = userEvent.setup()
      render(<Speakers speakers={allSpeakers} translations={mockTranslations} />)

      const speakerCard = screen.getByText(mockFeaturedSpeakers[0].name).closest('article')
      expect(speakerCard).toHaveAttribute('aria-expanded', 'false')

      await user.click(speakerCard!)
      expect(speakerCard).toHaveAttribute('aria-expanded', 'true')
      // Bio text is in the document (CSS transitions handle visibility)
      expect(screen.getByText(mockFeaturedSpeakers[0].bio)).toBeInTheDocument()
    })

    it('calls onExpand callback with speaker id when expanded', async () => {
      const user = userEvent.setup()
      const onExpand = vi.fn()
      render(<Speakers speakers={allSpeakers} translations={mockTranslations} onExpand={onExpand} />)

      const speakerCard = screen.getByText(mockFeaturedSpeakers[0].name).closest('article')
      await user.click(speakerCard!)

      expect(onExpand).toHaveBeenCalledWith(mockFeaturedSpeakers[0].id)
    })

    it('changes hint text to "Click to collapse" when expanded', async () => {
      const user = userEvent.setup()
      render(<Speakers speakers={allSpeakers} translations={mockTranslations} />)

      const speakerCard = screen.getByText(mockFeaturedSpeakers[0].name).closest('article')
      await user.click(speakerCard!)

      expect(screen.getByText(mockTranslations.clickToCollapse)).toBeInTheDocument()
    })
  })

  describe('Flow 3: Collapse Speaker Bio', () => {
    it('collapses bio when expanded card is clicked again', async () => {
      const user = userEvent.setup()
      render(<Speakers speakers={allSpeakers} translations={mockTranslations} />)

      const speakerCard = screen.getByText(mockFeaturedSpeakers[0].name).closest('article')

      // Expand
      await user.click(speakerCard!)
      expect(speakerCard).toHaveAttribute('aria-expanded', 'true')

      // Collapse
      await user.click(speakerCard!)
      expect(speakerCard).toHaveAttribute('aria-expanded', 'false')
    })

    it('calls onCollapse callback with speaker id when collapsed', async () => {
      const user = userEvent.setup()
      const onCollapse = vi.fn()
      render(<Speakers speakers={allSpeakers} translations={mockTranslations} onCollapse={onCollapse} />)

      const speakerCard = screen.getByText(mockFeaturedSpeakers[0].name).closest('article')

      // Expand then collapse
      await user.click(speakerCard!)
      await user.click(speakerCard!)

      expect(onCollapse).toHaveBeenCalledWith(mockFeaturedSpeakers[0].id)
    })
  })

  describe('Keyboard Accessibility', () => {
    it('can be toggled with Enter key', async () => {
      const user = userEvent.setup()
      render(<Speakers speakers={allSpeakers} translations={mockTranslations} />)

      const speakerCard = screen.getByText(mockFeaturedSpeakers[0].name).closest('article')
      speakerCard?.focus()

      await user.keyboard('{Enter}')
      expect(speakerCard).toHaveAttribute('aria-expanded', 'true')

      await user.keyboard('{Enter}')
      expect(speakerCard).toHaveAttribute('aria-expanded', 'false')
    })

    it('can be toggled with Space key', async () => {
      const user = userEvent.setup()
      render(<Speakers speakers={allSpeakers} translations={mockTranslations} />)

      const speakerCard = screen.getByText(mockFeaturedSpeakers[0].name).closest('article')
      speakerCard?.focus()

      await user.keyboard(' ')
      expect(speakerCard).toHaveAttribute('aria-expanded', 'true')
    })

    it('has tabIndex for keyboard navigation', () => {
      render(<Speakers speakers={allSpeakers} translations={mockTranslations} />)

      const speakerCards = screen.getAllByRole('button')
      speakerCards.forEach((card) => {
        expect(card).toHaveAttribute('tabIndex', '0')
      })
    })
  })

  describe('Empty State', () => {
    it('renders gracefully with empty speakers array', () => {
      render(<Speakers speakers={[]} translations={mockTranslations} />)
      // Section should render but not show speaker content
      expect(screen.getByRole('heading', { name: mockTranslations.title })).toBeInTheDocument()
    })

    it('works with only featured speakers', () => {
      render(<Speakers speakers={mockFeaturedSpeakers} translations={mockTranslations} />)
      expect(screen.getByText(mockFeaturedSpeakers[0].name)).toBeInTheDocument()
      expect(screen.getByText(mockFeaturedSpeakers[1].name)).toBeInTheDocument()
    })

    it('works with only non-featured speakers', () => {
      render(<Speakers speakers={mockOtherSpeakers} translations={mockTranslations} />)
      mockOtherSpeakers.forEach((speaker) => {
        expect(screen.getByText(speaker.name)).toBeInTheDocument()
      })
    })
  })
})

describe('SpeakerCard Component', () => {
  const mockSpeaker = mockFeaturedSpeakers[0]
  const cardTranslations = {
    clickToReadBio: 'Click to read bio',
    clickToCollapse: 'Click to collapse',
  }

  it('renders speaker photo with alt text', () => {
    render(<SpeakerCard speaker={mockSpeaker} translations={cardTranslations} />)
    const image = screen.getByRole('img', { name: mockSpeaker.name })
    // Next.js Image component transforms src to optimized URL
    expect(image.getAttribute('src')).toContain(encodeURIComponent(mockSpeaker.photo))
  })

  it('renders speaker name in bold', () => {
    render(<SpeakerCard speaker={mockSpeaker} translations={cardTranslations} />)
    const name = screen.getByText(mockSpeaker.name)
    expect(name.tagName).toBe('H3')
  })

  it('renders speaker title', () => {
    render(<SpeakerCard speaker={mockSpeaker} translations={cardTranslations} />)
    expect(screen.getByText(mockSpeaker.title)).toBeInTheDocument()
  })

  it('has aria-expanded attribute', () => {
    render(<SpeakerCard speaker={mockSpeaker} translations={cardTranslations} />)
    const card = screen.getByRole('button')
    expect(card).toHaveAttribute('aria-expanded', 'false')
  })

  it('applies featured styling when featured prop is true', () => {
    const { container } = render(<SpeakerCard speaker={mockSpeaker} translations={cardTranslations} featured />)
    // Featured cards have larger padding
    const card = container.querySelector('article')
    expect(card?.className).toContain('sm:p-8')
  })
})
