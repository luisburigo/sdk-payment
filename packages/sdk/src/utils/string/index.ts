export const randomString = () => (Math.random() + 1).toString(36).substring(7);

export const toCurrency = (value: number) => value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});