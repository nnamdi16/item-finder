import express from 'express';
import {searchItemByKeyword, searchItemByStyleName, searchSuggestedKeywords} from '../controller/item.controller'

const router = express.Router();
router.get('/', (req,res) => res.send("Product Search App loading"));
router.get('/:marketplace/:language/:searchTerms', searchItemByKeyword);
router.get('/keywords/:marketplace/:language/:searchTerms', searchSuggestedKeywords);
router.get('/style/:slug/:styleNumber/:colorCode',searchItemByStyleName )


export default router;