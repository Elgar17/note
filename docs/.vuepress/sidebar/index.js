const htmlCss = require("./html-css")
const js = require('./javascript')
const network = require('./network')
const node = require('./node')
const vue = require('./vue')
const other = require('./other')
const alg = require('./alg')
const java = require('./java')
const go = require('./go')
const goWeb = require('./go-web')
const sql = require('./sql')
const linux = require('./linux')

module.exports = {
    '/html-css/': htmlCss,
    '/javascript/': js,
    '/network/': network,
    '/vue/': vue,
    '/node/': node,
    '/other/': other,
    '/alg/': alg,
    '/java/': java,
    '/go/': go,
    '/go-web/': goWeb,
    '/sql/': sql,
    'linux': linux
}