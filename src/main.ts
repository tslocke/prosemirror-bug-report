import {EditorState} from "prosemirror-state"
import {EditorView} from "prosemirror-view"
import {DOMParser} from "prosemirror-model"
import {keymap} from "prosemirror-keymap"
import {baseKeymap} from "prosemirror-commands"
import {history} from "prosemirror-history"
import {buildInputRules} from './inputrules'
import plugin from './plugin'
import { buildKeymap } from "./keymap"
import { schema } from "./schema"
import './style.css'

new EditorView(document.querySelector("#editor")!, {
  state: EditorState.create({
    doc: DOMParser.fromSchema(schema).parse(document.querySelector("#content")!),
    plugins: [
      buildInputRules(schema),
      keymap(buildKeymap()),
      keymap(baseKeymap),
      history(),
      plugin,
    ]
  })
})

