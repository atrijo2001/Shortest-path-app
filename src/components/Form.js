import React, { useState } from 'react';
import ShortestPath from '../ShortestPath';
import DistanceData from './DistanceData';
import Error from './Error';

function Form() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [graphData, setGraphData] = useState({});
  const [finalFrom, setFinalFrom] = useState('');
  const [finalTo, setFinalTo] = useState('');
  const [error, setError] = useState(false);

  let graph = {
    VIT: { Katpadi: 5, Sevoor: 2 },
    Sevoor: { VIT: 1, Karigiri: 4, Thiruvalam: 2 },
    Karigiri: { Sevoor: 8},
    Thiruvalam: { Sevoor: 6, Ranipet: 3 },
    Ranipet: { Thiruvalam: 1, Ponnai: 2 },
    Ponnai: {Ranipet: 1, Chittoor:  7},
    Chittoor: {Ponnai: 7, Katpadi: 5},
    Katpadi: {Chittoor: 5, VIT: 3, CMC: 7, Vellore: 8},
    CMC: {Katpadi: 7, Vellore: 1, Ratnagiri: 11},
    Ratnagiri: {Vellore:  11},
    Vellore: {CMC: 1, Katpadi: 7, Golden_Temple: 12, Arani: 6},
    Golden_Temple: {Vellore: 12},
    Arani: {Vellore: 6},
  };
  const nodes = ['VIT', 'Katpadi', 'Sevoor', 'Karigiri', 'Thiruvalam', 'Ranipet', 'Ponnai', 'Chittoor', 'Katpadi', 'CMC', 'Vellore', 'Ratnagiri', 'Golden_Temple', 'Arani'];

  async function HandleSubmit() {
    if (!nodes.includes(from) || !nodes.includes(to)) {
      setError(true);
      return;
    }

    const data = await ShortestPath(graph, from, to);
    console.log(data);
    setGraphData(data);
    setFinalFrom(from);
    setFinalTo(to);
    setFrom('');
    setTo('');
    setError(false);
  }

  return (
    <div>
      <div className='form'>
        <input
          type='text'
          placeholder='from'
          onChange={(e) => setFrom(e.target.value)}
          value={from}
        />
        <input
          type='text'
          placeholder='to'
          onChange={(e) => setTo(e.target.value)}
          value={to}
        />
        <button onClick={HandleSubmit} className='btn'>
          Submit
        </button>
      </div>
      {graphData.path && (
        <DistanceData
          path={graphData.path}
          distance={graphData.distance}
          from={finalFrom}
          to={finalTo}
        />
      )}
      {error && <Error />}
    </div>
  );
}

export default Form;
