import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import OrdersItem from '../../components/OrdersItem/OrdersItem';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchOrders } from '../../store/actions/orders';
import "./Orders.scss"

const Orders = () => {
    const dispatch = useDispatch()
    const { isLoading, orders } = useAppSelector(state => state.orders)

    useEffect(() => {
        dispatch(fetchOrders())
    }, [])


    return (
        <div className="orders">
            <Sidebar />
            {isLoading ? <Loading />
                : <div className="orders__content">
                    <ul className="orders__list">
                        {orders.map(o => <OrdersItem order={o} key={o._id} />)}
                    </ul>
                </div>}
        </div>
    );
};

export default Orders;