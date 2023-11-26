import { Grid } from "@mui/material"
import { DiceRollInput } from "./DiceRollInput"

export const AttributesRolls = (props: { 
  race: string;
  sendDataToParent: Function; 
  setDiceResults: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>
  validationTable: boolean[]
  }) => {

  return (
    <div>
       <h4>Losowanie cech</h4>
        <Grid container alignItems="center" justifyContent="center">
          <DiceRollInput
            id='melee'
            label="WW"
            diceValue={10}
            numOfRolls={2}
            setDiceResults={props.setDiceResults}
            validationTable={props.validationTable}
          />
          <DiceRollInput
            id='ranged'
            label="US"
            diceValue={10}
            numOfRolls={2}
            setDiceResults={props.setDiceResults}
            validationTable={props.validationTable}
          />
          <DiceRollInput
            id='sturdiness'
            label="K"
            diceValue={10}
            numOfRolls={2}
            setDiceResults={props.setDiceResults}
            validationTable={props.validationTable}
          />
          <DiceRollInput
            id='endurance'
            label="Odp"
            diceValue={10}
            numOfRolls={2}
            setDiceResults={props.setDiceResults}
            validationTable={props.validationTable}
          />
          <DiceRollInput
            id='agility'
            label="Zr"
            diceValue={10}
            numOfRolls={2}
            setDiceResults={props.setDiceResults}
            validationTable={props.validationTable}
          />
          <DiceRollInput
            id='intelligence'
            label="Int"
            diceValue={10}
            numOfRolls={2}
            setDiceResults={props.setDiceResults}
            validationTable={props.validationTable}
          />
          <DiceRollInput
            id='willpower'
            label="Sw"
            diceValue={10}
            numOfRolls={2}
            setDiceResults={props.setDiceResults}
            validationTable={props.validationTable}
          />
          <DiceRollInput
            id='refinement'
            label="Ogd"
            diceValue={10}
            numOfRolls={2}
            setDiceResults={props.setDiceResults}
            validationTable={props.validationTable}
          />
          <DiceRollInput
            id='wounds'
            label="Żyw"
            diceValue={10}
            numOfRolls={1}
            setDiceResults={props.setDiceResults}
            validationTable={props.validationTable}
          />
          <DiceRollInput
            id='fate'
            label="PP"
            diceValue={10}
            numOfRolls={1}
            setDiceResults={props.setDiceResults}
            validationTable={props.validationTable}
          />
          {(props.race === 'human' || props.race === 'halfling') && (
            <DiceRollInput
              id='randomAbility'
              label="Losowa zdolność"
              diceValue={100}
              numOfRolls={1}
              setDiceResults={props.setDiceResults}
              validationTable={props.validationTable}
            />
          )}
        </Grid>
    </div>
  )
}