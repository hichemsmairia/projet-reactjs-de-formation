import React from "react";

const Footer = (props) => {
  return (
    <p id="footer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Facebook_icon_2013.svg/768px-Facebook_icon_2013.svg.png"
        alt=""
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png"
        alt=""
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/800px-YouTube_full-color_icon_%282017%29.svg.png"
        alt=""
      />
      <strong>{props.text}</strong>
    </p>
  );
};

export default Footer;