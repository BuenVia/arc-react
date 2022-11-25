import { useState } from "react"

export default function ResourceForm(props) {

    const [message, setMessage] = useState('')

    const [info, setInfo] = useState({
        fullName: '',
        email: '',
    })

    function handleChange(e) {
        const { name, value } = e.target
        setInfo(prevValue => {
            if(name === 'name') {
                return {
                    fullName: value,
                    email: prevValue.email
                }
            } else if (name === 'email') {
                return {
                    fullName: prevValue.fullName,
                    email: value
                }
            }
        })
    }

    function handleClick(e) {
        e.preventDefault()
        if(info.name === '' || info.email === '') {
            setMessage(<p style={{color: 'red'}}>'Please enter name and email.'</p>)
        } else {
            props.getDetails(info)
        }
    }

    return (
        <form className="resource-form">
            {message}
            <label className="form-label mt-4">Name</label>
            <input type="text" name='name' onChange={handleChange} value={info.fullName} className="form-control" placeholder="Name"></input>
            <label className="form-label mt-4">Email</label>
            <input type="email" name='email' onChange={handleChange} value={info.email} className="form-control" placeholder="Email"></input>
            <button className="btn btn-link mt-4" onClick={handleClick}>Submit</button>
        </form>
    )
}