import Message from './Message.js';

const Description = () => {
  return <h2>Description of the app</h2>
}

const App = () => {
  return (
    <div className="App">
      <Message color='blue' message='Hello, world!'/>
      <Message margin='auto' border='2px solid gray' message='This goes through props'/>
      <Description />
    </div>
  );
}

export default App;
