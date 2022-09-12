import React from 'react';
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
    </section>
  );
}

export default Layout;
