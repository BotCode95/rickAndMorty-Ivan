import axios from "axios"



export const getCharacters = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    const { results } = await res.json();
    const characters = results.map(character => ({
        id: character.id,
        name: character.name,
        status: character.status,
        gender: character.gender

    }))
    return characters;
}