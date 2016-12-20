/**
 * Created by hui on 16-12-20.
 */
var gulp = require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');
var concatFile = require('gulp-concat');
var cssMin = require('gulp-clean-css');
var jsMin = require('gulp-uglify');
var htmlMin = require('gulp-htmlmin');
var rev = require('gulp-rev');
var revCollector = require('gulp-rev-collector');
var autoPreFixer = require('gulp-autoprefixer');
var template = require('gulp-template');
var addFooter = require('gulp-footer');
var htmlRep = require('gulp-html-replace');
var sass = require('gulp-ruby-sass');
var fileRename = require('gulp-rename');
var jsonEDIT = require('gulp-json-editor');
var streamData = require('gulp-data');
var someAdd = require('gulp-add');
// 异步读取文件
var fs = require('fs');
var myJSON = JSON.parse(fs.readFileSync(''));
