const QQMapWX = require('./qqmap-wx-jssdk.min.js')

export const qqmapsdk = new QQMapWX({
    key: 'SYZBZ-DWHRQ-NLT5Q-GIZN5-QTCBQ-ISB4P'
})

export function reverseGeocoder(obj) {
    return new Promise((resolve, reject) => {
        qqmapsdk.reverseGeocoder({
            location: {
                latitude: obj.latitude,
                longitude: obj.longitude,
            },
            success: function(res) {
                resolve(res)
            },
            fail: function(err) {
                reject(err)
            }
        })
    })
}