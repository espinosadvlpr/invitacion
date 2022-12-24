import image from './memeface.png';
import pdf from './pao.pdf';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>INVITACIÓN VACACIONES</h1>
      <p>Buenas noches, </p>
      <p>La presente es para informar que la señorita Paula Valeria Sanchez Nieto ha sido invitada a un viaje en ENERO 2023</p>
      <p>Lugar de salida: Tunja</p>
      <p>Lugar de destino: Neiva</p>
      <p>Fecha: ENERO 2023</p>
      <p>Vehiculo: a pie</p>
      <button className="button">
        <a href={pdf} target="_blank" rel="noopener noreferrer" download="invitacio_pao.pdf"> 
        Descargue su ticket
        </a>
      </button>
      <p>Muchas gracias, quedo atento a su respuesta.</p>
      <img src={image}/>
    </div>
  );
}

export default App;
