const actionTypes = {
  addProductToPage: "ADD_PRODUCT_TO_PAGE",
  removeProductFromPage: "REMOVE_PRODUCT_FROM_PAGE",

  addProductToWishlist: "ADD_PRODUCT_TO_WISHLIST",
  addDirectlyToWishlist: "ADD_DIRECTLY_TO_WISHLIST",
  removeProductFromWishlist: "REMOVE_PRODUCT_FROM_WISHLIST",
  removeAllFromWishlist: "REMOVE_ALL_FROM_WISHLIST",

  addProductToCart: "ADD_PRODUCT_TO_CART",
  addDirectlyToCart: "ADD_DIRECTLY_TO_CART",
  removeProductFromCart: "REMOVE_PRODUCT_FROM_CART",
  removeAllFromCart: "REMOVE_ALL_FROM_CART",
  changeProductInCart: "CHANGE_PRODUCT_IN_CART",

  addUser: "ADD_USER",
  removeUser: "REMOVE_USER",

  addMessage: "ADD_MESSAGE",
  removeMessage: "REMOVE_MESSAGE",

  addError: "ADD_ERROR",
  removeError: "REMOVE_ERROR",

  addNewAddress: "ADD_NEW_ADDRESS",
  addDirectlyToAddresses: "ADDRESSES",
  removeAddress: "REMOVE_ADDRESS",
  // removeAllFromAddresses: "REMOVE_ALL_FROM_Addresses",

  addAddressToCheckout: "ADD_ADDRESS_TO_CHECKOUT",
  addPaymentToCheckout: "ADD_PAYMENT_TO_CHECKOUT",
  addProductToCheckout: "ADD_PRODUCT_TO_CHECKOUT",

  addNewShipment: "ADD_NEW_SHIPMENT",
  trackShipment: "TRACK_SHIPMENT",
  removeShipment: "REMOVE_SHIPMENT",
};

export default actionTypes;
