import {LeftNavigation} from "../LeftNavigation/LeftNavigation";
import {Item} from "../Item/Item";
import './Main.css'
import logo from './logo192.png'

const links = [
  {text: 'Link one', href: '#', id: 1},
  {text: 'Link two', href: '#', id: 2},
  {text: 'Link three', href: '#', id: 3},
  {text: 'Link four', href: '#', id: 4},
]

export function Main() {
  return (
    <main className={'main'}>
      <LeftNavigation arrayOfLinks={links}/>
      <section className={'main__content'}>
        <Item src={logo}/>
        <Item src={logo}/>
        <Item src={logo}/>
        <Item src={logo}/>
        <Item src={logo}/>
        <Item src={logo}/>
        <Item src={logo}/>
        <Item src={logo}/>
      </section>
    </main>
  )
}