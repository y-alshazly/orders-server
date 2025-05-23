export type Item = { id?: string; name: string; price: number };
export type Order = { id?: string; items: Item[]; createdAt?: string };

const orders: Order[] = [];
let idCounter: number = 1;

export const ordersService = (orderSchema: Order) => {
  const order = { ...orderSchema, id: String(idCounter), createdAt: new Date().toISOString() };

  orders.push(order);

  idCounter++;

  return order;
};
