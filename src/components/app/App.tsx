import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {useSelector} from 'react-redux';

import {AppRoute} from '../../const/routs';

import MainPage from '../app-pages/main-page/main-page';
import NotFoundPage from '../app-pages/not-found-page/not-found-page';
import {getLoadedDataStatus} from '../../store/app-data/selectors';
import Loader from '../loader/loader';

function App(): JSX.Element {
  const isDataLoaded = useSelector(getLoadedDataStatus);

  if (!isDataLoaded) {
    return (
      <Loader />
    );
  }

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
