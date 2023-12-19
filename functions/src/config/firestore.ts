const { initializeApp, cert } = require('firebase-admin/app');

const { getFirestore } = require('firebase-admin/firestore');

require('dotenv').config()

initializeApp({
    credentinal: cert({
        privateKey: process.env.PRIVATE_KEY,
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.CLIENT_EMAIL,
    }),
    databaseURL: 'DATABASE_URL'
})

const db = getFirestore()

export { db }