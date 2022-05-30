import { Command } from "prosemirror-state"
import { undo, redo } from "prosemirror-history"
import { undoInputRule } from "prosemirror-inputrules"

const mac = typeof navigator != "undefined" ? /Mac/.test(navigator.platform) : false

export function buildKeymap() {
  let keys = {} as Record<string, Command>, type
  function bind(key: string, cmd: Command) {
    keys[key] = cmd
  }

  bind("Mod-z", undo)
  bind("Shift-Mod-z", redo)
  bind("Backspace", undoInputRule)
  if (!mac) bind("Mod-y", redo)

  return keys
}
