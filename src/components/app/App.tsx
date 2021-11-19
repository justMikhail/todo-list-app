import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {AppRoute} from '../../const/routs';
import MainPage from '../app-pages/main-page/main-page';
import NotFoundPage from '../app-pages/not-found-page/not-found-page';

function App(): JSX.Element {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
