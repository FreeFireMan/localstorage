import {ON_USER_LOADED, ON_ADD_TO_BAD, REMOVE_FROM_BAD} from '../action-types';

const onUsersLoaded = (payload) => ({type: ON_USER_LOADED, payload});
const onAddToBad = (payload) => ({type: ON_ADD_TO_BAD, payload});
const onRemoveFromBad = (payload) => ({type: REMOVE_FROM_BAD, payload});

export {onUsersLoaded, onAddToBad, onRemoveFromBad,}