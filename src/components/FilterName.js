function FilterName ({ handleCharacter, filterCharacter}) {
    const handleChange = (ev) => {
        const value = ev.target.value;
        handleCharacter(value);
    }

    return (
        <>
        <label htmlFor="name"> Busca por personaje: 
                <input 
                onInput={handleChange} 
                value={filterCharacter}
                type="text" 
                id="name" 
                placeholder="ej. Luna" />
            </label>
        </>
    )
    
}

export default FilterName;