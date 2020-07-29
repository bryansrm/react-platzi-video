import { actions } from '../actions';

const reducer = ( state, action ) => {

    switch( action.type ){
        case actions.setFavorite:
            return {
                ...state,
                myList: [...state.myList, action.payload]
            }
        case actions.deleteFavorite:
            return {
                ...state,
                myList: state.myList.filter(items => items.id !== action.payload.id)
            }
        default:
            return state;
    }

};

export default reducer;