import { Grid, Column, Tag } from '@carbon/react'
import './Recommended.scss'

const cards = [
  {
    label: 'Article',
    title: "Canada's AI moment",
    description: '5 trends redefining confidence, speed and trust in 2026',
    cta: 'Explore the insights',
    href: '#',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
  },
  {
    label: 'Case study',
    title: 'Hybrid cloud transformation: Airbus A220 takes flight with IBM',
    description: '',
    cta: 'Learn more',
    href: '#',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop',
  },
  {
    label: 'Article',
    title: 'Make sure your data remains secure in the quantum era',
    description: '',
    cta: 'Read the article',
    href: '#',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
  },
  {
    label: 'Courses',
    title: 'Stay productive in a tech-powered world with free AI courses',
    description: '',
    cta: 'Start now',
    href: '#',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop',
  },
]

export function Recommended() {
  return (
    <section className="recommended">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4}>
          <h2 className="recommended__heading">Recommended for you</h2>
        </Column>
        {cards.map((card) => (
          <Column key={card.title} lg={4} md={4} sm={4} className="recommended__col">
            <a href={card.href} className="recommended__card">
              <div className="recommended__image-wrap">
                <img src={card.image} alt="" className="recommended__image" />
              </div>
              <Tag type="blue" size="md" className="recommended__tag">
                {card.label}
              </Tag>
              <h3 className="recommended__card-title">{card.title}</h3>
              {card.description && (
                <p className="recommended__card-desc">{card.description}</p>
              )}
              <span className="recommended__cta">{card.cta}</span>
            </a>
          </Column>
        ))}
      </Grid>
    </section>
  )
}
