import slugify from 'slugify';
import axios, { AxiosRequestConfig } from 'axios';

// Tworzenie instancji axios z odpowiednią konfiguracją
const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/`,
  headers: {
    'Content-Type': 'application/json', // domyślnie dla wszystkich żądań
  },
});
const setAuthToken = (token: string) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
};

// Ustawienie tokenu z .env jako domyślny nagłówek Authorization
if (process.env.SECRET_TOKEN) {
  setAuthToken(process.env.SECRET_TOKEN);
}

// Definicja typu dla opcji, aby uwzględniała method i body
interface FetchOptions extends AxiosRequestConfig {
  body?: any; // Dodatkowe pole dla danych w zapytaniach POST/PUT
}

// Funkcja do pobierania danych z API
const fetchData = async (endpoint: string, options?: FetchOptions) => {
  try {
    const response = await apiClient.request({
      url: endpoint,
      method: options?.method || 'GET',
      data: options?.body || {}, // Użyj `body` zamiast `data` jeśli to POST/PUT
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_ACCESS_TOKEN}`, // use env variable for the token
      },
      ...options,
    });
    return response.data;
  } catch (error: any) {
    console.error(`Błąd podczas pobierania danych z ${endpoint}:`, error);
    if (error.response) {
      throw new Error(`Błąd ${error.response.status}: ${error.response.data.message}`);
    } else {
      throw new Error(`Błąd połączenia: ${error.message}`);
    }
  }
};

export const GetAllUsers = () => fetchData('/users');
export const CreateUser = (userData:any) => fetchData('/create-user', { method: 'POST', body: userData });
export const Register = (userData:any) => fetchData('/register', { method: 'POST', body: userData });

export const DeleteUser = (email: string) => 
  fetchData('/user/delete', { method: 'DELETE', body: { email } });
export const EditUser = (new_email: string, email: string, username: string, role: string) => 
  fetchData('/user/edit', { method: 'PUT', body: { new_email, email, username, role } });
