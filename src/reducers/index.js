export const rootReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_PEOPLES_START':
            return {
                peopleList: {
                    isFetching: true,
                    isFailedToFetch: false,
                    value: []
                }
            };
        case 'FETCH_PEOPLES':
            return {
                peopleList: {
                    ...state.peopleList,
                    isFetching: false,
                    value: action.payload.users,
                }
            };
        case 'FETCH_PEOPLES_ERROR':
            return {
                peopleList: {
                    ...state.peopleList,
                    isFetching: false,
                    isFailedToFetch: true
                }
            };
        default:
            return state;
    }
};