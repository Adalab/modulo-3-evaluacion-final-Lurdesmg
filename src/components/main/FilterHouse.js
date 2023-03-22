import '../../styles/layout/Filters.scss'

function FilterHouse ({handleHouse, house}) {
    const handleChangeHouse = (ev) => { 
        handleHouse(ev.target.value);
    };
        return (
        <label className="input" htmlFor="house"> Selecciona por Casa: 
                <select className='input-place'
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