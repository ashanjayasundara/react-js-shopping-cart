
import axios from "axios";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";

export const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
};
export const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
};
export const fetchUsersFailure = (err) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: err
    }
};


export const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest());
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data;
                console.log(response.data);
                dispatch(fetchUsersSuccess(users));
            }).catch(error => {
                dispatch(fetchUsersFailure(error.message));
            });
    }
}

