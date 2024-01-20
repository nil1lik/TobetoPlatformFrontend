import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

type Props = {}

const AppForm = (props: Props) => {
  return (
    <div className='app-div'>
        <div>
            <button className='app-btn'><Link className='app-link' to="https://tobeto.com/istanbul-kodluyor">Başvur</Link></button>
        </div>
    </div>
  )
}

export default AppForm