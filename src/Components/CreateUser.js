import React,{useState} from 'react'
import { CometChat } from "@cometchat-pro/chat"
import { Chat } from '../lib/chat'

const CreateUser = () => {
 const[userName,setUser]=useState()
 const [userId,setUserId]=useState()

let handleSubmit = (e)=>{
    e.preventDefault()
    let user = new CometChat.User(userName)
     user.setName(userId)
     Chat.createUser(user)
}
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input
                    type="text"
                    onChange={(e)=>{setUser(e.target.value)}}
                    value={userName}
                />
            </div>
            <div>
                <label>User-Id</label>
                <input
                    type="text"
                    onChange={(e)=>{setUserId(e.target.value)}}
                    value={userId}
                />
            </div>
            <div>
                <input
                    type="submit"
                    value="Crete-User"
                />
            </div>
        </form>
    )
}

export default CreateUser