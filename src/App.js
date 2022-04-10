import logo from './logo.svg';
import './App.css';
import Home from './Page/Home/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import NotFound from './Page/NotFound/NotFound';
import Booking from './Page/Home/Booking/Booking';
import Header from './Page/Shared/Header/Header';
import Login from './Page/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Page/PrivateRoute/PrivateRoute';

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <BrowserRouter>
                    <Header></Header>
                    <Switch>
                        <Route exact path='/'>
                            <Home></Home>
                        </Route>
                        <Route path='/home'>
                            <Home></Home>
                        </Route>
                        <PrivateRoute path='/booking/:serviceName'>
                            <Booking></Booking>
                        </PrivateRoute>
                        <Route path='/login'>
                            <Login></Login>
                        </Route>
                        <Route path='*'>
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </AuthProvider>
        </div>
    );
}

export default App;
