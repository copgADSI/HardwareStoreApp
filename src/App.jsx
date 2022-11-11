import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Navigation from './layout/Navigation';
import AboutUsPage from './pages/AboutUsPage';
import ChairsPage from './pages/ChairsPage';
import ComponentsPage from './pages/ComponentsPage';
import FullPCPage from './pages/FullPCPage';
import LandingPage from './pages/LandingPage';
import LaptopsPage from './pages/LaptopsPage';
import LoginRegister from './pages/LoginRegisterPage';
import MonitorsPage from './pages/MonitorsPage';
import PCGamersPage from './pages/PCGamersPage';
import PCOfficePage from './pages/PCOfficePage';
import PeripheralsPage from './pages/PeripheralsPage';
import ProfilePage from './pages/ProfilePage';
import ShopPage from './pages/ShopPage';
import ViewProduct from './pages/ViewProduct';
/* import Sidebar from './partials/Sidebar'; */

const queryClient = new QueryClient()

function App() {
  return (
    <div className="app">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Navigation />

          {/*  <Sidebar /> */}
          <Routes>
            {localStorage.getItem('access_token')
              ?
              <Route path='/perfil' element={<ProfilePage />} />
              :
              <Route path='/iniciar-sesion' element={<LoginRegister />} />
            }
            <Route path='/' element={<LandingPage />} />
            <Route path='/tienda' element={<ShopPage />} />
            <Route path='detalles-producto/:productId' element={<ViewProduct />} />
            <Route path='/perifericos' element={<PeripheralsPage />} />
            <Route path='/portatiles' element={<LaptopsPage />} />
            <Route path='/pcgamers' element={<PCGamersPage />} />
            <Route path='/pcoficina' element={<PCOfficePage />} />
            <Route path='/sillas' element={<ChairsPage />} />
            <Route path='/monitores' element={<MonitorsPage />} />
            <Route path='/combo-completo' element={<FullPCPage />} />
            <Route path='/mouseGamers' element={<FullPCPage />} />
            <Route path='/componentes' element={<ComponentsPage />} />
            <Route path='/acerca-de-nosotros' element={<AboutUsPage />} />
            <Route path='/contactanos' element={<ContactPage />} />
            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
