import { Navigate, Route, Routes } from 'react-router-dom';
import { getWithExpiry } from '../helpers/ExpireToken.js';
import { FormularioPage } from '../pages/formularios/FormularioPage.jsx';
import { HomePage } from '../pages/HomePage.jsx';
export const AppRouter = () => {
  
    
    return (
      <div>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path='/crear' element={<FormularioPage />} />
        </Routes>
      </div>
    );
  };
  