"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [formData, setFormData] = useState(new FormData());

  return (
    <div>
      <h2>Login to your account</h2>
      <form>
        <table>
          <tr>
            <td>Email</td>
            <td>
              <input
                type="email"
                name="Mail"
                onChange={(evt) => setUserName(evt.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Mot de passe:</td>
            <td>
              <input
                type="password"
                name="motDePasse"
                onChange={(evt) => setPassword(evt.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <button
                onClick={(e) => {
                  e.preventDefault();

                  const newFormData = new FormData();
                  newFormData.append("name", username);
                  newFormData.append("password", password);

                  setFormData(newFormData);
                }}
              >
                se connecter
              </button>
            </td>
          </tr>
        </table>
        <h3>{formData.get("name") as string}</h3>
      </form>
    </div>
  );
}
