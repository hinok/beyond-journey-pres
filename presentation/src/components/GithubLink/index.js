import React from "react";
import githubMarkImage from "./../../images/GitHub-Mark-120px-plus.png";

const GithubLink = ({ href, children }) => (
  <a
    style={{ display: "flex", alignItems: "center" }}
    className="link"
    href={href}
  >
    <img
      src={githubMarkImage}
      width="30px"
      height="30px"
      style={{ flexShrink: 0, marginRight: "24px" }}
    />
    {children}
  </a>
);

export default GithubLink;
