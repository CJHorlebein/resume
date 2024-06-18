import { Summary, Header, Experience, Skills, Awards, Education } from './components';
import { data } from './resume';
import './App.css';

function App() {
  return (
    <div className='main-container'>
      <Header {...data.basics} />
      <hr />
      <main>
        <Summary {...data.summary} />
        <Experience {...data.experience} />
        <Skills {...data.skills} />
        <Awards {...data.awards} />
        <Education {...data.education} />
      </main>
    </div>
  );
}

export default App;
