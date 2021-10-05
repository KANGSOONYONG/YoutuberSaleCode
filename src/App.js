import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Header from './component/Header';
import Youtuber from './component/Youtuber';
import CodeDetail from './component/CodeDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Switch>
            <Route exact path="/">
              <Youtuber />
            </Route>
            <Route path="/detail">
              <CodeDetail />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
