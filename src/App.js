import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  const [github_username, setGithubUsername] = useState("");
  const [techs, setTechs] = useState("");

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      err => {
        console.log(err);
      },
      {
        timeout: 30000
      }
    );
  }, []);

  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post("/devs", {
      github_username,
      techs,
      latitude,
      longitude
    });

    console.log(response.data);
  }

  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleAddDev}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input
              name="github_username"
              id="github_username"
              required
              value={github_username}
              onChange={e => setGithubUsername(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input
              name="techs"
              id="techs"
              required
              value={techs}
              onChange={e => setTechs(e.target.value)}
            />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input
                type="number"
                name="latitude"
                id="latitude"
                required
                value={latitude}
                onChange={e => setLatitude(e.target.value)}
              />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input
                type="number"
                name="longitude"
                id="longitude"
                required
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/39492830?s=400&u=73daa0ee6c3871d9d127f858e1278b23beafa91f&v=4"
                alt="Gabriel Óliver"
              />
              <div className="user-info">
                <strong>Gabriel Óliver</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Biografia eustou só testando para ver como vai ficar com ele
              preenchido até o final
            </p>
            <a href="https://github.com/Gabriel-Oliver">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/39492830?s=400&u=73daa0ee6c3871d9d127f858e1278b23beafa91f&v=4"
                alt="Gabriel Óliver"
              />
              <div className="user-info">
                <strong>Gabriel Óliver</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Biografia eustou só testando para ver como vai ficar com ele
              preenchido até o final
            </p>
            <a href="https://github.com/Gabriel-Oliver">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/39492830?s=400&u=73daa0ee6c3871d9d127f858e1278b23beafa91f&v=4"
                alt="Gabriel Óliver"
              />
              <div className="user-info">
                <strong>Gabriel Óliver</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Biografia eustou só testando para ver como vai ficar com ele
              preenchido até o final
            </p>
            <a href="https://github.com/Gabriel-Oliver">
              Acessar perfil no Github
            </a>
          </li>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/39492830?s=400&u=73daa0ee6c3871d9d127f858e1278b23beafa91f&v=4"
                alt="Gabriel Óliver"
              />
              <div className="user-info">
                <strong>Gabriel Óliver</strong>
                <span>ReactJS, React Native, Node.js</span>
              </div>
            </header>
            <p>
              Biografia eustou só testando para ver como vai ficar com ele
              preenchido até o final
            </p>
            <a href="https://github.com/Gabriel-Oliver">
              Acessar perfil no Github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
