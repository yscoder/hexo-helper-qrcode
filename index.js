const qrImage = require('qr-image')

hexo.extend.helper.register('qrcode', function(url, option){
    option = option || {
        size: 6,
        margin: 0
    }

    const buffer = qrImage.imageSync(url, {
        type: 'png',
        size: option.size,
        margin: option.margin
    })
    return 'data:image/png;base64,' + buffer.toString('base64')
})