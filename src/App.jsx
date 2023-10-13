import  { useState } from "react";
import Listado from "./components/Listado";
import { BaseColaboradores } from "./BaseColaboradores";
import Formulario from "./components/Formulario";
import Buscador from ".//components/Buscador";

function App() {
  const [message, setMessage] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [searchTerm, setSearchTerm] = useState("");

  const agregarColaborador = (nuevoColaborador) => {
    setColaboradores([...colaboradores, nuevoColaborador]);
  };

  const handleRegistro = (estado) => {
    if (estado == 1) {
      setMessage("Colaborador Agregado");
      setConfirmation("alert alert-success");
    } else if (estado == 2) {
      setMessage("¡Completa todos los campos!");
      setConfirmation("alert alert-danger");
    } else if (estado == 3) {
      setMessage("El correo electrónico no tiene el formato correcto");
      setConfirmation("alert alert-danger");
    }
    setTimeout(() => {
      setMessage('');
      setConfirmation('');
    }, 3000);


    
  };

  
  return (
    <div className="app">      
      <h1>Listado de Colaboradores</h1>      
      <Buscador searchTerm={searchTerm} handleSearch={(e) => setSearchTerm(e.target.value)} />
      <div className="container-app">
        <Listado colaboradores={colaboradores} setColaboradores={setColaboradores} searchTerm={searchTerm} />
        <Formulario
          AggColaborador={agregarColaborador}
          handleRegistro={handleRegistro}
          confirmation={confirmation}
          message={message}
        />
      </div>
    </div>
  );
}

export default App;
