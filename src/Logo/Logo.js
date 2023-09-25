import logo from "./logo192.png";
import './Logo.css'

export function Logo() {
  return (
    <div className={'logo'}>
      <img className={'logo__image'} src={logo} alt={'Company Logo'}/>
      <h1 className={'logo__company-name'}>CompanyName</h1>
    </div>
  )
}

