var watermark = require('jimp-watermark');
var options = {
    'ratio': 0.6,// Should be less than one
    'opacity': 0.6, //Should be less than one
    'dstPath' : './watermark.jpg'
};
watermark.addWatermark('profile.jpg', 'logo.png', options);