import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import { RootGlobalStyle } from './APP';

function App() {

  return (
    <BrowserRouter>
      <RootGlobalStyle />

      <Link to="/">index</Link>
      <Link to="/home">Home</Link>

      <Routes>
        <Route path="/" element={<div>welcome</div>} />
        <Route path="/home" element={<div>home</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
