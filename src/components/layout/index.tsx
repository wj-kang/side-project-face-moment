import React from 'react';
import Footer from './footer';
import Header from './header';
import styles from './index.module.css';

type Props = {
  children?: React.ReactNode;
};

function Layout({ children }: Props) {
  return (
    <section className={styles.section}>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </section>
  );
}

export default Layout;
