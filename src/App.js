import styled from 'styled-components';
import './App.css';
import Home from './modules/Home/pages/Home';
function App() {
  return (
    <AppWrapper>
      <Home/>
    </AppWrapper>
  );
}

const AppWrapper = styled.div`
  background: rgba(0, 0, 0, .8);
  width: 60%;
  margin-left: 20%;
  margin-top: 5rem;
  border-radius: 15px;
  overflow: hidden;
  position: relative;
`

export default App;