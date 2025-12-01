import { expect } from '@jest/globals';
import toNumber from '../src/toNumber.js';

describe('toNumber()', () => {

  // ---- Perusarvot ----
  test('palauttaa numeron sellaisenaan', () => {
    expect(toNumber(3.2)).toBe(3.2);
    expect(toNumber(0)).toBe(0);
    expect(toNumber(-10)).toBe(-10);
    expect(toNumber(Infinity)).toBe(Infinity);
  });

  // ---- Symbol → NaN ----
  test('palauttaa NaN symbolisyötteelle', () => {
    const sym = Symbol('x');
    expect(Number.isNaN(toNumber(sym))).toBe(true);
  });

  // ---- Objekti: valueOf toimii ----
  test('käsittelee objektit, joilla on valueOf', () => {
    const obj = { valueOf: () => 42 };
    expect(toNumber(obj)).toBe(42);
  });

  // ---- Objekti: valueOf ei sovellu → toString polku ----
  test('käsittelee objektit, joilla EI ole toimivaa valueOf', () => {
    const obj = { a: 1 };
    expect(toNumber(obj)).toBeNaN(); 
  });

  // ---- Muut ei-string arvot ----
  test('muuntaa boolean-arvot oikein', () => {
    expect(toNumber(true)).toBe(1);
    expect(toNumber(false)).toBe(0);
  });

  test('muuntaa null ja undefined arvot oikein', () => {
    expect(toNumber(null)).toBe(0);
    expect(Number.isNaN(toNumber(undefined))).toBe(true);
  });

  // ---- String → normaali numero ----
  test('muuntaa numeeriset stringit numeroiksi', () => {
    expect(toNumber('3.2')).toBe(3.2);
    expect(toNumber('  10  ')).toBe(10);
    expect(toNumber('-5')).toBe(-5);
  });

  // ---- String: binääri ----
  test('tunnistaa binäärin (0b...)', () => {
    expect(toNumber('0b101')).toBe(5);   // 101₂ = 5
    expect(toNumber('0b0')).toBe(0);
  });

  // ---- String: oktaali ----
  test('tunnistaa oktaalin (0o...)', () => {
    expect(toNumber('0o10')).toBe(8);    // 10₈ = 8
    expect(toNumber('0o7')).toBe(7);
  });

  // ---- String: huono heksadesimaali ----
  test('palauttaa NaN virheelliselle heksaformaattimerkkijonolle', () => {
    expect(Number.isNaN(toNumber('-0x123'))).toBe(true);
    expect(Number.isNaN(toNumber('+0xZZ'))).toBe(true);
  });

  // ---- String: valid hexadecimal (ei bad hex) ----
  test('muuntaa tavallisen heksanumeron (0xFF)', () => {
    expect(toNumber('0x10')).toBe(16);
    expect(toNumber('0xFF')).toBe(255);
  });

  // ---- Ei-numeerinen string ----
  test('palauttaa NaN ei-numeeriselle stringille', () => {
    expect(Number.isNaN(toNumber('abc'))).toBe(true);
    expect(Number.isNaN(toNumber('hello'))).toBe(true);
  });

});
