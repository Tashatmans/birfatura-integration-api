import { Response } from "express"
import { db } from "./config/firestore"

type Required = {
    body: any,
    params: { orderId: string }
}

const addOrder = async (req: Required, res: Response) => {
    const body = req.body
    try {
        await db.collection('orders').doc(body.OrderId.toString()).set(body)
        res.status(200).send({
            status: 'success',
            message: 'order added successfully',
        })
    } catch (error: any) {
        res.status(500).json(error.message)
    }
}

const getAllOrders = async (req: Required, res: Response) => {
    try {
        const allOrders: any[] = []

        const snapshot = await db.collection('orders').get();
        snapshot.forEach((doc: any) => allOrders.push(doc.data()));

        res.status(200).json(allOrders)
    } catch (error: any) {
        res.status(500).json(error.message)
    }
}

const filtredOrders = async (req: Required, res: Response) => {
    const params = req.body
    try {
        const allOrders: any[] = []
        const snapshot = await db.collection('orders').get();
        snapshot.forEach((doc: any) => allOrders.push(doc.data()));
        const filtredOrders = allOrders.filter(order => params.orderStatusId == order.orderStatusId)
        res.status(200).json({ "Orders": filtredOrders })
    } catch (error: any) {
        res.status(500).json(error.message)
    }
}


const postOrderStatus = async (req: Required, res: Response) => {
    try {
        const allOrdersStatus: any[] = []

        const snapshot = await db.collection('OrderStatus').get();
        snapshot.forEach((doc: any) => allOrdersStatus.push(doc.data()));

        res.status(200).json({ "OrderStatus": allOrdersStatus })
    } catch (error: any) {
        res.status(500).json({
            status: "Error",
            message: error.message,
        })
    }
}

const postPaymentMethods = async (req: Required, res: Response) => {
    try {
        const allPaymentMethods: any[] = []

        const snapshot = await db.collection('OrderStatus').get();
        snapshot.forEach((doc: any) => allPaymentMethods.push(doc.data()));

        res.status(200).json({ "PaymentMethods": allPaymentMethods })
    } catch (error: any) {
        res.status(500).json({
            status: "Error",
            message: error.message,
        })
    }
}

const orderCargoUpdate = async (req: Required, res: Response) => {
    const body = req.body
    try {
        await db.collection('ordersCargo').doc(body.orderId.toString()).set(body)
        res.status(200).json()
    } catch (error: any) {
        res.status(500).json({
            status: "Error",
            message: error.message,
        })
    }
}

const invoiceLinkUpdate = async (req: Required, res: Response) => {
    const body = req.body
    try {
        await db.collection('ordersInvoiceLink').doc(body.orderId.toString()).set(body)
        res.status(200).json()
    } catch (error: any) {
        res.status(500).json({
            status: "Error",
            message: error.message,
        })
    }
}

export { addOrder, getAllOrders, filtredOrders, postOrderStatus, postPaymentMethods, orderCargoUpdate, invoiceLinkUpdate }