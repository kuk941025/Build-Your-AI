import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from '@/pages/Main';
import Practice from '@/pages/Practice';
import GlobalLayout from '@/components/GlobalLayout';

const App = () => {
  return (
    <GlobalLayout>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/p" component={Practice} />
        </Switch>
      </BrowserRouter>
    </GlobalLayout>
  );
};

export default App;
