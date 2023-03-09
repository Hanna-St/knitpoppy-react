import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import TrackingPage from './pages/TrackingPage';
// import WorksTypePage from './pages/WorksTypePage';
// import DetailWorksPage from './pages/DetailWorksPage';
import './App.css';
import BagsPage from './pages/BagsPage';
import HomeDecorPage from './pages/HomeDecorPage';
import FeedbackPage from './pages/FeedbackPage';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='works' element={<WorksPage />} />
        <Route path='bags' element={<BagsPage />} />
        <Route path='home_decor' element={<HomeDecorPage />} />
        <Route path='tracking' element={<TrackingPage />} />
        <Route path='contact' element={<ContactPage />} />
        <Route path='feedback' element={<FeedbackPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
