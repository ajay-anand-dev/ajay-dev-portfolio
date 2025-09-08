import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Main, BlogPage, ProjectPage } from './pages'
// import { BackToTop } from './components'
import ScrollToTop from './utils/ScrollToTop'

import './App.css'
import SelfPage from './pages/Self/SelfPage';
import NotFound from './pages/NotFound/NotFound';

function App() {

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/self" exact component={SelfPage} />
          <Route path="/projects" exact component={ProjectPage} />

          <Route component={NotFound} />
        </Switch>
      </Router>
      {/* <BackToTop /> */}
    </div>
  );
}

export default App;
