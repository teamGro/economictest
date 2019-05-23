// const imagemin = require('imagemin');
// const imageminPngquant = require('imagemin-pngquant');
// const imageminWebp = require('imagemin-webp');
//
// (async () => {
//   const files = await imagemin(['./img/*.png'], '../../public/img', {
//     plugins: [
//       imageminPngquant({quality: '65-80'})
//     ]
//   });
//
//   console.log(files);
//     // => [{data: <Buffer 89 50 4e …>, path: 'build/images/foo.jpg'}, …]
// })();

const imagemin = require('imagemin');
const imageminWebp = require('imagemin-webp');

imagemin(['img/*.png'], '../../public/img', {
  use: [
    imageminWebp({quality: 50})
  ]
}).then(() => {
  console.log('Images optimized');
});
