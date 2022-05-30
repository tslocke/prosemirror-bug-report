This should demonstrate what looks like a history bug which I came across in a unique-IDs
plugin I've written.

I've removed all the logic of the plugin and coded it to add a hard-coded transaction, when
another, also hard-coded transaction occurs. So to trigger it, you have to do *exactly* the 
expected interaction.

Steps:

  $ yarn install
  $ yarn dev

  Visit localhost:3000

  Click caret to end of "Hello ProseMirror"

  Press enter

  Type "> " to trigger the blockquote inputrule

  Mod-z (undo)

Sometimes nothing happens, sometimes ">" appears, but inside the blockquote.
