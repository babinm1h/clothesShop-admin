import React, { FC } from 'react';
import { IProduct } from '../../types/models';
import "./ProductItem.scss"
import { FaTrash } from "react-icons/fa"
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../store/actions/products';



interface IProductItemProps {
    product: IProduct
}

const ProductItem: FC<IProductItemProps> = ({ product }) => {
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
            <FaTrash color="red" size={15} cursor="pointer" onClick={handleDelete} />
        </li>
    );
};

export default ProductItem;