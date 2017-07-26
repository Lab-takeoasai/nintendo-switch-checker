const Chromy = require('chromy');
const opn = require('opn');
const Nintendo = require('./src/nintendo');
const YodobashiGrey = require('./src/yodobashi/grey');

async function main() {
    const chromy = new Chromy();
    const client = new YodobashiGrey(chromy);
    const r = await client.fetchStatus();
    console.log("return: ", r)
    chromy.close();
}
main();
