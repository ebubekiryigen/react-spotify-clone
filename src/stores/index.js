import { configureStore } from "@reduxjs/toolkit";
import PlayerReducer from './player'

export default configureStore({
    reducer:{
        player:PlayerReducer
    },
})