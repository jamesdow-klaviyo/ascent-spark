import { Grid, Column } from '@carbon/react'
import './StayConnected.scss'

const news = [
  { title: 'IBM and Polytechnique Montréal Launch AI Initiative to Strengthen Forestry Supply Chain', href: '#' },
  { title: 'IBM Announces Defence-Focused AI Model to Accelerate Mission Planning and Decision Support', href: '#' },
  { title: 'IBM Study: Shadow AI Use Surges as Canadian Workers Outpace Employers in AI Adoption', href: '#' },
  { title: "Canada's AI Moment: Five Trends Redefining Business Confidence, Speed and Trust in 2026", href: '#' },
  { title: "IBM Report: Canadians' Data Security Under Increased Threat, While Breach Costs Surge", href: '#' },
]

export function StayConnected() {
  return (
    <section className="stay-connected">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4}>
          <h2 className="stay-connected__heading">Stay connected</h2>
        </Column>
        <Column lg={16} md={8} sm={4}>
          <h3 className="stay-connected__subheading">Latest News</h3>
          <ul className="stay-connected__list">
            {news.map((item) => (
              <li key={item.title}>
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
        </Column>
      </Grid>
    </section>
  )
}
