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
    'sl-SI': {
      font: {
        bold: 'Krepko',
        italic: 'Ležeče',
        underline: 'Podčrtano',
        clear: 'Počisti oblikovanje izbire',
        height: 'Razmik med vrsticami',
        name: 'Pisava',
        strikethrough: 'Prečrtano',
        subscript: 'Podpisano',
        superscript: 'Nadpisano',
        size: 'Velikost pisave'
      },
      image: {
        image: 'Slika',
        insert: 'Vstavi sliko',
        resizeFull: 'Razširi na polno velikost',
        resizeHalf: 'Razširi na polovico velikosti',
        resizeQuarter: 'Razširi na četrtino velikosti',
        floatLeft: 'Leva poravnava',
        floatRight: 'Desna poravnava',
        floatNone: 'Brez poravnave',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'Sem povlecite sliko',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'Izberi sliko za nalaganje',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'URL naslov slike',
        remove: 'Odstrani sliko',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Video povezava',
        insert: 'Vstavi video',
        url: 'Povezava do videa',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion ali Youku)'
      },
      link: {
        link: 'Povezava',
        insert: 'Vstavi povezavo',
        unlink: 'Odstrani povezavo',
        edit: 'Uredi',
        textToDisplay: 'Prikazano besedilo',
        url: 'Povezava',
        openInNewWindow: 'Odpri v novem oknu'
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
        insert: 'Vstavi horizontalno črto'
      },
      style: {
        style: 'Slogi',
        p: 'Navadno besedilo',
        blockquote: 'Citat',
        pre: 'Koda',
        h1: 'Naslov 1',
        h2: 'Naslov 2',
        h3: 'Naslov 3',
        h4: 'Naslov 4',
        h5: 'Naslov 5',
        h6: 'Naslov 6'
      },
      lists: {
        unordered: 'Označen seznam',
        ordered: 'Oštevilčen seznam'
      },
      options: {
        help: 'Pomoč',
        fullscreen: 'Celozaslonski način',
        codeview: 'Pregled HTML kode'
      },
      paragraph: {
        paragraph: 'Slogi odstavka',
        outdent: 'Zmanjšaj odmik',
        indent: 'Povečaj odmik',
        left: 'Leva poravnava',
        center: 'Desna poravnava',
        right: 'Sredinska poravnava',
        justify: 'Obojestranska poravnava'
      },
      color: {
        recent: 'Uporabi zadnjo barvo',
        more: 'Več barv',
        background: 'Barva ozadja',
        foreground: 'Barva besedila',
        transparent: 'Brez barve',
        setTransparent: 'Brez barve',
        reset: 'Ponastavi',
        resetToDefault: 'Ponastavi na privzeto'
      },
      shortcut: {
        shortcuts: 'Bljižnice',
        close: 'Zapri',
        textFormatting: 'Oblikovanje besedila',
        action: 'Dejanja',
        paragraphFormatting: 'Oblikovanje odstavka',
        documentStyle: 'Oblikovanje naslova',
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
        undo: 'Razveljavi',
        redo: 'Uveljavi'
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
//# sourceMappingURL=summernote-sl-SI.js.map