import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Link } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <Navigation />

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/cv" component={CV} />
            </Switch>
        </Router>
    );
};

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/cv">CV</Link>
                </li>
            </ul>
        </nav>
    );
};

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
        </div>
    );
};

const About = () => {
    return (
        <div>
            <h1>About Page</h1>
        </div>
    );
};

const CV = () => {
    return (
        <div>
            <h1>CV</h1>
        </div>
    );
};

export default App;
