import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';


function PlayerSkills() {
  return (
    <div className='container'>
      <h4>Skills</h4>
      {/* row 1 */}
      <Row>
        <Col>
          <Form.Label id="acroSkill">Acrobatics</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="appSkill">Appraise</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="bluffSkill">Bluff</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
      </Row>
      {/* row 2 */}
      <Row>
        <Col>
          <Form.Label id="climbSkill">Climb</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="craftSkill">Crafts</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="diploSkill">Diplomacy</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
      </Row>
      {/* row 3 */}
      <Row>
        <Col>
          <Form.Label id="disableSkill">Disable</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="disgSkill">Disguise</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="escSkill">Escape</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
      </Row>
      {/* row 4 */}
      <Row>
        <Col>
          <Form.Label id="flySkill">Fly</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="handleSkill">Animal Tamer</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="healSkill">Heal</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
      </Row>
      {/* row 5 */}
      <Row>
        <Col>
          <Form.Label id="intimidateSkill">Intimidate</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="knowSkill">Knowledge( )</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="lingSkill">Linguistics</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
      </Row>
      {/* row 6 */}
      <Row>
        <Col>
          <Form.Label id="percepSkill">Perception</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="performSkill">Perform</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="profSkill">Profession</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
      </Row>
      {/* row 7 */}
      <Row>
        <Col>
          <Form.Label id="rideSkill">Ride</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="senseSkill">Sense Motive</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="sleightSkill">Sleight Hand</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
      </Row>
      {/* row 8 */}
      <Row>
        <Col>
          <Form.Label id="spellSkill">Spellcraft</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="stealthSkill">Stealth</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="survSkill">Survival</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
      </Row>
      {/* row 9 */}
      <Row>
        <Col>
          <Form.Label id="swimSkill">Swim</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
        <Col>
          <Form.Label id="magicDeviceSkill">Use Magic Device</Form.Label>
          <InputGroup className="mb-3">
            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
            <Form.Control aria-label="Text input with checkbox" />
          </InputGroup>
        </Col>
      </Row>

      <div className="mb-2 ">
        {['up-centered'].map(
          (direction) => (
            <DropdownButton
              key={direction}
              id={`dropdown-button-drop-${direction}`}
              drop={direction}
              variant="secondary"
              title={` Add Skills `}
              className="mb-2 row d-flex justify-content-center align-content-center"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          ),
        )}
      </div>
    </div>
  )
}

export default PlayerSkills