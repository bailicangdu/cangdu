import express from 'express';
import {applybalance, applyrecord, applysuccess, balance, policylist, products, record} from '../data/pxq';
const router = express.Router();

router.get('/data/applybalance', (req, res, next) => {
	res.send(applybalance)
})

router.get('/data/applyrecord', (req, res, next) => {
	res.send(applyrecord)
})

router.get('/data/applysuccess', (req, res, next) => {
	res.send(applysuccess)
})

router.get('/data/balance', (req, res, next) => {
	res.send(balance)
})

router.get('/data/policylist', (req, res, next) => {
	res.send(policylist)
})

router.get('/data/products', (req, res, next) => {
	res.send(products)
})

router.get('/data/record', (req, res, next) => {
	res.send(record)
})

export default router;