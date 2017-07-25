const Chromy = require('chromy');
const opn = require('opn');
const Nintendo = require('./src/nintendo');

async function main() {
const chromy = new Chromy();
const nintendo = new Nintendo(chromy);
const r = await nintendo.fetchStatus();
console.log("return: ", r)
chromy.close();
}
main();
