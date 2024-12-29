import axios from 'axios';

const API_URL = 'http://localhost:5000/api/companies';

export const getAllCompanies = async () => axios.get(API_URL);

export const addCompany = async (company) => axios.post(API_URL, company);

export const deleteCompany = async (id) => axios.delete(`${API_URL}/${id}`);
