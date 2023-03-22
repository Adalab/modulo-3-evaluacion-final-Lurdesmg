function FilterHouse ({handleHouse, house}) {
    const handleChangeHouse = (ev) => { 
        handleHouse(ev.target.value);
    };
        return (
        <label htmlFor="house"> Selecciona por Casa: 
                <select 
                name="house"
                id="house"
                onChange={handleChangeHouse}
                value={house}
                >
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                    <option value="Slytherin">Slytherin</option>
                </select>
            </label>
        );
}

export default FilterHouse;