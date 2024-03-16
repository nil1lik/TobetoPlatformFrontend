import React, { ReactNode } from 'react'

type Props = {children: ReactNode, className: string}

const LoginPageBox = (props: Props) => {
  return (
    <div className={props.className}>
        {props.children}
    </div>
  )
}

export default LoginPageBox