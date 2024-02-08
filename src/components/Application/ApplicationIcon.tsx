import React from 'react'

type Props = {
    iconClass: string
}

const ApplicationIcon = (props: Props) => {
  return (
<span className={`${props.iconClass} app-icon`}></span>  )
}

export default ApplicationIcon