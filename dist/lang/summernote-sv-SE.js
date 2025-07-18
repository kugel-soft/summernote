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
    'sv-SE': {
      font: {
        bold: 'Fet',
        italic: 'Kursiv',
        underline: 'Understruken',
        clear: 'Radera formatering',
        height: 'Radavstånd',
        name: 'Teckensnitt',
        strikethrough: 'Genomstruken',
        subscript: 'Nedsänkt',
        superscript: 'Upphöjd',
        size: 'Teckenstorlek'
      },
      image: {
        image: 'Bild',
        insert: 'Infoga bild',
        resizeFull: 'Full storlek',
        resizeHalf: 'Halv storlek',
        resizeQuarter: 'En fjärdedel i storlek',
        floatLeft: 'Vänsterjusterad',
        floatRight: 'Högerjusterad',
        floatNone: 'Ingen justering',
        shapeRounded: 'Form: Avrundad',
        shapeCircle: 'Form: Cirkel',
        shapeThumbnail: 'Form: Miniatyr',
        shapeNone: 'Form: Ingen',
        dragImageHere: 'Dra en bild hit',
        dropImage: 'Släpp bild eller text',
        selectFromFiles: 'Välj från filer',
        maximumFileSize: 'Maximal filstorlek',
        maximumFileSizeError: 'Maximal filstorlek har överskridits.',
        url: 'Länk till bild',
        remove: 'Ta bort bild',
        original: 'Original'
      },
      video: {
        video: 'Filmklipp',
        videoLink: 'Länk till filmklipp',
        insert: 'Infoga filmklipp',
        url: 'Länk till filmklipp',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion eller Youku)'
      },
      link: {
        link: 'Länk',
        insert: 'Infoga länk',
        unlink: 'Ta bort länk',
        edit: 'Redigera',
        textToDisplay: 'Visningstext',
        url: 'Till vilken URL ska denna länk peka?',
        openInNewWindow: 'Öppna i ett nytt fönster'
      },
      table: {
        table: 'Tabell',
        addRowAbove: 'Lägg till rad ovanför',
        addRowBelow: 'Lägg till rad under',
        addColLeft: 'Lägg till kolumn åt vänster',
        addColRight: 'Lägg till kolumn åt höger',
        delRow: 'Radera rad',
        delCol: 'Radera kolumn',
        delTable: 'Radera tabell'
      },
      hr: {
        insert: 'Infoga horisontell linje'
      },
      style: {
        style: 'Stil',
        p: 'p',
        blockquote: 'Citat',
        pre: 'Kod',
        h1: 'Rubrik 1',
        h2: 'Rubrik 2',
        h3: 'Rubrik 3',
        h4: 'Rubrik 4',
        h5: 'Rubrik 5',
        h6: 'Rubrik 6'
      },
      lists: {
        unordered: 'Punktlista',
        ordered: 'Numrerad lista'
      },
      options: {
        help: 'Hjälp',
        fullscreen: 'Fullskärm',
        codeview: 'HTML-visning'
      },
      paragraph: {
        paragraph: 'Justera text',
        outdent: 'Minska indrag',
        indent: 'Öka indrag',
        left: 'Vänsterjusterad',
        center: 'Centrerad',
        right: 'Högerjusterad',
        justify: 'Justera text'
      },
      color: {
        recent: 'Senast använda färg',
        more: 'Fler färger',
        background: 'Bakgrundsfärg',
        foreground: 'Teckenfärg',
        transparent: 'Genomskinlig',
        setTransparent: 'Gör genomskinlig',
        reset: 'Nollställ',
        resetToDefault: 'Återställ till standard'
      },
      shortcut: {
        shortcuts: 'Kortkommandon',
        close: 'Stäng',
        textFormatting: 'Textformatering',
        action: 'Funktion',
        paragraphFormatting: 'Avsnittsformatering',
        documentStyle: 'Dokumentstil',
        extraKeys: 'Extra tangenter'
      },
      help: {
        'insertParagraph': 'Infoga paragraf',
        'undo': 'Ångra senaste kommandot',
        'redo': 'Gör om senaste kommandot',
        'tab': 'Lägg till indrag',
        'untab': 'Ta bort indrag',
        'bold': 'Tillämpa fet stil',
        'italic': 'Tillämpa kursiv stil',
        'underline': 'Tillämpa understruken stil',
        'strikethrough': 'Tillämpa genomstruken stil',
        'removeFormat': 'Rensa formatering',
        'justifyLeft': 'Tillämpa vänsterjustering',
        'justifyCenter': 'Tillämpa centrering',
        'justifyRight': 'Tillämpa högerjustering',
        'justifyFull': 'Tillämpa justerad text',
        'insertUnorderedList': 'Tillämpa punktlista',
        'insertOrderedList': 'Tillämpa numrerad lista',
        'outdent': 'Minska indrag för aktuell paragraf',
        'indent': 'Öka indrag för aktuell paragraf',
        'formatPara': 'Ändra formatet för aktuellt block till en paragraf (P-tagg)',
        'formatH1': 'Ändra formatet för aktuellt block till rubrik 1',
        'formatH2': 'Ändra formatet för aktuellt block till rubrik 2',
        'formatH3': 'Ändra formatet för aktuellt block till rubrik 3',
        'formatH4': 'Ändra formatet för aktuellt block till rubrik 4',
        'formatH5': 'Ändra formatet för aktuellt block till rubrik 5',
        'formatH6': 'Ändra formatet för aktuellt block till rubrik 6',
        'insertHorizontalRule': 'Infoga horisontell linje',
        'linkDialog.show': 'Visa dialogruta för länk'
      },
      history: {
        undo: 'Ångra',
        redo: 'Gör om'
      },
      specialChar: {
        specialChar: 'SPECIALTECKEN',
        select: 'Välj specialtecken'
      }
    }
  });
})(jQuery);
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-sv-SE.js.map