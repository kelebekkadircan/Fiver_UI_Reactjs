import React, { useEffect, useState } from 'react'
import './navbar.scss'
import { Link, useLocation } from 'react-router-dom'
// import { Link } from 'react-router-dom'

const Navbar = () => {

    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)

    const { pathname } = useLocation()
    console.log(pathname);
    const isActive = () => {

        window.scrollY > 0 ? setActive(true) : setActive(false)
    }



    useEffect(() => {
        window.addEventListener("scroll", isActive);

        return () => {
            window.removeEventListener('scroll', isActive)
        }
    }, [])

    const currentUser = {
        id: 1,
        username: "John Doe",
        isSeller: true
    }

    return (
        <>
            <div className={active || pathname !== '/' ? "navbar active" : "navbar"}>
                <div className="container">
                    <div className="logo">
                        <Link className='link' to='/'>
                            <span className='text'>fiverr</span>
                            <span className='dot'>.</span>

                        </Link>
                    </div>
                    <div className="links">
                        <span>Fiver Business</span>
                        <span>Explore</span>
                        <span>English</span>
                        <span>Sign In</span>
                        {currentUser?.isSeller && <span>Become a Seller</span>}
                        {!currentUser && <button>Join</button>}
                        {currentUser && (
                            <div className='user' onClick={() => setOpen(!open)}>
                                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
                                <span>{currentUser?.username} </span>
                                {open && <div className='options'>
                                    {
                                        currentUser?.isSeller && (
                                            <>
                                                <Link className='link' to='/mygigs'>Gigs</Link>
                                                <Link className='link' to='/add'>Add New Gigs</Link>
                                            </>
                                        )
                                    }
                                    <Link className='link' to='/orders'>Orders</Link>
                                    <Link className='link' to='/messages'>Messages</Link>
                                    <Link className='link' to='/'>Logout</Link>
                                </div>}
                            </div>
                        )}
                    </div>
                </div>
                {active || pathname !== '/' && (

                    <>
                        <hr />
                        <div className="menu">
                            <span>Test1</span>
                            <span>Test2</span>
                            <span>Test3</span>
                            <span>Test4</span>
                            <span>Test5</span>
                            <span>Test6</span>
                        </div>
                    </>
                )
                }
            </div >

        </>
    )
}

export default Navbar