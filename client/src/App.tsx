import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import HomePage from './pages/home';
import RoomPage from './pages/room';
import { socket, SocketContext } from './context/socket';

function App() {
  return (
    <SocketContext.Provider value={socket}>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/room/:roomId" element={<RoomPage />} />
          </Routes>
        </Layout>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
