import React from 'react'
import SignUp from './SignUp'
import Login from './Login'

export default function Form({currentUser, onSignUp, onLogin, onLogout, onFormChange, form, loginFail}) {
  const styles = {
    container: {
      justifyContent: 'center',
      
    },
    link: {
      color: 'blue',
      textDecorationLine: 'underline'
    },
    button: {
      border: '1px solid black',
      padding: '2px',
      margin: '8px'
    }
  };

  return (
    <a className='flex' style = {styles.container}>
    {
        currentUser? 
          <div> 
            <button onClick={onLogout} style={styles.button}>Logout</button> 
          </div> 
        : <div>
            {loginFail?
                <div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong class="font-bold">Login Failed</strong>
              </div>
              :<></>
              }
            {
              form?
              <div>
                <SignUp onSignUp={onSignUp}/>
                <button onClick={onFormChange} style={styles.link}>Already Have an Account?</button>
              </div>
              :
              <div>
                <Login onLogin={onLogin}/>
                <button onClick={onFormChange} style={styles.link}>Don't Have an Account?</button>
              </div>
            }
          </div>
      }
    </a>
  )
}
