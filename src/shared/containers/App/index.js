import React from 'react';
import { Route, Redirect, Link } from 'react-router-dom';

// Import any global CSS before the routes to preserve CSS order
import '../../css/Global.css';

import { RouteWithSubRoutes } from '../../components';
import routes from '../../routes';

const App = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
      <li><Link to="/a-redirect">Redirect Route (look at the url and where you go)</Link></li>
    </ul>

    <hr/>

    {routes.map(route =>
      <RouteWithSubRoutes key={route.path} {...route} />
    )}
  </div>
);

export default App;
