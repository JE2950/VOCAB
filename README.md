# The Enchanted Block Tower

A blocky fairytale escape room for Year 6 vocabulary. It tests the meanings of 153 words with ISEB-style multiple-choice questions.

Open `index.html` in a browser. No install needed.

## Modes
- **Escape Room**: six locked rooms with 58 correct answers needed in total. Question types: closest meaning, find the word, complete the sentence, opposites, odd one out, word use and grammar.
- **Quick Fire**: 60 seconds of definition questions. Combos add time and wrong answers cost 2 seconds.
- **3D Tower** (`tower3d.html`): walk through the tower in first person, Minecraft style. Five floors (dungeon, library, potion room, hall of mirrors, dragon's vault) with six locked treasures on each, stairs down between floors, Pip the fox following you, and a six-spell word duel with Hexabel on the drawbridge. At least 36 questions a game. WASD and mouse, or the on-screen stick on a tablet. Built on the voxel engine from frenchminigames.
- **Spellbook**: every word and meaning, searchable. Words she keeps missing get a red edge.
- **Add Words**: put new words in during a lesson. They join every mode straight away.

Words she gets wrong come back more often. Progress saves in the browser.

## Adding words during a lesson
Open **Add Words** from the title screen. Three ways in:

- **One at a time**: a word and a meaning are all that is needed. Write `___` in the example sentence where the word goes, or just use the word in the sentence and it gets blanked out for you.
- **Paste a list**: a Quizlet export pastes in as it comes. One word a line, word first and meaning second, split by a tab, dash, comma or semicolon. **Check the list** shows what it read before anything is added.
- **A share link**: opening the link puts the same words on another device, so a class on tablets gets the same list.

New words appear under the **Lesson words** chip on the title screen, which narrows every mode to just those words. They also show in the Spellbook and in the 3D tower, and tally mistakes like any other word. Quick Fire suits a short list best; the Escape Room needs 58 correct answers, so a handful of words will repeat.

### Word class
Both ways leave the word class unset by default, so nothing has to be chosen mid-lesson. An unset word draws its wrong answers from any class, which is the safe behaviour: a guessed class that is wrong gives worse options than no class at all. Set one from the dropdown when it matters, pick **Work it out for me** to have it guessed from the word and its meaning, or write it into a pasted line as `word | adjective | meaning | sentence`.

Lesson words live in the browser, not in the repo. To keep them for good, use **Copy lines for words.js** and paste the lines into the `RAW` block described below.

## Editing words
Both games share `words.js`, so they use the same words and the same record of which words she gets wrong. The word bank is the `RAW` block at the top of that file, one word per line:
`word|form|part of speech|definition|example sentence with ___|group`
