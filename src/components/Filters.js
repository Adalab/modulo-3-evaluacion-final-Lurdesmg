import FilterName from './FilterName';
import FilterHouse from './FilterHouse';

function Filters ({handleCharacter, filterCharacter}) {
    return (
        <section className="filter">
            <form>
            <FilterName
            filterCharacter={filterCharacter}
            handleCharacter={handleCharacter}
            />
            <FilterHouse/>
        </form>
        </section>
    );
}

export default Filters;