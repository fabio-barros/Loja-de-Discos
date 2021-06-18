import { FC, Fragment, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationSate } from "../../redux/store";
import { Loader } from "../Loader";
import { Message } from "../Message";
import { Product } from "../Product";
import { listProducts } from "../../redux/actions/productActions";
interface HomeProps {}

export const Home: FC<HomeProps> = ({}) => {
    const dispatch = useDispatch();

    const productList = useSelector((state: ApplicationSate) => {
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
