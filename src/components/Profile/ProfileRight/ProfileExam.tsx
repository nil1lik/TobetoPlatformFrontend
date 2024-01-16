import React from 'react'

type Props = {
  profileExamName: string
  profileExamDate: string,
  profileExamPoint: string,
}

const ProfileExam = (props: Props) => {
  return (
    <div className='examCont'>
      <div className='examInfo'>
        <span className='examName'>{props.profileExamName}</span>
        <span className='examDate'>{props.profileExamDate}</span>
      </div>
      <span className='examPoint'> {props.profileExamPoint}</span>
    </div>
  )
}



export default ProfileExam