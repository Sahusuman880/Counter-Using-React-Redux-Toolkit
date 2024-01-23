
import {configureStore} from "@reduxjs/toolkit"
const INITIAL_VALUE={
  counter:0,
  privacy:false
}
function counterReducer(store=INITIAL_VALUE,action){
  let newStore={...store};
  if(action.type==="INCREMENT_BY_ONE"){
    // newStore={counter:store.counter+1,privacy:store.privacy}
    newStore.counter+=1;
  }
  if(action.type==="DECREMENT_BY_ONE"){
    // newStore={counter:store.counter-1,privacy:store.privacy}
    newStore.counter-=1;
  }
  if(action.type==="INCREMENT"){
    // newStore={counter:store.counter+action.payload,privacy:store.privacy}
    newStore.counter+=action.payload;
  }
  if(action.type==="DECREMENT"){
    // newStore={counter:store.counter-action.payload,privacy:store.privacy}
    newStore.counter-=action.payload;
  }
  if(action.type==="PRIVACY TOGGLE"){
    //  newStore= {counter:store.counter,privacy:!store.privacy}
    newStore.privacy=!store.privacy
  }
 return newStore;
}
const counterStore=createStore(counterReducer);
export default counterStore;