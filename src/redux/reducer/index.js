// Importa las actions types que necesites acá:
import {GET_ALL_HOUSES} from "../actions";

const initialState = {
    houses: [],
    house: {},
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // Acá va tu código:
        case GET_ALL_HOUSES:
            return {
                ...state,
                houses: action.payload
            }
        default:
            return state;
    }
};

export default rootReducer;
