export default (state, action) => {
    switch(action.type){
        case 'ADD':
        console.log('action', action)
            return {
                ...state,
                divs: action.divs,
                dimensions: action.dimensions
            }
        default: 
            return state
    }
}