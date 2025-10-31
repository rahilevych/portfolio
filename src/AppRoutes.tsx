import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/HomePage';
import { ProjectPage } from './pages/project/ProjectPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/project/:id' element={<ProjectPage />}></Route>
    </Routes>
  );
};
