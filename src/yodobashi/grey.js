module.exports = class YodobashiGrey {

    constructor(client) {
        this.client = client;
    }

    get url() {
        return 'http://www.yodobashi.com/product/100000001003431565/';
    }

    async fetchStatus() {
        const isSoldOut = await this.client.chain().start()
        .goto(this.url)
        .evaluate(() => {
            const stock = document.querySelector('div.salesInfo');
            if (stock == null) {
                throw "Too much traffic";
            }
            return stock.innerText === '予定数の販売を終了しました';
        })
        .end()
        .catch(_ => {
            return false; // 混雑エラーページは未だ在庫ありと扱う
        });
        return !isSoldOut;
    }
}
