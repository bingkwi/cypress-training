// create a dummy app
let add = (a, b) => a + b;
let subtract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

// discribe - context
describe('Unit testing of our dummy application', () =>{
    context('Math with positive numbers', () => {
        // it or specify
        it('should add positive numbers', () => {
            expect(add(2,2)).to.eq(4);
        });
        it('should subtract positive numbers', () => {
            expect(subtract(4,2)).to.eq(2);
        });
        it('should divide positive numbers', () => {
            expect(divide(4,2)).to.eq(2);
        });
        it('should multiply positive numbers', () => {
            expect(multiply(4,2)).to.eq(8);
        });
    });
})