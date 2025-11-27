import map from '../src/map'

function addOne(n)
{
    return n + 1;
}


describe("map", () => {
    test('map with values [1,-2,0.233] add one to every single value', () => {
        expect(map([1,-2,0.233], addOne)).toMatchObject([2,-1,1.233]);
    });
    test('map with null value and add one', () => {
        expect(map([null], addOne)).toMatchObject([1]);
    });
});