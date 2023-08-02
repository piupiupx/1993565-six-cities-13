function NotFoundScreen() {
  return (
    <div className="cities__places-container cities__places-container--empty container">
      <section className="cities__no-places">
        <div className="cities__status-wrapper tabs__content">
          <b className="cities__status">404. Page not found</b>
          <p className="cities__status-description">
            <link to="/" />
            Вернуться на главную
          </p>
        </div>
      </section>
      <div className="cities__right-section"></div>
    </div>
  );
}

export default NotFoundScreen;
