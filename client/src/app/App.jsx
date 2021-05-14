import { Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/pages/Home";
import ProductScreen from "../components/pages/ProductScreen";
import CartScreen from "../components/pages/CartScreen";
const App = () => {
    return (
        <Router>
            <Header />
            <main className="py-3">
                <Container>
                    <Route path='/' component={Home} exact/> 
                    <Route path='/product/:id' component={ProductScreen}/> 
                    <Route path='/cart/:id?' component={CartScreen}/> 
                </Container>
            </main>
            <Footer />
        </Router>
    );
};

export default App;
