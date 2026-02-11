import { Grid, Column, Button } from '@carbon/react'
import './CaseStudies.scss'

const studies = [
  {
    company: 'Ferrari',
    title: 'Scuderia Ferrari HP and IBM built a new digital destination for F1\'s expanding fan base',
    stat: '2x increase in daily active users, 35% increase in average time spent in-app',
    cta: 'Learn how Ferrari puts race day in your pocket',
    href: '#',
    image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=800&h=500&fit=crop',
  },
  {
    company: 'US Open',
    title: 'The USTA and IBM harness technology to drive fan engagement with efficiency, flexibility and innovation',
    stat: 'World-class digital experiences for more than 14 million fans',
    cta: 'Explore how the US Open is becoming a smarter business',
    href: '#',
    image: 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=800&h=500&fit=crop',
  },
  {
    company: 'Avid Solutions',
    title: 'Avid Solutions uses IBM watsonx Orchestrate® to improve employee and customer happiness',
    stat: '25% reduction in onboarding time, 10% reduction in errors',
    cta: 'Learn how Avid Solutions is lightening their teams\' workloads',
    href: '#',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
  },
]

export function CaseStudies() {
  return (
    <section className="case-studies">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4}>
          <h2 className="case-studies__heading">Smarter business. Real impact.</h2>
        </Column>
        {studies.map((study) => (
          <Column key={study.company} lg={16} md={8} sm={4} className="case-studies__col">
            <article className="case-studies__card">
              <div className="case-studies__content">
                <h3 className="case-studies__company">{study.company}</h3>
                <p className="case-studies__title">{study.title}</p>
                <p className="case-studies__stat">{study.stat}</p>
                <Button kind="ghost" size="md" href={study.href}>
                  {study.cta}
                </Button>
              </div>
              <div className="case-studies__image-wrap">
                <img src={study.image} alt="" className="case-studies__image" />
              </div>
            </article>
          </Column>
        ))}
      </Grid>
    </section>
  )
}
