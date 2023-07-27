function CitiesPlaces() {
  return;
  <section className="cities__places places">
    <h2 className="visually-hidden">Places</h2>
    <b className="places__found">312 places to stay in Amsterdam</b>
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        Popular
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        <li className="places__option places__option--active" tabIndex={0}>
          Popular
        </li>
        <li className="places__option" tabIndex={0}>
          Price: low to high
        </li>
        <li className="places__option" tabIndex={0}>
          Price: high to low
        </li>
        <li className="places__option" tabIndex={0}>
          Top rated first
        </li>
      </ul>
    </form>
    <div className="cities__places-list places__list tabs__content">
      <article className="cities__card place-card">
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img
              className="place-card__image"
              src="img/apartment-03.jpg"
              width={260}
              height={200}
              alt="Place image"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€180</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button
              className="place-card__bookmark-button button"
              type="button"
            >
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: '100%' }} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">Nice, cozy, warm big bed apartment</a>
          </h2>
          <p className="place-card__type">Apartment</p>
        </div>
      </article>
      <article className="cities__card place-card">
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img
              className="place-card__image"
              src="img/apartment-03.jpg"
              width={260}
              height={200}
              alt="Place image"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€180</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button
              className="place-card__bookmark-button button"
              type="button"
            >
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: '100%' }} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">Nice, cozy, warm big bed apartment</a>
          </h2>
          <p className="place-card__type">Apartment</p>
        </div>
      </article>
      <article className="cities__card place-card">
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img
              className="place-card__image"
              src="img/apartment-03.jpg"
              width={260}
              height={200}
              alt="Place image"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€180</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button
              className="place-card__bookmark-button button"
              type="button"
            >
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: '100%' }} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">Nice, cozy, warm big bed apartment</a>
          </h2>
          <p className="place-card__type">Apartment</p>
        </div>
      </article>
      <article className="cities__card place-card">
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img
              className="place-card__image"
              src="img/apartment-03.jpg"
              width={260}
              height={200}
              alt="Place image"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€180</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button
              className="place-card__bookmark-button button"
              type="button"
            >
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: '100%' }} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">Nice, cozy, warm big bed apartment</a>
          </h2>
          <p className="place-card__type">Apartment</p>
        </div>
      </article>
      <article className="cities__card place-card">
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href="#">
            <img
              className="place-card__image"
              src="img/apartment-03.jpg"
              width={260}
              height={200}
              alt="Place image"
            />
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">€180</b>
              <span className="place-card__price-text">/&nbsp;night</span>
            </div>
            <button
              className="place-card__bookmark-button button"
              type="button"
            >
              <svg className="place-card__bookmark-icon" width={18} height={19}>
                <use xlinkHref="#icon-bookmark" />
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{ width: '100%' }} />
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name">
            <a href="#">Nice, cozy, warm big bed apartment</a>
          </h2>
          <p className="place-card__type">Apartment</p>
        </div>
      </article>
    </div>
  </section>;
}