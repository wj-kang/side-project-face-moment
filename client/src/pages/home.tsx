import { Button } from '@mui/material';
import styles from './home.module.css';

function HomePage() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.left_box}>
            <h1>FaceMoment</h1>
            <h3>Free Video Chat</h3>
            <div>
              <div>Need to meet face-to-face virtually?</div>
              <Button size="large" variant="contained" color="inherit">
                Create New Room
              </Button>
            </div>
          </div>
          <div className={styles.right_box}>img</div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
