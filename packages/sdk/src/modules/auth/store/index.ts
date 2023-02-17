import { create } from 'zustand';
import {Store} from "./types";

const useAuthStore = create<Store>((set) => ({
    token: null,
    setToken: token => set({ token }),
}));

export default useAuthStore;