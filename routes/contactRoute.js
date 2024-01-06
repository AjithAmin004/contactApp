const express = require('express');

const router = express.Router();

router.route('/').get((req,res)=>{
    res.status(200).json({message:"get all contacts"});
})

router.route('/').post((req,res)=>{
    res.status(201).json({message:"contacts created"});
})

router.route('/:id').put((req,res)=>{
    res.status(200).json({message:`contacts updated for ${req.params.id}`});
})

router.route('/:id').delete((req,res)=>{
    res.status(200).json({message:`contacts Deleted for ${req.params.id}`})
})

router.route('/:id').get((req,res)=>{
    res.status(200).json({message:`contacts information of ${req.params.id}`})
})

module.exports = router