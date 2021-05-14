import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
    Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "../Rating";
import { listProductDetails } from "../../redux/actions/productActions";
import Loader from "../Loader";
import Message from "../Message";

const ProductScreen = ({ match, history }) => {
    const [quantity, setQty] = useState(1);

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => {
        console.log(state);
        return state.productDetails;
    });

    const { loading, error, product } = productDetails;

    useEffect(() => {
        console.log("howdy!");
        dispatch(listProductDetails(match.params.id));
    }, [dispatch, match]);

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}?qty=${quantity}`);
    };

    return (
        <Fragment>
            <Link className="btn btn-light  my-3" to="/">
                Voltar
            </Link>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Row>
                    <Col md={5}>
                        <Image
                            src={product.albumCover}
                            alt={product.albumName}
                            width="420"
                            height="400"
                            fluid
                        />
                    </Col>
                    <Col sm={12} md={4}>
                        <ListGroup>
                            <ListGroup.Item className="border-0">
                                <h3>{product.albumName}</h3>
                            </ListGroup.Item>
                            <ListGroup.Item className="border-0" as="div">
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
                                        {product.numInStock > 0
                                            ? "Em estoque"
                                            : "Indiponível"}
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            {product.numInStock > 0 && (
                                <ListGroup.Item>
                                    <Row>
                                        <Col>Quantidade:</Col>
                                        <Col>
                                            <Form.Control
                                                as="select"
                                                value={quantity}
                                                onChange={(e) =>
                                                    setQty(e.target.value)
                                                }
                                            >
                                                {[
                                                    ...Array(
                                                        product.numInStock
                                                    ).keys(),
                                                ].map((x) => (
                                                    <option
                                                        value={x + 1}
                                                        key={x + 1}
                                                    >
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            )}

                            <ListGroup.Item>
                                <Button
                                    onClick={addToCartHandler}
                                    className="btn-block"
                                    type="button"
                                    disabled={product.numInStock === 0}
                                >
                                    Adicionar ao carrinho
                                </Button>
                            </ListGroup.Item>
                        </Card>
                    </Col>
                </Row>
            )}
        </Fragment>
    );
};

export default ProductScreen;
