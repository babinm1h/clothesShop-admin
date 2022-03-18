import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import Sidebar from '../../components/Sidebar/Sidebar';
import UserItem from '../../components/UserItem/UserItem';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchUsers } from '../../store/actions/users';
import "./Users.scss"

const Users = () => {
    const dispatch = useDispatch()
    const { users, isLoading } = useAppSelector(state => state.users)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    return (
        <div className="users">
            <Sidebar />
            {isLoading ? <Loading />
                : <div className="users__content">
                    <h1>All Users</h1>
                    <ul className="users__list">
                        {users.map(u => <UserItem user={u} key={u._id} />)}
                    </ul>
                </div>}
        </div>
    );
};

export default Users;