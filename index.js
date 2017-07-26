const Chromy = require('chromy');
const opn = require('opn');
const Nintendo = require('./src/nintendo');
const YodobashiSplatoon = require('./src/yodobashi/splatoon');

async function main() {
    const chromy = new Chromy();
    const client = new YodobashiSplatoon(chromy);
    const r = await client.fetchStatus();
    console.log("return: ", r)
    chromy.close();
}
main();
