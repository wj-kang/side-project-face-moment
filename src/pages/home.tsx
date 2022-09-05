import { Link } from 'react-router-dom';
import { getUUID } from '../utils/uuid';
import styles from './home.module.css';
import { useEffect } from 'react';

function HomePage() {
  // useEffect(() => {}, []);

  return (
    <>
      <section className={styles.page__container}>
        <div className={styles.container}>
          <div className={styles.left_box}>
            <h1>FaceMoment</h1>
            <h3>Free Video Chat</h3>
            <div>
              <div>Need to meet face-to-face virtually?</div>

              <Link to={`/room/${getUUID()}`}>
                <button>Create New Room</button>
              </Link>
            </div>
          </div>
          <div className={styles.right_box}>img</div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
