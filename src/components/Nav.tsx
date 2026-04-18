import './Nav.css'
import logo from '../assets/kirpa_logo.png'

type PageName = 'home' | 'menu'

const navLinks: Array<{
  label: string
  type: 'page' | 'anchor'
  page?: PageName
  href?: string
}> = [
  { label: 'Home', type: 'page', page: 'home' },
  { label: 'Menu', type: 'page', page: 'menu' },
  { label: 'About', type: 'anchor', href: '#about' },
  { label: 'Contact', type: 'anchor', href: '#contact' },
]

function Nav({
  currentPage,
  onNavigate,
}: {
  currentPage: PageName
  onNavigate: (page: PageName, targetAnchor?: string) => void
}) {
  return (
    <header className="site-header">
      <div className="nav-inner">
        <button type="button" className="brand" onClick={() => onNavigate('home')}>
          <img src={logo} alt="Kirpa Restaurant logo" />
        </button>
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.type === 'page' ? (
                <button
                  type="button"
                  className={`nav-link ${currentPage === link.page ? 'active' : ''}`}
                  onClick={() => onNavigate(link.page!)}
                >
                  {link.label}
                </button>
              ) : (
                <button
                  type="button"
                  className="nav-link"
                  onClick={() => onNavigate('home', link.href)}
                >
                  {link.label}
                </button>
              )}
            </li>
          ))}
        </ul>
        <button className="nav-cta" type="button" onClick={() => onNavigate('home', '#contact')}>
          Place Order
        </button>
      </div>
    </header>
  )
}

export default Nav
