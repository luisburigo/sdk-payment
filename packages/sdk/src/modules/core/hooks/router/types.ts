export type Routes = (() => JSX.Element)[];

export interface RouterStore {
    actualRoute: number;
    setActualRoute: (route: number) => void;
}