import "./App.css";
import Header from "./components/header/header";
import Card from "./components/header/card/card";
import Circulo from "./components/circulo/circulo";
import Acordion from "./components/acordion/acordion";
function App() {
  return (
    <>
      <Header />
      <main>
        <div className="contenedor-flex">
          <div className="container">
            <h1>
              Tu espacio en el cielo digital con <span>Clouds.</span>
            </h1>
            <div className="detalles">
              <p>
                Descubre un rincón en el cielo digital con Clouds. Nuestro
                espacio en la nube te ofrece la libertad para almacenar,
                compartir y acceder a tus archivos en cualquier momento y lugar.
              </p>
            </div>
            <div className="detalles-input">
              <input
                type="text"
                placeholder="gsarubbi28@example.com"
                className="send-icon"
              />
            </div>
          </div>
          <div className="detalles">
            <Card />
            <div className="circulo-container-absolute">
              <Circulo />
              <Circulo />
            </div>
          </div>
        </div>
        <div className="waves">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#646cff"
              fill-opacity="1"
              d="M0,256L34.3,218.7C68.6,181,137,107,206,112C274.3,117,343,203,411,202.7C480,203,549,117,617,117.3C685.7,117,754,203,823,234.7C891.4,267,960,245,1029,245.3C1097.1,245,1166,267,1234,256C1302.9,245,1371,203,1406,181.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="waves2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#646cff"
              fill-opacity="1"
              d="M0,256L34.3,218.7C68.6,181,137,107,206,112C274.3,117,343,203,411,202.7C480,203,549,117,617,117.3C685.7,117,754,203,823,234.7C891.4,267,960,245,1029,245.3C1097.1,245,1166,267,1234,256C1302.9,245,1371,203,1406,181.3L1440,160L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="acordion-preg-frecuentes">
          < Acordion />
        </div>
      </main>
    </>
  );
}

export default App;
