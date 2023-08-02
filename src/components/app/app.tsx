import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import MainComponent from '../../pages/main-page/main-page.tsx';
//import MainEmpty from '../../pages/main-empty-screen/main-empty-screen.tsx';
import Login from '../../pages/login-screen/login-screen.tsx';
//import OfferNotLogged from '../../pages/offer-not-logged-screen/offer-not-logged.tsx';
import OfferGallery from '../../pages/offer-screen/offer-gallery-screen.tsx';
//import OfferInfo from '../../pages/offer-info-screen/offer-info-screen.tsx';
//import FavoriteEmpty from '../../pages/favorite-empty-screen/favorite-empty-screen.tsx';
import Favorites from '../../pages/favorite-screen/favorites-screen.tsx';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen.tsx';
import PrivateRoute from '../private-route/privat-route.tsx';

type OfferCountProps = {
  offerCardsCount: number;
};

function App({ offerCardsCount }: OfferCountProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainComponent offerCardsCount={offerCardsCount} />}
        />
        <Route path={AppRoute.Login} element={<Login />} />
        <Route path={AppRoute.Offer} element={<OfferGallery />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
