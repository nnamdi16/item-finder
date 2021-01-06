import axios from 'axios'

/**
 * Item class
 * @class
 */
class ItemService {
  /**
   * constructor
   * 
   */
  constructor() {

  }

  /**
   * find items by keywords
   */

   async findItemsByKeywords(data) {
     try {
       const {marketPlace, language, searchTerms} = data;
       const baseUrl = `https://api.nike.com/search/visual_searches/v1?marketplace=${marketPlace}&language=${language}&searchTerms=${searchTerms}`;
       const response = axios.get(baseUrl);
       console.log(response);

     } catch (error) {
       return error;
     }
   }
}

export default ItemService;