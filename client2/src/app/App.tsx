import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Home } from "../components/pages/Home";
import { Provider } from "react-redux";
import store from "../redux/store";
function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header />
                <main className="py-3">
                    <Container>
                        <Route path="/" component={Home} exact />
                        {/* <Route path="/product/:id" component={ProductScreen} /> */}
                        {/* <Route path="/cart/:id?" component={CartScreen} /> */}
                    </Container>
                </main>
                <Footer />
            </Router>
        </Provider>
    );
}

export default App;
