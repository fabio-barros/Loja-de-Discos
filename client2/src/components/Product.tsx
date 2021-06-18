import { FC } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductInterface } from "../interfaces/Interfaces";
import { Rating } from "./Rating";

interface ProductProps {
    product: ProductInterface;
}

export const Product: FC<ProductProps> = ({ product }) => {
    const {
        _id,
        albumCover,
        artistName,
        albumName,
        releaseDate,
        rating,
        numReviews,
        price,
    } = product;
    return (
        <Card className="my-2 border-0">
            <Link to={`/product/${_id}`}>
                <Card.Img src={albumCover} variant="top"></Card.Img>
            </Link>
            <Card.Body className="p-2">
                <Link to={`/${_id}`}>
                    <Card.Title as="div">
                        <strong>{`${artistName} - ${albumName}`}</strong>
                    </Card.Title>
                    <Card.Subtitle>
                        <strong>{releaseDate}</strong>
                    </Card.Subtitle>
                </Link>
                <Card.Text as="div">
                    <Rating value={rating} text={`${numReviews} avaliações`} />
                </Card.Text>
                <Card.Text as="h3">R${price}</Card.Text>
            </Card.Body>
        </Card>
    );
};
