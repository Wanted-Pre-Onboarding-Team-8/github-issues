import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components';
import Issue from './pages/Issue';
import IssueDetail from './pages/IssueDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Issue />} />
          <Route path="/:id" element={<IssueDetail />} />
          <Route path="/*" element={<div>404 Not Found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
