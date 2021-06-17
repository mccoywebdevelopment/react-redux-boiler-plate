import { API_URI, CLIENT_URL } from './variables';
import { toggleLoading } from '../actions/loading';
import { createMessage } from '../actions/alert';

export function FETCH(type, url, body, jwt, dispatch, isLoading, done) {
    if (isLoading) {
        dispatch(toggleLoading(true));
    }
    let fetchObj = {
        method: type,
        headers: {
            'content-type': 'application/json'
        }
    }
    if (body && type == "POST" || type == "PATCH") {
        fetchObj.body = JSON.stringify(body);
    }
    let uri = API_URI + url;
    if (jwt) {
        fetchObj.headers.Authorization = "Bearer " + jwt;
    }

    let isFetched = false;
    if (isLoading) {
        dispatch(createMessage("", ""));
    }
    fetch(uri, fetchObj)
        .then(res => {
            if (res.ok) {
                return (res.json())
            } else {
                return ({error:"invalid response"});
            }
        })
        .then(res => {
            isFetched = true;
            if (isLoading) {
                dispatch(toggleLoading(false));
            }
            if (!res || (!res.error && !res.result)) {
                done("Didn't get a response");
            } else if (res.error) {
                done(res.error)
            } else {
                done(null, res.result);
            }
        });
    setTimeout(() => {
        if (!isFetched) {
            dispatch(toggleLoading(false));
            dispatch(createMessage("Unable to connect to server", 'danger'));
        }
    }, 15000);
}

export const isCallback = (value, isError, callback)=>{
    if (callback && isError) {
        callback(value)
    } else if (callback) {
        callback(null, value)
    }
}

export function getPath(index) {
    let arr = window.location.pathname.split('/');
    if (!index) {
        return arr;
    } else if (index == "end") {
        return arr[arr.length - 1];
    } else {
        return arr[index];
    }
}

export function isLoggedIn(user){
    if(user && (user.exp>user.iat)){
        return true
    }else{
        return false;
    }
}