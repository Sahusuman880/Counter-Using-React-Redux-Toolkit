
import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./counter";
import privacyToggleSlice from "./privacy";

const counterStore=configureStore({reducer:{counter:counterSlice.reducer,privacy:privacyToggleSlice.reducer}});


export default counterStore;