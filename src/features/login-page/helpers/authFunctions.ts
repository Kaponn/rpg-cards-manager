import axios from 'axios';

interface AuthData {
  email: FormDataEntryValue | null;
  password: FormDataEntryValue | null;
}

export const registerUser = async (data: AuthData) => {
  try {
    await axios.post('http://localhost:8080/register', data);
  } catch (e) {
    console.error(e);
  }
};

export const loginUser = async (data: AuthData) => {
  try {
    await axios.post('http://localhost:8080/login', data);
  } catch (e) {
    console.error(e);
  }
};
