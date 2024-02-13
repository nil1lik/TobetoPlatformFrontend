import React from 'react'
import { Field } from 'formik'
import FormikInput from '../../Formik/FormikInput'

type Props = {
    className?: string,
    type: string,
    name: string,
    label: string,
    placeholder?: string
    value?: string
}

const ProfileInput = (props: Props) => {
    return (
        <FormikInput
        type={props.type}
        name={props.name}
        label={props.label}
        placeHolder={props.placeholder}
        value={props.value}
    />
    )
}

export default ProfileInput