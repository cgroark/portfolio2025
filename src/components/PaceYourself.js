import React, { useMemo, useState } from 'react';
import './PaceYourself.css';

const distances = {
  '3000': { label: '3K', meters: 3000 },
  '5000': { label: '5K', meters: 5000 },
  '8000': { label: '8K', meters: 8000 },
  '10000': { label: '10K', meters: 10000 },
  '10mile': { label: '10 miles', meters: 16093 },
  half: { label: 'Half marathon', meters: 21097 },
  marathon: { label: 'Marathon', meters: 42195 },
};

const RunForm = () => {
  const [mode, setMode] = useState('pace');
  const [distance, setDistance] = useState('');
  const [customDistance, setCustomDistance] = useState('');
  const [customUnit, setCustomUnit] = useState('km');
  const [paceUnit, setPaceUnit] = useState('mile');
  const [hours, setHours] = useState('');
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [result, setResult] = useState(null);

  const selectedRace = useMemo(() => {
    if (distance === 'custom') {
      const value = Number(customDistance);
      if (!Number.isFinite(value) || value <= 0) return null;
      return {
        label: `${value} ${customUnit === 'km' ? 'km' : value === 1 ? 'mile' : 'miles'}`,
        meters: value * (customUnit === 'km' ? 1000 : 1609.344),
      };
    }
    return distances[distance] || null;
  }, [distance, customDistance, customUnit]);

  const totalSeconds = (mode === 'pace' ? (Number(hours) || 0) * 3600 : 0) + (Number(minutes) || 0) * 60 + (Number(seconds) || 0);
  const hasTime = totalSeconds > 0;
  const canCalculate = Boolean(selectedRace && hasTime);
  const displayTime = () => {
    const h = Number(hours) || 0;
    const m = Number(minutes) || 0;
    const s = Number(seconds) || 0;
    return h ? `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}` : `${m}:${String(s).padStart(2, '0')}`;
  };
  const formatPace = (value) => {
    const rounded = Math.round(value);
    return `${Math.floor(rounded / 60)}:${String(rounded % 60).padStart(2, '0')}`;
  };
  const formatFinishTime = (value) => {
    const rounded = Math.round(value);
    const h = Math.floor(rounded / 3600);
    const m = Math.floor((rounded % 3600) / 60);
    const s = rounded % 60;
    return `${h ? `${h}:` : ''}${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const clearTime = () => {
    setHours('');
    setMinutes('');
    setSeconds('');
  };

  const update = (setter) => (event) => {
    setter(event.target.value);
    setResult(null);
  };

  const chooseMode = (nextMode) => {
    setMode(nextMode);
    clearTime();
    setResult(null);
  };

  const changeDistance = (event) => {
    setDistance(event.target.value);
    clearTime();
    setResult(null);
  };

  const changeCustomDistance = (event) => {
    setCustomDistance(event.target.value);
    clearTime();
    setResult(null);
  };

  const changeCustomUnit = (event) => {
    setCustomUnit(event.target.value);
    clearTime();
    setResult(null);
  };

  const submit = (event) => {
    event.preventDefault();
    if (!canCalculate) return;
    if (mode === 'pace') {
      setResult({
        type: 'pace',
        mile: formatPace(totalSeconds / (selectedRace.meters / 1609.344)),
        km: formatPace(totalSeconds / (selectedRace.meters / 1000)),
      });
    } else {
      const metersPerUnit = paceUnit === 'mile' ? 1609.344 : 1000;
      setResult({ type: 'time', finish: formatFinishTime(totalSeconds * selectedRace.meters / metersPerUnit) });
    }
  };

  return (
    <div className="pace-app">
    <section className="calculator-card" aria-label="Pace and finish time calculator">
      <div className="card-heading">
        <h2>Pace yourself</h2>
        <p>Choose a distance and a goal. We’ll work out the numbers.</p>
      </div>

      <div className="mode-switch" role="tablist" aria-label="Calculator mode">
        <button type="button" role="tab" aria-selected={mode === 'pace'} className={mode === 'pace' ? 'mode-button active' : 'mode-button'} onClick={() => chooseMode('pace')}>
          <span className="mode-icon">↗</span><span><strong>Find my pace</strong><small>I have a finish time</small></span>
        </button>
        <button type="button" role="tab" aria-selected={mode === 'time'} className={mode === 'time' ? 'mode-button active' : 'mode-button'} onClick={() => chooseMode('time')}>
          <span className="mode-icon">◷</span><span><strong>Find my finish time</strong><small>I know my pace</small></span>
        </button>
      </div>

      <form onSubmit={submit}>
        <div className="form-field">
          <label htmlFor="distance">Race distance</label>
          <select id="distance" value={distance} onChange={changeDistance}>
            <option value="" disabled>Choose a distance</option>
            {Object.entries(distances).map(([key, race]) => <option value={key} key={key}>{race.label}</option>)}
            <option value="custom">Custom distance</option>
          </select>
        </div>

        {distance === 'custom' && <div className="form-field custom-distance-field">
          <label htmlFor="custom-distance">Your distance</label>
          <div className="input-with-unit">
            <input id="custom-distance" type="number" min="0.01" step="any" inputMode="decimal" placeholder="e.g. 12.5" value={customDistance} onChange={changeCustomDistance} />
            <select aria-label="Custom distance unit" value={customUnit} onChange={changeCustomUnit}>
              <option value="km">Kilometers</option><option value="mile">Miles</option>
            </select>
          </div>
        </div>}

        <div className="form-field">
          <label>{mode === 'pace' ? 'Goal finish time' : 'Goal pace'}</label>
          <div className="time-fields" aria-label={mode === 'pace' ? 'Goal finish time' : 'Goal pace'}>
            {mode === 'pace' && <div className="time-part"><input aria-label="Hours" type="number" min="0" max="99" placeholder="00" value={hours} onChange={update(setHours)} /><span>hr</span></div>}
            <div className="time-part"><input aria-label="Minutes" type="number" min="0" max="99" placeholder="00" value={minutes} onChange={update(setMinutes)} /><span>min</span></div>
            <div className="time-part"><input aria-label="Seconds" type="number" min="0" max="59" placeholder="00" value={seconds} onChange={update(setSeconds)} /><span>sec</span></div>
            {mode === 'time' && <select className="pace-unit" aria-label="Pace unit" value={paceUnit} onChange={update(setPaceUnit)}><option value="mile">/ mile</option><option value="km">/ km</option></select>}
          </div>
        </div>

        <button className="calculate-button" type="submit" disabled={!canCalculate}>Calculate <span aria-hidden="true">→</span></button>
      </form>

      {result && selectedRace && <section className="result-panel" aria-live="polite">
        <span className="eyebrow">YOUR ESTIMATE</span>
        <p>{result.type === 'pace' ? `Pace for ${displayTime()} at ${selectedRace.label}` : `Finish time for ${selectedRace.label} at ${displayTime()} / ${paceUnit}`}</p>
        {result.type === 'pace' ? <div className="pace-results"><div><strong>{result.mile}</strong><span>per mile</span></div><div><strong>{result.km}</strong><span>per km</span></div></div> : <strong className="finish-result">{result.finish}</strong>}
      </section>}
      <footer className="card-footer">
        <span className="footer-dot" aria-hidden="true" />
        PACE YOURSELF · RUN CALCULATOR
      </footer>
    </section>
    </div>
  );
};

export default RunForm;
