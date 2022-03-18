import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks/useAppSelector';
import { changeOrderStatus } from '../../store/actions/orders';
import { IOrder, OrderStatus } from '../../types/models';
import "./OrdersItem.scss"


interface IOrdersItemProps {
    order: IOrder
}



const OrdersItem: FC<IOrdersItemProps> = ({ order }) => {
    const dispatch = useDispatch()
    const isChanging = useAppSelector(state => state.orders.isChanging)

    const handlePending = () => {
        dispatch(changeOrderStatus({ id: order._id, status: OrderStatus.pending }))
    }

    const handleDelivered = () => {
        dispatch(changeOrderStatus({ id: order._id, status: OrderStatus.delivered }))
    }

    return (
        <li className="orders__item">
            <div className="orders__item__id">ID: {order._id}</div>
            <div className="orders__item__price">Price: {order.amount} $</div>

            <div className="orders__item__status">
                <button onClick={handlePending}
                    disabled={order.status === OrderStatus.pending || isChanging}
                    className={order.status === "pending" ? "order__status order__status_pending" : "order__status"}>
                    pending
                </button>

                <button onClick={handleDelivered}
                    disabled={order.status === OrderStatus.delivered || isChanging}
                    className={order.status === "delivered" ? "order__status order__status_delivered" : "order__status"}>
                    delivered
                </button>
            </div>
        </li>
    );
};

export default OrdersItem;