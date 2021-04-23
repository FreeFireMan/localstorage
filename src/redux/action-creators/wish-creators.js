import {ADD_TO_WISH, REMOVE_FROM_WISH} from '../action-types';

const addToWish = (payload) => ({type: ADD_TO_WISH, payload});
const removeFromWish = (payload) => ({type: REMOVE_FROM_WISH, payload});

export {addToWish, removeFromWish}