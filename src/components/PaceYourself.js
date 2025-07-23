import React, { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: ${(props) => (props.active ? '#554174' : '#7b5ea6')};
  color: white;
  border: ${(props) => (props.active ? 'solid 2px white' : 'solid 2px #282c34')};
  border-radius: 5px;
  width: 290px;
  font-family: "Saira", sans-serif;

  &:hover {
    background-color: #554174;
  }
`;

const SubmitButton = styled.button`
  margin: auto;
  display: block;
  margin-top: 2rem;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  color: white;
  background-color: #15aa93;
  border-radius: 5px;
  width: 290px;
  border: none;
  font-family: "Saira", sans-serif;

  &:disabled {
    background-color: #1d7b6d;
    cursor: arrow;
  }
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  background-color: #4f4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  font-family: "Saira", sans-serif;
`;

const TimeInputField = styled.input`
  padding: 10px;
  font-size: 16px;
  background-color: #4f4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  width: 45px;
  height: 27px;
  font-family: "Saira", sans-serif;
  text-align: center;
  margin: 0 5px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  /* Hide up/down arrows for number inputs */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type=number] {
    -moz-appearance: textfield;
  }
`;

const TimeInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: ${(props) => (props.calculatePace === 'pace' ? '220px' : '115px')};
`;

const TimeLabel = styled.span`
  color: white;
  font-family: "Saira", sans-serif;
  margin: 0 5px;
`;

const SelectUnit = styled.select`
  padding: 10px;
  font-size: 16px;
  background-color: #4f4d4d;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  width: 105px;
  font-family: "Saira", sans-serif;
`;

const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-around;
`;

const ResultItem = styled.p`
  color: #f38ba2;
  font-size: 48px;
  margin: 5px 0 0;
  font-family: "Saira", sans-serif;
`;

const Label = styled.label`
  color: white;
  display: block;
  margin-top: 2rem;
  font-family: "Saira", sans-serif;
