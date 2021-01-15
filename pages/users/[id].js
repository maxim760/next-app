import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/User.module.sass";
import { A } from "../../components";
import { Layout } from "../../components/Layout";

export default function ({ user }) {
  const router = useRouter();
  console.log(router.isFallback);
  const {
    email,
    id,
    name,
    phone,
    company: { name: company },
  } = user;
  return (
    <Layout title={name} keywords={`${name},${email}`}>
      <div className={styles.user}>
        <h1>Пользователь c id: {id}</h1>
        <p>Имя - {name}</p>
        <p>Место работы - {company}</p>
        <p>Номер телефона - {phone}</p>
        <p>
          Почта - <a href={`mailto:${email}`}>{email}</a>
        </p>
      </div>
    </Layout>
  );
}
export async function getServerSideProps(context) {
  const {
    query: { id },
  } = context;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();
  if (!data || (typeof data === "object" && !Object.keys(data).length)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: data,
    }, // will be passed to the page component as props
  };
}
