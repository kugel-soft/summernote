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
    'ro-RO': {
      font: {
        bold: 'Îngroșat',
        italic: 'Înclinat',
        underline: 'Subliniat',
        clear: 'Înlătură formatare font',
        height: 'Înălțime rând',
        name: 'Familie de fonturi',
        strikethrough: 'Tăiat',
        subscript: 'Indice',
        superscript: 'Exponent',
        size: 'Dimensiune font'
      },
      image: {
        image: 'Imagine',
        insert: 'Inserează imagine',
        resizeFull: 'Redimensionează complet',
        resizeHalf: 'Redimensionează 1/2',
        resizeQuarter: 'Redimensionează 1/4',
        floatLeft: 'Aliniere la stânga',
        floatRight: 'Aliniere la dreapta',
        floatNone: 'Fară aliniere',
        shapeRounded: 'Formă: Rotund',
        shapeCircle: 'Formă: Cerc',
        shapeThumbnail: 'Formă: Pictogramă',
        shapeNone: 'Formă: Nici una',
        dragImageHere: 'Trage o imagine sau un text aici',
        dropImage: 'Eliberează imaginea sau textul',
        selectFromFiles: 'Alege din fişiere',
        maximumFileSize: 'Dimensiune maximă fișier',
        maximumFileSizeError: 'Dimensiune maximă fișier depășită.',
        url: 'URL imagine',
        remove: 'Șterge imagine',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Link video',
        insert: 'Inserează video',
        url: 'URL video?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion sau Youku)'
      },
      link: {
        link: 'Link',
        insert: 'Inserează link',
        unlink: 'Înlătură link',
        edit: 'Editează',
        textToDisplay: 'Text ce va fi afişat',
        url: 'La ce adresă URL trebuie să conducă acest link?',
        openInNewWindow: 'Deschidere în fereastră nouă'
      },
      table: {
        table: 'Tabel',
        addRowAbove: 'Adaugă rând deasupra',
        addRowBelow: 'Adaugă rând dedesubt',
        addColLeft: 'Adaugă coloană stânga',
        addColRight: 'Adaugă coloană dreapta',
        delRow: 'Șterge rând',
        delCol: 'Șterge coloană',
        delTable: 'Șterge tabel'
      },
      hr: {
        insert: 'Inserează o linie orizontală'
      },
      style: {
        style: 'Stil',
        p: 'p',
        blockquote: 'Citat',
        pre: 'Preformatat',
        h1: 'Titlu 1',
        h2: 'Titlu 2',
        h3: 'Titlu 3',
        h4: 'Titlu 4',
        h5: 'Titlu 5',
        h6: 'Titlu 6'
      },
      lists: {
        unordered: 'Listă neordonată',
        ordered: 'Listă ordonată'
      },
      options: {
        help: 'Ajutor',
        fullscreen: 'Măreşte',
        codeview: 'Sursă'
      },
      paragraph: {
        paragraph: 'Paragraf',
        outdent: 'Creşte identarea',
        indent: 'Scade identarea',
        left: 'Aliniere la stânga',
        center: 'Aliniere centrală',
        right: 'Aliniere la dreapta',
        justify: 'Aliniere în bloc'
      },
      color: {
        recent: 'Culoare recentă',
        more: 'Mai multe  culori',
        background: 'Culoarea fundalului',
        foreground: 'Culoarea textului',
        transparent: 'Transparent',
        setTransparent: 'Setează transparent',
        reset: 'Resetează',
        resetToDefault: 'Revino la iniţial'
      },
      shortcut: {
        shortcuts: 'Scurtături tastatură',
        close: 'Închide',
        textFormatting: 'Formatare text',
        action: 'Acţiuni',
        paragraphFormatting: 'Formatare paragraf',
        documentStyle: 'Stil paragraf',
        extraKeys: 'Taste extra'
      },
      help: {
        'insertParagraph': 'Inserează paragraf',
        'undo': 'Revine la starea anterioară',
        'redo': 'Revine la starea ulterioară',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Setează stil îngroșat',
        'italic': 'Setează stil înclinat',
        'underline': 'Setează stil subliniat',
        'strikethrough': 'Setează stil tăiat',
        'removeFormat': 'Înlătură formatare',
        'justifyLeft': 'Setează aliniere stânga',
        'justifyCenter': 'Setează aliniere centru',
        'justifyRight': 'Setează aliniere dreapta',
        'justifyFull': 'Setează aliniere bloc',
        'insertUnorderedList': 'Comutare listă neordinată',
        'insertOrderedList': 'Comutare listă ordonată',
        'outdent': 'Înlătură indentare paragraf curent',
        'indent': 'Adaugă indentare paragraf curent',
        'formatPara': 'Schimbă formatarea selecției în paragraf',
        'formatH1': 'Schimbă formatarea selecției în H1',
        'formatH2': 'Schimbă formatarea selecției în H2',
        'formatH3': 'Schimbă formatarea selecției în H3',
        'formatH4': 'Schimbă formatarea selecției în H4',
        'formatH5': 'Schimbă formatarea selecției în H5',
        'formatH6': 'Schimbă formatarea selecției în H6',
        'insertHorizontalRule': 'Adaugă linie orizontală',
        'linkDialog.show': 'Inserează link'
      },
      history: {
        undo: 'Starea anterioară',
        redo: 'Starea ulterioară'
      },
      specialChar: {
        specialChar: 'CARACTERE SPECIALE',
        select: 'Alege caractere speciale'
      }
    }
  });
})(jQuery);
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-ro-RO.js.map