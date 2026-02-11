import { Grid, Column } from '@carbon/react'
import './InsideIBM.scss'

const links = [
  {
    heading: 'Our company',
    desc: 'Explore IBM history and culture of putting technology to work in the real world.',
    items: [
      { label: 'About IBM', href: '#' },
      { label: 'Our history', href: '#' },
    ],
  },
  {
    heading: 'Our innovations',
    desc: "Visit the IBM lab and see what's in store for the future of computing.",
    items: [
      { label: 'IBM Research®', href: '#' },
      { label: 'Quantum computing', href: '#' },
    ],
  },
  {
    heading: 'Our people',
    desc: 'See what it takes to become an IBMer or build your skills with our educational courses.',
    items: [
      { label: 'Become an IBMer', href: '#' },
      { label: 'Start learning', href: '#' },
    ],
  },
]

export function InsideIBM() {
  return (
    <section className="inside-ibm">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4}>
          <h2 className="inside-ibm__heading">Inside IBM</h2>
        </Column>
        {links.map((block) => (
          <Column key={block.heading} lg={5} md={4} sm={4} className="inside-ibm__col">
            <div className="inside-ibm__block">
              <h3 className="inside-ibm__block-heading">{block.heading}</h3>
              <p className="inside-ibm__block-desc">{block.desc}</p>
              <ul className="inside-ibm__list">
                {block.items.map((item) => (
                  <li key={item.label}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </Column>
        ))}
      </Grid>
    </section>
  )
}
