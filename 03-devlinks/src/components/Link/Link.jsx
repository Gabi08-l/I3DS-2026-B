import React from "react";
import styles from "./Link.module.css";

const Link = ({ url, children }) => {
  return (
    <li>
      <a href={url} target="_blank" rel="noopener noreferrer">{children}</a>
    </li>
  );
};

export default Link;
