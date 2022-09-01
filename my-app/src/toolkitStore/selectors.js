// main
export const isLogInSelector = (store) => store.main.isLogIn;
export const isShowModalSelector = (store) => store.main.isShowModal;

//products

export const isLoadingSelector = (store) => store.shop.loading;

export const productsSelector = (store) => store.shop.products;
export const currentProdSelector = (store) => store.shop.curProduct;

export const limitSelector = (store) => store.shop.limit;

//cart
export const cartSelector = (store) => store.cart;
export const productsFromCart = (store) => store.cart.cart;
