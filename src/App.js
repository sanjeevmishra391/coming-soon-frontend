import React from 'react';
import {
  BrowserRouter as Router, 
  Switch,
  Route
} from 'react-router-dom';
import Layout from './layout/Layout'
import Home from './components/pages/Home'
import AboutUs from './components/pages/Aboutus'

function App() {
  return (
    <div>
      <Router>
        <Layout>
          <Switch>
              <Route path={'/aboutus'} component={AboutUs}></Route>
              <Route path={'/'} component={Home}></Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
