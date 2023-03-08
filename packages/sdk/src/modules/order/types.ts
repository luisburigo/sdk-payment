export interface Product {
    id: string | number;
    name: string,
    image: string,
    price: number,
    quantity: number,
}

export type Order = Product[];