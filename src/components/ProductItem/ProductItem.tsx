import React, { FC } from 'react';
import { IProduct } from '../../types/models';
import "./ProductItem.scss"
import { FaTrash } from "react-icons/fa"
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../store/actions/products';
import { useAppSelector } from '../../hooks/useAppSelector';



interface IProductItemProps {
    product: IProduct
}

const ProductItem: FC<IProductItemProps> = ({ product }) => {
    const isDeleting = useAppSelector(state => state.products.isDeleting)
    const dispatch = useDispatch()

    const handleDelete = () => {
        if (window.confirm("Detele this product from DataBase?")) {
            return dispatch(deleteProduct(product._id))
        }
    }

    return (
        <li key={product._id}
            className="home__products__item product__item">
            <img src={product.img} alt="img" />
            <div className="product__item__title">{product.title}</div>
            <button onClick={handleDelete} disabled={isDeleting}>
                <FaTrash color="red" size={15} cursor="pointer" />
            </button>
        </li>
    );
};

export default ProductItem;