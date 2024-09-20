import React, { useState }  from 'react'
import { newUser } from '../services/userService';

export default function CreateUser() {

    const [ nom , setNom] = useState('');
    const [prenom, setPrenom]= useState('');
    const [email, setEmail]= useState('');
    const [telephone, setTelephone] = useState('');
    const [success, setSuccess]= useState(null);
    const [error, setError]= useState(null);


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            
            const user = {
                nom,
                prenom,
                email,
                telephone
            }

            const createdUser = await newUser(user);
            setSuccess(`Utilisateur est crée ${createdUser}`);
            setError(null);


        } catch (error) {
            setError("Erreur");
            setSuccess(null)
        }

    }

  return (
    <div>
        <h2> Créer un nouvel utilisateur</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Nom</label>
                <input type="text" name="nom" placeholder="Nom" value = {nom} onChange={(e)=> setNom(e.target.value)}/>
            </div>
            <div>
                <label>Preom</label>
                <input type="text" name="prenom" placeholder="Prenom" value = {prenom} onChange={(e)=> setPrenom(e.target.value)} />
            </div>
            <div>
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" value = {email} onChange={(e)=> setEmail(e.target.value)} />
            </div>
            <div>
                <label>Téléphone</label>
                <input type="text" name="telephone" placeholder="Telephone" value = {telephone} onChange={(e)=> setTelephone(e.target.value)} />
            </div>
            <button type='submit'>Créer</button>
        </form>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>{success}</p>}
    </div>
  )
}
