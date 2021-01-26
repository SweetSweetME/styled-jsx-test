# styled-jsx-test
## usage
## npm i 

### npm run build:normal
```
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

### npm run build:error
```
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
