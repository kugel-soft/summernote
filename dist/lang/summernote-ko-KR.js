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
    'ko-KR': {
      font: {
        bold: '굵게',
        italic: '기울임꼴',
        underline: '밑줄',
        clear: '서식 지우기',
        height: '줄 간격',
        name: '글꼴',
        superscript: '위 첨자',
        subscript: '아래 첨자',
        strikethrough: '취소선',
        size: '글자 크기'
      },
      image: {
        image: '그림',
        insert: '그림 삽입',
        resizeFull: '100% 크기로 변경',
        resizeHalf: '50% 크기로 변경',
        resizeQuarter: '25% 크기로 변경',
        resizeNone: '원본 크기',
        floatLeft: '왼쪽 정렬',
        floatRight: '오른쪽 정렬',
        floatNone: '정렬하지 않음',
        shapeRounded: '스타일: 둥근 모서리',
        shapeCircle: '스타일: 원형',
        shapeThumbnail: '스타일: 액자',
        shapeNone: '스타일: 없음',
        dragImageHere: '텍스트 혹은 사진을 이곳으로 끌어오세요',
        dropImage: '텍스트 혹은 사진을 내려놓으세요',
        selectFromFiles: '파일 선택',
        maximumFileSize: '최대 파일 크기',
        maximumFileSizeError: '최대 파일 크기를 초과했습니다.',
        url: '사진 URL',
        remove: '사진 삭제',
        original: '원본'
      },
      video: {
        video: '동영상',
        videoLink: '동영상 링크',
        insert: '동영상 삽입',
        url: '동영상 URL',
        providers: '(YouTube, Vimeo, Vine, Instagram, DailyMotion, Youku 사용 가능)'
      },
      link: {
        link: '링크',
        insert: '링크 삽입',
        unlink: '링크 삭제',
        edit: '수정',
        textToDisplay: '링크에 표시할 내용',
        url: '이동할 URL',
        openInNewWindow: '새창으로 열기'
      },
      table: {
        table: '표',
        addRowAbove: '위에 행 삽입',
        addRowBelow: '아래에 행 삽입',
        addColLeft: '왼쪽에 열 삽입',
        addColRight: '오른쪽에 열 삽입',
        delRow: '행 지우기',
        delCol: '열 지우기',
        delTable: '표 삭제'
      },
      hr: {
        insert: '구분선 삽입'
      },
      style: {
        style: '스타일',
        p: '본문',
        blockquote: '인용구',
        pre: '코드',
        h1: '제목 1',
        h2: '제목 2',
        h3: '제목 3',
        h4: '제목 4',
        h5: '제목 5',
        h6: '제목 6'
      },
      lists: {
        unordered: '글머리 기호',
        ordered: '번호 매기기'
      },
      options: {
        help: '도움말',
        fullscreen: '전체 화면',
        codeview: '코드 보기'
      },
      paragraph: {
        paragraph: '문단 정렬',
        outdent: '내어쓰기',
        indent: '들여쓰기',
        left: '왼쪽 정렬',
        center: '가운데 정렬',
        right: '오른쪽 정렬',
        justify: '양쪽 정렬'
      },
      color: {
        recent: '마지막으로 사용한 색',
        more: '다른 색 선택',
        background: '배경색',
        foreground: '글자색',
        transparent: '투명',
        setTransparent: '투명으로 설정',
        reset: '취소',
        resetToDefault: '기본값으로 설정',
        cpSelect: '선택'
      },
      shortcut: {
        shortcuts: '키보드 단축키',
        close: '닫기',
        textFormatting: '글자 스타일 적용',
        action: '기능',
        paragraphFormatting: '문단 스타일 적용',
        documentStyle: '문서 스타일 적용',
        extraKeys: '추가 키'
      },
      help: {
        'insertParagraph': '문단 삽입',
        'undo': '마지막 명령 취소',
        'redo': '마지막 명령 재실행',
        'tab': '탭',
        'untab': '탭 제거',
        'bold': '굵은 글자로 설정',
        'italic': '기울임꼴 글자로 설정',
        'underline': '밑줄 글자로 설정',
        'strikethrough': '취소선 글자로 설정',
        'removeFormat': '서식 삭제',
        'justifyLeft': '왼쪽 정렬하기',
        'justifyCenter': '가운데 정렬하기',
        'justifyRight': '오른쪽 정렬하기',
        'justifyFull': '좌우채움 정렬하기',
        'insertUnorderedList': '글머리 기호 켜고 끄기',
        'insertOrderedList': '번호 매기기 켜고 끄기',
        'outdent': '현재 문단 내어쓰기',
        'indent': '현재 문단 들여쓰기',
        'formatPara': '현재 블록의 포맷을 문단(P)으로 변경',
        'formatH1': '현재 블록의 포맷을 제목1(H1)로 변경',
        'formatH2': '현재 블록의 포맷을 제목2(H2)로 변경',
        'formatH3': '현재 블록의 포맷을 제목3(H3)로 변경',
        'formatH4': '현재 블록의 포맷을 제목4(H4)로 변경',
        'formatH5': '현재 블록의 포맷을 제목5(H5)로 변경',
        'formatH6': '현재 블록의 포맷을 제목6(H6)로 변경',
        'insertHorizontalRule': '구분선 삽입',
        'linkDialog.show': '링크 대화상자 열기'
      },
      history: {
        undo: '실행 취소',
        redo: '재실행'
      },
      specialChar: {
        specialChar: '특수문자',
        select: '특수문자를 선택하세요'
      }
    }
  });
})(jQuery);
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=summernote-ko-KR.js.map