import { useRoutes, BrowserRouter } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ColorBar from "../../Components/ColorBar/ColorBar";
import Home from "../Home/Home";
import Proposal from "../Proposal/Proposal";
import Calendar from "../Calendar/Calendar";
import NotFound from "../NotFound/NotFound";
import "./App.css";

const AppRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/proposal", element: <Proposal />},
    { path: "/calendar", element: <Calendar />},
    { path: "*", element: <NotFound /> },
  ]);
};

function App() {
  return (
    <BrowserRouter>
      <nav>
        <a href="https://aahd.net.ar/" target="_blank" rel="noopener noreferrer">
          <img
            src="images/aahd.png"
            alt="Asociación Argentina de Humanidades Digitales"
            width={60}
          />
        </a>
        <a href="https://rchd.com.co/" target="_blank" rel="noopener noreferrer">
          <img src="images/rchd.png" alt="Red Colombiana de Humanidades Digitales" width={78} />
        </a>
        <a href="http://humanidadesdigitales.net/" target="_blank" rel="noopener noreferrer">
          <img src="images/rhd.png" alt="Red de Humanidades Digitales" width={68} />
        </a>
        <a href="https://cuaieed.unam.mx/" target="_blank" rel="noopener noreferrer"><img src="images/cuaieed.svg" alt="Coordinación de Universidad Abierta y Educación Digital" width={60} /></a>
        <NavLink to="/proposal" className="proposal">Propón un evento</NavLink>
        <ColorBar />
      </nav>
      <AppRoutes />
      <footer>
        <div className="container mx-auto p-2 text-white text-sm flex flex-col lg:flex-row">
          <div className="lg:w-1/6 mb-6">
            <p className="mt-7 mb-4">Desarrollado por:</p>
            <p><img src="images/bunam_mooc.svg" alt="B@UNAM & MOOC" width={100} /></p>
          </div>
          <div className="lg:w-2/3">
            <h6 className="text-xl">Aviso</h6>
            <p>Coordinación de Universidad Abierta y Educación Digital de la UNAM. ©Todos los derechos reservados 2024. Hecho en México. Este sitio puede ser reproducido con fines no lucrativos, siempre y cuando no se mutile, se cite la fuente completa y su dirección electrónica, de otra forma, se requiere permiso previo por escrito de la Institución.</p>
            <p>Al navegar en este sitio, encontrará contenidos diseñados por académicos de la UNAM, denominados Recursos Educativos Abiertos (REA), disponibles para todo el público en forma gratuita. Los contenidos de cada REA son responsabilidad exclusiva de sus autores y no tienen impedimento en materia de propiedad intelectual; asimismo, no contienen información que por su naturaleza pueda considerarse confidencial y reservada.</p>
            <p>Los REA podrán ser utilizarlos sin fines de lucro, citando invariablemente la fuente y sin alterar la obra, respetando los términos institucionales de uso y los derechos de propiedad intelectual de terceros.</p>
          </div>
          <div className="lg:w-1/6"></div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
