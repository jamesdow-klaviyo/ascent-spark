import { Grid, Column } from '@carbon/react'
import './EnterpriseTech.scss'

const offerings = [
  { title: 'AI agents', desc: 'Automate your complex workflows with AI agents and assistants', href: '#' },
  { title: 'Data for AI', desc: 'Access, integrate, govern and secure all your enterprise data from one place', href: '#' },
  { title: 'Automation', desc: 'Discover how automation solutions increase productivity while managing costs', href: '#' },
  { title: 'Hybrid cloud', desc: 'Manage your hybrid cloud environment to run workloads where and when you need them', href: '#' },
  { title: 'AI models', desc: 'Get started with cost-efficient AI models, tailored for business and optimized for scale', href: '#' },
  { title: 'Analytics', desc: 'Support data-driven decisions for your business', href: '#' },
  { title: 'Security and identity', desc: 'Secure hybrid cloud and AI with data and identity-centric cybersecurity solutions', href: '#' },
  { title: 'Consulting', desc: 'Engage with IBM Consulting to design, build and operate high-performing businesses', href: '#' },
]

export function EnterpriseTech() {
  return (
    <section className="enterprise-tech">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4}>
          <h2 className="enterprise-tech__heading">Enterprise technology</h2>
          <p className="enterprise-tech__intro">
            From next-generation AI to cutting-edge software, our deep expertise
            across industries can help you reinvent how your business works in
            the age of AI.
          </p>
        </Column>
        {offerings.map((item) => (
          <Column key={item.title} lg={4} md={4} sm={4} className="enterprise-tech__col">
            <a href={item.href} className="enterprise-tech__card">
              <h3 className="enterprise-tech__title">{item.title}</h3>
              <p className="enterprise-tech__desc">{item.desc}</p>
            </a>
          </Column>
        ))}
      </Grid>
    </section>
  )
}
