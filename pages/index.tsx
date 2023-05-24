// useState Hookを利用した通常のフォーム

import { useState } from 'react'
import axios from 'axios'

const Form = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log({
            email,
            password,
        })

        const data = {
            email,
            password,
        }

        try {
            const response = axios.post('/api/create', data)
            console.log(response)
        } catch (error) {
            console.error(error)
        }
    }

    const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    return (
        <div className="min-h-screen bg-white flex justify-center items-center">
            <div className="bg-gray-200 shadow-lg rounded-lg p-8">
                <h1 className="text-black">ログイン（useState）</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-black">
                            Email:{' '}
                        </label>
                        <input
                            id="email"
                            name="email"
                            value={email}
                            onChange={handleChangeEmail}
                            className="w-64 p-2 text-black"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="text-black">
                            パスワード:{' '}
                        </label>
                        <input
                            id="password"
                            name="password"
                            value={password}
                            onChange={handleChangePassword}
                            type="password"
                            className="w-64 p-2 text-black"
                        />
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            ログイン
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
