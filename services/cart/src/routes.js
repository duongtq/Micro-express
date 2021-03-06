const express = require('express');
const routesVersioning = require('express-routes-versioning')();

const router = express.Router();
const ctrl = require('./controllers');

/**
 * Health of the service
 */
router.get('/health', (req, res) => res.status(200).send({ message: 'ok' }));

/**
 * Get all the items of the cart
 */
router.get('/cart/items', routesVersioning({
  '^1.0.0': ctrl.getAllCartItems,
}));

/**
 * Add an item in the cart
 */
router.post('/cart/items', routesVersioning({
  '^1.0.0': ctrl.createCartItem,
}));

/**
 * Checkout the items for the payment
 */
router.put('/cart/items/checkout', routesVersioning({
  '^1.0.0': ctrl.checkout,
}));

/**
 * Update the quantity of an item of the cart
 */
router.put('/cart/items/quantity/:id', routesVersioning({
  '^1.0.0': ctrl.updateCartItemQuantity,
}));

/**
 * Delete an item of the cart
 */
router.delete('/cart/items/:id', routesVersioning({
  '^1.0.0': ctrl.deleteCartItem,
}));

module.exports = router;
