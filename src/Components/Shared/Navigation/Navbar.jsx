import { NavLink } from "react-router-dom";
import Login from "../../Auth/Login";
import { useContext, useState } from "react";
import Join from "../../Auth/Join";
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    const {showLogin} = useContext(AuthContext);
    const links =
        <>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/'>About</NavLink>
            <NavLink to='/'>Dashboard</NavLink>
        </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <p className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Login</p>
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                            </form>
                            {showLogin?
                            <>
                            <Login></Login>
                            </>
                            :
                            <>
                            <Join></Join>
                            </>}
                        </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default Navbar;