const enhancer = require('./enhancer.js');
// test away!

describe('the enhancer', () => {
   describe('repair()', () => {
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

   describe('succeed()', () => {
      it('should increase enhancement by 1 if not 20', () => {
         const item = {
            name: '',
            enhancement: 5,
            durability: 0
         }
         const result = enhancer.succeed(item);
         expect(result).toEqual({
            name: '',
            enhancement: 6,
            durability: 0
         })

         const weapon = {
            name: '',
            enhancement: 20,
            durability: 0
         }
         const weaponresult = enhancer.succeed(weapon);
         expect(weaponresult).toEqual({
            name: '',
            enhancement: 20,
            durability: 0
         })

      })
   })
});