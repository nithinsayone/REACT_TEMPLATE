import API from '../config';
import URLS from "../../constants/urls";

/**
 * get starship details
 * 
 * @param {Number} starshipId starship ID
 * @returns api response
 */
export const _getStarshipDetails = (starshipId) => {
  return API.get(`${URLS.GET_STARSHIP_DETAILS}${starshipId}/`);
};