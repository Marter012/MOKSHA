import React from "react";
import { FiInstagram } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { FooterContainerStyles, LinksStyles } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterContainerStyles>
      <ul>
        <li>Tel : 35145884</li>
        <li>Email : MOKSHA@hotmail.com</li>
        <li>
          <LinksStyles fontColor="#3DF700" href="https://www.whatsapp.com/?lang=es_LA" ><BsWhatsapp /></LinksStyles>
        </li>
        <li>
          <LinksStyles fontColor="#DA7AEB" href="https://www.instagram.com/"><FiInstagram /></LinksStyles>
        </li>
      </ul>
    </FooterContainerStyles>
  );
};

export default Footer;
