var watermark = require('jimp-watermark');
fs=require('fs/promises');

//Main Function
async function watermarkImages(path) {
    //Read and store the name of each file of the path in a array
    const files= await fs.readdir(path);

    //For each file in the path
    for(i = 0; i < files.length; i++){
        //Name of the file
        var arquivo = `${files[i]}`;
        /*Settings-
        ratio - size
        dstPath - output path (with name)*/
        var options = {
            'ratio': 0.4,
            'opacity': 0.6,
            'dstPath' : `./watermarked/${arquivo}`
        };
        //Structure: addWatermark(image to work, watermark, options)
        watermark.addWatermark(`images/${arquivo}`, `Logo.png`, options);

        console.log(`${arquivo} Done!`)
    }
}
watermarkImages('images/');