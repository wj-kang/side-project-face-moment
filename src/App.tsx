import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import CreateRoomPage from './pages/create-room';
import HomePage from './pages/home';
import JoinRoomPage from './pages/join-room';
import RoomPage from './pages/room';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/create-room"
          element={
            <Layout>
              <CreateRoomPage />
            </Layout>
          }
        />

        <Route
          path="/join-room/:roomId"
          element={
            <Layout>
              <JoinRoomPage />
            </Layout>
          }
        />

        <Route
          path="/room/:roomId"
          element={
            <Layout>
              <RoomPage />
            </Layout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
