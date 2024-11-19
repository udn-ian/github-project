const gulp = require('gulp');
const clean = require('gulp-clean');

// 清理 gh-pages 分支的內容
gulp.task('clean', function () {
  return gulp.src('dist', { read: false, allowEmpty: true })
    .pipe(clean());
});

// 將靜態文件複製到 dist 目錄
gulp.task('copy', function () {
  return gulp.src('src/**/*')
    .pipe(gulp.dest('dist'));
});

// 預設任務
gulp.task('build', gulp.series('clean', 'copy'));