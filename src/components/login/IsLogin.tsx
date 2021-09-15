import React, {useState} from 'react'
import Message from '../message/IsMessage'


const users = [
	{
		"email": "ifandray@gmail.com",
		"pseudo": "Mr Tahiana Soavina",
		"password": "0123456789"
	}
]

const Login = () => {

const [email, setEmail] =useState('') 
const [password, setPassword] = useState('')
const [pseudo, setPseudo] = useState('')
const [connected, setConnected] = useState(false)
const [error, setError] = useState(' ')


const handleEmailChange = (e:any) => {
	setEmail(e.target.value)
}

const handlePasswordChange = (e:any) => {
	setPassword(e.target.value)
}

const login = (e:any) => {
	e.preventDefault()
	users.map(function(user) {
		if(user.email === email && user.password === password) {
			setConnected(true)
			setPseudo(user.pseudo)
			return
		}

		else{
			setError("Information incorrect")
			setConnected(false)
		}
	})
}


	if(connected) {
		return(
			<Message email={email} pseudo={pseudo}/>
		)

	} else {
		return(

		<div>
			
			<form className="form-signin">
  				
  				<h1 className="h3 mb-3 font-weight-normal">Authentification:  Ifandray</h1>
  				<label  className="sr-only">Email</label>
  				<input type="email" id="inputEmail"  value={email}  onChange={handleEmailChange} className="form-control" placeholder="Email ... " />
  				<label  className="sr-only">Mot de passe</label>
  				<input type="password" id="inputPassword" value={password} onChange={handlePasswordChange} className="form-control" placeholder="Mot de passe ..." required/>
  				<div className="checkbox mb-3">
  				<p className="error"> {error} </p>
  				</div>
  				<button className="btn btn-lg btn-primary btn-block" type="submit" onClick={login}  >Se connecter</button>
  					<p className="mt-5 mb-3 text-muted">&copy; copyright 2021 by Tah</p>
			</form>
		</div>
	)
	}
}

export default Login