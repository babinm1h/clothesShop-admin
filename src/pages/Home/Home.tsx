import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Loading from '../../components/Loading/Loading';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useAppSelector } from '../../hooks/useAppSelector';
import { fetchProducts } from '../../store/actions/products';
import "./Home.scss"
import ProductItem from '../../components/ProductItem/ProductItem';

const Home = () => {
    const dispatch = useDispatch()
    const { isLoading, products } = useAppSelector(state => state.products)

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    return (
        <div className="home">
            <Sidebar />
            {isLoading ? <Loading />
                : <div className="home__content">
                    <h1 className="home__title">All Products</h1>
                    <ul className="home__products">
                        {products.map(p => <ProductItem key={p._id} product={p} />)}
                    </ul>
                </div>}
        </div>
    );
};

export default Home;