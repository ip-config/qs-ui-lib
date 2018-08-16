'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sanitize = require('sanitize.css');

var _sanitize2 = _interopRequireDefault(_sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This is a global style baseline that is meant to be imported
 * at the top layer of your app
 */
var GlobalReset = function GlobalReset() {
  return _react2.default.createElement(
    'style',
    null,
    '\n    /* sanitize.css v5.0.0 | CC0 License | github.com/jonathantneal/sanitize.css */\n\n    /* Document (https://html.spec.whatwg.org/multipage/semantics.html#semantics)\n      ========================================================================== */\n    \n    /**\n     * 1. Remove repeating backgrounds in all browsers (opinionated).\n     * 2. Add box sizing inheritence in all browsers (opinionated).\n     */\n    \n    *,\n    ::before,\n    ::after {\n      background-repeat: no-repeat; /* 1 */\n      box-sizing: inherit; /* 2 */\n    }\n    \n    /**\n     * 1. Add text decoration inheritance in all browsers (opinionated).\n     * 2. Add vertical alignment inheritence in all browsers (opinionated).\n     */\n    \n    ::before,\n    ::after {\n      text-decoration: inherit; /* 1 */\n      vertical-align: inherit; /* 2 */\n    }\n    \n    /**\n     * 1. Add border box sizing in all browsers (opinionated).\n     * 2. Add the default cursor in all browsers (opinionated).\n     * 3. Prevent font size adjustments after orientation changes in IE and iOS.\n     */\n    \n    html {\n      box-sizing: border-box; /* 1 */\n      cursor: default; /* 2 */\n      -ms-text-size-adjust: 100%; /* 3 */\n      -webkit-text-size-adjust: 100%; /* 3 */\n    }\n    \n    /* Sections (https://html.spec.whatwg.org/multipage/semantics.html#sections)\n      ========================================================================== */\n    \n    /**\n     * Add the correct display in IE 9-.\n     */\n    \n    article,\n    aside,\n    footer,\n    header,\n    nav,\n    section {\n      display: block;\n    }\n    \n    /**\n     * Remove the margin in all browsers (opinionated).\n     */\n    \n    body {\n      margin: 0;\n    }\n    \n    /**\n     * Correct the font size and margin on h1 elements within section and\n     * article contexts in Chrome, Firefox, and Safari.\n     */\n    \n    h1 {\n      font-size: 2em;\n      margin: .67em 0;\n    }\n    \n    /* Grouping content (https://html.spec.whatwg.org/multipage/semantics.html#grouping-content)\n      ========================================================================== */\n    \n    /**\n     * Add the correct display in IE 9-.\n     * 1. Add the correct display in IE.\n     */\n    \n    figcaption,\n    figure,\n    main { /* 1 */\n      display: block;\n    }\n    \n    /**\n     * Add the correct margin in IE 8.\n     */\n    \n    figure {\n      margin: 1em 40px;\n    }\n    \n    /**\n     * 1. Add the correct box sizing in Firefox.\n     * 2. Show the overflow in Edge and IE.\n     */\n    \n    hr {\n      box-sizing: content-box; /* 1 */\n      height: 0; /* 1 */\n      overflow: visible; /* 2 */\n    }\n    \n    /**\n     * Remove the list style on navigation lists in all browsers (opinionated).\n     */\n    \n    nav ol,\n    nav ul {\n      list-style: none;\n    }\n    \n    /**\n     * 1. Correct the inheritance and scaling of font size in all browsers.\n     * 2. Correct the odd em font sizing in all browsers.\n     */\n    \n    pre {\n      font-family: monospace, monospace; /* 1 */\n      font-size: 1em; /* 2 */\n    }\n    \n    /* Text-level semantics (https://html.spec.whatwg.org/multipage/semantics.html#text-level-semantics)\n      ========================================================================== */\n    \n    /**\n     * 1. Remove the gray background on active links in IE 10.\n     * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n     */\n    \n    a {\n      background-color: transparent; /* 1 */\n      -webkit-text-decoration-skip: objects; /* 2 */\n    }\n    \n    /**\n     * 1. Remove the bottom border in Firefox 39-.\n     * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n     */\n    \n    abbr[title] {\n      border-bottom: none; /* 1 */\n      text-decoration: underline; /* 2 */\n      text-decoration: underline dotted; /* 2 */\n    }\n    \n    /**\n     * Prevent the duplicate application of bolder by the next rule in Safari 6.\n     */\n    \n    b,\n    strong {\n      font-weight: inherit;\n    }\n    \n    /**\n     * Add the correct font weight in Chrome, Edge, and Safari.\n     */\n    \n    b,\n    strong {\n      font-weight: bolder;\n    }\n    \n    /**\n     * 1. Correct the inheritance and scaling of font size in all browsers.\n     * 2. Correct the odd em font sizing in all browsers.\n     */\n    \n    code,\n    kbd,\n    samp {\n      font-family: monospace, monospace; /* 1 */\n      font-size: 1em; /* 2 */\n    }\n    \n    /**\n     * Add the correct font style in Android 4.3-.\n     */\n    \n    dfn {\n      font-style: italic;\n    }\n    \n    /**\n     * Add the correct background and color in IE 9-.\n     */\n    \n    mark {\n      background-color: #ffff00;\n      color: #000000;\n    }\n    \n    /**\n     * Add the correct font size in all browsers.\n     */\n    \n    small {\n      font-size: 80%;\n    }\n    \n    /**\n     * Prevent sub and sup elements from affecting the line height in\n     * all browsers.\n     */\n    \n    sub,\n    sup {\n      font-size: 75%;\n      line-height: 0;\n      position: relative;\n      vertical-align: baseline;\n    }\n    \n    sub {\n      bottom: -.25em;\n    }\n    \n    sup {\n      top: -.5em;\n    }\n    \n    /*\n    * Remove the text shadow on text selections (opinionated).\n    * 1. Restore the coloring undone by defining the text shadow (opinionated).\n    */\n    \n    ::-moz-selection {\n      background-color: #b3d4fc; /* 1 */\n      color: #000000; /* 1 */\n      text-shadow: none;\n    }\n    \n    ::selection {\n      background-color: #b3d4fc; /* 1 */\n      color: #000000; /* 1 */\n      text-shadow: none;\n    }\n    \n    /* Embedded content (https://html.spec.whatwg.org/multipage/embedded-content.html#embedded-content)\n      ========================================================================== */\n    \n    /*\n    * Change the alignment on media elements in all browers (opinionated).\n    */\n    \n    audio,\n    canvas,\n    iframe,\n    img,\n    svg,\n    video {\n      vertical-align: middle;\n    }\n    \n    /**\n     * Add the correct display in IE 9-.\n     */\n    \n    audio,\n    video {\n      display: inline-block;\n    }\n    \n    /**\n     * Add the correct display in iOS 4-7.\n     */\n    \n    audio:not([controls]) {\n      display: none;\n      height: 0;\n    }\n    \n    /**\n     * Remove the border on images inside links in IE 10-.\n     */\n    \n    img {\n      border-style: none;\n    }\n    \n    /**\n     * Change the fill color to match the text color in all browsers (opinionated).\n     */\n    \n    svg {\n      fill: currentColor;\n    }\n    \n    /**\n     * Hide the overflow in IE.\n     */\n    \n    svg:not(:root) {\n      overflow: hidden;\n    }\n    \n    /* Tabular data (https://html.spec.whatwg.org/multipage/tables.html#tables)\n      ========================================================================== */\n    \n    /**\n     * Collapse border spacing\n     */\n    \n    table {\n      border-collapse: collapse;\n    }\n    \n    /* Forms (https://html.spec.whatwg.org/multipage/forms.html#forms)\n      ========================================================================== */\n    \n    /**\n     * Remove the margin in Firefox and Safari.\n     */\n    \n    button,\n    input,\n    optgroup,\n    select,\n    textarea {\n      margin: 0;\n    }\n    \n    /**\n     * Inherit styling in all browsers (opinionated).\n     */\n    \n    button,\n    input,\n    select,\n    textarea {\n      background-color: transparent;\n      color: inherit;\n      font-size: inherit;\n      line-height: inherit;\n    }\n    \n    /**\n     * Show the overflow in IE.\n     * 1. Show the overflow in Edge.\n     */\n    \n    button,\n    input { /* 1 */\n      overflow: visible;\n    }\n    \n    /**\n     * Remove the inheritance of text transform in Edge, Firefox, and IE.\n     * 1. Remove the inheritance of text transform in Firefox.\n     */\n    \n    button,\n    select { /* 1 */\n      text-transform: none;\n    }\n    \n    /**\n     * 1. Prevent a WebKit bug where (2) destroys native audio and video\n     *    controls in Android 4.\n     * 2. Correct the inability to style clickable types in iOS and Safari.\n     */\n    \n    button,\n    html [type="button"], /* 1 */\n    [type="reset"],\n    [type="submit"] {\n      -webkit-appearance: button; /* 2 */\n    }\n    \n    /**\n     * Remove the inner border and padding in Firefox.\n     */\n    \n    button::-moz-focus-inner,\n    [type="button"]::-moz-focus-inner,\n    [type="reset"]::-moz-focus-inner,\n    [type="submit"]::-moz-focus-inner {\n      border-style: none;\n      padding: 0;\n    }\n    \n    /**\n     * Restore the focus styles unset by the previous rule.\n     */\n    \n    button:-moz-focusring,\n    [type="button"]:-moz-focusring,\n    [type="reset"]:-moz-focusring,\n    [type="submit"]:-moz-focusring {\n      outline: 1px dotted ButtonText;\n    }\n    \n    /**\n     * 1. Correct the text wrapping in Edge and IE.\n     * 2. Correct the color inheritance from fieldset elements in IE.\n     * 3. Remove the padding so developers are not caught out when they zero out\n     *    fieldset elements in all browsers.\n     */\n    \n    legend {\n      box-sizing: border-box; /* 1 */\n      color: inherit; /* 2 */\n      display: table; /* 1 */\n      max-width: 100%; /* 1 */\n      padding: 0; /* 3 */\n      white-space: normal; /* 1 */\n    }\n    \n    /**\n     * 1. Add the correct display in IE 9-.\n     * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n     */\n    \n    progress {\n      display: inline-block; /* 1 */\n      vertical-align: baseline; /* 2 */\n    }\n    \n    /**\n     * 1. Remove the default vertical scrollbar in IE.\n     * 2. Change the resize direction on textareas in all browsers (opinionated).\n     */\n    \n    textarea {\n      overflow: auto; /* 1 */\n      resize: vertical; /* 2 */\n    }\n    \n    /**\n     * 1. Add the correct box sizing in IE 10-.\n     * 2. Remove the padding in IE 10-.\n     */\n    \n    [type="checkbox"],\n    [type="radio"] {\n      box-sizing: border-box; /* 1 */\n      padding: 0; /* 2 */\n    }\n    \n    /**\n     * Correct the cursor style of increment and decrement buttons in Chrome.\n     */\n    \n    [type="number"]::-webkit-inner-spin-button,\n    [type="number"]::-webkit-outer-spin-button {\n      height: auto;\n    }\n    \n    /**\n     * 1. Correct the odd appearance in Chrome and Safari.\n     * 2. Correct the outline style in Safari.\n     */\n    \n    [type="search"] {\n      -webkit-appearance: textfield; /* 1 */\n      outline-offset: -2px; /* 2 */\n    }\n    \n    /**\n     * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n     */\n    \n    [type="search"]::-webkit-search-cancel-button,\n    [type="search"]::-webkit-search-decoration {\n      -webkit-appearance: none;\n    }\n    \n    /**\n     * 1. Correct the inability to style clickable types in iOS and Safari.\n     * 2. Change font properties to inherit in Safari.\n     */\n    \n    ::-webkit-file-upload-button {\n      -webkit-appearance: button; /* 1 */\n      font: inherit; /* 2 */\n    }\n    \n    /* Interactive elements (https://html.spec.whatwg.org/multipage/forms.html#interactive-elements)\n      ========================================================================== */\n    \n    /*\n    * Add the correct display in IE 9-.\n    * 1. Add the correct display in Edge, IE, and Firefox.\n    */\n    \n    details, /* 1 */\n    menu {\n      display: block;\n    }\n    \n    /*\n    * Add the correct display in all browsers.\n    */\n    \n    summary {\n      display: list-item;\n    }\n    \n    /* Scripting (https://html.spec.whatwg.org/multipage/scripting.html#scripting-3)\n      ========================================================================== */\n    \n    /**\n     * Add the correct display in IE 9-.\n     */\n    \n    canvas {\n      display: inline-block;\n    }\n    \n    /**\n     * Add the correct display in IE.\n     */\n    \n    template {\n      display: none;\n    }\n    \n    /* User interaction (https://html.spec.whatwg.org/multipage/interaction.html#editing)\n      ========================================================================== */\n    \n    /*\n    * Remove the tapping delay on clickable elements (opinionated).\n    * 1. Remove the tapping delay in IE 10.\n    */\n    \n    a,\n    area,\n    button,\n    input,\n    label,\n    select,\n    summary,\n    textarea,\n    [tabindex] {\n      -ms-touch-action: manipulation; /* 1 */\n      touch-action: manipulation;\n    }\n    \n    /**\n     * Add the correct display in IE 10-.\n     */\n    \n    [hidden] {\n      display: none;\n    }\n    \n    /* ARIA (https://w3c.github.io/html-aria/)\n      ========================================================================== */\n    \n    /**\n     * Change the cursor on busy elements (opinionated).\n     */\n    \n    [aria-busy="true"] {\n      cursor: progress;\n    }\n    \n    /*\n    * Change the cursor on control elements (opinionated).\n    */\n    \n    [aria-controls] {\n      cursor: pointer;\n    }\n    \n    /*\n    * Change the display on visually hidden accessible elements (opinionated).\n    */\n    \n    [aria-hidden="false"][hidden]:not(:focus) {\n      clip: rect(0, 0, 0, 0);\n      display: inherit;\n      position: absolute;\n    }\n    \n    /*\n    * Change the cursor on disabled, not-editable, or otherwise\n    * inoperable elements (opinionated).\n    */\n    \n    [aria-disabled] {\n      cursor: default;\n    }  \n  '
  );
};

exports.default = GlobalReset;