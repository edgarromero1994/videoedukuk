import "./NotFound.css"
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>¡Página no encontrada!</h2>
      <p>Lo sentimos, pero la página que estás buscando no existe.</p>
      <Link to="/" className="back-home">Volver al inicio</Link>
  </div>
  )
}

export default NotFound