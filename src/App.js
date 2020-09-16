import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Main from '@/pages/Main';
import Navigation from '@/components/Navigation';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </CssBaseline>
    </BrowserRouter>
  );
};

export default App;
