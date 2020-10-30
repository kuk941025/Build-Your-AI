import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Practice from '@/pages/Practice';
import Options from '@/pages/Options';
import GlobalLayout from '@/components/GlobalLayout';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalLayout>
        <Switch>
          <Route path="/" component={Practice} />
          <Route path="/p" component={Practice} />
          <Route path="/o" component={Options} />
        </Switch>
      </GlobalLayout>
    </BrowserRouter>
  );
};

export default App;
