
import Character from "../../interfaces/Character";

export const setCharacters = (characters: Character[]) => {
    return {
        type: "SETALLCHARACTERS",
        payload: characters
    }
}

export const selectedCharacter = (character: Character) => {
    return {
        type: "SETSELECTEDCHARACTER",
        payload: character
    }
}

export const selectedPagePosition = (position: number) => {
    return {
        type: "SELECEDTPAGEPOSITION",
        payload: position
    }
}



