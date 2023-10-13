import React from 'react';

const Listado = ({ colaboradores, searchTerm }) => {
    const filteredColaboradores = colaboradores.filter((colaborador) => {
        const searchTermLower = searchTerm.toLowerCase();
        return (
            colaborador.nombre.toLowerCase().includes(searchTermLower) ||
            colaborador.correo.toLowerCase().includes(searchTermLower) ||
            colaborador.edad.toString().includes(searchTermLower) ||
            colaborador.cargo.toLowerCase().includes(searchTermLower) ||
            colaborador.telefono.toString().includes(searchTermLower)
        );
    });

    return (
        <div className='table-responsive table'>
            <table className='table table-striped table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Edad</th>
                        <th>Cargo</th>
                        <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredColaboradores.map((colaborador) => (
                        <tr key={ colaborador.id }>
                            <td>
                                { colaborador.id }
                            </td>
                            <td>
                                { colaborador.nombre }
                            </td>
                            <td>
                                { colaborador.correo }
                            </td>
                            <td>
                                { colaborador.edad }
                            </td>
                            <td>
                                { colaborador.cargo }
                            </td>
                            <td>
                                { colaborador.telefono }
                            </td> 
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Listado;