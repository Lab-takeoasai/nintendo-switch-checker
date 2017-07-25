module.exports = class Nintendo {

    constructor(client) {
        this.client = client;
    }

    get url() {
        return 'https://store.nintendo.co.jp/customize.html';
    }

    async fetchStatus() {
        const isSoldOut = await this.client.chain().start()
        .goto(this.url)
        .evaluate(() => {
            const stock = document.querySelector('#HAC_S_KAYAA p.stock');
            if (stock == null) {
                throw "Too much traffic";
            }
            return stock.innerText === 'SOLD OUT';
        })
        .end()
        .catch(_ => {
            return false; // 混雑エラーページは未だ在庫ありと扱う
        });
        return !isSoldOut;
    }
}
