import {inputRules, smartQuotes, ellipsis, emDash} from "prosemirror-inputrules"
import { wrappingInputRule } from "prosemirror-inputrules"
import { NodeType, Schema } from "prosemirror-model"

// : (NodeType) → InputRule
// Given a blockquote node type, returns an input rule that turns `"> "`
// at the start of a textblock into a blockquote.
export function blockQuoteRule(nodeType: NodeType) {
  return wrappingInputRule(/^\s*>\s$/, nodeType)
}

export function buildInputRules(schema: Schema) {
  let rules = smartQuotes.concat(ellipsis, emDash), type
  if (type = schema.nodes.blockquote) rules.push(blockQuoteRule(type))
  return inputRules({rules})
}
