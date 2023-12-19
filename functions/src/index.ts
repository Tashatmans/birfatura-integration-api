import { addOrder, filtredOrders, getAllOrders, postOrderStatus, postPaymentMethods,orderCargoUpdate,invoiceLinkUpdate } from "./orderController";
import {validTokenNeeded } from "./validation.middleware";
const { onRequest } = require("firebase-functions/v2/https");
const { setGlobalOptions } = require("firebase-functions/v2");
setGlobalOptions({ maxInstances: 10 });

const express = require('express')

const api = express()

api.get('/', (req: any, res: any) => res.status(200).send('Working!! Status 200'))
api.get('/orders', [validTokenNeeded,getAllOrders])
api.post('/orders', [validTokenNeeded,addOrder])
api.post('/api/orderStatus', [validTokenNeeded,postOrderStatus])
api.post('/api/paymentMethods', [validTokenNeeded,postPaymentMethods])
api.post('/api/orders', [validTokenNeeded,filtredOrders])
api.post('/api/orderCargoUpdate', [validTokenNeeded,orderCargoUpdate])
api.post('/api/invoiceLinkUpdate', [validTokenNeeded,invoiceLinkUpdate])


exports.api = onRequest(api)
