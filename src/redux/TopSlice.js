import {createSlice} from '@reduxjs/toolkit';

const initialState ={ 
    userInfo : null,
    productData : [],
    fav: []
}

const TopSlice = createSlice({
    name : "top",
    initialState,
    reducers : {
        addToCart : (state , action)=>{
            const item = state.productData.find((item) => item.id === action.payload.id)
            if(item){
                item.quantity += action.payload.quantity;
            }else{
                state.productData.push(action.payload);
            }
            
        },
        removeFromCart : (state , action)=>{
            state.productData = state.productData.filter((product)=>
                product.id !== action.payload
            )
        },
        resetCart : (state)=>{
            state.productData = [];
        },
        increamentQuantity : (state , action)=>{
            const item = state.productData.find((product)=> product.id === action.payload)
            if(item){
                item.quantity++;
            }
        },
        decreamentQuantity : (state , action)=>{
            const item = state.productData.find((product)=> product.id === action.payload)
            if(item && item.quantity > 1){
                item.quantity--;
            }
        },
        addUser : (state , action)=>{
            state.userInfo = action.payload;
        },
        removeUser : (state)=>{
            state.userInfo = null;
        },
        addToFav : (state , action)=>{
            let item = state.fav.find(item => item.id === action.payload.id);
            if(!item){
                state.fav.push(action.payload);
            }
        },
        removeFromFav: (state,action)=>{
            state.fav = state.fav.filter( item => item.id !== action.payload);
        },
    }
})

export const {addToCart , removeFromCart , resetCart , increamentQuantity , 
            decreamentQuantity , addUser , removeUser , addToFav , removeFromFav} = TopSlice.actions;
export default TopSlice.reducer;