import React from "react";
import Head from "next/head";
import { Navigation } from "./Navigation";

export const Layout = ({ title = "Главная", children, isNav = true, keywords="" }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="keywords"
          content={`next,react,js,nextjs,server,users,пользователи${keywords && "," + keywords}`}
        />
        <meta
          name="description"
          content="Описание, Это приложение на основе next js, Работает быстро, оптимизировано, также кроссплатформенность и кроссбраузерность поддерживаются, с информацией о пользователях"
        />
        <meta charset={"utf-8"} />
      </Head>
      {isNav && <Navigation />}
      <main>{children}</main>
    </>
  );
};
