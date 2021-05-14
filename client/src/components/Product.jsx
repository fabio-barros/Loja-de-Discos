import React from "react";
import { Card } from "react-bootstrap";
import {Link} from 'react-router-dom';
import Rating from '../components/Rating'
const Product = ({ product }) => {
    return (
        <Card  className="my-2 border-0">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.albumCover} variant="top"></Card.Img>
            </Link>
            <Card.Body className='p-2' >
                <Link to={`/product/${product._id}`}>
                    <Card.Title as="div">
                        <strong>{`${product.artistName} - ${product.albumName}`}</strong>
                    </Card.Title>
                    <Card.Subtitle><strong>{product.releaseDate}</strong></Card.Subtitle>
                </Link>
                <Card.Text as='div'>
                    <Rating value={product.rating} text={`${product.numReviews} avaliações`}/> 
                </Card.Text>
                <Card.Text as="h3">R${product.price}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Product;
