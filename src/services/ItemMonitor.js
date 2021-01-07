const  axios = require('axios');

/**
 * Item class
 * @class
 */
class ItemMonitor {
  /**
   * constructor
   * 
   */
  constructor() {

  }

  /**
   * find suggested keywords
   * @param {object} data 
   */
  async findSuggestedKeywords(data){
    const {marketplace, language, searchTerms} = data;
    try {
        const filterKeyword = `https://api.nike.com/search/suggestions/v1?country=${marketplace}&language=${language}&text=${searchTerms}`;
        const filterKeywordResponse = await axios.get(filterKeyword);
        const {data} = filterKeywordResponse;
        return data;

    } catch (error) {
      return error;
    }
  }

  /**
   * find items by keywords
   */

   async findItemsByKeywords(data) {
    const {marketplace, language, searchTerms} = data;
     try {
       console.log(marketplace, language, searchTerms);
        const baseUrl = `https://api.nike.com/search/visual_searches/v1?marketplace=${marketplace}&language=${language}&searchTerms=${searchTerms}`;
        const response = await axios.get(baseUrl);
        const {data} = response;
        if (data.name === "Error") {
          return {
            error: true,
            message :`We could not find anything for ${searchTerms}`
          }
        }
      console.log(data);
      return data;
     } catch (error) {
       return error;
     }
   }


  async findItemByStyleName (data) {
    const {slug,styleNumber,colorCode} = data;
    const baseUrl = ` https://www.nike.com/t/${slug}/${styleNumber}-${colorCode}`;
    const response = await axios.get(baseUrl);
    console.log(response);

   }
}

module.exports = ItemMonitor;