
import { articles } from '../../data/data';
import {getKeysBySearchTerm} from '../helperFunctions' 


describe('getKeysBySearchTerm', () => {
    it('should return an empty array for an empty input', () => {
      const input = '';
      const result = getKeysBySearchTerm(input,articles );
      expect(result).toEqual([]);
    });

    it('should return an empty array if articles is empty', () => {
        const input = 'Funny';
        const result = getKeysBySearchTerm(input, [] );
        expect(result).toEqual([]); 
      });

    it('should return an empty array if no articles match the input', () => {
      const input = 'nonexistent';
      const result = getKeysBySearchTerm(input, articles);
      expect(result).toEqual([]);
    });
  
    it('should return an array of matching article keys', () => {
      const input = 'funny'; // Replace with a search term that matches some articles
      const result = getKeysBySearchTerm(input, articles);
      // Replace with the expected keys that match the input
      const expectedKeys = ['1', '2', '6','7'];  
  
      expect(result).toEqual(expectedKeys);
    }); 
  
    it('should be case-insensitive', () => {
      const input = 'FUnnY'; // Uppercase version of a search term that matches some articles
      const result = getKeysBySearchTerm(input, articles);
      // Replace with the expected keys that match the input
      const expectedKeys = ['1', '2', '6','7'];  
  
      expect(result).toEqual(expectedKeys);
    });
  });