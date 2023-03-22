import FilterName from './FilterName';
import FilterHouse from './FilterHouse';

function Filters (props) {
    return (
        <section className="filter">
            <form className='form'>
            <FilterName
            characterList={props.characterList}
            handleCharacter={props.handleCharacter}
            />
            <FilterHouse  
            handleHouse={props.handleHouse}
            characterList= {props.characterList}
            />
        </form>
        </section>
    );
}

export default Filters;