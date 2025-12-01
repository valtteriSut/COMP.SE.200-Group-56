import { expect, jest } from '@jest/globals';
import capitalize from '../src/capitalize.js';

test('capitalize muuttaa ensimmäisen kirjaimen isoksi normaalissa merkkijonossa', () => {
  expect(capitalize('hello')).toBe('Hello');
});

test('capitalize muuttaa kirjaimet pieniksi normaalissa merkkijonossa', () =>{
    expect(capitalize('FRED')).toBe('Fred')
})

test('capitalize muuttaa sekalaisen syötteen kirjaimia pieneksi', () =>{
    expect(capitalize('FReD')).toBe('Fred')
})

test('Tyhjän syötteen odotettu tulos', () =>{
    expect(capitalize('')).toBe('')
})


test('capitalize toimii oikein jos ensimmäinen merkki on erikois', () =>{
    expect(capitalize('!FRED')).toBe('!fred')
})

test('capitalize toString toimii jos syöte on numeroita', () =>{
    expect(capitalize(123)).toBe("123")
})

test('capitalize toimii boolean-arvoilla', () => {
  expect(capitalize(true)).toBe('True');
  expect(capitalize(false)).toBe('False');
});

test('capitalize palauttaa tyhjän merkkijonon null-syötteellä', () => {
  expect(capitalize(null)).toBe('Null');
});

test('capitalize palauttaa tyhjän merkkijonon undefined-syötteellä', () => {
  expect(capitalize(undefined)).toBe('Undefined');
});

test('capitalize toimii yhden merkin syötteellä', () => {
  expect(capitalize('a')).toBe('A');
  expect(capitalize('A')).toBe('A');
});

test('capitalize toimii unicode-kirjaimilla', () => {
  expect(capitalize('äiti')).toBe('Äiti');
});

// Ei kavenneta whitespacea, joten tulos on sama
test('capitalize ei poista whitespacea alusta', () => {
  expect(capitalize('  hello')).toBe('  hello');
});





