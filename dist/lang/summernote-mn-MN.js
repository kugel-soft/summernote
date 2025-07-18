/*!
 * 
 * Super simple WYSIWYG editor v0.9.1
 * https://summernote.org
 *
 * Copyright 2013~ Hackerwins and contributors
 * Summernote may be freely distributed under the MIT license.
 *
 * Date: 2025-07-11T14:55Z
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
// Starsoft Mongolia LLC Temuujin Ariunbold

(function ($) {
  $.extend(true, $.summernote.lang, {
    'mn-MN': {
      font: {
        bold: 'Тод',
        italic: 'Налуу',
        underline: 'Доогуур зураас',
        clear: 'Цэвэрлэх',
        height: 'Өндөр',
        name: 'Фонт',
        superscript: 'Дээд илтгэгч',
        subscript: 'Доод илтгэгч',
        strikethrough: 'Дарах',
        size: 'Хэмжээ'
      },
      image: {
        image: 'Зураг',
        insert: 'Оруулах',
        resizeFull: 'Хэмжээ бүтэн',
        resizeHalf: 'Хэмжээ 1/2',
        resizeQuarter: 'Хэмжээ 1/4',
        floatLeft: 'Зүүн талд байрлуулах',
        floatRight: 'Баруун талд байрлуулах',
        floatNone: 'Анхдагч байрлалд аваачих',
        shapeRounded: 'Хүрээ: Дугуй',
        shapeCircle: 'Хүрээ: Тойрог',
        shapeThumbnail: 'Хүрээ: Хураангуй',
        shapeNone: 'Хүрээгүй',
        dragImageHere: 'Зургийг энд чирч авчирна уу',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'Файлуудаас сонгоно уу',
        maximumFileSize: 'Файлын дээд хэмжээ',
        maximumFileSizeError: 'Файлын дээд хэмжээ хэтэрсэн',
        url: 'Зургийн URL',
        remove: 'Зургийг устгах',
        original: 'Original'
      },
      video: {
        video: 'Видео',
        videoLink: 'Видео холбоос',
        insert: 'Видео оруулах',
        url: 'Видео URL?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion болон Youku)'
      },
      link: {
        link: 'Холбоос',
        insert: 'Холбоос оруулах',
        unlink: 'Холбоос арилгах',
        edit: 'Засварлах',
        textToDisplay: 'Харуулах бичвэр',
        url: 'Энэ холбоос хаашаа очих вэ?',
        openInNewWindow: 'Шинэ цонхонд нээх'
      },
      table: {
        table: 'Хүснэгт',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'Хэвтээ шугам оруулах'
      },
      style: {
        style: 'Хэв маяг',
        p: 'p',
        blockquote: 'Иш татах',
        pre: 'Эх сурвалж',
        h1: 'Гарчиг 1',
        h2: 'Гарчиг 2',
        h3: 'Гарчиг 3',
        h4: 'Гарчиг 4',
        h5: 'Гарчиг 5',
        h6: 'Гарчиг 6'
      },
      lists: {
        unordered: 'Эрэмбэлэгдээгүй',
        ordered: 'Эрэмбэлэгдсэн'
      },
      options: {
        help: 'Тусламж',
        fullscreen: 'Дэлгэцийг дүүргэх',
        codeview: 'HTML-Code харуулах'
      },
      paragraph: {
        paragraph: 'Хэсэг',
        outdent: 'Догол мөр хасах',
        indent: 'Догол мөр нэмэх',
        left: 'Зүүн тийш эгнүүлэх',
        center: 'Төвд эгнүүлэх',
        right: 'Баруун тийш эгнүүлэх',
        justify: 'Мөрийг тэгшлэх'
      },
      color: {
        recent: 'Сүүлд хэрэглэсэн өнгө',
        more: 'Өөр өнгөнүүд',
        background: 'Дэвсгэр өнгө',
        foreground: 'Үсгийн өнгө',
        transparent: 'Тунгалаг',
        setTransparent: 'Тунгалаг болгох',
        reset: 'Анхдагч өнгөөр тохируулах',
        resetToDefault: 'Хэвд нь оруулах'
      },
      shortcut: {
        shortcuts: 'Богино холбоос',
        close: 'Хаалт',
        textFormatting: 'Бичвэрийг хэлбэржүүлэх',
        action: 'Үйлдэл',
        paragraphFormatting: 'Догол мөрийг хэлбэржүүлэх',
        documentStyle: 'Бичиг баримтын хэв загвар',
        extraKeys: 'Extra keys'
      },
      help: {
        'insertParagraph': 'Insert Paragraph',
        'undo': 'Undoes the last command',
        'redo': 'Redoes the last command',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Set a bold style',
        'italic': 'Set a italic style',
        'underline': 'Set a underline style',
        'strikethrough': 'Set a strikethrough style',
        'removeFormat': 'Clean a style',
        'justifyLeft': 'Set left align',
        'justifyCenter': 'Set center align',
        'justifyRight': 'Set right align',
        'justifyFull': 'Set full align',
        'insertUnorderedList': 'Toggle unordered list',
        'insertOrderedList': 'Toggle ordered list',
        'outdent': 'Outdent on current paragraph',
        'indent': 'Indent on current paragraph',
        'formatPara': 'Change current block\'s format as a paragraph(P tag)',
        'formatH1': 'Change current block\'s format as H1',
        'formatH2': 'Change current block\'s format as H2',
        'formatH3': 'Change current block\'s format as H3',
        'formatH4': 'Change current block\'s format as H4',
        'formatH5': 'Change current block\'s format as H5',
        'formatH6': 'Change current block\'s format as H6',
        'insertHorizontalRule': 'Insert horizontal rule',
        'linkDialog.show': 'Show Link Dialog'
      },
      history: {
        undo: 'Буцаах',
        redo: 'Дахин хийх'
      },
      specialChar: {
        specialChar: 'Тусгай тэмдэгт',
        select: 'Тусгай тэмдэгт сонгох'
      }
    }
  });
})(jQuery);
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-mn-MN.js.map