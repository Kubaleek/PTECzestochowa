import slugify from 'slugify';
import axios, { AxiosRequestConfig } from 'axios';

// Tworzenie instancji axios z odpowiednią konfiguracją
const apiClient = axios.create({
  baseURL: 'http://localhost:5000/pte/courses',
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

// Funkcje do obsługi różnych endpointów backendu:

// Pobieranie wszystkich kursów
export const GetAllCourses = () => fetchData('/all');

// Usuwanie kursu (na podstawie ID)
export const DeleteCourse = (id: string) => fetchData(`/delete/${id}`, { method: 'DELETE' });

// Pobieranie kursów z przypisanymi użytkownikami
export const GetCoursesWithUsers = () => fetchData('/with-users');

// Sprawdzanie aktywności użytkownika
export const CheckUserActivity = (userID: string) => fetchData(`/check-activity/${userID}`);


// Pobieranie kursów przypisanych do użytkownika (na podstawie ID użytkownika)
export const GetCoursesByUser = (userID: string) => fetchData(`/${userID}`);

// Sprawdzanie, czy kurs istnieje
export const CourseExists = () => fetchData('/exists');

// Dodawanie nowego kursu
export const AddCourse = (courseData: any) => fetchData('/add', { method: 'POST', body: courseData });

// Edytowanie kursu
export const EditCourse = (courseData: any) => 
  fetchData('/edit', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json', // Make sure the server knows you're sending JSON
    },
    body: JSON.stringify(courseData), // Convert the courseData object to JSON
  });

// Aktualizacja edytowanego kursu
export const EditUpdateCourse = (courseData: any) => fetchData('/update', { method: 'PUT', body: courseData });

// Usuwanie kursu użytkownika na podstawie ID
export const DeleteUserCourse = (userCourseId: string) => fetchData(`/delete/${userCourseId}`, { method: 'DELETE' });

// Usuwanie kursu na podstawie nazwy kursu (dla konkretnego użytkownika)
export const DeleteCourseName = (userCourseId: string) => fetchData(`/coursename/${userCourseId}`, { method: 'DELETE' });

// Sprawdzanie, czy kurs jest przypisany do użytkownika
export const IsCourseAssigned = (userId: string, courseId: string) => fetchData(`/assigned/${userId}/${courseId}`);

// Przypisywanie kursu do użytkownika
export const AssignCourse = (assignmentData: any) => fetchData('/assign', { method: 'POST', body: assignmentData });

