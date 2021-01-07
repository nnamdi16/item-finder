import ItemService from '../services/item.service';
import {toLowerCase} from '../util'

const ItemServiceInstance = new ItemService();

export const searchItemByKeyword = async (req, res, next) => {
  try {
    const result = await ItemServiceInstance.findItemsByKeywords(toLowerCase(req.params));
    const {error,message} = result
    if (error) {
      return res.json(
        {
          error,
          message
        }
      ).status(200)
    }
    return res.json(result).status(200);
  } catch (error) {
    return error;
  }

}

export const searchSuggestedKeywords = async (req,res,next) => {
  try {
    const result = await ItemServiceInstance.findSuggestedKeywords(toLowerCase(req.params));
    return res.json(result).status(200);
  } catch (error) {
    return error;
  }
}


export const searchItemByStyleName = async (req, res) => {
  try {
    console.log(req.params);
   await ItemServiceInstance.findItemByStyleName(req.params);
  
    return res.send("Good work");
  } catch (error) {
    return error;
  }
}