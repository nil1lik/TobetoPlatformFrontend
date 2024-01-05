import NavButton from './NavButton'
import { Button, Dropdown, Image, Menu } from 'semantic-ui-react'

type Props = {}

const Navbar = (props: Props) => {
  const logoSrc = process.env.PUBLIC_URL + "/images/tobeto-logo.png"
  const options = [
    { key: 1, text: 'Choice 1', value: 1 },
    { key: 2, text: 'Choice 2', value: 2 },
    { key: 3, text: 'Choice 3', value: 3 },
  ]
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
        <Dropdown text='Kullanıcı' options={options} item />
      </Menu.Item>
    </Menu>
  )
}

export default Navbar
