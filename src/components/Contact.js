import React from "react";
const Contact = ({ name, github, twitter }) => {
  return (
    <div className="contact">
      <a
        href={`https://github.com/${github}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-github"></i>
      </a>

      {name}
      <a
        href={`https://twitter.com/${twitter}`}
        rel="noopener noreferrer"
        target="_blank"
      >
        <i className="fab fa-twitter"></i>
      </a>
    </div>
  );
};

export default Contact;
