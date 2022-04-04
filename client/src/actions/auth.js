import { AUTH } from "../constants/actionsTypes";
import * as api from "../api/index.js";

export const login = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.logIn(formData);

        dispatch({ type: AUTH, data });

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });

        history.push('/')
    } catch (error) {
        console.log(error);
    }
};