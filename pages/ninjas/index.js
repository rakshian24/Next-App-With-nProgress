import React from 'react';
import HeaderTitle from '../../components/HeaderTitle';
import style from '../../styles/Ninjas.module.css';
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return {
    props: {
      ninjas: data,
    },
  };
};

const Ninja = ({ ninjas }) => {
  return (
    <>
      <HeaderTitle title="Ninjas" />

      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <Link key={ninja.id} href={`/ninjas/${ninja.id}`}>
          <a className={style.single}>
            <h3>{ninja.name}</h3>
          </a>
        </Link>
      ))}
    </>
  );
};

export default Ninja;
