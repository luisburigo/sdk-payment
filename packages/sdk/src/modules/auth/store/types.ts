export interface Store {
    token: string | null;

    setToken: (token: string) => void;
}