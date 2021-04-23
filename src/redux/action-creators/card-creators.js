import {ADD_TO_CARD, REMOVE_FROM_CARD} from '../action-types';

const addToCard = (payload) => ({type: ADD_TO_CARD, payload});
const removeFromCard = (payload) => ({type: REMOVE_FROM_CARD, payload});

export {addToCard, removeFromCard}