import { Plugin, Transaction, EditorState } from 'prosemirror-state'
import { Step } from 'prosemirror-transform'
import { schema } from './schema'
import { equals } from 'ramda'
  
export default new Plugin({

  appendTransaction(trs: readonly Transaction[], _oldState: any, newState: EditorState) {
    const json = trs.map(t => t.steps.map(s => s.toJSON()))
    if (equals(matchTrs, json)) {
      const {tr} = newState
      tr.setMeta('addToHistory', false)
      addSteps.forEach(s => tr.step(Step.fromJSON(schema, s)))
      return tr
    }
  }
})

const matchTrs = [
  [
    { "stepType": "replace", "from": 21, "to": 22 },
    {
      "stepType": "replaceAround",
      "from": 20, "to": 22, "gapFrom": 20, "gapTo": 22, "insert": 1,
      "slice": { "content": [ { "type": "blockquote", "attrs": { "id": null } } ] },
      "structure": true
    }
  ]
]

const addSteps = [
  {
    "stepType": "replaceAround",
    "from": 1, "to": 20, "gapFrom": 2, "gapTo": 19,
    "insert": 1,
    "slice": { "content": [ { "type": "heading", "attrs": { "id": "slto" } } ] },
    "structure": true
  },
  {
    "stepType": "replaceAround",
    "from": 21, "to": 23, "gapFrom": 22, "gapTo": 22, "insert": 1,
    "slice": { "content": [ { "type": "paragraph", "attrs": { "id": "mmnbqpamb" } } ] },
    "structure": true
  },
  {
    "stepType": "replaceAround",
    "from": 20, "to": 24, "gapFrom": 21, "gapTo": 23, "insert": 1,
    "slice": { "content": [ { "type": "blockquote", "attrs": { "id": "fnrjfhzbg" } } ] },
    "structure": true
  },
  {
    "stepType": "replaceAround",
    "from": 0, "to": 25, "gapFrom": 1, "gapTo": 24, "insert": 1,
    "slice": { "content": [ { "type": "page", "attrs": { "id": "mrnkje" } } ] },
    "structure": true
  }
]
