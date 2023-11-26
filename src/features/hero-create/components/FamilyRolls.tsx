import { Grid } from "@mui/material"
import { DiceRollInput } from "./DiceRollInput"

export const FamilyRolls = (props: { sendDataToParent: Function, setDiceResults: React.Dispatch<React.SetStateAction<{ [key: string]: string }>> }) => {
  return (
    <div>
      <h4>Pochodzenie i rodzina</h4>
        <Grid container alignItems="center" justifyContent="center">
          <DiceRollInput
            id='siblings'
            label="Liczba rodzeństwa"
            diceValue={10}
            numOfRolls={1}
            setDiceResults={props.setDiceResults}
          />
          <DiceRollInput
            id='starSign'
            label="Znak gwiezdny"
            diceValue={100}
            numOfRolls={1}
            setDiceResults={props.setDiceResults}
          />
          <DiceRollInput
            id='age'
            label="Wiek"
            diceValue={100}
            numOfRolls={1}
            setDiceResults={props.setDiceResults}
          />
          <DiceRollInput
            id='birthPlace'
            label="Miejsce urodzenia"
            diceValue={100}
            numOfRolls={1}
            setDiceResults={props.setDiceResults}
          />
          <DiceRollInput
            id='name'
            label="Imię"
            diceValue={100}
            numOfRolls={1}
            setDiceResults={props.setDiceResults}
          />
        </Grid>
    </div>
  )
}