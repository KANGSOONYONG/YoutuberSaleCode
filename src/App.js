import Header from './component/Header';
import Youtuber from './component/Youtuber';
import CodeDetail from './component/CodeDetail';
import GlobalStyle from './style/GlobalStyle'

import {BrowserRouter, Route, Switch} from 'react-router-dom'
import EmptyPage from './component/EmptyPage';
import Footer from './component/Footer';
import CreateYoutuber from './component/CreateYoutuber';
import CreateList from './component/CreateList';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <GlobalStyle />
          <Header />
          <Switch>
            <Route exact path="/">
              <Youtuber />
            </Route>
            <Route path="/youtuber/:youtuber">
              <CodeDetail />
            </Route>
            <Route path="/createYoutuber">
              <CreateYoutuber />
            </Route>
            <Route path="/createList/:youtuber">
              <CreateList />
            </Route>
            <Route>
              <EmptyPage />
            </Route>
          </Switch>
          <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
