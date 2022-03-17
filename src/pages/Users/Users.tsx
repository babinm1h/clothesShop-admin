import React from 'react';
import Sidebar from '../../components/Sidebar/Sidebar';
import "./Users.scss"

const Users = () => {
    return (
        <div className="users">
            <Sidebar />
            <div className="users__content">
                users
            </div>
        </div>
    );
};

export default Users;