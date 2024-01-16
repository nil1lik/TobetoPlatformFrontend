import React from 'react'
import NavButton from './NavButton'
import { Button, Dropdown, Image, Menu } from 'semantic-ui-react'
import DropdownItem from './DropdownItem'

type Props = {}

const Navbar = (props: Props) => {
  const logoSrc = process.env.PUBLIC_URL + "/images/tobeto-logo.png"
  return (
    <Menu pointing secondary size='huge'>
      <Menu.Item>
        <Image src={logoSrc} size='small' />
      </Menu.Item>
      <Menu.Item style={{ flexGrow: 12 }}>
        <Button.Group style={{ margin: 'auto' }}>
          <NavButton text={'Ana Sayfa'} />
          <NavButton text={'Profilim'} />
          <NavButton text={'Değerlendirmeler'} />
          <NavButton text={'Katalog'} />
          <NavButton text={'Takvim'} />
          <NavButton text={'İstanbul Kodluyor'} />
        </Button.Group>
      </Menu.Item>
      <Menu.Item>
        <DropdownItem/>
      </Menu.Item>
    </Menu>
  )
}

export default Navbar
