import { Schema } from "prosemirror-model"

export const schema: Schema = new Schema({
  nodes: {
    doc: {
      name: 'doc',
      content: 'page',
      toDOM: () => ['section', {class: 'document'}, 0],
      parseDom: [{tag: 'section.document'}]
    },

    text: {
      name: 'text',
      group: 'inline'
    },

    paragraph: {
      name: 'paragraph',
      group: 'block',
      content: 'inline*',
      attrs: {id: {default: null}},
      toDOM: () => ['p', {}, 0],
      parseDOM: [{tag: 'p'}]
    },

    heading: {
      name: 'heading',
      content: 'inline*',
      attrs: {id: {default: null}},
      defining: true,
    
      toDOM: () => [`h2`, {}, 0],
      parseDOM: [{tag: 'h2'}]
    },

    page: {
      name: 'page',
      content: 'heading block*',
      group: 'block',
      attrs: {id: {default: null}},
      defining: true,
    
      toDOM: () => ['section', {class: 'page'}, 0],
      parseDom: [{tag: 'section.page'}],
    
    },

    blockquote: {
      name: 'blockquote',
      content: 'block*',
      group: 'block',
      attrs: {id: {default: null}},
      defining: true,
    
      parseDOM: [{tag: 'blockquote'}],
      toDOM: () => ['blockquote', 0]
    }
  }
})

const { paragraph, heading, page, blockquote } = schema.nodes
export { paragraph, heading, page, blockquote }
