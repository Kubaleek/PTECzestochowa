import slugify from 'slugify';
import axios, { AxiosRequestConfig } from 'axios';

// Tworzenie instancji axios z odpowiednią konfiguracją
const apiClient = axios.create({
  baseURL: 'http://localhost:5000/',
});

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
      data: options?.body || {},
      ...options, // Rozwinięcie innych opcji, np. headers, params itp.
    });
    return response.data;
  } catch (error) {
    console.error(`Błąd podczas pobierania danych z ${endpoint}:`, error);
    throw error;
  }
};

export const GetAllUsers = () => fetchData('/users');
export const CreateUser = (userData:any) => fetchData('/create-user', { method: 'POST', body: userData });
