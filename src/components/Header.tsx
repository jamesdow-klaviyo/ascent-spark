import {
  Header as CarbonHeader,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
  HeaderGlobalBar,
} from '@carbon/react'
import { Search, Menu } from '@carbon/react/icons'
import './Header.scss'

const navItems = [
  { label: 'Products', href: '#' },
  { label: 'Solutions', href: '#' },
  { label: 'Services', href: '#' },
  { label: 'Industries', href: '#' },
  { label: 'Support', href: '#' },
]

export function Header() {
  return (
    <CarbonHeader aria-label="IBM">
      <HeaderName href="#" prefix="IBM">
        [&nbsp;]
      </HeaderName>
      <HeaderNavigation aria-label="IBM">
        {navItems.map((item) => (
          <HeaderMenuItem key={item.label} href={item.href}>
            {item.label}
          </HeaderMenuItem>
        ))}
      </HeaderNavigation>
      <HeaderGlobalBar>
        <button
          className="cds--header__action"
          aria-label="Search"
          type="button"
        >
          <Search size={20} />
        </button>
        <button
          className="cds--header__action cds--header__menu-trigger"
          aria-label="Open menu"
          type="button"
        >
          <Menu size={20} />
        </button>
      </HeaderGlobalBar>
    </CarbonHeader>
  )
}
