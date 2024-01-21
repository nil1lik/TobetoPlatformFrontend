import React from 'react'
import { Image } from 'react-bootstrap'

type Props = {
  imageSrc: string,
  className: string,
}

const ProfileMediaAccounts = (props: Props) => {
  const mediaPhoto = process.env.PUBLIC_URL + `/images/${props.imageSrc}`;
  return (
    <>
      <Image src={mediaPhoto} className={props.className}/>
    </>
  )
}

export default ProfileMediaAccounts