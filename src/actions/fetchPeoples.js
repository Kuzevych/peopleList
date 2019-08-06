import { peopleService } from "../services/people";

export const fetchPeoples = () => {
    return (dispatch)=>{
        dispatch({
           type: 'FETCH_PEOPLES_START'
        });
        peopleService.fetchAllPeoples()
            .catch(()=>{
                dispatch({
                    type:'FETCH_PEOPLES_ERROR'
                });
            })
            .then(peoples => {
                dispatch({
                    type:'FETCH_PEOPLES',
                    payload: peoples
                });
            })
    }
};
