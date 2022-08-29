import React, { useState } from 'react'
import * as Yup from 'yup'

const Login: React.FC = () => {
    const initialValues: {
        username: string,
        password: string
    } = {
        username: '',
        password: ''
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().required('This field is required!'),
        password: Yup.string().required('This field is required!')
    })
    return (
        <div>

        </div>
    )
}

export default Login