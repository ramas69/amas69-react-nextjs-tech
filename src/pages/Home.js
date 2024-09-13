import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { getUsers } from '../services/userService';

export default function Home() {


    const [users, setUsers]= useState([]);
    const [error, setError]= useState(null)

 

    useEffect(()=> {

        const fetchUsers = async () =>{
            try {
                const usersData = await getUsers();
                setUsers(usersData);
            } catch (error) {
                setError("Erreur lors de la recuperation des utilisateurs")
            }
        }
        fetchUsers();
    }, [])


    return (
        <div>
            <Header />{}
            {error && <p>Vous avez une erreur de type : {error}</p>}
            <h2 className=" my-5 text-center accordion"> Liste des utilisateurs</h2>
            <div className='container-md'>
            <table className="table ">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nom</th>
                        <th scope="col">Prénom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Téléphone</th>
                    </tr>
                </thead>
                <tbody>
                {
                    users.map((user ) => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td> {user.nom}</td>
                            <td> {user.prenom}</td>
                            <td> {user.email}</td>
                            <td> {user.telephone}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
          
        </div>
    )
}
