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
    'es-EU': {
      font: {
        bold: 'Lodia',
        italic: 'Etzana',
        underline: 'Azpimarratua',
        clear: 'Estiloa kendu',
        height: 'Lerro altuera',
        name: 'Tipografia',
        strikethrough: 'Marratua',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'Letren neurria'
      },
      image: {
        image: 'Irudia',
        insert: 'Irudi bat txertatu',
        resizeFull: 'Jatorrizko neurrira aldatu',
        resizeHalf: 'Neurria erdira aldatu',
        resizeQuarter: 'Neurria laurdenera aldatu',
        floatLeft: 'Ezkerrean kokatu',
        floatRight: 'Eskuinean kokatu',
        floatNone: 'Kokapenik ez ezarri',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'Irudi bat ezarri hemen',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'Zure fitxategi bat aukeratu',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'Irudiaren URL helbidea',
        remove: 'Remove Image',
        original: 'Original'
      },
      video: {
        video: 'Bideoa',
        videoLink: 'Bideorako esteka',
        insert: 'Bideo berri bat txertatu',
        url: 'Bideoaren URL helbidea',
        providers: '(YouTube, Vimeo, Vine, Instagram edo DailyMotion)'
      },
      link: {
        link: 'Esteka',
        insert: 'Esteka bat txertatu',
        unlink: 'Esteka ezabatu',
        edit: 'Editatu',
        textToDisplay: 'Estekaren testua',
        url: 'Estekaren URL helbidea',
        openInNewWindow: 'Leiho berri batean ireki'
      },
      table: {
        table: 'Taula',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'Marra horizontala txertatu'
      },
      style: {
        style: 'Estiloa',
        p: 'p',
        blockquote: 'Aipamena',
        pre: 'Kodea',
        h1: '1. izenburua',
        h2: '2. izenburua',
        h3: '3. izenburua',
        h4: '4. izenburua',
        h5: '5. izenburua',
        h6: '6. izenburua'
      },
      lists: {
        unordered: 'Ordenatu gabeko zerrenda',
        ordered: 'Zerrenda ordenatua'
      },
      options: {
        help: 'Laguntza',
        fullscreen: 'Pantaila osoa',
        codeview: 'Kodea ikusi'
      },
      paragraph: {
        paragraph: 'Paragrafoa',
        outdent: 'Koska txikiagoa',
        indent: 'Koska handiagoa',
        left: 'Ezkerrean kokatu',
        center: 'Erdian kokatu',
        right: 'Eskuinean kokatu',
        justify: 'Justifikatu'
      },
      color: {
        recent: 'Azken kolorea',
        more: 'Kolore gehiago',
        background: 'Atzeko planoa',
        foreground: 'Aurreko planoa',
        transparent: 'Gardena',
        setTransparent: 'Gardendu',
        reset: 'Lehengoratu',
        resetToDefault: 'Berrezarri lehenetsia'
      },
      shortcut: {
        shortcuts: 'Lasterbideak',
        close: 'Itxi',
        textFormatting: 'Testuaren formatua',
        action: 'Ekintza',
        paragraphFormatting: 'Paragrafoaren formatua',
        documentStyle: 'Dokumentuaren estiloa'
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
        undo: 'Desegin',
        redo: 'Berregin'
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
//# sourceMappingURL=summernote-es-EU.js.map