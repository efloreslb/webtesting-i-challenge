const enhancer = require('./enhancer.js');
// test away!

describe('the enhancer', () => {
   describe('the repair function', () => {
      it('should restore the durability', () => {
         //arrange
            const item = {
               name: '',
               enhancement: 0,
               durability: 0
            };
         //act
            const result = enhancer.repair(item);
         //assert
            expect(result).toEqual({
               name: '',
               enhancement: 0,
               durability: 100
            })
      });
   });
});