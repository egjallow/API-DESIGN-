import { Router } from 'express'

const router = Router()

/**
 * Products
 */

router.get('/product', (req, res)=>{
    res.json({ message: 'it works'})
})
router.get('/product/:id', ()=>{})
router.put('/product/:id', ()=>{})
router.post('/product', ()=>{})
router.delete('/product', ()=>{})


/**
 * Update
 */

router.get('/update', ()=>{})
router.get('/update/:id', ()=>{})
router.put('/update/:id', ()=>{})
router.post('/update', ()=>{})
router.delete('/update', ()=>{})


/**
 * Update Point
 */

router.get('/updatepoint', ()=>{})
router.get('/updatepoint/:id', ()=>{})
router.put('/updatepoint/:id', ()=>{})
router.post('/updatepoint', ()=>{})
router.delete('/updatepoint/:id', ()=>{})


export default router