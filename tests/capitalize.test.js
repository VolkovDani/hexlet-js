import capitalize from "../src/capitalize.js";
import { strict as assert } from 'node:assert';

assert.strictEqual(capitalize('hello'), 'Hello') // Для сравнения двух значений 
// Первый параметр actual – то, что пришло
// Второй параметр expected – то, что ожидает тест
// Сравнивает также ссылки на объекты, т.е. два одиннаковых массива могут
// не подойти под это условие

assert.deepEqual(capitalize('hello'), 'Hello') // Упирается только на содержимое
// Не сравнивает ссылки


// Используются для негативных сравнений, где объекты не равны
// assert.notStrictEqual(capitalize('hello'), 'Hello') 
// assert.notDeepStrictEqual(capitalize('hello'), 'Hello')

console.log('Все тесты пройдены!');