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
    'ca-ES': {
      font: {
        bold: 'Negreta',
        italic: 'Cursiva',
        underline: 'Subratllat',
        clear: 'Treure estil de lletra',
        height: 'Alçada de línia',
        name: 'Font',
        strikethrough: 'Ratllat',
        subscript: 'Subíndex',
        superscript: 'Superíndex',
        size: 'Mida de lletra'
      },
      image: {
        image: 'Imatge',
        insert: 'Inserir imatge',
        resizeFull: 'Redimensionar a mida completa',
        resizeHalf: 'Redimensionar a la meitat',
        resizeQuarter: 'Redimensionar a un quart',
        floatLeft: 'Alinear a l\'esquerra',
        floatRight: 'Alinear a la dreta',
        floatNone: 'No alinear',
        shapeRounded: 'Forma: Arrodonit',
        shapeCircle: 'Forma: Cercle',
        shapeThumbnail: 'Forma: Marc',
        shapeNone: 'Forma: Cap',
        dragImageHere: 'Arrossegueu una imatge o text aquí',
        dropImage: 'Deixa anar aquí una imatge o un text',
        selectFromFiles: 'Seleccioneu des dels arxius',
        maximumFileSize: 'Mida màxima de l\'arxiu',
        maximumFileSizeError: 'La mida màxima de l\'arxiu s\'ha superat.',
        url: 'URL de la imatge',
        remove: 'Eliminar imatge',
        original: 'Original'
      },
      video: {
        video: 'Vídeo',
        videoLink: 'Enllaç del vídeo',
        insert: 'Inserir vídeo',
        url: 'URL del vídeo?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion o Youku)'
      },
      link: {
        link: 'Enllaç',
        insert: 'Inserir enllaç',
        unlink: 'Treure enllaç',
        edit: 'Editar',
        textToDisplay: 'Text per mostrar',
        url: 'Cap a quina URL porta l\'enllaç?',
        openInNewWindow: 'Obrir en una finestra nova'
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
        insert: 'Inserir línia horitzontal'
      },
      style: {
        style: 'Estil',
        p: 'p',
        blockquote: 'Cita',
        pre: 'Codi',
        h1: 'Títol 1',
        h2: 'Títol 2',
        h3: 'Títol 3',
        h4: 'Títol 4',
        h5: 'Títol 5',
        h6: 'Títol 6'
      },
      lists: {
        unordered: 'Llista desendreçada',
        ordered: 'Llista endreçada'
      },
      options: {
        help: 'Ajut',
        fullscreen: 'Pantalla sencera',
        codeview: 'Veure codi font'
      },
      paragraph: {
        paragraph: 'Paràgraf',
        outdent: 'Menys tabulació',
        indent: 'Més tabulació',
        left: 'Alinear a l\'esquerra',
        center: 'Alinear al mig',
        right: 'Alinear a la dreta',
        justify: 'Justificar'
      },
      color: {
        recent: 'Últim color',
        more: 'Més colors',
        background: 'Color de fons',
        foreground: 'Color de lletra',
        transparent: 'Transparent',
        setTransparent: 'Establir transparent',
        reset: 'Restablir',
        resetToDefault: 'Restablir per defecte'
      },
      shortcut: {
        shortcuts: 'Dreceres de teclat',
        close: 'Tancar',
        textFormatting: 'Format de text',
        action: 'Acció',
        paragraphFormatting: 'Format de paràgraf',
        documentStyle: 'Estil del document',
        extraKeys: 'Tecles adicionals'
      },
      help: {
        'insertParagraph': 'Inserir paràgraf',
        'undo': 'Desfer l\'última acció',
        'redo': 'Refer l\'última acció',
        'tab': 'Tabular',
        'untab': 'Eliminar tabulació',
        'bold': 'Establir estil negreta',
        'italic': 'Establir estil cursiva',
        'underline': 'Establir estil subratllat',
        'strikethrough': 'Establir estil ratllat',
        'removeFormat': 'Netejar estil',
        'justifyLeft': 'Alinear a l\'esquerra',
        'justifyCenter': 'Alinear al centre',
        'justifyRight': 'Alinear a la dreta',
        'justifyFull': 'Justificar',
        'insertUnorderedList': 'Inserir llista desendreçada',
        'insertOrderedList': 'Inserir llista endreçada',
        'outdent': 'Reduïr tabulació del paràgraf',
        'indent': 'Augmentar tabulació del paràgraf',
        'formatPara': 'Canviar l\'estil del bloc com a un paràgraf (etiqueta P)',
        'formatH1': 'Canviar l\'estil del bloc com a un H1',
        'formatH2': 'Canviar l\'estil del bloc com a un H2',
        'formatH3': 'Canviar l\'estil del bloc com a un H3',
        'formatH4': 'Canviar l\'estil del bloc com a un H4',
        'formatH5': 'Canviar l\'estil del bloc com a un H5',
        'formatH6': 'Canviar l\'estil del bloc com a un H6',
        'insertHorizontalRule': 'Inserir una línia horitzontal',
        'linkDialog.show': 'Mostrar panel d\'enllaços'
      },
      history: {
        undo: 'Desfer',
        redo: 'Refer'
      },
      specialChar: {
        specialChar: 'CARÀCTERS ESPECIALS',
        select: 'Selecciona caràcters especials'
      }
    }
  });
})(jQuery);
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-ca-ES.js.map