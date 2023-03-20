import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
// FB 로그인 관련
export const fbLoginFB = createAsyncThunk('user/login', async () => {});
export const fbJoinFB = createAsyncThunk('user/join', async () => {});
export const fbLogoutFB = createAsyncThunk('user/logout', async () => {});
export const fbDeleteUserFB = createAsyncThunk('user/delete', async () => {});

// 초기 값 타입 정의
// export interface CounterState  {
//   value: number;
// };
export type CounterState = {
    value: number;
};
// store 의 state 의 초기값 셋팅
const initialState: CounterState = {
    value: 0,
};
// 실제 활용할 slice 생성함.
export const counterSlice = createSlice({
    // slice 의 이름
    name: 'counter',
    // slice 의 초깃값
    //   initialState: initialState,
    initialState,
    // 리듀서들을 배치함
    reducers: {
        // 더하기 액션
        increment: (state) => {
            state.value += 1;
        },
        // 빼기 액션
        decrement: (state) => {
            state.value -= 1;
        },
        // 일정한 수 만큼 증감
        // action:PayloadAction<T>
        incrementByAmout: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fbLoginFB.pending, (state, action) => {})
            .addCase(fbLoginFB.fulfilled, (state, action) => {})
            .addCase(fbLoginFB.rejected, (state, action) => {})


            .addCase(fbJoinFB.pending, (state, action) => {})
            .addCase(fbJoinFB.fulfilled, (state, action) => {})
            .addCase(fbJoinFB.rejected, (state, action) => {})


            // 로그아웃
            .addCase(fbLogoutFB.pending, (state, action) => {})
            .addCase(fbLogoutFB.fulfilled, (state, action) => {})
            .addCase(fbLogoutFB.rejected, (state, action) => {})


            // 회원탈퇴
            .addCase(fbDeleteUserFB.pending, (state, action) => {})
            .addCase(fbDeleteUserFB.fulfilled, (state, action) => {})
            .addCase(fbDeleteUserFB.rejected, (state, action) => {})
    },
});

// 액션을 내보낸다.
export const { increment, decrement, incrementByAmout } = counterSlice.actions;
// slice의 reducer 를 내보낸다.
export default counterSlice.reducer;
