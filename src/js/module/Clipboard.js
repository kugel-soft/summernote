export default class Clipboard {
  constructor(context) {
    this.context = context;
    this.options = context.options;
    this.$editable = context.layoutInfo.editable;
  }

  initialize() {
    this.$editable.on('paste', this.pasteByEvent.bind(this));
  }

  /**
   * paste by clipboard event
   *
   * @param {Event} event
   */
  pasteByEvent(event) {

    if (this.context.isDisabled()) {
      return;
    }
    const clipboardData = event.originalEvent.clipboardData;

    if (clipboardData && clipboardData.items && clipboardData.items.length) {
      const clipboardFiles = clipboardData.files;
      const clipboardText = clipboardData.getData('Text');
      const clipboardHtml = clipboardData.getData('text/html');
      if (clipboardHtml && (clipboardHtml.indexOf('Word.Document') >= 0 || clipboardHtml.indexOf('Excel.Sheet') >= 0 || clipboardHtml.indexOf('<xml') >= 0)) {
        this.context.invoke('editor.pasteHTML', clipboardText.replace(/\n/g,'<br>'));
        event.preventDefault();
      } else if (clipboardFiles.length > 0 && this.options.allowClipboardImagePasting) {
        this.context.invoke('editor.insertImagesOrCallback', clipboardFiles);
        event.preventDefault();
      } else if (clipboardText.length > 0 && this.context.invoke('editor.isLimited', clipboardText.length)) {
        event.preventDefault();
      }
    } else if (window.clipboardData) {
      // for IE
      let text = window.clipboardData.getData('text');
      if (this.context.invoke('editor.isLimited', text.length)) {
        event.preventDefault();
      }
    }

    // Call editor.afterCommand after proceeding default event handler
    setTimeout(() => {
      this.context.invoke('editor.afterCommand');
    }, 10);
  }
}
