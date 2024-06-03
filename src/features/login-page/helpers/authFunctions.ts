import axios from 'axios';

export enum Role {
  PLAYER = 'PLAYER',
  GAME_MASTER = 'GAME_MASTER',
}

interface LoginData {
  email: FormDataEntryValue;
  password: FormDataEntryValue;
}

interface RegisterData {
  email: FormDataEntryValue;
  username: FormDataEntryValue;
  password: FormDataEntryValue;
  role: FormDataEntryValue;
  teamName: FormDataEntryValue;
}

export const registerUser = async (data: RegisterData) => {
  try {
    await axios.post('http://localhost:8080/register', data);
  } catch (e) {
    console.error(e);
  }
};

export const loginUser = async (data: LoginData) => {
  try {
    await axios.post('http://localhost:8080/login', data);
  } catch (e) {
    console.error(e);
  }
};
