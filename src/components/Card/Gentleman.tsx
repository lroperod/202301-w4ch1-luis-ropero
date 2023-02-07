import "./Gentleman.css";
import { Gentleman } from "../../Model/gentleman.model";
import { FC } from "react";

interface GentlemanProps {
  gentleman: Gentleman;
}
const Card: FC<GentlemanProps> = ({ gentleman }) => {
  return (
    <li className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`img/${gentleman.picture}`}
          alt={gentleman.alternativeText}
        />
        <span className="gentleman__initial">F</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{gentleman.name[0]}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">
              {gentleman.profession}
            </span>
            Influencer
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">{gentleman.status}</span>{" "}
            RIP
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">{gentleman.twitter}</span>{" "}
            Pending
          </li>
        </ul>
      </div>
      <i className="icon gentleman__icon fas fa-check"></i>
      <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
    </li>
  );
};
export default Card;
