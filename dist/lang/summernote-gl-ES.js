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
    'gl-ES': {
      font: {
        bold: 'Negrita',
        italic: 'Cursiva',
        underline: 'Subliñado',
        clear: 'Quitar estilo de fonte',
        height: 'Altura de liña',
        name: 'Fonte',
        strikethrough: 'Riscado',
        superscript: 'Superíndice',
        subscript: 'Subíndice',
        size: 'Tamaño da fonte'
      },
      image: {
        image: 'Imaxe',
        insert: 'Inserir imaxe',
        resizeFull: 'Redimensionar a tamaño completo',
        resizeHalf: 'Redimensionar á metade',
        resizeQuarter: 'Redimensionar a un cuarto',
        floatLeft: 'Flotar á esquerda',
        floatRight: 'Flotar á dereita',
        floatNone: 'Non flotar',
        shapeRounded: 'Forma: Redondeado',
        shapeCircle: 'Forma: Círculo',
        shapeThumbnail: 'Forma: Marco',
        shapeNone: 'Forma: Ningunha',
        dragImageHere: 'Arrastrar unha imaxe ou texto aquí',
        dropImage: 'Solta a imaxe ou texto',
        selectFromFiles: 'Seleccionar desde os arquivos',
        maximumFileSize: 'Tamaño máximo do arquivo',
        maximumFileSizeError: 'Superaches o tamaño máximo do arquivo.',
        url: 'URL da imaxe',
        remove: 'Eliminar imaxe',
        original: 'Original'
      },
      video: {
        video: 'Vídeo',
        videoLink: 'Ligazón do vídeo',
        insert: 'Insertar vídeo',
        url: 'URL do vídeo?',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion, o Youku)'
      },
      link: {
        link: 'Ligazón',
        insert: 'Inserir Ligazón',
        unlink: 'Quitar Ligazón',
        edit: 'Editar',
        textToDisplay: 'Texto para amosar',
        url: 'Cara a que URL leva a ligazón?',
        openInNewWindow: 'Abrir nunha nova xanela'
      },
      table: {
        table: 'Táboa',
        addRowAbove: 'Add row above',
        addRowBelow: 'Add row below',
        addColLeft: 'Add column left',
        addColRight: 'Add column right',
        delRow: 'Delete row',
        delCol: 'Delete column',
        delTable: 'Delete table'
      },
      hr: {
        insert: 'Inserir liña horizontal'
      },
      style: {
        style: 'Estilo',
        p: 'Normal',
        blockquote: 'Cita',
        pre: 'Código',
        h1: 'Título 1',
        h2: 'Título 2',
        h3: 'Título 3',
        h4: 'Título 4',
        h5: 'Título 5',
        h6: 'Título 6'
      },
      lists: {
        unordered: 'Lista desordenada',
        ordered: 'Lista ordenada'
      },
      options: {
        help: 'Axuda',
        fullscreen: 'Pantalla completa',
        codeview: 'Ver código fonte'
      },
      paragraph: {
        paragraph: 'Parágrafo',
        outdent: 'Menos tabulación',
        indent: 'Máis tabulación',
        left: 'Aliñar á esquerda',
        center: 'Aliñar ao centro',
        right: 'Aliñar á dereita',
        justify: 'Xustificar'
      },
      color: {
        recent: 'Última cor',
        more: 'Máis cores',
        background: 'Cor de fondo',
        foreground: 'Cor de fuente',
        transparent: 'Transparente',
        setTransparent: 'Establecer transparente',
        reset: 'Restaurar',
        resetToDefault: 'Restaurar por defecto'
      },
      shortcut: {
        shortcuts: 'Atallos de teclado',
        close: 'Pechar',
        textFormatting: 'Formato de texto',
        action: 'Acción',
        paragraphFormatting: 'Formato de parágrafo',
        documentStyle: 'Estilo de documento',
        extraKeys: 'Teclas adicionais'
      },
      help: {
        'insertParagraph': 'Inserir parágrafo',
        'undo': 'Desfacer última acción',
        'redo': 'Refacer última acción',
        'tab': 'Tabular',
        'untab': 'Eliminar tabulación',
        'bold': 'Establecer estilo negrita',
        'italic': 'Establecer estilo cursiva',
        'underline': 'Establecer estilo subliñado',
        'strikethrough': 'Establecer estilo riscado',
        'removeFormat': 'Limpar estilo',
        'justifyLeft': 'Aliñar á esquerda',
        'justifyCenter': 'Aliñar ao centro',
        'justifyRight': 'Aliñar á dereita',
        'justifyFull': 'Xustificar',
        'insertUnorderedList': 'Inserir lista desordenada',
        'insertOrderedList': 'Inserir lista ordenada',
        'outdent': 'Reducir tabulación do parágrafo',
        'indent': 'Aumentar tabulación do parágrafo',
        'formatPara': 'Mudar estilo do bloque a parágrafo (etiqueta P)',
        'formatH1': 'Mudar estilo do bloque a H1',
        'formatH2': 'Mudar estilo do bloque a H2',
        'formatH3': 'Mudar estilo do bloque a H3',
        'formatH4': 'Mudar estilo do bloque a H4',
        'formatH5': 'Mudar estilo do bloque a H5',
        'formatH6': 'Mudar estilo do bloque a H6',
        'insertHorizontalRule': 'Inserir liña horizontal',
        'linkDialog.show': 'Amosar panel ligazóns'
      },
      history: {
        undo: 'Desfacer',
        redo: 'Refacer'
      },
      specialChar: {
        specialChar: 'CARACTERES ESPECIAIS',
        select: 'Selecciona Caracteres especiais'
      }
    }
  });
})(jQuery);
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-gl-ES.js.map