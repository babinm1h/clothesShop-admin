import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { deleteUser } from '../../store/actions/users';
import { IUser } from '../../types/models';
import "./UserItem.scss"
import { FaTrash } from "react-icons/fa"


interface IUserItemProps {
    user: IUser
}

const UserItem: FC<IUserItemProps> = ({ user }) => {
    const isDeleting = useAppSelector(state => state.users.isDeleting)
    const { user: authUser } = useAppSelector(state => state.auth)
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteUser(user._id!))
    }


    return (
        <li className="users__item">
            <img src="https://www.pngkit.com/png/full/202-2022289_web-reconceptualization-and-redesign-of-carnet-jove-android.png" alt="user" />
            <div className="users__item__email">{user.email}</div>
            {authUser?.id === user._id ? <div>Your account</div>
                : <button disabled={isDeleting} onClick={handleDelete}>
                    <FaTrash color="red" size={15} />
                </button>}
        </li>
    );
};

export default UserItem;