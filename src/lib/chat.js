import config from '../config'
import { CometChat } from "@cometchat-pro/chat"
import history from '../Components/History'

const appSettings= new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(config.region).build()

export const Chat = {
      init: ()=>{
        CometChat.init(config.appId,appSettings).then(
            ()=>{
              console.log("Success")
            },
            (error)=>{
                console.log('failed')
            }
        )
      },
    login:(UID)=>{
        CometChat.login(UID,config.apiKey).then(
            user => {
              console.log("Login Successful:", { user });  
              history.push('/chatroom')  
            },
            error => {
              console.log("Login failed with exception:", { error });    
            }
          );
    },
    createUser:(user)=>{
        CometChat.createUser(user,config.apiKey).then(
            user=>{
                console.log("User Created",{user})
            },
            error=>{
                console.log("something went wrong",{error})
            }
        )
    }
}