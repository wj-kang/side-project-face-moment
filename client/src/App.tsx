import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './pages/home';
import JoinRoomPage from './pages/join-room';
import RoomPage from './pages/room';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/room/:roomId" element={<RoomPage />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
