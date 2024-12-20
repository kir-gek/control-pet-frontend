import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { OrderModel } from "../types/Order"
import { IRootState } from "./root-reducer";

interface myOrdersSliceState {
    orders: { orders: OrderModel[] }
}

const initialState: myOrdersSliceState = {
    orders: { orders: [] }
}

const myOrdersSlice = createSlice({
    name: 'myOrders',
    initialState,
    reducers: {
        addOrder(state, action: PayloadAction<OrderModel>) {
            const previous: number = state.orders.orders.length - 1
            state.orders.orders.length ? action.payload.id = state.orders.orders[previous].id + 1 : action.payload.id = 0
            state.orders.orders.push(action.payload)
        },
        deleteOrder(state, action) {
            state.orders.orders = state.orders.orders.filter((order) => order.id != action.payload.id)
        },
        editOrder(state, action: PayloadAction<OrderModel>) {
            state.orders.orders = state.orders.orders.map((order) => {
                if (order.id !== action.payload.id) return order;
                return {
                    ...order,
                    dateIn: action.payload.dateIn,
                    dateOut: action.payload.dateOut,
                    price: action.payload.price,
                    noteOrder: action.payload.noteOrder,
                    name: action.payload.name,
                    age: action.payload.age,
                    gender: action.payload.gender,
                    type: action.payload.type,
                    breed: action.payload.breed,
                    notePet: action.payload.notePet,
                    ownerFIO: action.payload.ownerFIO,
                    phone: action.payload.phone,
                    address: action.payload.address,
                    noteOwner: action.payload.noteOwner
                }
            })
        }
    }
});

export const { addOrder, deleteOrder, editOrder } = myOrdersSlice.actions
export const getOrders = (state: IRootState) => state.myOrders.orders || [];

export default myOrdersSlice.reducer; 