`;

const RunForm = () => {
  const [calculatePace, setCalculatePace] = useState('');
  const [selectedDistance, setSelectedDistance] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('mile');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [result, setResult] = useState(null);

  const distances = {
    '3000': { label: '3k', meters: 3000, miles: 1.864 },
    '5000': { label: '5k', meters: 5000, miles: 3.107 },
    '8000': { label: '8k', meters: 8000, miles: 4.971 },
    '10000': { label: '10k', meters: 10000, miles: 6.214 },
    '10mile': { label: '10 Miles', meters: 16093, miles: 10 },
    'Half-Marathon': { label: 'Half-Marathon (13.1 Miles)', meters: 21097, miles: 13.1 },
    'Marathon': { label: 'Marathon (26.2 Miles)', meters: 42195, miles: 26.2 },
  };

  const handleOptionChange = (option) => {
    setSelectedDistance('');
    setSelectedUnit('mile');
    setHours('');
    setMinutes('');
    setSeconds('');
    setResult(null);
    setCalculatePace(option);
  }

  const handleDistanceChange = (event) => {
    setSelectedDistance(event.target.value);
    setResult('');
  };

  const handleUnitChange = (event) => {
    setSelectedUnit(event.target.value);
    setResult('');
  }

  const handleHoursChange = (event) => {
    let value = event.target.value;
    if (value.length > 2) {
      value = value.slice(0, 2);
    }
    setHours(value);
    setResult('');
  };

  const handleMinutesChange = (event) => {
    let value = event.target.value;
    if (value.length > 2) {
      value = value.slice(0, 2);
    }
    setMinutes(value);
    setResult('');
  };

  const handleSecondsChange = (event) => {
    let value = event.target.value;
    if (value.length > 2) {
      value = value.slice(0, 2);
    }
    setSeconds(value);
    setResult('');
  };

  const calculatePaceForDistance = () => {
    const hoursInt = parseInt(hours, 10) || 0;
    const minutesInt = parseInt(minutes, 10) || 0;
    const secondsInt = parseInt(seconds, 10) || 0;

    const totalTimeInSeconds = hoursInt * 3600 + minutesInt * 60 + secondsInt;
    const distanceInMiles = distances[selectedDistance]?.miles;
    const distanceInKm = distances[selectedDistance]?.meters / 1000;

    if (totalTimeInSeconds === 0 || !distanceInMiles) {
      console.error('Invalid time or distance for pace calculation');
      return {
        pacePerMile: 'Invalid',
        pacePerKm: 'Invalid',
      };
    }

    const secondsPerMile = totalTimeInSeconds / distanceInMiles;
    const secondsPerKm = totalTimeInSeconds / distanceInKm;
    const minutesInMilePace = Math.floor(secondsPerMile / 60)
    const minutesInKmPace = Math.floor(secondsPerKm / 60)
    const leftoverMileSeconds = Math.round(secondsPerMile % 60);
    const leftoverKmSeconds = Math.round(secondsPerKm % 60);

    return {
      pacePerMile: `${minutesInMilePace.toString()}:${leftoverMileSeconds.toString().padStart(2, '0')}`,
      pacePerKm: `${minutesInKmPace.toString()}:${leftoverKmSeconds.toString().padStart(2, '0')}`,
    };
  };

  const calculateGoalTime = () => {
    const hoursInt = parseInt(hours, 10) || 0;
    const minutesInt = parseInt(minutes, 10) || 0;
    const secondsInt = parseInt(seconds, 10) || 0;

    const paceTimeInSeconds = hoursInt * 3600 + minutesInt * 60 + secondsInt;
    const distanceInMiles = distances[selectedDistance]?.miles;
    const distanceInKm = distances[selectedDistance]?.meters / 1000;

    if (paceTimeInSeconds === 0 || !distanceInMiles) {
      console.error('Invalid pace or distance for goal time calculation');
      return {
        totalTime: 'Invalid',
      };
    }

    const totalTimeInSeconds = selectedUnit === 'mile' ?
      paceTimeInSeconds * distanceInMiles :
      paceTimeInSeconds * distanceInKm
      ;

    const totalHours = Math.floor(totalTimeInSeconds / 3600);
    const totalMinutes = Math.floor(totalTimeInSeconds / 60) - (totalHours * 60);
    const totalSeconds = Math.round((totalTimeInSeconds % 60));

    return {
      totalTime: `${totalHours ? totalHours.toString()+':' : ''}${totalMinutes.toString().padStart(2, '0')}:${totalSeconds.toString().padStart(2, '0')}`,
    };
  };

  const formatTimeForDisplay = () => {
    const hoursInt = parseInt(hours, 10) || 0;
    const minutesInt = parseInt(minutes, 10) || 0;
    const secondsInt = parseInt(seconds, 10) || 0;

    if (hoursInt > 0) {
      return `${hoursInt}:${minutesInt.toString().padStart(2, '0')}:${secondsInt.toString().padStart(2, '0')}`;
    } else {
      return `${minutesInt}:${secondsInt.toString().padStart(2, '0')}`;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if ((!hours && !minutes && !seconds) || !selectedDistance) {
      return;
    }

    let resultData;
    if (calculatePace === 'pace') {
      resultData = calculatePaceForDistance();

    } else if(calculatePace === 'time') {
      resultData = calculateGoalTime();
    }

    setResult(resultData);
  };

  return (
    <div style={{maxWidth: '496px'}}>
      <FlexDiv>
        <Button
          active={calculatePace === 'pace'}
          onClick={() => handleOptionChange('pace')}
        >
          Race Pace for a Goal Time
        </Button>
        <Button
          active={calculatePace === 'time'}
          onClick={() => handleOptionChange('time')}
        >
          Goal Time Based on Pace
        </Button>
      </FlexDiv>
      {calculatePace &&
        <div>
          <FlexDiv>
            <div style={{width: '290px'}}>
              <Label htmlFor="raceSelector">
                Distance
              </Label>
              <Select
                style={{width: '100%'}}
                id="raceSelector"
                value={selectedDistance}
                onChange={handleDistanceChange}
              >
                <option value="" disabled>Select</option>
                {Object.keys(distances).map((key) => (
                  <option key={key} value={key}>
                    {distances[key].label}
                  </option>
                ))}
              </Select>
            </div>
            <div style={{width: '290px'}}>
              <Label htmlFor="timeInput">
                {calculatePace === 'pace' ? 'Goal Time ' : 'Goal Pace '  }
              </Label>
              <TimeInputContainer calculatePace={calculatePace}>
                {calculatePace === 'pace' && (
                  <>
                    <TimeInputField
                      id="hoursInput"
                      type="number"
                      value={hours}
                      onChange={handleHoursChange}
                      placeholder="00"
                    />
                    <TimeLabel>h</TimeLabel>
                  </>
                )}
                <TimeInputField
                  id="minutesInput"
                  type="number"
                  value={minutes}
                  onChange={handleMinutesChange}
                  placeholder="00"
                />
                <TimeLabel>m</TimeLabel>
                <TimeInputField
                  id="secondsInput"
                  type="number"
                  value={seconds}
                  onChange={handleSecondsChange}
                  placeholder="00"
                />
                <TimeLabel>s</TimeLabel>
                {calculatePace === 'time' && (
                  <SelectUnit
                    id="unitSelector"
                    value={selectedUnit}
                    onChange={handleUnitChange}
                  >
                    <option value="mile">per mile</option>
                    <option value="km">per km</option>
                  </SelectUnit>
                )}
              </TimeInputContainer>
            </div>
          </FlexDiv>
          <div>
            <SubmitButton
              onClick={handleSubmit}
              disabled={(!hours && !minutes && !seconds) || !selectedDistance}
            >
                Submit
            </SubmitButton>
          </div>
          {result && (
            <div style={{ color: 'white', margin: '20px 0 40px', textAlign: 'center' }}>
              {calculatePace === 'pace' ? (
                <div>
                  <p style={{fontSize: '22px', fontFamily: '"Saira", sans-serif', padding: '0 3px'}}>
                    Pace for a {formatTimeForDisplay()} {distances[selectedDistance].label}
                  </p>
                  <ResultItem>{result.pacePerMile}/mile</ResultItem>
                  <ResultItem style={{ fontSize: '30px'}}>{result.pacePerKm}/km</ResultItem>
                </div>
              ) : (
                <div>
                  <p style={{fontSize: '22px', fontFamily: '"Saira", sans-serif', padding: '0 3px'}}>
                    Time for a {distances[selectedDistance].label} at {formatTimeForDisplay()}/{selectedUnit} pace
                  </p>
                  <ResultItem>{result.totalTime}</ResultItem>
                </div>
              )}
            </div>
          )}
        </div>
      }
    </div>
  );
};

export default RunForm;