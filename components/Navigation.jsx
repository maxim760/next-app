import React from "react";
import { ActiveLink } from "./ActiveLink";

export const Navigation = () => {
  return (
    <>
      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 55px;
          background-color: #1e90ff;
          position: fixed;
          top: 0;
          width: 100vw;
          left: 0;
          right: 0;
        }
      `}</style>
      <style global jsx>
        {`
          nav + * {
            padding-top: 55px;
          }
        `}
      </style>
      <nav>
        <ActiveLink href={"/"}>Главная</ActiveLink>
        <ActiveLink href={"/users"}>Пользователи</ActiveLink>
      </nav>
    </>
  );
};
