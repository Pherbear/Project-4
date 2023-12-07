import React from 'react'
import SignUp from './SignUp'
import Login from './Login'

export default function Form({currentUser, onSignUp, onLogin, onLogout, onFormChange, form}) {
  return (
    <>
    {
        currentUser? 
          <div> 
            <a>Hello, {currentUser.username} </a>
            <button onClick={onLogout}>Logout</button> 
          </div> 
        : <div>
            <a>Not Logged In</a>
            {
              form?
              <div>
                <SignUp onSignUp={onSignUp}/>
                <button onClick={onFormChange}>Already Have an Account?</button>
              </div>
              :
              <div>
                <Login onLogin={onLogin}/>
                <button onClick={onFormChange}>Don't Have an Account?</button>
              </div>
            }
          </div>
      }
    </>
  )
}
