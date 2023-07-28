import MainComponent from '../../pages/main-page/main-page.tsx';

type OfferCountProps = {
  offerCardsCount: number;
};

function App({ offerCardsCount }: OfferCountProps): JSX.Element {
  return <MainComponent offerCardsCount={offerCardsCount} />;
}

export default App;
