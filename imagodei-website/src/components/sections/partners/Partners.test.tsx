import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Partners } from './Partners'
import { BenefitCard } from './BenefitCard'
import { PartnerLogo } from './PartnerLogo'
import type { Partner, PartnershipPhilosophy, PartnershipBenefit, TargetAudience } from '@/types'

// Mock data
const mockPhilosophy: PartnershipPhilosophy = {
  headline: 'De ce să deveniți parteneri?',
  description: 'Test description about partnership.',
  extendedDescription: 'Extended description about partnership.',
}

const mockBenefits: PartnershipBenefit[] = [
  {
    id: 'leadership',
    title: 'Leadership etic serios',
    description: 'Benefit description',
    icon: 'compass',
  },
  {
    id: 'audience',
    title: 'Audiență de înaltă calitate',
    description: 'Benefit description',
    icon: 'users',
  },
  {
    id: 'context',
    title: 'Context bazat pe valori',
    description: 'Benefit description',
    icon: 'heart',
  },
  {
    id: 'influence',
    title: 'Conversații care definesc viitorul',
    description: 'Benefit description',
    icon: 'lightbulb',
  },
]

const mockAudience: TargetAudience = {
  headline: 'Cui ne adresăm?',
  audiences: ['Lideri în tehnologie', 'Specialiști din mediul academic', 'Teologi'],
}

const mockPartners: Partner[] = [
  {
    id: 'faithbase',
    name: 'Faithbase',
    category: 'organizer',
    url: 'https://faithbase.tech/',
    logo: '/logos/partners/faith-base-logo.jpg',
    description: 'Partner description',
  },
  {
    id: 'iesr',
    name: 'IESR',
    fullName: 'Institutul pentru Studiul Religiilor',
    category: 'organizer',
    url: 'https://studiireligioase.ro/',
    logo: '/logos/partners/institutul-evanghelic-logo.jpg',
    description: 'Partner description',
  },
  {
    id: 'makeitinoradea',
    name: 'MakeITinOradea',
    category: 'institutional',
    url: 'https://makeitinoradea.ro/',
    logo: '/logos/partners/makeit.svg',
    description: 'Partner description',
  },
  {
    id: 'episcopia',
    name: 'Episcopia Romano-Catolică de Oradea',
    category: 'institutional',
    url: 'https://sanctusladislaus.ro/',
    logo: '/logos/partners/episcopia-logo.png',
    description: 'Partner description',
  },
]

const mockTranslations = {
  organizedBy: 'Organized by',
  inPartnershipWith: 'In partnership with',
}

