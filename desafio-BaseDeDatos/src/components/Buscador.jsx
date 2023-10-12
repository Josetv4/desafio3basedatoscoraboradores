const Buscador = ({ searchTerm, handleSearch }) => {
    return (
        <div>
            <input
                className='search'
                type='text'
                placeholder='Buscar colaborador...'
                value={ searchTerm } 
                onChange={ handleSearch }
            />
        </div>
    );
};

export default Buscador;
