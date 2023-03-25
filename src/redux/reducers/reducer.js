const initialState = {
    wishlist:[],
}

export default function reducer(state = initialState,action){
    switch(action.type){

        case 'ADDMOVIE':{
            state.wishlist.push(action.payload)
            return {
            ...state,
            count: state.count+1,
            };
        }
            
        default:
            return state;

    }
}