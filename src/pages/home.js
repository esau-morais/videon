import React, { useState } from 'react';
import * as Chance from 'chance';

import { Container, Button } from '../components';

const chance = new Chance();

export default function Home({ history }) {
  const [code, setCode] = useState('');

  const handleJoin = () => {
    history.push(`/room/${code}`)
  }

  const handleCreate = () => {
    const id = chance.guid();

    history.push(`/room/${id}`)
  }

  return (
    <Container>
      <div className="heading">
        <h1>Welcome to <span>videon!</span></h1>
        <p>You can start <span>joining</span> to a room or <span>creating</span> one, adding a code. Have fun!</p>
      </div>

      <div className="input__box">
        <label htmlFor="code">Code</label>
        <input
          type="text"
          id="code"
          placeholder="abc"
          value={code}
          onChange={e => setCode(e.target.value)}
        />
      </div>

      <div className="button__box">
        <Button
          disabled={!code}
          onClick={handleJoin}
        >
          Join
        </Button>

        <div className="button__divider">/</div>

        <Button
          onClick={handleCreate}
        >
          Create
        </Button>
      </div>
    </Container>
  )
}
