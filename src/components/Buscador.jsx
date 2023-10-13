

const Buscador = ({ searchTerm, handleSearch }) => {

    
    return (
        <div>
            <input
                type="text"
                placeholder="Buscar colaborador..."
                value={searchTerm}
                onChange={handleSearch}
            />
        </div>
    );
};

export default Buscador;
