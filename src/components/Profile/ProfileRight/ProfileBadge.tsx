import React from 'react'
import ProfileMediaAccounts from '../ProfileLeft/ProfileMediaAccounts'

type Props = {
  imageSrc: string,
}

const ProfileBadge = (props: Props) => {
  return (
    <div className='profileBadgeCont'>
      <ProfileMediaAccounts className='profileBadge' imageSrc={props.imageSrc} />
    </div>
  )
}

export default ProfileBadge