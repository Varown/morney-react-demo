import React from 'react';

import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect,

} from 'react-router-dom';

import Tags from './views/Tags';
import Money from './views/Money';
import Statistics from './views/Statistics';
import NoMatch from './views/NoMatch';
import {Tag} from './views/Tag';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags" exact>
          <Tags/>
        </Route>
        <Route path="/tags/:tag" exact>
          <Tag/>
        </Route>
        <Route path="/money" exact>
          <Money/>
        </Route>
        <Route path="/statistics" exact>
          <Statistics/>
        </Route>
        <Redirect exact from="/" to="/money"/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;