<template>
  <codemirror
    :value="value"
    :options="cmOption"
    @cursorActivity="onCmCursorActivity"
    @ready="onCmReady"
    @focus="onCmFocus"
    @blur="onCmBlur"
    @input="handleInput"
  />
</template>

<script>
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/extensions */
import { codemirror } from 'vue-codemirror';

// base style
import 'codemirror/lib/codemirror.css';

// theme css
import 'codemirror/theme/base16-dark.css';

// language
import 'codemirror/mode/vue/vue.js';

// active-line.js
import 'codemirror/addon/selection/active-line.js';

// styleSelectedText
import 'codemirror/addon/selection/mark-selection.js';
import 'codemirror/addon/search/searchcursor.js';

// highlightSelectionMatches
import 'codemirror/addon/scroll/annotatescrollbar.js';
import 'codemirror/addon/search/matchesonscrollbar.js';

import 'codemirror/addon/search/match-highlighter.js';

// keyMap
import 'codemirror/mode/clike/clike.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/comment/comment.js';
import 'codemirror/addon/dialog/dialog.js';
import 'codemirror/addon/dialog/dialog.css';
import 'codemirror/addon/search/search.js';
import 'codemirror/keymap/sublime.js';

// foldGutter
import 'codemirror/addon/fold/foldgutter.css';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/indent-fold.js';
import 'codemirror/addon/fold/markdown-fold.js';
import 'codemirror/addon/fold/xml-fold.js';

export default {
  name: 'CodeMirror',
  components: { codemirror },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      cmOption: {
        tabSize: 4,
        foldGutter: true,
        styleActiveLine: true,
        lineNumbers: true,
        line: true,
        keyMap: 'sublime',
        mode: 'javascript',
        theme: 'base16-dark',
        extraKeys: {
          F11(cm) {
            cm.setOption('fullScreen', !cm.getOption('fullScreen'));
          },
          Esc(cm) {
            if (cm.getOption('fullScreen')) cm.setOption('fullScreen', false);
          },
        },
      },
    };
  },
  methods: {
    handleInput(value) {
      this.$emit('input', value);
    },
    onCmCursorActivity(cmirror) {
      console.debug('onCmCursorActivity', cmirror);
    },
    onCmReady(cmirror) {
      console.debug('onCmReady', cmirror);
    },
    onCmFocus(cmirror) {
      console.debug('onCmFocus', cmirror);
    },
    onCmBlur(cmirror) {
      console.debug('onCmBlur', cmirror);
    },
  },
};
</script>
<style>
.CodeMirror {
  width: 100%;
  height: 100vh;
  text-align: initial;
}
</style>
