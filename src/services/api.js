const getApi = () => {
    return fetch ('https://hp-api.onrender.com/api/characters/house/gryffindor')
    .then ((response) => response.json())
    .then ((data) => {
        const cleanData = data.map((eachCharacter) => {
            return {
                id: eachCharacter.id,
                name: eachCharacter.name,
                specie: eachCharacter.species,
                image: eachCharacter.image,
                status: eachCharacter.alive,
                gender: eachCharacter.gender,
                house: eachCharacter.house,
            };
        });
        return cleanData;
    });
};

export default getApi;