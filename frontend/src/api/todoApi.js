import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

export const getTodos = () => axios.get(API_URL);
export const addTodo = (title) => axios.post(API_URL, { title });
export const updateTodo = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);
