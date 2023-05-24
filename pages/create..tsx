import FormikForm from '@/components/FormikForm'
import axios from 'axios'

const Create = () => {
    const addData = (data: any) => axios.post('/api/create', data)

    return (
        <div className="min-h-screen bg-white flex justify-center items-center">
            <FormikForm onSubmit={addData} />
        </div>
    )
}

export default Create
