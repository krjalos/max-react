import {useEffect, useState} from "react";

let globalState = {};
let listeners = [];
let actions = {};

const useStore = (shouldListen = true) => {

 const setState = useState(globalState)[1];

 useEffect(() => {
  if(shouldListen){
   listeners.push(setState);
  }

  return () => {
   if(shouldListen) {
    listeners = listeners.filter(listener => listener !== setState);
   }
  }
 }, [setState]);

 const dispatch = (actionIndex, payload) => {
  const newState = actions[actionIndex](globalState, payload);

  globalState = {...globalState, ...newState}


  for(const listener of listeners) {

   listener(globalState);
  }
 }

 return {
  globalState,
  dispatch
 };
}

export default useStore;

export const initStore = (userActions, initialState) => {
 if(initialState !== null) {

  globalState = {...globalState, ...initialState};

  actions = {...actions, ...userActions}
 }
}