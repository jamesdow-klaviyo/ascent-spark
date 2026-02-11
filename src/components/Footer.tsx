import { Grid, Column } from '@carbon/react'
import './Footer.scss'

const footerLinks = [
  ['Contact', 'Privacy', 'Terms of use', 'Accessibility'],
  ['Careers', 'News', 'Investor relations', 'About IBM'],
]

export function Footer() {
  return (
    <footer className="footer">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4}>
          <div className="footer__links">
            {footerLinks.flat().map((label) => (
              <a key={label} href="#" className="footer__link">
                {label}
              </a>
            ))}
          </div>
          <p className="footer__copy">
            © {new Date().getFullYear()} IBM Corporation. All rights reserved.
          </p>
        </Column>
      </Grid>
    </footer>
  )
}
