# The Enchanted Block Tower

A blocky fairytale escape room for Year 6 vocabulary. It tests the meanings of 153 words with ISEB-style multiple-choice questions.

Open `index.html` in a browser. No install needed.

## Modes
- **Escape Room**: six locked rooms with 58 correct answers needed in total. Question types: closest meaning, find the word, complete the sentence, opposites, odd one out, word use and grammar.
- **Quick Fire**: 60 seconds of definition questions. Combos add time and wrong answers cost 2 seconds.
- **3D Tower** (`tower3d.html`): walk through the tower in first person, Minecraft style. Five floors (dungeon, library, potion room, hall of mirrors, dragon's vault) with six locked treasures on each, stairs down between floors, Pip the fox following you, and a six-spell word duel with Hexabel on the drawbridge. At least 36 questions a game. WASD and mouse, or the on-screen stick on a tablet. Built on the voxel engine from frenchminigames.
- **Spellbook**: every word and meaning, searchable. Words she keeps missing get a red edge.

Words she gets wrong come back more often. Progress saves in the browser.

## Editing words
Both games share `words.js`, so they use the same words and the same record of which words she gets wrong. The word bank is the `RAW` block at the top of that file, one word per line:
`word|form|part of speech|definition|example sentence with ___|group`
