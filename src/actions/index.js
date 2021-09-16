export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";

export const ADD_ONE = "ADD_ONE";
export const CLEAR_DISPLAY = 'CLEAR_DISPLAY'

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

// My actions created

export const changeOperation = (operation) => {
    return ({type: CHANGE_OPERATION , payload:operation});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY})
}