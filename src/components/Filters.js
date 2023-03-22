import FilterName from './FilterName';
import FilterHouse from './FilterHouse';

function Filters (props) {
    return (
        <section className="filter">
            <form>
            <FilterName
            filterCharacter={props.filterCharacter}
            handleCharacter={props.handleCharacter}
            />
            <FilterHouse
            filterHouse={props.filterHouse}
            handleHouse={props.handleHouse}
            characterList= {props.characterList}
            />
        </form>
        </section>
    );
}

export default Filters;