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
      )
    }
    return res.json(result).status(200);
  } catch (error) {
    return error;
  }

}