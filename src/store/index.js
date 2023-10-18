import { configureStore } from "@reduxjs/toolkit";

import { addCar, carReducer, removeCar, searchTerm } from './slices/CarSlice';
import { changeCost, changeName, formReducer } from './slices/FormSlice';


const store = configureStore({
    reducer: {
        form: formReducer,
        cars: carReducer
    }
})


export  {addCar, removeCar, searchTerm, changeCost, changeName, store}