import map from '../src/map'

function addOne(n) {
    return n + 1;
}

 function square(n) {
   return n * n
}


describe("map funktio", () => {

    test('Erilaisten numeroiden testaaminen', () => {
        expect(map([1,-2,0.233], addOne)).toMatchObject([2,-1,1.233]);
    });

    test('null arvon testaaminen', () => {
        expect(map([null], addOne)).toMatchObject([1]);
    });
    
    test('String tyypin testaaminen', () => {
        expect(map(['1', 1], addOne)).toMatchObject([2,2]);
    });

    test('boolean arvot', () => {
        expect(map([true, false], addOne)).toMatchObject([2,1]);
    });

    test('Normaalit numerot', () => {
        expect(map([4, 8], square)).toMatchObject([16, 64]);
    });
});
