import { Router } from 'express';
import { VerifyAccess, VerifyManager, VerifySudo } from '../middlewares';
import { createPaymentForBinPackage, viewAllPayments, viewCurrentUserPayments, viewPaymentsByHomeowner , createPaymentForPickup} from '../controllers/payment.controller';

const router = Router();

// /payment
router.post("/bin-package/", VerifyAccess, createPaymentForBinPackage)
router.post("/pickup/:id", VerifyAccess, createPaymentForPickup)

router.get("/", viewAllPayments)
router.get("/user", VerifyAccess, viewCurrentUserPayments)
router.get("/homeowner/:id", viewPaymentsByHomeowner)





export default router;
