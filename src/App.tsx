import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1>Welcome!</h1>
      <Routes>
        <Route path="/" element={<h3>path /</h3>} />
        <Route path="/create-room" element={<h3>new room</h3>} />
        <Route path="/join-room/:roomId" element={<h3>new room</h3>} />
        <Route path="/room/:roomId" element={<h3>meeting room</h3>} />
      </Routes>
    </div>
  );
}

export default App;
