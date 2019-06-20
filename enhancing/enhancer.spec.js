const enhancer = require('./enhancer.js');
// test away!

describe('the enhancer', () => {
   describe('repair(item)', () => {
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

   describe('succeed(item)', () => {
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

   describe('fail(item)', () => {
      it('should decrease durability according to enhancement', () => {
         const item = {
            name: '',
            enhancement: 14,
            durability: 90
         };
         const result = enhancer.fail(item);
         expect(result).toEqual({
            name: '',
            enhancement: 14,
            durability: 85
         })

         const weapon = {
            name: '',
            enhancement: 15,
            durability: 50
         }
         const weaponresult = enhancer.fail(weapon);
         expect(weaponresult).toEqual({
            name: '',
            enhancement: 15,
            durability: 40
         })

         const sword = {
            name: '',
            enhancement: 17,
            durability: 20
         }
         const swordresult = enhancer.fail(sword);
         expect(swordresult).toEqual({
            name: '',
            enhancement: 16,
            durability: 10
         })
      })
   })
});