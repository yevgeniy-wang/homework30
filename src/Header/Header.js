

import './Header.css'
import {Logo} from "../Logo/Logo";

export function Header() {
  return (
    <header className={'header'}>
      <Logo/>
      <input className={"header__search-field"} type={"text"} placeholder={"search"}/>
    </header>
  )
}