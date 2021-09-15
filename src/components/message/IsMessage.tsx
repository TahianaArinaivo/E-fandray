import React, {useState} from 'react'


interface Iprops {
	pseudo: string
	email: string
}

const users = [
	{
		"email": "ifandray@gmail.com",
		"pseudo": "Mr Tahiana Soavina",
		"password": "0123456789"
	}
]
let tableau:any = [''];


const Message:React.FC<Iprops> = ({email, pseudo}) => {

	const [textMessage, setTextMessage] = useState('')
    const [allMessage, setAllMessage] = useState([''])
	


	const handleClickSend = (e:any) => {
		e.preventDefault()
        if(textMessage) {
            tableau.push(textMessage)
            setAllMessage(tableau)
        }
		
		setTextMessage("")
	}

	const handleMessageChange = (e:any) => {
		setTextMessage(e.target.value)
	}





	return(
		<div>
			
			<div id="chat-container">
            <div id="search-container">
                  <input type="text" placeholder="Recharche" />
            </div>
            <div id="conversation-list">
                 <div className="conversation active">
                      <img src="images/icons/profil (1).png" alt="id"/>
                      <div className="title-text">
                         Mr Tahiana Soavina
                      </div>
                      <div className="created-date">
                          sept 15
                      </div>
                      <div className="conversation-message">
                         Bonjour !
                      </div>
                 </div>
            </div>


            <div id="new-message-container">
                <a href="#">+</a>
                <p className="signe">&copy; copyright 2021 by Tah</p>
            </div>


            <div id="chat-title">
                <span>Mr Tahiana Soavina</span>
                <img src="images/icons/profil (2).png" alt="" />
            </div>


            <div id="chat-message-list">
                <div className="message-row you-message">
                         <div className="message-content">
        
                            {
                                allMessage.map(function(message){
                                    if (message) {
                                        return ( <div className="message-text" key={message}>{message}</div> ) 
                                    }                               
                                })
                            }
    
                     </div>
                     
                </div>
                <div className="message-row other-message">
                     <div className="message-content">
                         <img src="images/icons/profil (1).png" alt="" />
                         <div className="message-text">Bonjour !</div>
                         <div className="message-time">sept 15</div>
                     </div>
                </div>
            </div>


            <div id="chat-form">
                <img src="images/icons/trombone.png" alt="" />
               <div>
                <input type="text" placeholder="ici votre message..." value={textMessage} onChange={handleMessageChange} />
                <button type="submit" className="btnSend" onClick={handleClickSend}>
                 <img className="btnSend" src="images/icons/envoyer.png" alt="" />
                </button>
               </div>
            </div>
        </div>


		</div>		
	)

}

export default Message
