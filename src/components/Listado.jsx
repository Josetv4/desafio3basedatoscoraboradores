import { FaBeer } from 'react-icons/fa';

const Listado = ({ colaboradores, setColaboradores, searchTerm }) => {
    const filteredColaboradores = colaboradores.filter((colaborador) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
            // colaboradores.id.toLowerCase().includes(searchTermLower)||
            colaborador.nombre.toLowerCase().includes(searchTermLower) ||
            colaborador.correo.toLowerCase().includes(searchTermLower) ||
            colaborador.edad.toString().includes(searchTermLower) ||
            colaborador.cargo.toLowerCase().includes(searchTermLower) ||
            colaborador.telefono.toString().includes(searchTermLower)
        );
    });



    
    
  const eliminarTarea = (id) => {
    const listaFiltrada = colaboradores.filter(
      (task) => task.id !== id
    );
    setColaboradores(listaFiltrada);
  };

    return (
        <div className="table-responsive table">
            <table className="table table-striped table-bordered table-hover">
                <thead>
                    <tr>
                  
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredColaboradores.map((colaborador) => (
                        <tr key={colaborador.id}>
                            
                            <td>{colaborador.nombre}</td>
                            <td>{colaborador.correo}</td>
                            <td>{colaborador.edad}</td>
                            <td>{colaborador.cargo}</td>
                            <td >{colaborador.telefono} </td>
                            <td><button type="button" onClick={() => eliminarTarea(colaborador.id)} className="btn ">
                            <FaBeer IoTrashBinSharpn/>
                            </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Listado;