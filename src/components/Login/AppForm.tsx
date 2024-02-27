import React from 'react'
import { Link } from 'react-router-dom'
import { applyButtonText } from '../../utilities/Constants/constantValues'

type Props = {}

const AppForm = (props: Props) => {
  return (
    <div className='app-div'>
        <div>
            <button className='app-btn'><Link className='app-link' to="https://tobeto.com/istanbul-kodluyor">{applyButtonText}</Link></button>
        </div>
    </div>
  )
}

export default AppForm