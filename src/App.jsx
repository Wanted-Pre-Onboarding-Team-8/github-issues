import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Issue from './pages/Issue';
import IssueDetail from './pages/IssueDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/:id" element={<IssueDetail />} />
        <Route path="/*" element={<div>404 Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
