import { createSlice, nanoid } from "@reduxjs/toolkit";

const carSlice = createSlice({
    name: 'car',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        searchTerm(state, action) {
            state.searchTerm = action.payload
        },
        addCar(state, action) {
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        removeCar(state, action) {
            const update = state.cars.filter((car) => {
                return car.id != action.payload.id;
            })

            state.cars = update;
        }
    }
})

export const { searchTerm, addCar, removeCar } = carSlice.actions;
export const carReducer = carSlice.reducer;