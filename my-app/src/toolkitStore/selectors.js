// main
export const isLogInSelector = (store) => store.main.isLogIn;
export const isShowModalSelector = (store) => store.main.isShowModal;

//products
export const productsSelector = (store) => store.shop.products;
export const currentProduct = (store) => store.shop.currentItem;

export const limitSelector = (store) => store.shop.limit;

//cart
export const cartSelector = (store) => store.cart;
export const productsFromCart = (store) => store.cart.cart;
