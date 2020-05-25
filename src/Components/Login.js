import React, { useState } from 'react'
import { Chat } from '../lib/chat'
import './Component.css'



const Login = () => {
    const [user, setUser] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        Chat.login(user)
    }
    return (
        <div className="Login-class">
            <div className="Login-form">
                <div>Anonymous-Chat</div>
                <div style={{ textAlign: "center" }}>
                    <div>
                        <h1>Welcome to Anonymous chat,Login with your pin </h1>
                        <p>Not a user? CREATE-USER-BTN</p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                        />
                        <input
                            type="submit"
                            value="Login"
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Login