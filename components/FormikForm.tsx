import { Formik, Form, Field, ErrorMessage } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'

interface FormValues {
    email: string
    password: string
}

type FormProps = {
    onSubmit: (values: FormValues) => void
}

const FormValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email('メールアドレスの形式が不正です。')
        .required('入力が必須の項目です。'),
    password: Yup.string().required('入力が必須の項目です。'),
})

const FormikForm = ({ onSubmit }: FormProps) => {
    const initialValues = {
        email: '',
        password: '',
    }
    const handleSubmit = (values: FormValues) => {
        // try {
        //     const response = await axios.post('/api/formik-create', values)
        //     console.log(response)
        // } catch (error) {
        //     console.error(error)
        // }
        try {
            onSubmit(values)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <div className="min-h-screen bg-white flex justify-center items-center">
            <div className="bg-gray-200 shadow-lg rounded-lg p-8">
                <h1 className="text-black">ログイン（Formik）</h1>
                <Formik
                    initialValues={initialValues}
                    validationSchema={FormValidationSchema}
                    onSubmit={handleSubmit}
                >
                    <Form>
                        <div className="mb-4">
                            <label htmlFor="email" className="text-black">
                                Email:{' '}
                            </label>
                            <Field
                                type="email"
                                id="email"
                                name="email"
                                className="w-64 p-2 text-black"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="text-black">
                                パスワード:{' '}
                            </label>
                            <Field
                                type="password"
                                id="password"
                                name="password"
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
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default FormikForm
