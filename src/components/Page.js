import React, { useReducer, useState } from 'react'
import './Page.scss';
import { Title, Text, Checkbox as MantineCheckbox, Button, TextInput, Textarea, Alert } from '@mantine/core';
import data from 'utils/data';

const reducer = (state, action) => {
  switch (action.type) {
    case 'toggle':
      return {
        ...state,
        [action.section]: {
          ...state[action.section],
          [action.simName]: !state[action.section][action.simName],
        },
      }
    default:
      throw new Error('Invalid action type')
  }
}

// ! Keys must match the section names and simName values of items in src\utils\data.js
const defaultState = {
  flasks: {
    Static: true,
    Tepid: true,
    Chaos: true,
    Rage: true,
  },
  runes: {
    Howling: true,
    Hissing: true,
    Buzzing: true,
  },
  essenceTrinket: {
    Bronze: true,
    Azure: true,
    Emerald: true,
    Ruby: true,
    Obsidian: true,
  },
  additionalParams: {
    includeOffhand: false,
  }
}

export default function Page() {
  const [toggleData, toggleDispatch] = useReducer(reducer, defaultState)
  const [simcString, setSimcString] = useState('1\n2');
  const [error, setError] = useState('There was an issue');

  const handleToggleClick = (section, simName) => {
    toggleDispatch({ type: 'toggle', section, simName })
  }

  const handleGenerateSimcString = () => {

  }

  const handleCopyClick = () => {
    navigator.clipboard.writeText(simcString).then(() => {
      console.log('Copied simc string to clipboard')
    }).catch(() => {
      setError('There was an issue copying string to clipboard, manually copy the string');
    });
  }

  return (
    <div id="main">
      <Title order={1}>DF Simc Configurables</Title>
      {error && <Alert className="error" color="red" title="Error">{error}</Alert>}
      <div className="section-container">
        <div className="section">
          <Title order={2}>Flasks</Title>
          <div className="option-toggles">
            {data.flasks.map((flask) => (
              <Checkbox
                checked={toggleData.flasks[flask.simName]}
                onClick={() => handleToggleClick('flasks', flask.simName)}
                displayName={flask.displayName}
              />
            ))}
          </div>
        </div>
        <div className="section">
          <Title order={2}>Runes</Title>
          <div className="additional-params">
            <Checkbox
              checked={toggleData.additionalParams.includeOffhand}
              onClick={() => handleToggleClick('additionalParams', 'includeOffhand')}
              displayName="Include offhand (dual wield)"
            />
          </div>
          <div className="option-toggles">
            {data.runes.map((rune) => (
              <Checkbox
                checked={toggleData.runes[rune.simName]}
                onClick={() => handleToggleClick('flasks', rune.simName)}
                displayName={rune.displayName}
              />
            ))}
          </div>
        </div>
        <div className="section">
          <Title order={2}>Ominous Chromatic Essence</Title>
          <div className="option-toggles">
            {data.essenceTrinket.map((type) => (
              <Checkbox
                checked={toggleData.essenceTrinket[type.simName]}
                onClick={() => handleToggleClick('flasks', type.simName)}
                displayName={type.displayName}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="buttons">
        <Button onClick={handleGenerateSimcString}>Generate simc string</Button>
        {simcString && <Button onClick={handleCopyClick}>Copy</Button>}
      </div>
      {simcString && <Textarea className="simc-output" value={simcString} />}
    </div>
  )
}

function Checkbox({
  checked = false,
  onClick = () => {},
  displayName,
}) {
  return (
    <MantineCheckbox
      checked={checked}
      onClick={onClick}
      size="md"
      label={displayName}
      mr="xl"
      styles={{ input: { cursor: 'pointer' } }}
    />
  )
}
