import React from "react";

export interface HeaderProps {
  label: string;
}

const Header = (props: HeaderProps) => {
  return <div>{props.label}<p>ABACAXI</p></div>;
};

export default Header;