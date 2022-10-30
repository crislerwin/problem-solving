import { table } from "template-literal-table";

/**
 * @param {each} each
 * this allows us to create a table of tests
 * @example
 *
 *
 * const tableOfTests = it.each`
 * type                | doSomething              | description
 * ${something}        | ${'transforms a'}        | ${'do something with a'}
 * ${something}        | ${'transforms b'}        | ${'do something wit b'}
 * ${something}        | ${'transforms c'}        | ${'do something with c'}
 * ${something}        | ${'transforms d'}        | ${'do something with d'},
 *
 * vit.each(tests)("should $description", ({type, doSomething}) => {
 * expect(actual).toBe(expected);
 * });
 * @returns {each}
 * @see
 * */

export const it = { each: table };
