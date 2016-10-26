
//Import react and react-dom
import React from 'react';
import ReactDOM from 'react-dom';


//Import react-router components: Route, Router, IndexRoute, hashHistory
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Our Main component with an alias (created in webpack.config.js)
import Main from 'Main';

// Load & Init CSS Foundation
import 'style!css!foundation-sites/dist/foundation.min.css';
$(document).foundation();

// Load SASS custom react app style (by webpack alias for ./app/sytles/app.scss)
import 'style!css!sass!CustomReactAppSASS';


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
        </Route>
    </Router>,
    document.getElementById('app')
);
