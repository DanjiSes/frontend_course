import React from 'react';
import ReactDOM from 'react-dom';

import {App} from './App'

// 1. Как работает реакт?
// 2. JSX
// 3. Компоненты

// const App = <h1>Привет React!</h1>

// // Компонент класс
// class MyApp extends React.Component {
//   render() {
//     return <h1>Компонет Класс!</h1>
//   }
// }

// Компонент фкнкция
// function MyFApp() {
//   return <h1>Компонет функция (хук)!</h1>
// }

ReactDOM.render(<App/>, document.getElementById('root'));
