import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../Product";
import Message from "../Message";
import Loader from "../Loader";
import { listProducts } from "../../redux/actions/productActions";

const Home = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => {
        console.log(`state: ${state}`);
        return state.productList;
    });

    const { loading, error, products } = productList;

    useEffect(() => {
        console.log("howdy!");
        dispatch(listProducts());
    }, [dispatch]);

    return (
        <Fragment>
            <h1>Discos</h1>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <Product product={product} />
                        </Col>
                    ))}
                </Row>
            )}
        </Fragment>
    );
};

export default Home;
