import React from 'react';
import { Route, Routes } from 'react-router';
import { useAppSelector } from '../../hooks/useAppSelector';
import Create from '../../pages/Create/Create';
import Home from '../../pages/Home/Home';
import Login from '../../pages/Login/Login';
import Orders from '../../pages/Orders/Orders';
import Users from '../../pages/Users/Users';


export enum AllRoutes {
    CREATE = "/create",
    HOME = "/",
    MAIN = "/*",
    LOGIN = "/login",
    USERS = "/users",
    ORDERS = "/orders"
}


const publicRoutes = [
    { path: AllRoutes.LOGIN, elem: <Login /> }
]

const privateRoutes = [
    { path: AllRoutes.CREATE, elem: <Create /> },
    { path: AllRoutes.HOME, elem: <Home /> },
    { path: AllRoutes.MAIN, elem: <Home /> },
    { path: AllRoutes.ORDERS, elem: <Orders /> },
    { path: AllRoutes.USERS, elem: <Users /> },
]


const AppRoutes = () => {

    const isAuth = useAppSelector(state => state.auth.isAuth)

    return (
        <Routes>
            {isAuth
                ? privateRoutes.map(r => <Route path={r.path} element={r.elem} key={r.path} />)
                : publicRoutes.map(r => <Route path={r.path} element={r.elem} key={r.path} />)}

        </Routes>
    );
};

export default AppRoutes;