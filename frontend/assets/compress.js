const imagemin = require('imagemin');
const imageminPngquant = require('imagemin-pngquant');
const imageminWebp = require('imagemin-webp');

imagemin(['./img/*.png'], '../../public/img', {
  plugins: [
    imageminPngquant({quality: '65-80'})
  ]
}).then(() => {
  imagemin(['../../public/img/*.png'], '../../public/img', {
    use: [
      imageminWebp({quality: 50})
    ]
  }).then(() => {
    console.log('Images optimized');
  });
});

