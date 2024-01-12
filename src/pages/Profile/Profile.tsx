import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}

const Profile = (props: Props) => {
  return (
    <Link to={"/profilim/profilimi-duzenle"}>
      <div>Profile</div>
    </Link>
  )
}

export default Profile