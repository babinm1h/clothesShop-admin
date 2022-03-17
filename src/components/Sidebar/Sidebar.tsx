import React from 'react';
import "./Sidebar.scss"
import { FaStore, FaUsers, FaUserCircle } from "react-icons/fa"
import { AiFillCreditCard, AiOutlineFolderAdd } from "react-icons/ai"
import { MdLogout } from "react-icons/md"
import { NavLink } from 'react-router-dom';
import { AllRoutes } from '../AppRoutes/AppRoutes';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';




const Sidebar = () => {
    const dispatch = useDispatch()
    const { user, isAuth } = useAppSelector(state => state.auth)

    const listItems = [
        { id: 1, title: "Products", icon: <FaStore className="li__icon" />, to: AllRoutes.HOME },
        { id: 2, title: "Create", icon: <AiOutlineFolderAdd className="li__icon" />, to: AllRoutes.CREATE },
        { id: 3, title: "Users", icon: <FaUsers className="li__icon" />, to: AllRoutes.USERS },
        { id: 4, title: "Orders", icon: <AiFillCreditCard className="li__icon" />, to: AllRoutes.ORDERS },
    ]


    const handleLogout = () => {
        dispatch(logout())
    }


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <span className="sidebar__logo">Admin</span>
            </div>
            <div className="sidebar__bottom">
                <ul>
                    <p className="ul__title">main</p>
                    {listItems.map(i => <NavLink to={i.to} key={i.id}>
                        <li>{i.icon}
                            <span>{i.title}</span>
                        </li>
                    </NavLink>)}

                    <p className="ul__title">USER</p>
                    <li onClick={handleLogout}>
                        <MdLogout className="li__icon" />
                        <span>Logout</span>
                    </li>
                    <li>
                        <FaUserCircle className="li__icon" />
                        <span>{user?.email}</span>
                    </li>
                    {!isAuth && <NavLink to={AllRoutes.LOGIN}>
                        <li>
                            <span>Login</span>
                        </li>
                    </NavLink>}
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;