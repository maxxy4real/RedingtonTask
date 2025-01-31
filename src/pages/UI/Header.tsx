import React from "react";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <header>
      <h1>Beer</h1>
      {children}
    </header>
  );
};

export default Header;
