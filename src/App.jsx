import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GJSGulu from './pages/GJSGulu';
import GalleryPage from './pages/GalleryPage';
import ApplyPage from './pages/admissions/ApplyPage';
import FeesPage from './pages/admissions/FeesPage';
import DocumentsPage from './pages/admissions/DocumentsPage';
import PrincipalMessage from './pages/PrincipalMessage';
import SchoolProfile from './pages/SchoolProfile';
import SchoolManagementCommittee from './pages/SchoolManagementCommittee';
import UNEBResults from './pages/UNEBResults';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<GJSGulu />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/principal-message" element={<PrincipalMessage />} />
        <Route path="/about/school-profile" element={<SchoolProfile />} />
        <Route path="/about/management-committee" element={<SchoolManagementCommittee />} />
        <Route path="/admissions/apply" element={<ApplyPage />} />
        <Route path="/admissions/fees" element={<FeesPage />} />
        <Route path="/admissions/documents" element={<DocumentsPage />} />
        <Route path="/academics/uneb-results" element={<UNEBResults />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
