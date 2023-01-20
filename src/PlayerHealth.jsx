

function PlayerHealth() {
  return (
    <div className="statsAndHealth">
      <div className="skillsBox">
      <div>
        <table>
          <tr>
            <td>Str</td>
            <td>10</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Dex</td>
            <td>10</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Con</td>
            <td>10</td>
            <td>0</td>
          </tr>
        </table>
      </div>
      <div>
      <table>
          <tr>
            <td>Int</td>
            <td>10</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Wis</td>
            <td>10</td>
            <td>0</td>
          </tr>
          <tr>
            <td>Cha</td>
            <td>10</td>
            <td>0</td>
          </tr>
        </table>
      </div>
      </div>
      <div className="healthBox">
        <div className="healthLabel">
          <p className='hpText'>Hp</p>
        </div>
        <div className='healthPoints'>
          <h1>45/45</h1>
        </div>
        {/* <div className="healthLabel">
      <p className='hpText'>Temp</p>
    </div> */}
        <div className='tempStatus'>
          <h5>Mind Control</h5>
        </div>
        <div className="hitDieBox">
          <div className="hitDieLabel">
            <p>Hit Die</p>
          </div>
          <div className='hitDie'>
            <h5>1-D6</h5>
          </div>
        </div>

      </div>
    </div>


  )
}

export default PlayerHealth