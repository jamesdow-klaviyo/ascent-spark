import { Grid, Column, Button } from '@carbon/react'
import './PromoStrip.scss'

export function PromoStrip() {
  return (
    <section className="promo-strip">
      <Grid fullWidth>
        <Column lg={16} md={8} sm={4} className="promo-strip__inner">
          <div className="promo-strip__content">
            <h3 className="promo-strip__title">SPSS Statistics</h3>
            <p className="promo-strip__desc">
              Get 20% off your annual subscription – simplify your data analysis
            </p>
            <Button kind="primary" size="sm" href="#">
              Explore the offer
            </Button>
          </div>
        </Column>
      </Grid>
    </section>
  )
}
