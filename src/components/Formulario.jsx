import  { useState } from "react";
import { BaseColaboradores } from "../BaseColaboradores";
import Alert from "./Alert";
import { v4 as uuidv4 } from 'uuid';

function Formulario({ AggColaborador, handleRegistro, confirmation, message }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [listaColaboradores, setListaColaboradores] = useState(BaseColaboradores);
  const [alert, setAlert] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      age === "" ||
      phone === "" ||
      position === ""
    ) {
      handleRegistro(2);
      setAlert(true);
      return;
    }

    if (!validateEmail(email)) {
      handleRegistro(3);
      setAlert(true);
      return;
    }

    const nuevoColaborador = {
      id: uuidv4(),
      nombre: name,
      correo: email,
      edad: age,
      cargo: position,
      telefono: phone,
    };

    // Agrego el nuevo Colaborador
    setListaColaboradores([...listaColaboradores, nuevoColaborador]);

    AggColaborador(nuevoColaborador);

    // Vaciamos el formulario
    setName("");
    setEmail("");
    setAge("");
    setPhone("");
    setPosition("");

    handleRegistro(1);
    setAlert(true);
  };

  return (
    <div>
      <h2>Agregar Colaboradores</h2>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">
            <input
              
              id="name"
              autoFocus
              className="form-control"
              type="text"
              placeholder="Nombre del Colaborador"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="email">
            <input
              
              id="email"
              className="form-control"
              type="email"
              placeholder="Correo del Colaborador"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="age">
            <input
              
              id="age"
              className="form-control"
              type="number"
              placeholder="Edad del Colaborador"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="position">
            <input
              
              id="position"
              className="form-control"
              type="text"
              placeholder="Cargo del Colaborador"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="phone">
            <input
              
              id="phone"
              className="form-control"
              type="number"
              placeholder="Teléfono del Colaborador"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
        </div>
        <button type="submit" className="btn btn-info">
          Agregar Colaborador
        </button>
      </form>
      {alert ? <Alert type={confirmation} message={message} /> : null}
    </div>
  );
}

export default Formulario;
