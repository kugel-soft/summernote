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
    'cs-CZ': {
      font: {
        bold: 'Tučné',
        italic: 'Kurzíva',
        underline: 'Podtržené',
        clear: 'Odstranit styl písma',
        height: 'Výška řádku',
        strikethrough: 'Přeškrtnuté',
        size: 'Velikost písma'
      },
      image: {
        image: 'Obrázek',
        insert: 'Vložit obrázek',
        resizeFull: 'Původní velikost',
        resizeHalf: 'Poloviční velikost',
        resizeQuarter: 'Čtvrteční velikost',
        floatLeft: 'Umístit doleva',
        floatRight: 'Umístit doprava',
        floatNone: 'Neobtékat textem',
        shapeRounded: 'Tvar: zaoblený',
        shapeCircle: 'Tvar: kruh',
        shapeThumbnail: 'Tvar: náhled',
        shapeNone: 'Tvar: žádný',
        dragImageHere: 'Přetáhnout sem obrázek',
        dropImage: 'Přetáhnout obrázek nebo text',
        selectFromFiles: 'Vybrat soubor',
        url: 'URL obrázku',
        remove: 'Odebrat obrázek',
        original: 'Originál'
      },
      video: {
        video: 'Video',
        videoLink: 'Odkaz videa',
        insert: 'Vložit video',
        url: 'URL videa?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion nebo Youku)'
      },
      link: {
        link: 'Odkaz',
        insert: 'Vytvořit odkaz',
        unlink: 'Zrušit odkaz',
        edit: 'Upravit',
        textToDisplay: 'Zobrazovaný text',
        url: 'Na jaké URL má tento odkaz vést?',
        openInNewWindow: 'Otevřít v novém okně'
      },
      table: {
        table: 'Tabulka',
        addRowAbove: 'Přidat řádek nad',
        addRowBelow: 'Přidat řádek pod',
        addColLeft: 'Přidat sloupec vlevo',
        addColRight: 'Přidat sloupec vpravo',
        delRow: 'Smazat řádek',
        delCol: 'Smazat sloupec',
        delTable: 'Smazat tabulku'
      },
      hr: {
        insert: 'Vložit vodorovnou čáru'
      },
      style: {
        style: 'Styl',
        p: 'Normální',
        blockquote: 'Citace',
        pre: 'Kód',
        h1: 'Nadpis 1',
        h2: 'Nadpis 2',
        h3: 'Nadpis 3',
        h4: 'Nadpis 4',
        h5: 'Nadpis 5',
        h6: 'Nadpis 6'
      },
      lists: {
        unordered: 'Odrážkový seznam',
        ordered: 'Číselný seznam'
      },
      options: {
        help: 'Nápověda',
        fullscreen: 'Celá obrazovka',
        codeview: 'HTML kód'
      },
      paragraph: {
        paragraph: 'Odstavec',
        outdent: 'Předsadit',
        indent: 'Odsadit',
        left: 'Zarovnat doleva',
        center: 'Zarovnat na střed',
        right: 'Zarovnat doprava',
        justify: 'Zarovnat oboustranně'
      },
      color: {
        recent: 'Aktuální barva',
        more: 'Další barvy',
        background: 'Barva pozadí',
        foreground: 'Barva písma',
        transparent: 'Průhlednost',
        setTransparent: 'Nastavit průhlednost',
        reset: 'Obnovit',
        resetToDefault: 'Obnovit výchozí',
        cpSelect: 'Vybrat'
      },
      shortcut: {
        shortcuts: 'Klávesové zkratky',
        close: 'Zavřít',
        textFormatting: 'Formátování textu',
        action: 'Akce',
        paragraphFormatting: 'Formátování odstavce',
        documentStyle: 'Styl dokumentu'
      },
      help: {
        'insertParagraph': 'Vložit odstavec',
        'undo': 'Vrátit poslední příkaz',
        'redo': 'Opakovat poslední příkaz',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'Nastavit tučně',
        'italic': 'Nastavit kurzívu',
        'underline': 'Nastavit podtrhnutí',
        'strikethrough': 'Nastavit přeškrtnutí',
        'removeFormat': 'Ostranit nastavený styl',
        'justifyLeft': 'Nastavit zarovnání vlevo',
        'justifyCenter': 'Nastavit zarovnání na střed',
        'justifyRight': 'Nastavit zarovnání vpravo',
        'justifyFull': 'Nastavit zarovnání do bloku',
        'insertUnorderedList': 'Aplikovat odrážkový seznam',
        'insertOrderedList': 'Aplikovat číselný seznam',
        'outdent': 'Zmenšit odsazení aktuálního odstavec',
        'indent': 'Odsadit aktuální odstavec',
        'formatPara': 'Změnit formátování aktuálního bloku na odstavec (P tag)',
        'formatH1': 'Změnit formátování aktuálního bloku na Nadpis 1',
        'formatH2': 'Změnit formátování aktuálního bloku na Nadpis 2',
        'formatH3': 'Změnit formátování aktuálního bloku na Nadpis 3',
        'formatH4': 'Změnit formátování aktuálního bloku na Nadpis 4',
        'formatH5': 'Změnit formátování aktuálního bloku na Nadpis 5',
        'formatH6': 'Změnit formátování aktuálního bloku na Nadpis 6',
        'insertHorizontalRule': 'Vložit horizontální čáru',
        'linkDialog.show': 'Zobrazit dialog pro odkaz'
      },
      history: {
        undo: 'Krok vzad',
        redo: 'Krok vpřed'
      },
      specialChar: {
        specialChar: 'SPECIÁLNÍ ZNAKY',
        select: 'Vyberte speciální znaky'
      }
    }
  });
})(jQuery);
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-cs-CZ.js.map