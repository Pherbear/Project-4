import React from 'react'

export default function Header({ changeHome, home, currentUser }) {
    return (
        <header className="bg-white">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
                    </a>
                </div>
                <div className="lg:flex lg:flex-1 lg:justify-end">
                    <button onClick={changeHome} className="text-sm font-semibold leading-6 text-gray-900">{home ? currentUser ? <>Sign Out</> : <>Log In</> : <>Chat</>} <span>&rarr;</span></button>
                </div>
            </nav>
        </header>
    )
}
