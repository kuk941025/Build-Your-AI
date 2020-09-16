import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '@/pages/Main';
import GlobalLayout from '@/components/GlobalLayout';

const App = () => {
  return (
    <GlobalLayout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </BrowserRouter>
    </GlobalLayout>
  );
};

export default App;
