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
(function ($) {
  $.extend(true, $.summernote.lang, {
    'bg-BG': {
      font: {
        bold: 'Удебелен',
        italic: 'Наклонен',
        underline: 'Подчертан',
        clear: 'Изчисти стиловете',
        height: 'Височина',
        name: 'Шрифт',
        strikethrough: 'Задраскано',
        subscript: 'Долен индекс',
        superscript: 'Горен индекс',
        size: 'Размер на шрифта'
      },
      image: {
        image: 'Изображение',
        insert: 'Постави картинка',
        resizeFull: 'Цял размер',
        resizeHalf: 'Размер на 50%',
        resizeQuarter: 'Размер на 25%',
        floatLeft: 'Подравни в ляво',
        floatRight: 'Подравни в дясно',
        floatNone: 'Без подравняване',
        shapeRounded: 'Форма: Заоблено',
        shapeCircle: 'Форма: Кръг',
        shapeThumbnail: 'Форма: Миниатюра',
        shapeNone: 'Форма: Без',
        dragImageHere: 'Пуснете изображението тук',
        dropImage: 'Пуснете Изображение или Текст',
        selectFromFiles: 'Изберете файл',
        maximumFileSize: 'Максимален размер на файла',
        maximumFileSizeError: 'Достигнат Максимален размер на файла.',
        url: 'URL адрес на изображение',
        remove: 'Премахни изображение',
        original: 'Оригинал'
      },
      video: {
        video: 'Видео',
        videoLink: 'Видео линк',
        insert: 'Добави Видео',
        url: 'Видео URL?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
      },
      link: {
        link: 'Връзка',
        insert: 'Добави връзка',
        unlink: 'Премахни връзка',
        edit: 'Промени',
        textToDisplay: 'Текст за показване',
        url: 'URL адрес',
        openInNewWindow: 'Отвори в нов прозорец'
      },
      table: {
        table: 'Таблица',
        addRowAbove: 'Добави ред отгоре',
        addRowBelow: 'Добави ред отдолу',
        addColLeft: 'Добави колона отляво',
        addColRight: 'Добави колона отдясно',
        delRow: 'Изтрии ред',
        delCol: 'Изтрии колона',
        delTable: 'Изтрии таблица'
      },
      hr: {
        insert: 'Добави хоризонтална линия'
      },
      style: {
        style: 'Стил',
        p: 'Нормален',
        blockquote: 'Цитат',
        pre: 'Код',
        h1: 'Заглавие 1',
        h2: 'Заглавие 2',
        h3: 'Заглавие 3',
        h4: 'Заглавие 4',
        h5: 'Заглавие 5',
        h6: 'Заглавие 6'
      },
      lists: {
        unordered: 'Символен списък',
        ordered: 'Цифров списък'
      },
      options: {
        help: 'Помощ',
        fullscreen: 'На цял екран',
        codeview: 'Преглед на код'
      },
      paragraph: {
        paragraph: 'Параграф',
        outdent: 'Намаляване на отстъпа',
        indent: 'Абзац',
        left: 'Подравняване в ляво',
        center: 'Център',
        right: 'Подравняване в дясно',
        justify: 'Разтягане по ширина'
      },
      color: {
        recent: 'Последния избран цвят',
        more: 'Още цветове',
        background: 'Цвят на фона',
        foreground: 'Цвят на шрифта',
        transparent: 'Прозрачен',
        setTransparent: 'Направете прозрачен',
        reset: 'Възстанови',
        resetToDefault: 'Възстанови оригиналните',
        cpSelect: 'Изберете'
      },
      shortcut: {
        shortcuts: 'Клавишни комбинации',
        close: 'Затвори',
        textFormatting: 'Форматиране на текста',
        action: 'Действие',
        paragraphFormatting: 'Форматиране на параграф',
        documentStyle: 'Стил на документа',
        extraKeys: 'Екстра бутони'
      },
      help: {
        'insertParagraph': 'Добави Параграф',
        'undo': 'Отмени последната промяна',
        'redo': 'Върни последната промяна',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Удебели',
        'italic': 'Приложи наклонен стил',
        'underline': 'Приложи подчераване',
        'strikethrough': 'Приложи зачеркнат стил',
        'removeFormat': 'Изчисти стилове',
        'justifyLeft': 'Подравняване в ляво',
        'justifyCenter': 'Подравняване в центъра',
        'justifyRight': 'Подравняване в дясно',
        'justifyFull': 'Двустранно подравняване',
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
        'insertHorizontalRule': 'Вмъкни хоризонтално правило',
        'linkDialog.show': 'Show Link Dialog'
      },
      history: {
        undo: 'Назад',
        redo: 'Напред'
      },
      specialChar: {
        specialChar: 'SPECIAL CHARACTERS',
        select: 'Избери Специални символи'
      }
    }
  });
})(jQuery);
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-bg-BG.js.map