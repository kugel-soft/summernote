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
    'nl-NL': {
      font: {
        bold: 'Vet',
        italic: 'Cursief',
        underline: 'Onderstrepen',
        clear: 'Stijl verwijderen',
        height: 'Regelhoogte',
        name: 'Lettertype',
        strikethrough: 'Doorhalen',
        subscript: 'Subscript',
        superscript: 'Superscript',
        size: 'Tekstgrootte'
      },
      image: {
        image: 'Afbeelding',
        insert: 'Afbeelding invoegen',
        resizeFull: 'Volledige breedte',
        resizeHalf: 'Halve breedte',
        resizeQuarter: 'Kwart breedte',
        floatLeft: 'Links uitlijnen',
        floatRight: 'Rechts uitlijnen',
        floatNone: 'Geen uitlijning',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'Sleep hier een afbeelding naar toe',
        dropImage: 'Drop image or Text',
        selectFromFiles: 'Selecteer een bestand',
        maximumFileSize: 'Maximum file size',
        maximumFileSizeError: 'Maximum file size exceeded.',
        url: 'URL van de afbeelding',
        remove: 'Verwijder afbeelding',
        original: 'Original'
      },
      video: {
        video: 'Video',
        videoLink: 'Video link',
        insert: 'Video invoegen',
        url: 'URL van de video',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion of Youku)'
      },
      link: {
        link: 'Link',
        insert: 'Link invoegen',
        unlink: 'Link verwijderen',
        edit: 'Wijzigen',
        textToDisplay: 'Tekst van link',
        url: 'Naar welke URL moet deze link verwijzen?',
        openInNewWindow: 'Open in nieuw venster'
      },
      table: {
        table: 'Tabel',
        addRowAbove: 'Rij hierboven invoegen',
        addRowBelow: 'Rij hieronder invoegen',
        addColLeft: 'Kolom links toevoegen',
        addColRight: 'Kolom rechts toevoegen',
        delRow: 'Verwijder rij',
        delCol: 'Verwijder kolom',
        delTable: 'Verwijder tabel'
      },
      hr: {
        insert: 'Horizontale lijn invoegen'
      },
      style: {
        style: 'Stijl',
        p: 'Normaal',
        blockquote: 'Quote',
        pre: 'Code',
        h1: 'Kop 1',
        h2: 'Kop 2',
        h3: 'Kop 3',
        h4: 'Kop 4',
        h5: 'Kop 5',
        h6: 'Kop 6'
      },
      lists: {
        unordered: 'Ongeordende lijst',
        ordered: 'Geordende lijst'
      },
      options: {
        help: 'Help',
        fullscreen: 'Volledig scherm',
        codeview: 'Bekijk Code'
      },
      paragraph: {
        paragraph: 'Paragraaf',
        outdent: 'Inspringen verkleinen',
        indent: 'Inspringen vergroten',
        left: 'Links uitlijnen',
        center: 'Centreren',
        right: 'Rechts uitlijnen',
        justify: 'Uitvullen'
      },
      color: {
        recent: 'Recente kleur',
        more: 'Meer kleuren',
        background: 'Achtergrond kleur',
        foreground: 'Tekst kleur',
        transparent: 'Transparant',
        setTransparent: 'Transparant',
        reset: 'Standaard',
        resetToDefault: 'Standaard kleur'
      },
      shortcut: {
        shortcuts: 'Toetsencombinaties',
        close: 'sluiten',
        textFormatting: 'Tekststijlen',
        action: 'Acties',
        paragraphFormatting: 'Paragraafstijlen',
        documentStyle: 'Documentstijlen',
        extraKeys: 'Extra keys'
      },
      help: {
        'insertParagraph': 'Alinea invoegen',
        'undo': 'Laatste handeling ongedaan maken',
        'redo': 'Laatste handeling opnieuw uitvoeren',
        'tab': 'Tab',
        'untab': 'Herstel tab',
        'bold': 'Stel stijl in als vet',
        'italic': 'Stel stijl in als cursief',
        'underline': 'Stel stijl in als onderstreept',
        'strikethrough': 'Stel stijl in als doorgestreept',
        'removeFormat': 'Verwijder stijl',
        'justifyLeft': 'Lijn links uit',
        'justifyCenter': 'Set center align',
        'justifyRight': 'Lijn rechts uit',
        'justifyFull': 'Lijn uit op volledige breedte',
        'insertUnorderedList': 'Zet ongeordende lijstweergave aan',
        'insertOrderedList': 'Zet geordende lijstweergave aan',
        'outdent': 'Verwijder inspringing huidige alinea',
        'indent': 'Inspringen op huidige alinea',
        'formatPara': 'Wijzig formattering huidig blok in alinea(P tag)',
        'formatH1': 'Formatteer huidig blok als H1',
        'formatH2': 'Formatteer huidig blok als H2',
        'formatH3': 'Formatteer huidig blok als H3',
        'formatH4': 'Formatteer huidig blok als H4',
        'formatH5': 'Formatteer huidig blok als H5',
        'formatH6': 'Formatteer huidig blok als H6',
        'insertHorizontalRule': 'Invoegen horizontale lijn',
        'linkDialog.show': 'Toon Link Dialoogvenster'
      },
      history: {
        undo: 'Ongedaan maken',
        redo: 'Opnieuw doorvoeren'
      },
      specialChar: {
        specialChar: 'SPECIALE TEKENS',
        select: 'Selecteer Speciale Tekens'
      }
    }
  });
})(jQuery);
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-nl-NL.js.map