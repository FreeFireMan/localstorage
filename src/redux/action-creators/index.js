import {
  INC,
  DEC,
  RESET,
  INC_CUSTOM,
  INC2,
  DEC2,
  RESET2,
  INC_CUSTOM2,
} from '../action-types';

const incCustomAction = (payload) => ({type: INC_CUSTOM, payload});
const incAction = () => ({type: INC});
const decAction = () => ({type: DEC});
const resetAction = () => ({type: RESET});

const incCustomAction2 = (payload) => ({type: INC_CUSTOM2, payload});
const incAction2 = () => ({type: INC2});
const decAction2 = () => ({type: DEC2});
const resetAction2 = () => ({type: RESET2});

export {
  incCustomAction,
  incAction,
  decAction,
  resetAction,
  incCustomAction2,
  incAction2,
  decAction2,
  resetAction2,
}