import { MemoryRouter as Router, Routes, Route, Link } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import logo from './logo.png';
import Lagrange from './Lagrange';
import './App.css';
import Simpson1By3 from './Simpson1By3';
import NextownRapson from './NewtonRapson';
import EulerForward from './EulerForward';

const Hello = () => {
  return (
    <div className="problems">
      <div className="cardExercise">
        <h4>Interpolacion</h4>
        <Link to="/lagrange">Lagrange</Link>
      </div>
      <div className="cardExercise">
        <h4>Integracion</h4>
        <Link to="/simpson1by3">Simpson 1/3</Link>
      </div>
      <div className="cardExercise">
        <h4>Ecuaciones no lineales</h4>
        <Link to="/newtownRapson">Newtown Rapson</Link>
      </div>

      <div className="cardExercise">
        <h4>Ecuaciones diferenciales</h4>
        <Link to="/eulerForward">Euler hacia adelante</Link>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/lagrange" element={<Lagrange />} />
          <Route path="/simpson1by3" element={<Simpson1By3 />} />
          <Route path="/newtownRapson" element={<NextownRapson />} />
          <Route path="/eulerForward" element={<EulerForward />} />
        </Routes>

        <footer>
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
          </Link>
          <div className="logoFime">
            <img src={logo} alt="" />
          </div>
          <div className="studentData">
            <p>Yatziri Jimena Briones Zavala</p>
            <p>1963191</p>
          </div>
        </footer>
      </Router>
    </>
  );
}
