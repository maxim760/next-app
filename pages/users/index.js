import React from "react";
import { Navigation, A } from "../../components";
import Link from "next/link";
import { Layout } from "../../components/Layout";

const Users = ({users}) => {

  return (
    <Layout title={"Пользователи"}>
      <div>
        <h1>Список пользователей</h1>
        <ul>
          {users.length &&
            users.map(({ id, name }) => (
              <li key={id}>
                <A href={`/users/${id}`}>{name}</A>
              </li>
            ))}
        </ul>
      </div>
      <style jsx>{`
        li {
          cursor: pointer;
          width: fit-content;
        }
      `}</style>
    </Layout>
  );
};

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      users: data
    }, // will be passed to the page component as props
  }
}

export default Users;
