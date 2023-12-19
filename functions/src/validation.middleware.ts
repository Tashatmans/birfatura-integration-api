require('dotenv').config()

const validTokenNeeded = (req:any, res:any, next:any) => {
    if (req.headers['token']) {
        try {
            let token = req.headers['token']
            if (token === process.env.BIR_FATURA_TOKEN) {
                return next();
            } else {
                return res.status(401).send();
            }
        } catch (err) {
            return res.status(403).send();
        }
    } else {
        return res.status(401).send();
    }
}
export { validTokenNeeded}