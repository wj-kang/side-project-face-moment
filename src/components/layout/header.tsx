import styles from './header.module.css';

function Header() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.logo}>FaceMoment</div>
      </section>
    </>
  );
}

export default Header;
