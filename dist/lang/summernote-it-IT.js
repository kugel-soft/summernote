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
    'it-IT': {
      font: {
        bold: 'Testo in grassetto',
        italic: 'Testo in corsivo',
        underline: 'Testo sottolineato',
        clear: 'Elimina la formattazione del testo',
        height: 'Altezza della linea di testo',
        name: 'Famiglia Font',
        strikethrough: 'Testo barrato',
        subscript: 'Pedice',
        superscript: 'Apice',
        size: 'Dimensione del carattere'
      },
      image: {
        image: 'Immagine',
        insert: 'Inserisci immagine',
        resizeFull: 'Dimensioni originali',
        resizeHalf: 'Ridimensiona al 50%',
        resizeQuarter: 'Ridimensiona al 25%',
        floatLeft: 'Posiziona a sinistra',
        floatRight: 'Posiziona a destra',
        floatNone: 'Nessun posizionamento',
        shapeRounded: 'Forma: arrotondata',
        shapeCircle: 'Forma: cerchio',
        shapeThumbnail: 'Forma: miniatura',
        shapeNone: 'Forma: nessuna',
        dragImageHere: 'Trascina qui un\'immagine',
        dropImage: 'Rilascia immagine o testo',
        selectFromFiles: 'Scegli dai file',
        maximumFileSize: 'Dimensione massima del file',
        maximumFileSizeError: 'Dimensione massima del file superata.',
        url: 'URL dell\'immagine',
        remove: 'Rimuovi immagine',
        original: 'Originale'
      },
      video: {
        video: 'Video',
        videoLink: 'Collegamento ad un video',
        insert: 'Inserisci video',
        url: 'URL del video',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion o Youku)'
      },
      link: {
        link: 'Collegamento',
        insert: 'Inserisci collegamento',
        unlink: 'Elimina collegamento',
        edit: 'Modifica collegamento',
        textToDisplay: 'Testo del collegamento',
        url: 'URL del collegamento',
        openInNewWindow: 'Apri in una nuova finestra'
      },
      table: {
        table: 'Tabella',
        addRowAbove: 'Aggiungi riga sopra',
        addRowBelow: 'Aggiungi riga sotto',
        addColLeft: 'Aggiungi colonna sinistra',
        addColRight: 'Aggiungi colonna destra',
        delRow: 'Elimina riga',
        delCol: 'Elimina colonna',
        delTable: 'Elimina tabella'
      },
      hr: {
        insert: 'Inserisce una linea di separazione'
      },
      style: {
        style: 'Stili',
        p: 'Normale',
        blockquote: 'Citazione',
        pre: 'Codice',
        h1: 'Titolo 1',
        h2: 'Titolo 2',
        h3: 'Titolo 3',
        h4: 'Titolo 4',
        h5: 'Titolo 5',
        h6: 'Titolo 6'
      },
      lists: {
        unordered: 'Elenco non ordinato',
        ordered: 'Elenco ordinato'
      },
      options: {
        help: 'Aiuto',
        fullscreen: 'Modalità a tutto schermo',
        codeview: 'Visualizza codice'
      },
      paragraph: {
        paragraph: 'Paragrafo',
        outdent: 'Diminuisce il livello di rientro',
        indent: 'Aumenta il livello di rientro',
        left: 'Allinea a sinistra',
        center: 'Centra',
        right: 'Allinea a destra',
        justify: 'Giustifica (allinea a destra e sinistra)'
      },
      color: {
        recent: 'Ultimo colore utilizzato',
        more: 'Altri colori',
        background: 'Colore di sfondo',
        foreground: 'Colore',
        transparent: 'Trasparente',
        setTransparent: 'Trasparente',
        reset: 'Reimposta',
        resetToDefault: 'Reimposta i colori'
      },
      shortcut: {
        shortcuts: 'Scorciatoie da tastiera',
        close: 'Chiudi',
        textFormatting: 'Formattazione testo',
        action: 'Azioni',
        paragraphFormatting: 'Formattazione paragrafo',
        documentStyle: 'Stili',
        extraKeys: 'Tasti extra'
      },
      help: {
        'insertParagraph': 'Inserisci paragrafo',
        'undo': 'Annulla l\'ultimo comando',
        'redo': 'Ripristina l\'ultimo comando',
        'tab': 'Tabulazione',
        'untab': 'Toglie tabulazione',
        'bold': 'Imposta uno stile grassetto',
        'italic': 'Imposta uno stile corsivo',
        'underline': 'Imposta uno stile di sottolineatura',
        'strikethrough': 'Imposta uno stile barrato',
        'removeFormat': 'Rimuove uno stile',
        'justifyLeft': 'Imposta l\'allineamento a sinistra',
        'justifyCenter': 'Imposta l\'allineamento al centro',
        'justifyRight': 'Imposta l\'allineamento al destra',
        'justifyFull': 'Imposta l\'allineamento a pieno rigo',
        'insertUnorderedList': 'Attiva/disattiva elenco non ordinato',
        'insertOrderedList': 'Attiva/disattiva elenco ordinato',
        'outdent': 'Annulla rientro paragrafo',
        'indent': 'Rientro paragrafo',
        'formatPara': 'Cambia il formato del blocco corrente come paragrafo (tag P)',
        'formatH1': 'Cambia il formato del blocco corrente come H1',
        'formatH2': 'Cambia il formato del blocco corrente come H2',
        'formatH3': 'Cambia il formato del blocco corrente come H3',
        'formatH4': 'Cambia il formato del blocco corrente come H4',
        'formatH5': 'Cambia il formato del blocco corrente come H5',
        'formatH6': 'Cambia il formato del blocco corrente come H6',
        'insertHorizontalRule': 'Inserisci linea orizzontale',
        'linkDialog.show': 'Mostra finestra di dialogo del collegamento'
      },
      history: {
        undo: 'Annulla',
        redo: 'Ripristina'
      },
      specialChar: {
        specialChar: 'CARATTERI SPECIALI',
        select: 'Selezione caratteri speciali'
      }
    }
  });
})(jQuery);
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-it-IT.js.map