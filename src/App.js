import './App.css';
import Container from 'react-bootstrap/Container';
import PlayerCard from './PlayerCard';
import PlayerStats from './PlayerStats'
import PlayerSkills from './PlayerSkills'
import PlayerHealth from './PlayerHealth';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'




function App() {
  return (
    <Row xl-auto>
      <Col lg={1} className="nav">
      <h1>Left Nav</h1>
      </Col>
      <Col lg={5} className="card">
        <PlayerCard />
        <PlayerHealth />
        <PlayerStats />
        <PlayerSkills />
      </Col>
      <Col lg={5} className="card">
        <h1>Page 2</h1>
      </Col>
      <Col lg={1} className="nav">
      {/* right nav bar */}
      </Col>
    </Row>

  );
}

export default App;
