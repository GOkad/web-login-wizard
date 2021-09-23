import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Form from './pages/Form';
import Landing from './pages/Landing';
import Success from './pages/Success';
import Validation from './pages/Validation';

function App() {
  return (
    <Router>
        <Header />
        <Route path="/" exact component={Landing} />
        <Route path="/form" component={Form} />
        <Route path="/validate" component={Validation} />
        <Route path="/success" component={Success} />
    </Router>
  );
}

export default App;
