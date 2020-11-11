import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";
import Rating from "../Rating";
import products from "../../assets/products/products";
const ProductScreen = ({ match }) => {
    const product = products.find((p) => p._id === match.params.id);
    return (
        <Fragment>
            <Link className="btn btn-light  my-3" to="/">
               
                Voltar
            </Link>
            <Row >
                <Col md={5}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        width="420"
                        height="400"
                        fluid
                    />
                </Col>
                <Col sm={12} md={4}>
                    <ListGroup>
                        <ListGroup.Item className="border-0">
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} avaliações`}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            Preço: R${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item className="border-0">
                            Descrição: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup.Item variant="flush">
                            <Row>
                                <Col>Preço:</Col>
                                <Col>
                                    <strong>R${product.price}</strong>
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item variant="flush">
                            <Row>
                                <Col>Status:</Col>
                                <Col>
                                    {product.countInStock > 0
                                        ? "Em estoque"
                                        : "Indiponível"}
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                className="btn-block"
                                type="button"
                                disabled={product.countInStock === 0}
                            >
                                Adicionar ao carrinho
                            </Button>
                        </ListGroup.Item>
                    </Card>
                </Col>
            </Row>
        </Fragment>
    );
};

export default ProductScreen;
