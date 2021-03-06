const Share = (props) => {
  const handleShare = (event) => {
    event.preventDefault();
    props.handleCreateBtn();
  };

  const handleHiddenSections = (ev) => {
    const id = ev.target.id;
    props.handleCollapsible(id);
  };
  return (
    <fieldset className={`wrapper-share ${props.classCollapsible.share}`}>
      <div className="share">
        <div
          className="share__container"
          title="pincha aquí"
          onClick={handleHiddenSections}
          id="share"
        >
          <i
            className="fa-solid fa-share-nodes share__container__icon"
            onClick={handleHiddenSections}
            id="share"
          ></i>
          <p
            className="share__container__title"
            onClick={handleHiddenSections}
            id="share"
          >
            comparte
          </p>
          <i
            className="fa-solid fa-angle-up share__container__angle collapsible "
            onClick={handleHiddenSections}
            id="share"
          ></i>
        </div>
        <div className="button-container subsection">
          <button
            className={`button-container__create ${props.disable}`}
            onClick={handleShare}
          >
            <i className="fa-solid fa-address-card button-container__create__icon"></i>
            <p
              className="button-container__create__title"
              title="crear tarjeta"
            >
              Crear tarjeta
            </p>
          </button>
        </div>
      </div>

      <div>
        <div className={`done ${props.sectionShare}`}>
          <p className="done__title">
            {props.dataApi.success
              ? 'La tarjeta ha sido creada'
              : 'Falta algún dato'}
          </p>
          <a
            className="done__link"
            title="Ir al enlace de la tarjeta"
            href={props.dataApi.cardURL}
          >
            {props.dataApi.cardURL}
          </a>
          <button
            className={`done__button-twitter    ${
              props.dataApi.success ? '' : 'hiddenTwitter'
            }`}
            title="publicar la tarjeta en twitter"
            onClick={props.shareOnTwitter}
          >
            Compartir en Twitter
          </button>
        </div>
      </div>
    </fieldset>
  );
};

export default Share;
