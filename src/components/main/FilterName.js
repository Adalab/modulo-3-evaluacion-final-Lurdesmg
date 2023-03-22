import '../../styles/layout/Filters.scss'

function FilterName ({ handleCharacter, characterList}) {
    const handleChange = (ev) => {
        const value = ev.target.value;
        handleCharacter(value);
    }

    return (
        <>
        <label className="input" htmlFor="name"> Busca por personaje: 
                <input className='input-place'
                onInput={handleChange} 
                value={characterList}
                type="text" 
                id="name" 
                placeholder="ej. Luna" />
            </label>
        </>
    )
    
}

export default FilterName;