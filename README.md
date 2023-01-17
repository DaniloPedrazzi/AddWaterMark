<div align="center">
  <h1>AddWaterMark</h1>
 </div>
 
## What its about

The AddWaterMark tool is for adding a watermark (usually a logo) on large amounts of images with low effort. 

## How to Use

First you need to download it, you can find the lastest release [here]('https://github.com/xCUELHO/AddWaterMark/releases').

Once you have download it, you need to intall the dependencies of the project, you do this by running
```bash
npm i
```
on the location that you have downloaded.

After this you need to replace the "Logo.png" image with your image to watermark (need to be the same name).

Now you need to put all images you want to watermark at the "images" directory.

And last you will run this command:
```bash
node index.js
```

Done!

Now you just have to wait it to complete and you will have your images ready on the "watermark" directory.

## Configuration

In the index.js you will find options to change.
Here is what each one does:
```
ratio - The image size, can be a number from 0 to 1.

opacity - The image opacity, can be a number from 0 to 1.

dstPath - Is the output location, you can change this as you like, but at the end need to be "${arquivo}".
Example: `./output/${arquivo}`
```