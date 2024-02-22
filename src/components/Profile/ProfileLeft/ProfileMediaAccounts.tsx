import React from 'react'
import { Image } from 'react-bootstrap'

type Props = {
  imageSrc: string,
  className: string,
  Link?: string,
}

const ProfileMediaAccounts = (props: Props) => {
  return (
    <a href={props.Link} target='_blank'>
      <Image src={props.imageSrc} className={props.className} />
    </a>
  )
}

export default ProfileMediaAccounts