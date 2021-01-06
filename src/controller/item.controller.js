import ItemService from '../services/item.service';

const ItemServiceInstance = new ItemService();

export const searchItemByKeyword = async (req, res, next) => {
  try {
    const result = await ItemServiceInstance.findItemsByKeywords(req.body);
    if (err) {
      return res.json(
        {
          error:true
        }
      )
    }
    return res.json(result).status(200);
  } catch (error) {
    return error;
  }

}