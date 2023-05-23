import { Provider } from 'react-redux';
import './App.css';
import appStore from './app/store';
import CounterExample from './components/CounterExample';
import CarList from './components/CarList';
function App() {
  return (<>
    <CounterExample />
    <CarList />
  </>

  );
}

function appWithStore() {
  return <Provider store={appStore}>
    <App />
  </Provider>
}
export default appWithStore;
