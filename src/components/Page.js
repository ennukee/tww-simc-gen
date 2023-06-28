import React, { useReducer, useState } from 'react'
import './Page.scss';
import { Title, Text, Checkbox as MantineCheckbox, Button, TextInput, Textarea, Alert, NavLink } from '@mantine/core';
import data from 'utils/data';

const VERSION_STRING = '1.0.0';

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
  const [simcString, setSimcString] = useState('');
  const [error, setError] = useState('');

  const handleToggleClick = (section, simName) => {
    toggleDispatch({ type: 'toggle', section, simName })
  }

  const handleGenerateSimcString = () => {
    let profilesets = [
      {
        simProfileName: '',
        profilesetStrings: [],
      }
    ]
    try {
      Object.entries(data).forEach(([section, items]) => {
        if (Object.values(toggleData[section]).every((value) => !value)) {
          // Do not iterate on a section if there is nothing turned on in it anyway
          return;
        }

        const newProfilesets = profilesets.reduce((acc, cur) => {
          items.forEach((item) => {
            if (!toggleData[section][item.simName]) {
              // Do not add this item to the profileset if it is turned off
              return;
            }

            const enabledAdditionalParams = Object.entries(toggleData.additionalParams).filter(([key, value]) => {
              return value
            })
            let toAddProfilesetString = item.profilesetString
            const profilesetStrings = [
              ...cur.profilesetStrings,
            ]
            enabledAdditionalParams.forEach(([key,]) => {
              if (item.additionalParams?.[key]) {
                if (item.additionalParams[key].inline) {
                  toAddProfilesetString = `${toAddProfilesetString}${item.additionalParams[key].profilesetString}`
                } else {
                  profilesetStrings.push(item.additionalParams[key].profilesetString)
                }
              }
            })
            profilesetStrings.push(toAddProfilesetString)

            acc.push({
              simProfileName: cur.simProfileName ? `${cur.simProfileName} + ${item.simName}` : item.simName,
              profilesetStrings,
            })
          })
          return acc
        }, [])

        // fight me
        profilesets = newProfilesets
      })
    } catch (e) {
      setError('There was an issue generating the profilesets, please try again')
      console.error(e)
    }

    try {
      // Generate actual output string now
      const outputString = profilesets.map((profileset) => {
        return profileset.profilesetStrings.map((profilesetString) => {
          return `profileset."${profileset.simProfileName}"+=${profilesetString}`
        }).join('\n')
      }).join('\n')
      setSimcString(outputString)
    } catch (e) {
      setError('There was an issue generating the simc string, please try again')
      console.error(e)
    }
    // console.log(profilesets)
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
      <Text size="xs"><a href="https://github.com/ennukee/df-simc-gen/blob/master/how-to-use.md">How do I use the output?</a></Text>
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
      {simcString && <Textarea maxRows={30} className="simc-output" value={simcString} />}
      <div className="footer">
        <Text size="xs" className="footer-text">for any suggestions or bugs, reach out to ennukee on Discord</Text>
        <span>&nbsp;-&nbsp;</span>
        <Text size="xs"><a href="https://github.com/ennukee/df-simc-gen/blob/master/changelog.md">v{VERSION_STRING}</a></Text>
      </div>
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
