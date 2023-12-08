import React from 'react'
import Logo from '../assets/logo.png'

export default function Header({ changeHome, home, currentUser }) {
    const styles = {
        screenTop: {
            backgroundColor: 'purple',
            color: 'white'
        }
    };

    return (
        <header className="bg-purple" style={styles.screenTop}>
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-2 lg:px-10">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img style={{height: '100px', width: '100px'}} src={Logo} alt="" />
                    </a>
                </div>
                <div>
                {
                    currentUser?
                        <a>Hello, {currentUser.username} </a>
                        : <>Not Logged In</>
                }
                </div>
                <div className="lg:flex lg:flex-1 lg:justify-end">
                    <button onClick={changeHome} className="text-sm font-semibold leading-6 text-white-900">{home ? currentUser ? <>Sign Out</> : <>Log In</> : <>Chat</>} <span>&rarr;</span></button>
                </div>
            </nav>
        </header>
    )
}
