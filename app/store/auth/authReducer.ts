import { PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    accessToken: string | null;
}

export const reducers = {
    loginUser(state: AuthState, action: PayloadAction<string>) {
        state.accessToken = action.payload;
    }
};
