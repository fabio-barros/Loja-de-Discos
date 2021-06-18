import { React, useEffect } from "react";
import { Link } from "react-router-bootstrap";
import {
    Row,
    Col,
    Image,
    ListGroup,
    Card,
    Button,
    Form,
    ListGroupItem,
} from "react-bootstrap";
import Message from "../Message";
import Loader from "../Loader";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";

const CartScreen = ({ match, location, history }) => {
    const productId = match.params.id;

    const qty = location.search ? Number(location.search.split("=")[1]) : 1;

    const dispatch = useDispatch();

    const state = useSelector((state) => state.cart);
    const { cartItems } = state;

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    };
    const checkoutHandler = () => {
        history.push('/login?redirect=shipping')
    }
    return (
        <Row>
            <Col md={8}>
                <h1>Carrinho</h1>
                {cartItems.length === 0 ? (
                    <Message>
                        Carrinho Vazio <Link to="/">Voltar</Link>
                    </Message>
                ) : (
                    <ListGroup variant="flush">
                        {cartItems.map((item) => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image
                                            src={item.albumCover}
                                            alt={item.albumName}
                                            fluid
                                            rounded
                                        ></Image>
                                    </Col>
                                    <Col md={3}>
                                        <Link to={`/product/${item.product}`}>
                                            {item.albumName}
                                        </Link>
                                    </Col>
                                    <Col md={2}>R${item.price}</Col>
                                    <Col md={2}>
                                        <Form.Control
                                            as="select"
                                            value={item.qty}
                                            onChange={(e) =>
                                                dispatch(
                                                    addToCart(
                                                        item.product,
                                                        Number(e.target.value)
                                                    )
                                                )
                                            }
                                        >
                                            {[
                                                ...Array(
                                                    item.numInStock
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
                                    <Col md={2}>
                                        <Button
                                            type="button"
                                            variant="light"
                                            onClick={() =>
                                                removeFromCartHandler(
                                                    item.product
                                                )
                                            }
                                        >
                                            <i className="fas fa-trash"></i>
                                        </Button>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )}
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2 className="subtotal">
                                Subtotal (
                                {cartItems.reduce(
                                    (acc, currentItem) => acc + currentItem.qty,
                                    0
                                )}{" "}
                                items):
                            </h2>
                            R$
                            {cartItems
                                .reduce(
                                    (acc, currentItem) =>
                                        acc +
                                        currentItem.qty * currentItem.price,
                                    0
                                )
                                .toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button type='button' className='btn-block' disabled={cartItems.length===0} onClick={checkoutHandler}>Fechar pedido</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default CartScreen;
