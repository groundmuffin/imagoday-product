import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Program } from './Program'
import { DaySchedule } from './DaySchedule'
import { SessionCard } from './SessionCard'
import type { Day, Session } from '@/types'

// Mock data
const mockDays: Day[] = [
  {
    id: 'day-1',
    label: 'Day 1',
    date: 'March 6',
    timeFrame: 'Evening',
    sessions: [
      { id: 's1', title: 'Keynotes' },
      { id: 's2', title: 'Panel Discussion' },
      { id: 's3', title: 'Q&A Session' },
    ],
  },
  {
    id: 'day-2',
    label: 'Day 2',
    date: 'March 7',
    timeFrame: 'Full Day',
    sessions: [
      { id: 's4', title: 'Plenary Sessions' },
      { id: 's5', title: 'Parallel Workshops' },
      { id: 's6', title: 'Networking & Final Panel' },
    ],
  },
]

const mockTranslations = {
  title: 'Two Days of Reflection',
  subtitle: 'Conference Program',
  description: 'A deep exploration of the relationship between artificial intelligence and human dignity',
  comingSoon: 'Program coming soon',
}

describe('Program Section', () => {
  describe('Flow 1: View Schedule', () => {
    it('renders the section title', () => {
      render(<Program days={mockDays} translations={mockTranslations} />)
      expect(screen.getByRole('heading', { name: mockTranslations.title })).toBeInTheDocument()
    })

    it('renders the subtitle', () => {
      render(<Program days={mockDays} translations={mockTranslations} />)
      expect(screen.getByText(mockTranslations.subtitle)).toBeInTheDocument()
    })

    it('renders both day cards', () => {
      render(<Program days={mockDays} translations={mockTranslations} />)
      expect(screen.getByText('Day 1')).toBeInTheDocument()
      expect(screen.getByText('Day 2')).toBeInTheDocument()
    })

    it('renders day dates in accent color', () => {
      render(<Program days={mockDays} translations={mockTranslations} />)
      expect(screen.getByText('March 6')).toBeInTheDocument()
      expect(screen.getByText('March 7')).toBeInTheDocument()
    })

    it('renders day time frames', () => {
      render(<Program days={mockDays} translations={mockTranslations} />)
      expect(screen.getByText('Evening')).toBeInTheDocument()
      expect(screen.getByText('Full Day')).toBeInTheDocument()
    })

    it('renders all sessions with bullet points', () => {
      render(<Program days={mockDays} translations={mockTranslations} />)
      mockDays.forEach((day) => {
        day.sessions.forEach((session) => {
          expect(screen.getByText(session.title)).toBeInTheDocument()
        })
      })
    })

    it('has accessible section landmark', () => {
      render(<Program days={mockDays} translations={mockTranslations} />)
      expect(screen.getByRole('region', { name: mockTranslations.title })).toBeInTheDocument()
    })
  })

  describe('Responsive Layout', () => {
    it('renders days in a grid container', () => {
      const { container } = render(<Program days={mockDays} translations={mockTranslations} />)
      const grid = container.querySelector('.grid')
      expect(grid).toBeInTheDocument()
      expect(grid?.className).toContain('lg:grid-cols-2')
    })
  })

  describe('Empty States', () => {
    it('shows coming soon message when days array is empty', () => {
      render(<Program days={[]} translations={mockTranslations} />)
      expect(screen.getByText(mockTranslations.comingSoon)).toBeInTheDocument()
    })

    it('renders section header even with empty days', () => {
      render(<Program days={[]} translations={mockTranslations} />)
      expect(screen.getByRole('heading', { name: mockTranslations.title })).toBeInTheDocument()
    })
  })

  describe('Edge Cases', () => {
    it('handles day with no sessions', () => {
      const dayWithNoSessions: Day[] = [
        {
          id: 'day-empty',
          label: 'Day 1',
          date: 'March 6',
          timeFrame: 'Evening',
          sessions: [],
        },
      ]
      render(<Program days={dayWithNoSessions} translations={mockTranslations} />)
      expect(screen.getByText('Day 1')).toBeInTheDocument()
    })

    it('handles more than 2 days', () => {
      const threeDays: Day[] = [
        ...mockDays,
        {
          id: 'day-3',
          label: 'Day 3',
          date: 'March 8',
          timeFrame: 'Morning',
          sessions: [{ id: 's7', title: 'Closing Remarks' }],
        },
      ]
      render(<Program days={threeDays} translations={mockTranslations} />)
      expect(screen.getByText('Day 3')).toBeInTheDocument()
    })

    it('handles missing timeFrame gracefully', () => {
      const dayWithoutTimeFrame: Day[] = [
        {
          id: 'day-no-time',
          label: 'Day 1',
          date: 'March 6',
          timeFrame: '',
          sessions: [{ id: 's1', title: 'Session 1' }],
        },
      ]
      render(<Program days={dayWithoutTimeFrame} translations={mockTranslations} />)
      expect(screen.getByText('Day 1')).toBeInTheDocument()
    })
  })
})

describe('DaySchedule Component', () => {
  const mockDay = mockDays[0]

  it('renders day label prominently', () => {
    render(<DaySchedule day={mockDay} />)
    const label = screen.getByRole('heading', { name: mockDay.label })
    expect(label).toBeInTheDocument()
    expect(label.tagName).toBe('H3')
  })

  it('renders date in sky color', () => {
    render(<DaySchedule day={mockDay} />)
    const date = screen.getByText(mockDay.date)
    expect(date.className).toContain('text-sky-400')
  })

  it('renders time frame in uppercase', () => {
    render(<DaySchedule day={mockDay} />)
    const timeFrame = screen.getByText(mockDay.timeFrame)
    expect(timeFrame.className).toContain('uppercase')
  })

  it('renders decorative gradient line', () => {
    const { container } = render(<DaySchedule day={mockDay} />)
    const gradientLine = container.querySelector('.bg-gradient-to-r')
    expect(gradientLine).toBeInTheDocument()
  })

  it('renders sessions as a list', () => {
    render(<DaySchedule day={mockDay} />)
    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
  })

  it('renders all sessions', () => {
    render(<DaySchedule day={mockDay} />)
    mockDay.sessions.forEach((session) => {
      expect(screen.getByText(session.title)).toBeInTheDocument()
    })
  })
})

describe('SessionCard Component', () => {
  const mockSession: Session = { id: 's1', title: 'Keynote Presentation' }

  it('renders session title', () => {
    render(<SessionCard session={mockSession} />)
    expect(screen.getByText(mockSession.title)).toBeInTheDocument()
  })

  it('renders icon in sky color theme', () => {
    const { container } = render(<SessionCard session={mockSession} />)
    const iconContainer = container.querySelector('.bg-sky-500\\/10')
    expect(iconContainer).toBeInTheDocument()
  })

  it('has consistent spacing', () => {
    const { container } = render(<SessionCard session={mockSession} />)
    const wrapper = container.querySelector('.flex')
    expect(wrapper?.className).toContain('gap-3')
  })

  it('handles long session titles', () => {
    const longSession: Session = {
      id: 's-long',
      title: 'This is a very long session title that should wrap appropriately on smaller screens',
    }
    render(<SessionCard session={longSession} />)
    expect(screen.getByText(longSession.title)).toBeInTheDocument()
  })
})
