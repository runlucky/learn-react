import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello';
import Message from './components/Message';
import SingleContainer from './components/SingleContainer';
import MultipleContainer from './components/MultipleContainer';
import Page from './components/Page';
import Hooks from './components/Hooks';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React!!!
        </a>
      </header>
      <Hello />
      <Message />

      {/* 複数の子要素を渡すことはできない */}
      <SingleContainer title={"hello!"}>
          <p>I am child.</p>
      </SingleContainer>


      <MultipleContainer title='hello!!'>
        <p>this is child 1.</p>
        <p>this is child 2.</p>
        <p>this is child 3.</p>
      </MultipleContainer>

      <Page/>
      <Hooks />
    </div>
  );
}

export default App;
