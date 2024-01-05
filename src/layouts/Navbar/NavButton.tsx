import React from 'react'
import { Button } from 'semantic-ui-react'

type Props = { 
  text: string,
}

const NavButton = (props: Props) => {
  return (
    <Button basic content={props.text}></Button>
  )
}

export default NavButton