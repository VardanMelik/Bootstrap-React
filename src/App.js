import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';
import Details from './components/pages/Details';
import PageNotFound from './components/pages/NotFoundPage';
 
function App() {
  return (
    <div>
      <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/news" component={News} />
            <Route path="/contacts" component={Contacts} />
            <Route path="/details" component={Details} />
            {/* For Page Not Found we must keep path epmty */}
            <Route component={PageNotFound} />
            {/*<Redirect to="/"/>*/}     
          </Switch>
      <Footer />
    </div>
  );
}

export default App;
