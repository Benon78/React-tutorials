import { useState, useContext } from "react"
import UserContext from "../context/UserContext"

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (event) => {
        event.preventDefault()
        setUser({ username, password })
    }
  return (
    <div>
        <h2>Login Form</h2>
            <label>
                Email:
                <input 
                type="text"
                 value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                />
            </label>
            <br />
            <label>
                Password:
                <input
                 type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}
                 />
            </label>
            <br />
          <button 
          onClick={handleSubmit}
          >Submit</button>
        

    </div>
  )
}

export default Login