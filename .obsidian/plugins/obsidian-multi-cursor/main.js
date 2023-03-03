/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => MultiCursor
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");

// src/Duplicator.ts
var Duplicator = class {
  duplicateLine(editor, location) {
    const cursors = editor.listSelections();
    let currentPosition;
    if (location === "above" /* Above */) {
      currentPosition = cursors.first();
    } else {
      currentPosition = cursors.last();
    }
    const newLine = currentPosition.anchor.line + (location === "above" /* Above */ ? -1 : 1);
    if (newLine < 0) {
      return;
    }
    if (newLine >= editor.lineCount()) {
      return;
    }
    if (location === "above" /* Above */) {
      editor.setLine(
        newLine,
        editor.getLine(currentPosition.head.line - 1) + "\n" + editor.getLine(currentPosition.head.line)
      );
    } else {
      editor.setLine(
        newLine,
        editor.getLine(currentPosition.head.line) + "\n" + editor.getLine(currentPosition.head.line + 1)
      );
    }
  }
};

// src/Manipulator.ts
var Manipulator = class {
  addCursor(editor, location) {
    const cursors = editor.listSelections();
    let currentPosition;
    if (location === "above" /* Above */) {
      currentPosition = cursors.first();
    } else {
      currentPosition = cursors.last();
    }
    const newLine = currentPosition.anchor.line + (location === "above" /* Above */ ? -1 : 1);
    if (newLine < 0) {
      return;
    }
    const newChar = Math.min(currentPosition.anchor.ch, editor.getLine(newLine).length);
    const newPosition = { line: newLine, ch: newChar };
    cursors.push({ anchor: newPosition, head: newPosition });
    editor.setSelections(cursors);
  }
  addCursorsToSelection(editor) {
    const selections = editor.listSelections();
    const cursors = [];
    selections.forEach((line) => {
      cursors.push(...this.getCursorPointsForSelection(editor, line));
    });
    editor.setSelections(cursors);
  }
  getCursorPointsForSelection(editor, selection) {
    if (selection.anchor.line == selection.head.line) {
      const point = { line: selection.head.line, ch: editor.getLine(selection.head.line).length };
      return [{ anchor: point, head: point }];
    }
    if (selection.anchor.line < selection.head.line) {
      const points = [];
      for (let i = selection.anchor.line; i <= selection.head.line; i++) {
        const point = { line: i, ch: editor.getLine(i).length };
        points.push({ anchor: point, head: point });
      }
      return points;
    }
    if (selection.head.line < selection.anchor.line) {
      const points = [];
      for (let i = selection.head.line; i <= selection.anchor.line; i++) {
        const point = { line: i, ch: editor.getLine(i).length };
        points.push({ anchor: point, head: point });
      }
      return points;
    }
    return;
  }
};

// main.ts
var MultiCursor = class extends import_obsidian.Plugin {
  onload() {
    return __async(this, null, function* () {
      const manipulator = new Manipulator();
      const duplicator = new Duplicator();
      this.addCommand({
        id: "add-cursor-above",
        name: "Add a cursor above the current line.",
        editorCallback: (editor) => manipulator.addCursor(editor, "above" /* Above */)
      });
      this.addCommand({
        id: "add-cursor-below",
        name: "Add a cursor below the current line.",
        editorCallback: (editor) => manipulator.addCursor(editor, "below" /* Below */)
      });
      this.addCommand({
        id: "add-cursors-to-selection",
        name: "Add cursors to the end of every line in the selection.",
        editorCallback: (editor) => manipulator.addCursorsToSelection(editor)
      });
      this.addCommand({
        id: "duplicate-line-above",
        name: "Duplicate the current line to the line above.",
        editorCallback: (editor) => duplicator.duplicateLine(editor, "above" /* Above */)
      });
      this.addCommand({
        id: "duplicate-line-below",
        name: "Duplicate the current line to the line below.",
        editorCallback: (editor) => duplicator.duplicateLine(editor, "below" /* Below */)
      });
    });
  }
  onunload() {
  }
};