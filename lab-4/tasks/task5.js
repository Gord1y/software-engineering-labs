class TextDocument {
  constructor(content = '') {
    this.content = content;
  }

  setContent(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

class Memento {
  constructor(content) {
    this.content = content;
  }

  getContent() {
    return this.content;
  }
}

class TextEditor {
  constructor() {
    this.document = new TextDocument();
    this.history = [];
  }

  write(content) {
    this.history.push(new Memento(this.document.getContent()));
    this.document.setContent(content);
  }

  undo() {
    if (this.history.length > 0) {
      const memento = this.history.pop();
      this.document.setContent(memento.getContent());
    }
  }

  getContent() {
    return this.document.getContent();
  }
}

// Test the implementation
const editor = new TextEditor();

editor.write('Version 1');
console.log(editor.getContent());

editor.write('Version 2');
console.log(editor.getContent());

editor.undo();
console.log(editor.getContent());

editor.undo();
console.log(editor.getContent());
