import slugify from 'slugify';
import axios, { AxiosRequestConfig } from 'axios';

// Tworzenie instancji axios z odpowiednią konfiguracją
const apiClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/pte/coures`,
  headers: {
    'Content-Type': 'application/json', // domyślny nagłówek dla JSON
  },
});
// Funkcja do ustawienia tokenu autoryzacyjnego
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
      data: options?.data, // Użyj `data` zamiast `body`
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

// Funkcje do obsługi różnych endpointów backendu:

// Pobieranie wszystkich kursów
export const GetAllCourses = () => fetchData('/all');

// Usuwanie kursu (na podstawie ID)
export const DeleteCourse = (id: string) => fetchData(`/delete/${id}`, { method: 'DELETE' });

export const getAssignData =() =>fetchData('/getAssignData');
// Pobieranie kursów z przypisanymi użytkownikami
export const GetCoursesWithUsers = () => fetchData('/with-users');

// Sprawdzanie aktywności użytkownika
export const CheckUserActivity = (userID: string) => fetchData(`/check-activity/${userID}`);

// Pobieranie kursów przypisanych do użytkownika (na podstawie ID użytkownika)
export const GetCoursesByUser = (userID: string) => fetchData(`/${userID}`);

// Sprawdzanie, czy kurs istnieje
export const CourseExists = () => fetchData('/exists');

// Dodawanie nowego kursu
export const AddCourse = (courseData: any) => 
  fetchData('/add', { method: 'POST', data: courseData });

// Pobieranie ukończonych kursów
export const getCompletedCourses = (userID: string) => fetchData(`/getCompleted/${userID}`);

// Edytowanie kursu
export const EditCourse = (courseData: any) => 
  fetchData('/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json', // Nagłówek JSON
    },
    data: courseData,
  });

// Aktualizacja edytowanego kursu
export const EditUpdateCourse = (courseData: any) => fetchData('/update', { method: 'PUT', data: courseData });

// Usuwanie kursu użytkownika na podstawie ID
export const DeleteUserCourse = (userCourseId: string) => fetchData(`/delete/${userCourseId}`, { method: 'DELETE' });

export const DeleteUserFromCourse =(userID:number,courseID:number) => fetchData(`/user-from-course`,{method:"DELETE", data:{userID,courseID}})
// Usuwanie kursu na podstawie nazwy kursu (dla konkretnego użytkownika)
export const DeleteCourseName = (userCourseId: string) => fetchData(`/coursename/${userCourseId}`, { method: 'DELETE' });

// Sprawdzanie, czy kurs jest przypisany do użytkownika
export const IsCourseAssigned = (userId: string, courseId: string) => fetchData(`/assigned/${userId}/${courseId}`);

// Przypisywanie kursu do użytkownika
export const AssignCourse = (assignmentData: any) => fetchData('/assign', { method: 'POST', data: assignmentData });
