function MyButton(props) {
    const [isClicked, setIsClicked] = React.useState(false);

    return React.createElement(
        'button', // Changed from 'Button' to 'button'
        { onClick: () => setIsClicked(true) },
        isClicked ? 'Clicked!' : 'Click here!'
    );
}

const domContainer = document.querySelector('#root');
ReactDOM.render(React.createElement(MyButton), domContainer);
// React DOM의 랜더함수를 사용해서 React 컴포넌트를 DOM 컨테이너에 랜더링하는 코드
// 필요한 이유 : 스크립트 태그를 사용해서 컴포넌트를 가져왔다고 해도 컴포넌트가 화면에 보이는 것이 아니기 때문
// React 컴포넌트의 state가 변경되었기 때문