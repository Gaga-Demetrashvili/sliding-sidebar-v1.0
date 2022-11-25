/** @format */
import "./sidebar.styles.scss";
import Sprite from "../../assets/images/sprite.svg";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul className="list">
        <li className="list__item">
          <div className="icon-container">
            <svg className="icon">
              <use xlinkHref={`${Sprite}#icon-network`}></use>
            </svg>
          </div>
          <div className="menu">
            <p className="menu__item">network</p>
          </div>
        </li>
        <li className="list__item">
          <div className="icon-container">
            <svg className="icon">
              <use xlinkHref={`${Sprite}#icon-news`}></use>
            </svg>
          </div>
          <div className="menu">
            <p className="menu__item">news</p>
          </div>
        </li>
        <li className="list__item">
          <div className="icon-container">
            <svg className="icon">
              <use xlinkHref={`${Sprite}#icon-pie-chart`}></use>
            </svg>
          </div>
          <div className="menu">
            <p className="menu__item">statistics</p>
          </div>
        </li>
        <li className="list__item">
          <div className="icon-container">
            <svg className="icon">
              <use xlinkHref={`${Sprite}#icon-database`}></use>
            </svg>
          </div>
          <div className="menu">
            <p className="menu__item">database</p>
          </div>
        </li>
        <li className="list__item">
          <div className="icon-container">
            <svg className="icon">
              <use xlinkHref={`${Sprite}#icon-dribbble`}></use>
            </svg>
          </div>
          <div className="menu">
            <p className="menu__item">sport</p>
          </div>
        </li>
        <li className="list__item">
          <div className="icon-container">
            <svg className="icon">
              <use xlinkHref={`${Sprite}#icon-game-controller`}></use>
            </svg>
          </div>
          <div className="menu">
            <p className="menu__item">gaming</p>
          </div>
        </li>
      </ul>
      <ul className="list">
        <li className="list__item">
          <div className="icon-container">
            <svg className="icon">
              <use xlinkHref={`${Sprite}#icon-user`}></use>
            </svg>
          </div>
          <div className="menu">
            <p className="menu__item">profile</p>
          </div>
        </li>
        <li className="list__item">
          <div className="icon-container">
            <svg className="icon">
              <use xlinkHref={`${Sprite}#icon-cog`}></use>
            </svg>
          </div>
          <div className="menu">
            <p className="menu__item">settings</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
