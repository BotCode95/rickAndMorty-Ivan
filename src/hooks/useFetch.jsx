import axios from "axios";
import { useState, useEffect } from "react"
import urlBase from "../api/api";



export const useFetch = () => {
    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        const { data } = await axios.get(`${urlBase}/character`);
        setCharacters(data)
    }

    useEffect(() => {
        getCharacters();
    }, [])

    return {
        characters
    }
}