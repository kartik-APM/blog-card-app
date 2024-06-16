import { FC } from "react";
import "./style.css";
import { BlogCardProps } from "./types";
import ArrowIcon from "../ArrowIcon";

const BlogCard: FC<BlogCardProps> = (props) => {
  const {
    imgSrc,
    header: { badgeText, headerText },
    body: { bodyText },
  } = props || {};

  return (
    <div className="card">
      <img className="article-image" src={imgSrc} alt={headerText} />
      <div className="article-content">
        <div>
          <p className="badge" style={{ color: "green" }}>{badgeText}</p>
          <p className="header-text">{headerText}</p>
        </div>
        <div>
          <p className="body-text" >{bodyText}</p>
          <div className="read-more">
            <p className="read-more-text">Read more</p>
            <ArrowIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
