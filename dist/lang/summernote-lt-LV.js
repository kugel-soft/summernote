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
    'lv-LV': {
      font: {
        bold: 'Treknraksts',
        italic: 'Kursīvs',
        underline: 'Pasvītrots',
        clear: 'Noņemt formatējumu',
        height: 'Līnijas augstums',
        name: 'Fonts',
        strikethrough: 'Nosvītrots',
        superscript: 'Augšraksts',
        subscript: 'Apakšraksts',
        size: 'Fonta lielums'
      },
      image: {
        image: 'Attēls',
        insert: 'Ievietot attēlu',
        resizeFull: 'Pilns izmērts',
        resizeHalf: 'Samazināt 50%',
        resizeQuarter: 'Samazināt 25%',
        floatLeft: 'Līdzināt pa kreisi',
        floatRight: 'Līdzināt pa labi',
        floatNone: 'Nelīdzināt',
        shapeRounded: 'Forma: apaļām malām',
        shapeCircle: 'Forma: aplis',
        shapeThumbnail: 'Forma: rāmītis',
        shapeNone: 'Forma: orģināla',
        dragImageHere: 'Ievēlciet attēlu šeit',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'Izvēlēties failu',
        maximumFileSize: 'Maksimālais faila izmērs',
        maximumFileSizeError: 'Faila izmērs pārāk liels!',
        url: 'Attēla URL',
        remove: 'Dzēst attēlu',
        original: 'Oriģināls'
      },
      video: {
        video: 'Video',
        videoLink: 'Video saite',
        insert: 'Ievietot Video',
        url: 'Video URL?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)'
      },
      link: {
        link: 'Saite',
        insert: 'Ievietot saiti',
        unlink: 'Noņemt saiti',
        edit: 'Rediģēt',
        textToDisplay: 'Saites saturs',
        url: 'Uz kādu URL šai saitei būtu jāved?',
        openInNewWindow: 'Atvērt jaunā logā'
      },
      table: {
        table: 'Tabula',
        addRowAbove: 'Pievienot rindu virs',
        addRowBelow: 'Pievienot rindu zem',
        addColLeft: 'Pievienot kolonnu pa kreisi',
        addColRight: 'Pievienot kolonnu pa labi',
        delRow: 'Dzēst rindu',
        delCol: 'Dzēst kolonnu',
        delTable: 'Dzēst tabulu'
      },
      hr: {
        insert: 'Ievietot līniju'
      },
      style: {
        style: 'Stils',
        p: 'Parasts',
        blockquote: 'Citāts',
        pre: 'Kods',
        h1: 'Virsraksts h1',
        h2: 'Virsraksts h2',
        h3: 'Virsraksts h3',
        h4: 'Virsraksts h4',
        h5: 'Virsraksts h5',
        h6: 'Virsraksts h6'
      },
      lists: {
        unordered: 'Nenumurēts saraksts',
        ordered: 'Numurēts saraksts'
      },
      options: {
        help: 'Palīdzība',
        fullscreen: 'Pa visu ekrānu',
        codeview: 'HTML kods'
      },
      paragraph: {
        paragraph: 'Paragrāfs',
        outdent: 'Samazināt atkāpi',
        indent: 'Palielināt atkāpi',
        left: 'Līdzināt pa kreisi',
        center: 'Centrēt',
        right: 'Līdzināt pa labi',
        justify: 'Līdzināt gar abām malām'
      },
      color: {
        recent: 'Nesen izmantotās',
        more: 'Citas krāsas',
        background: 'Fona krāsa',
        foreground: 'Fonta krāsa',
        transparent: 'Caurspīdīgs',
        setTransparent: 'Iestatīt caurspīdīgumu',
        reset: 'Atjaunot',
        resetToDefault: 'Atjaunot noklusējumu'
      },
      shortcut: {
        shortcuts: 'Saīsnes',
        close: 'Aizvērt',
        textFormatting: 'Teksta formatēšana',
        action: 'Darbība',
        paragraphFormatting: 'Paragrāfa formatēšana',
        documentStyle: 'Dokumenta stils',
        extraKeys: 'Citas taustiņu kombinācijas'
      },
      help: {
        insertParagraph: 'Ievietot Paragrāfu',
        undo: 'Atcelt iepriekšējo darbību',
        redo: 'Atkārtot atcelto darbību',
        tab: 'Atkāpe',
        untab: 'Samazināt atkāpi',
        bold: 'Pārvērst tekstu treknrakstā',
        italic: 'Pārvērst tekstu slīprakstā (kursīvā)',
        underline: 'Pasvītrot tekstu',
        strikethrough: 'Nosvītrot tekstu',
        removeFormat: 'Notīrīt stilu no teksta',
        justifyLeft: 'Līdzīnāt saturu pa kreisi',
        justifyCenter: 'Centrēt saturu',
        justifyRight: 'Līdzīnāt saturu pa labi',
        justifyFull: 'Izlīdzināt saturu gar abām malām',
        insertUnorderedList: 'Ievietot nenumurētu sarakstu',
        insertOrderedList: 'Ievietot numurētu sarakstu',
        outdent: 'Samazināt/noņemt atkāpi paragrāfam',
        indent: 'Uzlikt atkāpi paragrāfam',
        formatPara: 'Mainīt bloka tipu uz (p) Paragrāfu',
        formatH1: 'Mainīt bloka tipu uz virsrakstu H1',
        formatH2: 'Mainīt bloka tipu uz virsrakstu H2',
        formatH3: 'Mainīt bloka tipu uz virsrakstu H3',
        formatH4: 'Mainīt bloka tipu uz virsrakstu H4',
        formatH5: 'Mainīt bloka tipu uz virsrakstu H5',
        formatH6: 'Mainīt bloka tipu uz virsrakstu H6',
        insertHorizontalRule: 'Ievietot horizontālu līniju',
        'linkDialog.show': 'Parādīt saites logu'
      },
      history: {
        undo: 'Atsauks (undo)',
        redo: 'Atkārtot (redo)'
      },
      specialChar: {
        specialChar: 'ĪPAŠIE SIMBOLI',
        select: 'Izvēlieties īpašos simbolus'
      }
    }
  });
})(jQuery);
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-lt-LV.js.map