import Validator from '../app';
const testValidator = new Validator()
test.each([
    ['-Hero', false],
    ['_Hero', false],
    ['8Hero', false],
    ['Hero_', false],
    ['Hero-', false],
    ['Hero6', false],
    ['Hero5675', false],
    ['Hero@', false ],
    ['H&ro', false ],
    ['pro100Hero', true],
    ['Hero', true],
    ['He-ro', true],
    ['He_ro', true],
  ])('Тестирование правильности ввода имени на примере %s', (name, status) => {
    const result = testValidator.validateUsername(name);
    expect(result).toBe(status);
  });
  