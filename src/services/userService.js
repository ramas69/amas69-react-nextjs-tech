import axios from 'axios';


const API_URL = 'http://localhost:3003/users';

export const getUsers = async ()=> {

    try {

        const response = await axios.get(API_URL);

        return response.data
        
    } catch (error) {
        console.error("Erreur lors de la recuperation de l'Api :", error);

        throw error;
    }
}


export const newUser = async (user)=> {
    try {
        const response = await axios.post(API_URL, user);
        return response.data;
        
    } catch (error) {
        console.error("Erreur lors de la creation de l'user :", error);
    }

}

