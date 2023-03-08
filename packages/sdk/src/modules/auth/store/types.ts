export interface Store {
    token: string | null;

    setToken: (token: string | null) => void;
}