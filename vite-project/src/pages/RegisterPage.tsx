import React, {useState} from 'react'

const RegisterPage = () => {
    const [form, setForm] = useState({
        username: '',
        email: ''
    })

    const onChangeHandler = (event: any) => {
        // console.log(event)
        const {name, value} = event.target
        setForm({...form, [name]: value})
    } 

    const onSubmitHandler = (event:any) => {
        event.preventDefault()
        console.log(form)
    }

  return (
    // <div>RegisterPage</div>
    <form onSubmit={onSubmitHandler}>
        <input
            name="username"
            value={form.username}
            onChange={onChangeHandler}
        />
        <input
            name="email"
            value={form.email}
            onChange={onChangeHandler}
        />
    </form>
  )
}

export default RegisterPage