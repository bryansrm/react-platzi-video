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
        case actions.loginRequest:
            return{
                ...state,
                user: action.payload
            }
        case actions.logoutRequest:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }

};

export default reducer;