import MainComponent from '../../pages/main-page/main-page.tsx';

type OfferCountProps = {
  offerCount: number;
}


function App( {offerCardsCount}:OfferCountProps ) : JSX.Element {
  return ( <MainComponent offerCardsCount={offerCardsCount}/>);
}

export default App;
