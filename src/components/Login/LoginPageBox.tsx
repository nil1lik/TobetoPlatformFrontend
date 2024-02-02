import React, { ReactNode } from 'react'
import { Container } from 'react-bootstrap'

type Props = {children: ReactNode, className: string}

const LoginPageBox = (props: Props) => {
  return (
    <div className={props.className}>
        {props.children}
    </div>
  )
}

export default LoginPageBox