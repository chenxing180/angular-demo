var gulp = require('gulp');
    connect = require('gulp-connect');

gulp.task('default',function(){
});

gulp.task('webserver',function(){
    connect.server({
        root:"app"
    });
})

gulp.task('default',['webserver'],function(){

})