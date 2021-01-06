import express from 'express';
import {searchItemByKeyword} from '../controller/item.controller'

const router = express.Router();

router.get('/:marketplace/:language/:searchTerms', searchItemByKeyword);

export default router;