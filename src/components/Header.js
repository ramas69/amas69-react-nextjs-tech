import React from 'react'

export default function Header() {
  return (
    <header className="App-header">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">TechnicalSkills</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Liste des Utilisateurs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="newuser">Créer un compte</a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  </header>

  )
}
