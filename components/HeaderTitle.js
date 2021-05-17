import React from 'react';
import Head from 'next/head';

const HeaderTitle = ({ title }) => {
  return (
    <Head>
      <title>Ninja | {title}</title>
      
    </Head>
  );
};

export default HeaderTitle;
