import React from 'react';
import Header from '../components/Header';

export default function Home() {

    
    return (
        <div>
            <Header />
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
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>0565656766</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>0565656766</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>0565656766</td>
                    </tr>
                   
                </tbody>
            </table>
            </div>
          
        </div>
    )
}
