// NODE_OPTIONS=--experimental-vm-modules npx jest
// Для корректного запуска тестов где есть импорты при помощи import 
import capitalize from "../src/capitalize.js"
import {expect, test} from '@jest/globals';

test('capitalize', () => {
  expect(capitalize('hello')).toEqual('Hello');
  expect(capitalize('')).toEqual('');
})


// import { strict as assert } from 'node:assert';

// assert.strictEqual(capitalize('hello'), 'Hello') // Для сравнения двух значений 
// // Первый параметр actual – то, что пришло
// // Второй параметр expected – то, что ожидает тест
// // Сравнивает также ссылки на объекты, т.е. два одиннаковых массива могут
// // не подойти под это условие

// assert.deepEqual(capitalize('hello'), 'Hello') // Упирается только на содержимое
// // Не сравнивает ссылки


// // Используются для негативных сравнений, где объекты не равны
// // assert.notStrictEqual(capitalize('hello'), 'Hello') 
// // assert.notDeepStrictEqual(capitalize('hello'), 'Hello')

// console.log('Все тесты пройдены!');