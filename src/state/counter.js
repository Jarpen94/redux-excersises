const INC = 'counter/INC'
const DEC = 'counter/DEC'


export const inc = () => ({
    type: INC
})

export const dec = () => ({
    type: DEC
})

const INITIAL_STATE = {
    number: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INC:
            return {
                ...state,
                number: state.number + 1
            }
        case DEC:
            return {
                ...state,
                number: state.number - 1
            }
        default:
            return state
    }
}
