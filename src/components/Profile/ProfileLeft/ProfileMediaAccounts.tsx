import React from 'react'
import { Image } from 'react-bootstrap'

type Props = {
  imageSrc: string,
  className: string,
  Link?: string,
}

const ProfileMediaAccounts = (props: Props) => {
  const mediaPhoto = process.env.PUBLIC_URL + `/images/${props.imageSrc}`;
  return (
    <a href={props.Link} target='_blank'>
      <Image src={mediaPhoto} className={props.className} />
    </a>
  )
}

export default ProfileMediaAccounts