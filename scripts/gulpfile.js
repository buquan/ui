const gulp = require('gulp');
const path = require('path');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const replace = require('gulp-replace');
const less = require('gulp-less');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const size = require('gulp-filesize');
const postcssPresetEnv = require('postcss-preset-env');
const postcss = require('gulp-postcss');

const pac = require('../package.json');

let {name} = pac;
const scoped = name.includes('/');
name = scoped ? name.replace(/.+\/(.*)/, '$1') : name;

const resolve = (dir) => path.join(__dirname, '.', dir);
const distDir = resolve('../dist');
const libDir = resolve('../lib');
const esDir = resolve('../es');
const lessDir = resolve('../src/**/*.less');
const assetsDir = resolve('../src/**/assets/**/*.*');
const indexJsDir = resolve('../src/**/style/index.js');

// 复制 less 和 assets 文件到 es 和 lib 文件夹下
const copyAssets = (input, output) => gulp.src(input).pipe(gulp.dest(output));
// 复制 less 和 assets 文件到 es 文件夹下
gulp.task('copy-less-assets-es', () => {
  return copyAssets([lessDir, assetsDir], esDir);
});
// 复制 less 和 assets 文件到 lib 文件夹下
gulp.task('copy-less-assets-lib', () => {
  return copyAssets([lessDir, assetsDir], libDir);
});

// 复制 style/index.js 文件到 es 和 lib 文件夹下
const copyIndexjs = (output) => {
  return gulp.src(indexJsDir).pipe(gulp.dest(output));
};
gulp.task('copy-indexjs-es', () => {
  return copyIndexjs(esDir);
});
gulp.task('copy-indexjs-lib', () => {
  return copyIndexjs(libDir);
});

// 根据 index.js 创建一个全新的 css.js 供按需加载 styel:'css' 使用
const replaceIndexjs = (output) => {
  return gulp
    .src(indexJsDir)
    .pipe(replace('less', 'css'))
    .pipe(
      rename(function(path) {
        path.basename = 'css';
        path.extname = '.js';
      })
    )
    .pipe(gulp.dest(output));
};
gulp.task('replace-indexjs-es', () => {
  return replaceIndexjs(esDir);
});
gulp.task('replace-indexjs-lib', () => {
  return replaceIndexjs(libDir);
});

// 编译 less 文件到 es 和 lib 文件夹下
const compileLess = (output) => {
  return (
    gulp
      .src(lessDir)
      .pipe(autoprefixer())
      // 编译.less 文件
      .pipe(less())
      .pipe(
        postcss([
          postcssPresetEnv({
            stage: 3,
            features: {
              'custom-properties': true,
              'nesting-rules': true
            },
            browsers: 'last 2 versions'
          })
        ])
      )
      .pipe(
        rename(function(path) {
          path.extname = '.css';
        })
      )
      // 压缩 css 文件
      .pipe(cleanCSS({inline: ['none']}))
      .pipe(gulp.dest(output))
  );
};
gulp.task('compile-less-es', () => {
  return compileLess(esDir);
});
gulp.task('compile-less-lib', () => {
  return compileLess(libDir);
});

// 入口
gulp.task(
  'compile-css-es',
  gulp.series(
    gulp.parallel(
      'copy-less-assets-es',
      'copy-indexjs-es',
      'replace-indexjs-es',
      'compile-less-es'
    )
  )
);
gulp.task(
  'compile-css-commonjs',
  gulp.series(
    gulp.parallel(
      'copy-less-assets-lib',
      'copy-indexjs-lib',
      'replace-indexjs-lib',
      'compile-less-lib'
    )
  )
);

// 复制 assets 文件到 dist 文件夹下
// gulp.task('dist-assets', () => {
//   return copyAssets(assetsDir, distDir + '/assets');
// });
// ../src/**/assets/**/*.*
// const o = resolve('../src/assets/*');
// const abc = resolve('../src');
// gulp.task('dist-assets', () => {
//   return gulp.src(o).pipe(gulp.dest(distDir + '/assets'));
// });
// // 编译 less 到 dist 文件夹下
// gulp.task('dist-css', () => {
//   console.log('编译 less 到 dist 文件夹下');
//   return (
//     gulp
//       .src(lessDir)
//       .pipe(autoprefixer())
//       .pipe(less())
//       .pipe(
//         postcss([
//           postcssPresetEnv({
//             stage: 3,
//             features: {
//               'custom-properties': true,
//               'nesting-rules': true
//             }
//           })
//         ])
//       )

//       // .pipe(concat(`${name}.css`))
//       // .pipe(size())
//       // .pipe(gulp.dest(distDir))

//       .pipe(concat(`${name}.min.css`))
//       .pipe(size())
//       // 压缩 css 文件
//       .pipe(cleanCSS({inline: ['none']}))
//       .pipe(gulp.dest(distDir))
//   );
// });
// gulp.task(
//   'compile-css-umd',
//   gulp.series(gulp.parallel('dist-css', 'dist-assets'))
// );
