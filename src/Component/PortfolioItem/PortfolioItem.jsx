import React, { useState } from "react";
import Close from "../../Assets/assets/close.svg";
import { Link } from "react-router-dom";

const PortfolioItem = ({ img, title, details }) => {
  const [modalOPen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOPen);
  };

  return (
    <div className="portfolio__item">
      <img src={img} alt="" className="portfolio__img" />

      <div className="portfolio__hover" onClick={toggleModal}>
        <h3 className="portfolio__title">{title}</h3>
      </div>

      {modalOPen && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img
              src={Close}
              alt=""
              className="modal__close"
              onClick={toggleModal}
            />

            <h3 className="modal__title">{title}</h3>
            <ul className="modal__list grid">
              {details?.map(({ icon, title, desc, link }, ind) => (
                <li className="modal__item" key={ind}>
                  <span className="item__icon">{icon}</span>

                  <div>
                    <span className="item__title">{title}</span>
                    {link ? (
                      <a href={link} target="_blank">
                        <span className="item__details" style={{textDecoration: "underline"}}>{desc}</span>
                      </a>
                    ) : (
                      <span className="item__details">{desc}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <img src={img} alt="" className="modal__img" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioItem;
