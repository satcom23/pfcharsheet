import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import PlayerCard from './PlayerCard';

function updateModifiers(){
  //converts ability scores into the modifiers
 let strScore = document.getElementById("strScore").value;
  document.getElementById("strMod").value = Math.floor((strScore - 10)/2);

 let dexScore = document.getElementById("dexScore").value;
  document.getElementById("dexMod").value = Math.floor((dexScore - 10)/2);

 let conScore = document.getElementById("conScore").value;
  document.getElementById("conMod").value = Math.floor((conScore - 10)/2);

 let intScore = document.getElementById("intScore").value;
  document.getElementById("intMod").value = Math.floor((intScore - 10)/2);

 let wisScore = document.getElementById("wisScore").value;
  document.getElementById("wisMod").value = Math.floor((wisScore - 10)/2);

 let chaScore = document.getElementById("chaScore").value;
  document.getElementById("chaMod").value = Math.floor((chaScore - 10)/2);

}

function PlayerStats(){
  return(
    <div className='container'>
    <h4>Stats</h4>
    <Row>
        <Table size='sm'>
          <thead>
            <tr>
              <th>Ability</th>
              <th>Score</th>
              <th>Mod</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Str</td>
              <td><input type="number" placeholder="10" id="strScore" onChange={updateModifiers}/></td>
              <td><input type="number" placeholder="0" id="strMod" /></td>
            </tr>
            <tr>
              <td>Dex</td>
              <td><input type="number" placeholder="10" id="dexScore" onChange={updateModifiers}/></td>
              <td><input type="number" placeholder="0" id="dexMod" /></td>
            </tr>
            <tr>
              <td>Con</td>
              <td><input type="number" placeholder="10" id="conScore" onChange={updateModifiers}/></td>
              <td><input type="number" placeholder="0" id="conMod" /></td>
            </tr>
            <tr>
              <td>Int</td>
              <td><input type="number" placeholder="10" id="intScore" onChange={updateModifiers}/></td>
              <td><input type="number" placeholder="0" id="intMod" /></td>
            </tr>
            <tr>
              <td>Wis</td>
              <td><input type="number" placeholder="10" id="wisScore" onChange={updateModifiers}/></td>
              <td><input type="number" placeholder="0" id="wisMod" /></td>
            </tr>
            <tr>
              <td>Cha</td>
              <td><input type="number" placeholder="10" id="chaScore" onChange={updateModifiers}/></td>
              <td><input type="number" placeholder="0" id="chaMod" /></td>
            </tr>
          </tbody>
        </Table>
    </Row>
    </div>
  )
}

export default PlayerStats