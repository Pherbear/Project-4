import React from 'react'
import SignUp from './SignUp'
import Login from './Login'

export default function Form({currentUser, onSignUp, onLogin, onLogout, onFormChange, form}) {
  const styles = {
    container: {
      justifyContent: 'center',
      
    },
    link: {
      color: 'blue',
      textDecorationLine: 'underline'
    }
  };

  return (
    <a className='flex' style = {styles.container}>
    {
        currentUser? 
          <div> 
            <button onClick={onLogout}>Logout</button> 
          </div> 
        : <div>
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
