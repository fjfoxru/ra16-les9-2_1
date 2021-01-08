import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import PageMain from './pages/PageMain';
import PagePostDetail from './pages/PagePostDetail';
import PagePostNew from './pages/PagePostNew';

function App() {


  return (
    <Router>
      <Link to="/">Главная</Link>
      <Link to="/posts/new">Новый пост</Link>
      <div>
        <Switch>
          <Route path='/posts/new' component={PagePostNew} />
          <Route path='/posts/:id' component={PagePostDetail} />
          <Route path='/' component={PageMain} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
