import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getUUID } from '../utils/uuid';
import Spinner from '../components/common/spinner';
import styles from './home.module.css';
import mockup from '../assets/mockup.png';

function HomePage() {
  const [isServerOn, setServerOn] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/test`)
      .then(() => {
        console.log(`Server is running on ${process.env.REACT_APP_BASE_URL}`);
        setServerOn(true);
      })
      .catch((err) => {
        console.error(err);
        alert('The server is currently down for some reason.\n Sorry for the inconvenience.');
      });
  }, []);

  return (
    <>
      {!isServerOn && <Spinner isOn={true} message="... Waking up the server. It may take up to 30 seconds." />}
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
          <div className={styles.right_box}>
            <img src={mockup} alt="mockup" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;
