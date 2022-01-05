import './App.css';
import Background from './components/Background/Background';
import CardOutside from './components/CardOutside/CardOutside';

function App() {
  return (
    <Background>
      <div className='outside-cards'>
      <CardOutside cardColor="blue" titleText="To Do" titleColor="white"  icon="ToDo"></CardOutside>
      <CardOutside cardColor="brown" titleText="In Progress" titleColor="white"  icon="InProgress"></CardOutside>
      <CardOutside cardColor="purple" titleText="Review" titleColor="white"  icon="Review"></CardOutside>
      <CardOutside cardColor="green" titleText="Done" titleColor="black"  icon="Done"></CardOutside>
      </div>
    </Background>
  );
}

export default App;