describe('Partners Section', () => {
  describe('Flow 1: View Partnership Information', () => {
    it('renders the philosophy headline', () => {
      render(
        <Partners
          partnershipPhilosophy={mockPhilosophy}
          partnershipBenefits={mockBenefits}
          targetAudience={mockAudience}
          partners={mockPartners}
          translations={mockTranslations}
        />
      )
      expect(screen.getByRole('heading', { name: mockPhilosophy.headline })).toBeInTheDocument()
    })

    it('renders the philosophy description', () => {
      render(
        <Partners
          partnershipPhilosophy={mockPhilosophy}
          partnershipBenefits={mockBenefits}
          targetAudience={mockAudience}
          partners={mockPartners}
          translations={mockTranslations}
        />
      )
      expect(screen.getByText(mockPhilosophy.description)).toBeInTheDocument()
    })

    it('renders the extended description', () => {
      render(
        <Partners
          partnershipPhilosophy={mockPhilosophy}
          partnershipBenefits={mockBenefits}
          targetAudience={mockAudience}
          partners={mockPartners}
          translations={mockTranslations}
        />
      )
      expect(screen.getByText(mockPhilosophy.extendedDescription)).toBeInTheDocument()
    })

    it('renders 4 benefit cards', () => {
      render(
        <Partners
          partnershipPhilosophy={mockPhilosophy}
          partnershipBenefits={mockBenefits}
          targetAudience={mockAudience}
          partners={mockPartners}
          translations={mockTranslations}
        />
      )
      mockBenefits.forEach((benefit) => {
        expect(screen.getByText(benefit.title)).toBeInTheDocument()
      })
    })

    it('renders target audience headline', () => {
      render(
        <Partners
          partnershipPhilosophy={mockPhilosophy}
          partnershipBenefits={mockBenefits}
          targetAudience={mockAudience}
          partners={mockPartners}
          translations={mockTranslations}
        />
      )
      expect(screen.getByRole('heading', { name: mockAudience.headline })).toBeInTheDocument()
    })

    it('renders target audience list', () => {
      render(
        <Partners
          partnershipPhilosophy={mockPhilosophy}
          partnershipBenefits={mockBenefits}
          targetAudience={mockAudience}
          partners={mockPartners}
          translations={mockTranslations}
        />
      )
      mockAudience.audiences.forEach((audience) => {
        expect(screen.getByText(audience)).toBeInTheDocument()
      })
    })

    it('renders partner logos in two groups', () => {
      render(
        <Partners
          partnershipPhilosophy={mockPhilosophy}
          partnershipBenefits={mockBenefits}
          targetAudience={mockAudience}
          partners={mockPartners}
          translations={mockTranslations}
        />
      )
      expect(screen.getByText(mockTranslations.organizedBy)).toBeInTheDocument()
      expect(screen.getByText(mockTranslations.inPartnershipWith)).toBeInTheDocument()
    })

    it('has accessible section landmark', () => {
      render(
        <Partners
          partnershipPhilosophy={mockPhilosophy}
          partnershipBenefits={mockBenefits}
          targetAudience={mockAudience}
          partners={mockPartners}
          translations={mockTranslations}
        />
      )
      expect(screen.getByRole('region', { name: mockPhilosophy.headline })).toBeInTheDocument()
    })
  })

  describe('Flow 2: Click Partner Logo', () => {
    it('partner links open in new tab', () => {
      render(
        <Partners
          partnershipPhilosophy={mockPhilosophy}
          partnershipBenefits={mockBenefits}
          targetAudience={mockAudience}
          partners={mockPartners}
          translations={mockTranslations}
        />
      )
      const faithbaseLink = screen.getByTitle('Faithbase')
      expect(faithbaseLink).toHaveAttribute('target', '_blank')
      expect(faithbaseLink).toHaveAttribute('rel', 'noopener noreferrer')
    })

    it('partner links have correct URLs', () => {
      render(
        <Partners
          partnershipPhilosophy={mockPhilosophy}
          partnershipBenefits={mockBenefits}
          targetAudience={mockAudience}
          partners={mockPartners}
          translations={mockTranslations}
        />
      )
      const faithbaseLink = screen.getByTitle('Faithbase')
      expect(faithbaseLink).toHaveAttribute('href', 'https://faithbase.tech/')
    })
  })

  describe('Light Background', () => {
    it('renders with light background', () => {
      const { container } = render(
        <Partners
          partnershipPhilosophy={mockPhilosophy}
          partnershipBenefits={mockBenefits}
          targetAudience={mockAudience}
          partners={mockPartners}
          translations={mockTranslations}
        />
      )
      const section = container.querySelector('section')
      expect(section?.className).toContain('bg-zinc-50')
    })

    it('has decorative gradient blobs', () => {
      const { container } = render(
        <Partners
          partnershipPhilosophy={mockPhilosophy}
          partnershipBenefits={mockBenefits}
          targetAudience={mockAudience}
          partners={mockPartners}
          translations={mockTranslations}
        />
      )
      const gradients = container.querySelectorAll('.blur-3xl')
      expect(gradients.length).toBeGreaterThan(0)
    })
  })

  describe('Empty States', () => {
    it('renders without partner logos when partners array is empty', () => {
      render(
        <Partners
          partnershipPhilosophy={mockPhilosophy}
          partnershipBenefits={mockBenefits}
          targetAudience={mockAudience}
          partners={[]}
          translations={mockTranslations}
        />
      )
      // Philosophy and benefits should still display
      expect(screen.getByRole('heading', { name: mockPhilosophy.headline })).toBeInTheDocument()
      expect(screen.queryByText(mockTranslations.organizedBy)).not.toBeInTheDocument()
    })

    it('renders without benefits section when benefits array is empty', () => {
      render(
        <Partners
          partnershipPhilosophy={mockPhilosophy}
          partnershipBenefits={[]}
          targetAudience={mockAudience}
          partners={mockPartners}
          translations={mockTranslations}
        />
      )
      // Philosophy should still display
      expect(screen.getByRole('heading', { name: mockPhilosophy.headline })).toBeInTheDocument()
    })
  })
})

describe('BenefitCard Component', () => {
  const mockBenefit = mockBenefits[0]

  it('renders benefit title', () => {
    render(<BenefitCard benefit={mockBenefit} />)
    expect(screen.getByText(mockBenefit.title)).toBeInTheDocument()
  })

  it('renders icon container', () => {
    const { container } = render(<BenefitCard benefit={mockBenefit} />)
    const iconContainer = container.querySelector('.rounded-lg')
    expect(iconContainer).toBeInTheDocument()
  })

  it('has horizontal layout', () => {
    const { container } = render(<BenefitCard benefit={mockBenefit} />)
    const card = container.querySelector('article')
    expect(card?.className).toContain('flex')
    expect(card?.className).toContain('items-center')
  })

  it('handles all icon types', () => {
    mockBenefits.forEach((benefit) => {
      const { container } = render(<BenefitCard benefit={benefit} />)
      expect(container.querySelector('svg')).toBeInTheDocument()
    })
  })
})

describe('PartnerLogo Component', () => {
  const mockPartner = mockPartners[0]

  it('renders partner logo image', () => {
    render(<PartnerLogo partner={mockPartner} />)
    const img = screen.getByAltText(`${mockPartner.name} logo`)
    expect(img).toBeInTheDocument()
    // Next.js Image component transforms src, so check it contains the original path
    expect(img.getAttribute('src')).toContain(encodeURIComponent(mockPartner.logo))
  })

  it('opens link in new tab', () => {
    render(<PartnerLogo partner={mockPartner} />)
    const link = screen.getByTitle(mockPartner.name)
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has correct href', () => {
    render(<PartnerLogo partner={mockPartner} />)
    const link = screen.getByTitle(mockPartner.name)
    expect(link).toHaveAttribute('href', mockPartner.url)
  })

  it('uses fullName for title when available', () => {
    const partnerWithFullName = mockPartners[1] // IESR has fullName
    render(<PartnerLogo partner={partnerWithFullName} />)
    const link = screen.getByTitle(partnerWithFullName.fullName!)
    expect(link).toBeInTheDocument()
  })

  it('has hover effects', () => {
    const { container } = render(<PartnerLogo partner={mockPartner} />)
    const link = container.querySelector('a')
    expect(link?.className).toContain('hover:border-sky-300')
  })
})
