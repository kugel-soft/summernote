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
    'sr-RS': {
      font: {
        bold: 'Podebljano',
        italic: 'Kurziv',
        underline: 'Podvučeno',
        clear: 'Ukloni stilove fonta',
        height: 'Visina linije',
        name: 'Font Family',
        strikethrough: 'Precrtano',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'Veličina fonta'
      },
      image: {
        image: 'Slika',
        insert: 'Umetni sliku',
        resizeFull: 'Puna veličina',
        resizeHalf: 'Umanji na 50%',
        resizeQuarter: 'Umanji na 25%',
        floatLeft: 'Uz levu ivicu',
        floatRight: 'Uz desnu ivicu',
        floatNone: 'Bez ravnanja',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'Prevuci sliku ovde',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'Izaberi iz datoteke',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'Adresa slike',
        remove: 'Ukloni sliku',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Veza ka videu',
        insert: 'Umetni video',
        url: 'URL video',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion ili Youku)'
      },
      link: {
        link: 'Veza',
        insert: 'Umetni vezu',
        unlink: 'Ukloni vezu',
        edit: 'Uredi',
        textToDisplay: 'Tekst za prikaz',
        url: 'Internet adresa',
        openInNewWindow: 'Otvori u novom prozoru'
      },
      table: {
        table: 'Tabela',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'Umetni horizontalnu liniju'
      },
      style: {
        style: 'Stil',
        p: 'pni',
        blockquote: 'Citat',
        pre: 'Kod',
        h1: 'Zaglavlje 1',
        h2: 'Zaglavlje 2',
        h3: 'Zaglavlje 3',
        h4: 'Zaglavlje 4',
        h5: 'Zaglavlje 5',
        h6: 'Zaglavlje 6'
      },
      lists: {
        unordered: 'Obična lista',
        ordered: 'Numerisana lista'
      },
      options: {
        help: 'Pomoć',
        fullscreen: 'Preko celog ekrana',
        codeview: 'Izvorni kod'
      },
      paragraph: {
        paragraph: 'Paragraf',
        outdent: 'Smanji uvlačenje',
        indent: 'Povečaj uvlačenje',
        left: 'Poravnaj u levo',
        center: 'Centrirano',
        right: 'Poravnaj u desno',
        justify: 'Poravnaj obostrano'
      },
      color: {
        recent: 'Poslednja boja',
        more: 'Više boja',
        background: 'Boja pozadine',
        foreground: 'Boja teksta',
        transparent: 'Providna',
        setTransparent: 'Providna',
        reset: 'Opoziv',
        resetToDefault: 'Podrazumevana'
      },
      shortcut: {
        shortcuts: 'Prečice sa tastature',
        close: 'Zatvori',
        textFormatting: 'Formatiranje teksta',
        action: 'Akcija',
        paragraphFormatting: 'Formatiranje paragrafa',
        documentStyle: 'Stil dokumenta',
        extraKeys: 'Dodatne kombinacije'
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
        undo: 'Poništi',
        redo: 'Ponovi'
      },
      specialChar: {
        specialChar: 'SPECIAL CHARACTERS',
        select: 'Select Special characters'
      }
    }
  });
})(jQuery);
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-sr-RS-Latin.js.map