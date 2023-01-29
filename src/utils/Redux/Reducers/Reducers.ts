export const Characters = (state = [], action: any) => {
    switch (action.type) {
        case "SETALLCHARACTERS":
            return action.payload;
        default:
            return state;
    }
}
export const SelectedCharacter = (state = {}, action: any) => {
    switch (action.type) {
        case "SETSELECTEDCHARACTER":
            return action.payload;
        default:
            return state;
    }
}

export const SelectedPagePosition = (state = 0, action: any) => {
    switch (action.type) {
        case "SELECEDTPAGEPOSITION":
            return action.payload;
        default:
            return state;
    }
}

