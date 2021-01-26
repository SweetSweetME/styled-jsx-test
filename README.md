# styled-jsx-test
## npm i 

### npm run build:normal

### npm run build:error

## How to reproduce

After executing `npm run build:error`, we will get

``` jsx
import _JSXStyle2 from "styled-jsx/style";
import React from 'react';

var Card = function Card(_ref) {
  var info = _ref.info;
  return /*#__PURE__*/React.createElement("div", {
    className: "jsx-2790356162"
  }, "12345678", /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2790356162"
  }, "div.jsx-2790356162{color:red;}"));
};

export default Card;
```

Pay attention to line 1 and line 8, `_JSXStyle` is not defined.

But when change `const Card = ({ info }) => {` to `const Card = (props) => {` or remove `@babel/preset-env` in `babel.config.js`, output will be

``` jsx
import _JSXStyle from "styled-jsx/style";
import React from 'react';

var Card = function Card(props) {
  return /*#__PURE__*/React.createElement("div", {
    className: "jsx-2790356162"
  }, "12345678", /*#__PURE__*/React.createElement(_JSXStyle, {
    id: "2790356162"
  }, "div.jsx-2790356162{color:red;}"));
};

export default Card;
```

No error happends since `import _JSXStyle from "styled-jsx/style";' in line 1.
