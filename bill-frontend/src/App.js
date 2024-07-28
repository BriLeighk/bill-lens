import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './components/MainPage';
import Dashboard from './components/Dashboard';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/components/main" component={MainPage} />
                    <Route path="/components/dashboard" component={Dashboard} />
                    <Route path="/" exact component={MainPage} />
                    {/* Add more routes as needed */}
                </Switch>
                <footer className="App-footer">
                    <div className="footer-content">
                        <div className="google-form-container">
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSdjqyMGtNWsc6rPZH3Wb5mwTj1Wmh74amPwTONvpg9qJXFJZg/viewform?embedded=true"
                                width="100%"
                                height="418"
                                frameBorder="0"
                                marginHeight="0"
                                marginWidth="0"
                            >
                                Loading…
                            </iframe>
                        </div>
                        <p className="trademark">@ Bri Kirchgessner | Ayen Monasha | Tridhatri Vallamkondu</p>
                    </div>
                </footer>
            </div>
        </Router>
    );
}

export default App;