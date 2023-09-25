import './LeftNavigation.css'

export function LeftNavigation({arrayOfLinks}) {
  const listItems = arrayOfLinks.map(link =>
    <li key={link.id}>
      <a href={link.href}>{link.text}</a>
    </li>
  )
  return (
    <nav>
      <ul className={'side-nav'}>x</ul>
    </nav>
  )
}