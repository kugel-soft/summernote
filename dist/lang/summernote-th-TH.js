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
    'th-TH': {
      font: {
        bold: 'ตัวหนา',
        italic: 'ตัวเอียง',
        underline: 'ขีดเส้นใต้',
        clear: 'ล้างรูปแบบตัวอักษร',
        height: 'ความสูงบรรทัด',
        name: 'แบบตัวอักษร',
        strikethrough: 'ขีดฆ่า',
        subscript: 'ตัวห้อย',
        superscript: 'ตัวยก',
        size: 'ขนาดตัวอักษร'
      },
      image: {
        image: 'รูปภาพ',
        insert: 'แทรกรูปภาพ',
        resizeFull: 'ปรับขนาดเท่าจริง',
        resizeHalf: 'ปรับขนาดลง 50%',
        resizeQuarter: 'ปรับขนาดลง 25%',
        floatLeft: 'ชิดซ้าย',
        floatRight: 'ชิดขวา',
        floatNone: 'ไม่จัดตำแหน่ง',
        shapeRounded: 'Shape: Rounded',
        shapeCircle: 'Shape: Circle',
        shapeThumbnail: 'Shape: Thumbnail',
        shapeNone: 'Shape: None',
        dragImageHere: 'ลากรูปภาพที่ต้องการไว้ที่นี่',
        dropImage: 'วางรูปภาพหรือข้อความ',
        selectFromFiles: 'เลือกไฟล์รูปภาพ',
        maximumFileSize: 'ขนาดไฟล์ใหญ่สุด',
        maximumFileSizeError: 'ไฟล์เกินขนาดที่กำหนด',
        url: 'ที่อยู่ URL ของรูปภาพ',
        remove: 'ลบรูปภาพ',
        original: 'Original'
      },
      video: {
        video: 'วีดีโอ',
        videoLink: 'ลิงก์ของวีดีโอ',
        insert: 'แทรกวีดีโอ',
        url: 'ที่อยู่ URL ของวีดีโอ',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion หรือ Youku)'
      },
      link: {
        link: 'ตัวเชื่อมโยง',
        insert: 'แทรกตัวเชื่อมโยง',
        unlink: 'ยกเลิกตัวเชื่อมโยง',
        edit: 'แก้ไข',
        textToDisplay: 'ข้อความที่ให้แสดง',
        url: 'ที่อยู่เว็บไซต์ที่ต้องการให้เชื่อมโยงไปถึง?',
        openInNewWindow: 'เปิดในหน้าต่างใหม่'
      },
      table: {
        table: 'ตาราง',
        addRowAbove: 'เพิ่มแถวด้านบน',
        addRowBelow: 'เพิ่มแถวด้านล่าง',
        addColLeft: 'เพิ่มคอลัมน์ด้านซ้าย',
        addColRight: 'เพิ่มคอลัมน์ด้านขวา',
        delRow: 'ลบแถว',
        delCol: 'ลบคอลัมน์',
        delTable: 'ลบตาราง'
      },
      hr: {
        insert: 'แทรกเส้นคั่น'
      },
      style: {
        style: 'รูปแบบ',
        p: 'ปกติ',
        blockquote: 'ข้อความ',
        pre: 'โค้ด',
        h1: 'หัวข้อ 1',
        h2: 'หัวข้อ 2',
        h3: 'หัวข้อ 3',
        h4: 'หัวข้อ 4',
        h5: 'หัวข้อ 5',
        h6: 'หัวข้อ 6'
      },
      lists: {
        unordered: 'รายการแบบไม่มีลำดับ',
        ordered: 'รายการแบบมีลำดับ'
      },
      options: {
        help: 'ช่วยเหลือ',
        fullscreen: 'ขยายเต็มหน้าจอ',
        codeview: 'ซอร์สโค้ด'
      },
      paragraph: {
        paragraph: 'ย่อหน้า',
        outdent: 'เยื้องซ้าย',
        indent: 'เยื้องขวา',
        left: 'จัดหน้าชิดซ้าย',
        center: 'จัดหน้ากึ่งกลาง',
        right: 'จัดหน้าชิดขวา',
        justify: 'จัดบรรทัดเสมอกัน'
      },
      color: {
        recent: 'สีที่ใช้ล่าสุด',
        more: 'สีอื่นๆ',
        background: 'สีพื้นหลัง',
        foreground: 'สีพื้นหน้า',
        transparent: 'โปร่งแสง',
        setTransparent: 'ตั้งค่าความโปร่งแสง',
        reset: 'คืนค่า',
        resetToDefault: 'คืนค่ามาตรฐาน'
      },
      shortcut: {
        shortcuts: 'แป้นลัด',
        close: 'ปิด',
        textFormatting: 'การจัดรูปแบบข้อความ',
        action: 'การกระทำ',
        paragraphFormatting: 'การจัดรูปแบบย่อหน้า',
        documentStyle: 'รูปแบบของเอกสาร',
        extraKeys: 'Extra keys'
      },
      help: {
        'insertParagraph': 'Insert Paragraph',
        'undo': 'Undoes the last command',
        'redo': 'Redoes the last command',
        'tab': 'Tab',
        'untab': 'Untab',
        'bold': 'ทำตัวหนา',
        'italic': 'ทำตัวเอียง',
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
        'formatH1': 'เปลี่ยนรูปแบบบล็อคปัจจุบันเป็น H1',
        'formatH2': 'เปลี่ยนรูปแบบบล็อคปัจจุบันเป็น H2',
        'formatH3': 'เปลี่ยนรูปแบบบล็อคปัจจุบันเป็น H3',
        'formatH4': 'เปลี่ยนรูปแบบบล็อคปัจจุบันเป็น H4',
        'formatH5': 'เปลี่ยนรูปแบบบล็อคปัจจุบันเป็น H5',
        'formatH6': 'เปลี่ยนรูปแบบบล็อคปัจจุบันเป็น H6',
        'insertHorizontalRule': 'Insert horizontal rule',
        'linkDialog.show': 'เปิดหน้าแก้ไข Link'
      },
      history: {
        undo: 'ยกเลิกการกระทำ',
        redo: 'ทำซ้ำการกระทำ'
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
//# sourceMappingURL=summernote-th-TH.js.map