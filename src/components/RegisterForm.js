import { useState } from 'react'
import { registerUser } from '../services/Api'

function RegisterForm () {
  const [formData, setFormData] = useState({
    nom: 'coucou',
    prenom: 'macron',
    mail: 'njoizanj@jzioaj.com',
    mdp: 'kfeozfozp98499',
    telephone: '025916519'
  })
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    const result = await registerUser(formData)
    console.log(result)
  }

  return (
    <div>
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nom:
          <input type='text' name='nom' onChange={handleChange} value={formData.nom} />
        </label>
        <br />
        <label>
          Prénom:
          <input type='text' name='prenom' onChange={handleChange} value={formData.prenom} />
        </label>
        <br />
        <label>
          Adresse mail:
          <input type='email' name='email' size={8} required onChange={handleChange} value={formData.mail} />
        </label>
        <br />
        <label>
          Mots de passe:
          <input type='password' name='password' onChange={handleChange} value={formData.mdp} />
        </label>
        <br />
        <label>
          Username:
          <input type='text' name='username' onChange={handleChange} value={formData.telephone} />
        </label>
        <br />
        <input type='submit' />
      </form>
      {JSON.stringify(formData)}
    </div>
  )
}

export default RegisterForm
