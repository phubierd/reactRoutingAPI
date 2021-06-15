import _ from 'lodash'
import React, { Component } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'





export default function Header() {

    const { userLogin } = useSelector(state => state.UserReducer)

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <a className="navbar-brand" href="#">CyberSoft</a>
            <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item active">
                        <NavLink activeClassName="bg-white text-dartk" activeStyle={{ color: 'red', border: '1px solid red' }} className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        {
                            _.isEmpty(userLogin) ? <NavLink activeClassName="bg-white text-dartk" activeStyle={{ color: 'red', border: '1px solid red' }} className="nav-link" to="/login">Login</NavLink> : <NavLink activeClassName="bg-white text-dartk" activeStyle={{ color: 'red', border: '1px solid red' }} className="nav-link" to="/">Hello ! {userLogin.taiKhoan} </NavLink>
                        }

                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="bg-white text-dartk" activeStyle={{ color: 'red', border: '1px solid red' }} className="nav-link" to="/register">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/detail">Detail</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">

                            <NavLink className="dropdown-item" to="/axios">Demo Axios</NavLink>
                            <NavLink className="dropdown-item" to="/usestate">Use State</NavLink>
                            <NavLink className="dropdown-item" to="/useeffect">Use Effect</NavLink>
                            <NavLink className="dropdown-item" to="/reduxhook">Redux Hooks</NavLink>

                        </div>
                    </li>
                </ul>
                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}
            </div>
        </nav>
    )
}









// export default class Header extends Component {
//     render() {
//         return (
//             <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
//                 <a className="navbar-brand" href="#">CyberSoft</a>
//                 <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
//                 <div className="collapse navbar-collapse" id="collapsibleNavId">
//                     <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
//                         <li className="nav-item active">
//                             <NavLink activeClassName="bg-white text-dartk" activeStyle={{color:'red',border:'1px solid red'}} className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink activeClassName="bg-white text-dartk" activeStyle={{color:'red',border:'1px solid red'}} className="nav-link" to="/login">Login</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink activeClassName="bg-white text-dartk" activeStyle={{color:'red',border:'1px solid red'}} className="nav-link" to="/register">Register</NavLink>
//                         </li>
//                         <li className="nav-item">
//                             <NavLink className="nav-link" to="/detail">Detail</NavLink>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
//                             <div className="dropdown-menu" aria-labelledby="dropdownId">

//                             <NavLink className="dropdown-item" to ="/axios">Demo Axios</NavLink>
//                             <NavLink className="dropdown-item" to ="/usestate">Use State</NavLink>
//                             <NavLink className="dropdown-item" to ="/useeffect">Use Effect</NavLink>
//                             <NavLink className="dropdown-item" to ="/reduxhook">Redux Hooks</NavLink>

//                             </div>
//                         </li>
//                     </ul>
//                     <form className="form-inline my-2 my-lg-0">
//                         <input className="form-control mr-sm-2" type="text" placeholder="Search" />
//                         <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                     </form>
//                 </div>
//             </nav>

//         )
//     }
// }


