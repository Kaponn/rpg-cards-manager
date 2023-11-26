import { Grid } from "@mui/material"
import { DiceRollInput } from "./DiceRollInput"

export const PhysicalAttributesRolls = (props: { sendDataToParent: Function, setDiceResults: React.Dispatch<React.SetStateAction<{ [key: string]: string }>> }) => {
  return (
    <div>
      <h4>Cechy fizyczne</h4>
        <Grid container alignItems="center" justifyContent="center">
          <DiceRollInput
            id='height'
            label="Wzrost"
            diceValue={10}
            numOfRolls={2}
            setDiceResults={props.setDiceResults}
          />
          <DiceRollInput
            id='weight'
            label="Waga"
            diceValue={100}
            numOfRolls={1}
            setDiceResults={props.setDiceResults}
          />
          <DiceRollInput
            id='hairColor'
            label="Kolor włosów"
            diceValue={10}
            numOfRolls={1}
            setDiceResults={props.setDiceResults}
          />
          <DiceRollInput
            id='eyeColor'
            label="Kolor oczu"
            diceValue={10}
            numOfRolls={1}
            setDiceResults={props.setDiceResults}
          />
          <DiceRollInput
            id='uniqueSigns'
            label="Znaki szczególne"
            diceValue={100}
            numOfRolls={1}
            setDiceResults={props.setDiceResults}
          />
        </Grid>
    </div>
  )
}