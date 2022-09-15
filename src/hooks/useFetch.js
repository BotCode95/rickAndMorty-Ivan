import axios from "axios";
import { useState, useEffect } from "react"
import api from "../api/api";



export const useFetch = () => {
    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        const { data } = await axios.get("https://rickandmortyapi.com/api/character");
        console.log(data);
        setCharacters(data)
    }

    useEffect(() => {
        getCharacters();
    }, [])

    return {
        characters
    }
}