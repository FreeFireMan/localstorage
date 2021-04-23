import {INC, DEC, RESET, INC_CUSTOM} from '../action-types';

const incCustom = (payload) => ({type: INC_CUSTOM, payload});
const inc = () => ({type: INC});
const dec = () => ({type: DEC});
const reset = () => ({type: RESET});

export {incCustom, inc, dec, reset,}