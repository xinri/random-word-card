import { CssBaseline } from '@material-ui/core';
import './App.css';

import { BrowserRouter as Router, Switch, Route, useHistory } from 'react-router-dom';
import RandomCard from './RandomCard/RandomCard';
import WriteCard from './WriteCard/WriteCard';
import ListAll from './ListAll/ListAll';
import MenuAppBar from './MenuAppBar/MenuAppBar';

const App = () => {
  
  const history = useHistory();

  return (
    
    <div class="root">
      <CssBaseline />
      <Router>
      <MenuAppBar useHistory={history}/>
      <main>
        <center>
            <Switch>
              <Route path="/all-card">
                <ListAll />
              </Route>
              <Route path="/write-card">
                <WriteCard />
              </Route>
              <Route path="/">
                <RandomCard />
              </Route>
            </Switch>
        </center>
      </main>
      </Router>
    </div>
  );
};

export default App;
