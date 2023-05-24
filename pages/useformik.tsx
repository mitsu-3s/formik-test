import { useFormik } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'

interface FormValues {
    email: string
    password: string
}

interface FormErrors {
    email?: string
}

const FormValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('メールアドレスの形式が不正です。')
        .required('入力が必須の項目です。'),
})

const FormikForm = () => {
    // const validate = (values: FormValues) => {
    //     const errors: FormErrors = {}

    //     if (!values.email) {
    //         errors.email = '入力が必須の項目です。'
    //     }
    //     return errors
    // }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            try {
                const response = axios.post('/api/create', values)
                console.log(response)
            } catch (error) {
                console.error(error)
            }
        },
        // validate,
        validationSchema: FormValidationSchema,
    })

    return (
        <div className="min-h-screen bg-white flex justify-center items-center">
            <div className="bg-gray-200 shadow-lg rounded-lg p-8">
                <h1 className="text-black">ログイン（useFormik）</h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-black">
                            Email:{' '}
                        </label>
                        <input
                            id="email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            className="w-64 p-2 text-black"
                        />
                    </div>
                    {formik.errors.email && (
                        <div className="text-red-500">{formik.errors.email}</div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="password" className="text-black">
                            パスワード:{' '}
                        </label>
                        <input
                            id="password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
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

export default FormikForm
