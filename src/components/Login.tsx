import React, { useState } from 'react'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
import { login } from '../services/auth.service'

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

    let navigate = useNavigate()
    const [loading, setLoading] = useState<boolean>(false)
    const [message, setMessage] = useState<string>('')

    const handleLogin = (formValue: { username: string, password: string }) => {
    const {username, password} = formValue
    setMessage('')
    setLoading(true)
    login(username, password).then(
        () => {
            navigate("/profile")
            window.location.reload()
        }
    ),
    (err: { response: { data: { message: any } }; message: any; toString: () => any }) => {
        const resMessage = (
            err.response &&
            err.response.data &&
            err.response.data.message ||
            err.message ||
            err.toString()
        )
        setLoading(false)
        setMessage(resMessage)
    }
}
    return (
        <div>

        </div>
    )
}

export default Login