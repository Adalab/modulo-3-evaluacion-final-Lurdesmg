function FilterHouse (props) {
    return (
        <>
        <label htmlFor="character"> Seleccion la Casa: 
                <select name="house" id="house">
                    <option value="Griffindor">Griffindor</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                    <option value="Slytherin">Slytherin</option>
                </select>
            </label>
        </>
    )
}

export default FilterHouse;