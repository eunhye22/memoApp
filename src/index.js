const ReactDOM = require('react-dom');
const { App } = require('./App')

// 함수명을 태그로 감싸서 컴포넌트로 다루기
ReactDOM.render(<App />, document.getElementById("root"));