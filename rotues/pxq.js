import express from 'express';
import {applybalance, applyrecord, applysuccess, balance, products, recordPassed, recordAudited, recordFailed} from '../data/pxq';
const router = express.Router();

router.get('/data/applybalance', (req, res, next) => {
	res.send(applybalance);
})

router.get('/data/applyrecord', (req, res, next) => {
	res.send(applyrecord);
})

router.get('/data/applysuccess', (req, res, next) => {
	res.send(applysuccess);
})

router.get('/data/balance', (req, res, next) => {
	res.send(balance);
})

router.get('/data/products', (req, res, next) => {
	res.send(products);
})

router.get('/data/record/passed', (req, res, next) => {
	res.send(recordPassed);
})

router.get('/data/record/audited', (req, res, next) => {
  res.send(recordAudited);
})

router.get('/data/record/failed', (req, res, next) => {
  res.send(recordFailed);
})


export default router;