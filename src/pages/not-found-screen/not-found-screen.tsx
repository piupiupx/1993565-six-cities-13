function NotFoundScreen() {
  return (
    <div classname="cities__places-container cities__places-container--empty container">
      <section classname="cities__no-places">
        <div classname="cities__status-wrapper tabs__content">
          <b classname="cities__status">404. Page not found</b>
          <p classname="cities__status-description">
            <link to="/" />
            Вернуться на главную
          </p>
        </div>
      </section>
      <div classname="cities__right-section"></div>
    </div>
  );
}

export default NotFoundScreen;
