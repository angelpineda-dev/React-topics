const Header = ({ theme, handleTheme }) => {
  return (
    <div className={theme}>
      <h2>Mi aplicación SIN Context API</h2>
      <h3>Mi cabecera</h3>
      <select name="language" id="language">
        <option value="es">ES</option>
        <option value="en">EN</option>
      </select>
      <input
        type="radio"
        name="theme"
        id="light"
        value="light"
        onClick={handleTheme}
      />
      <label htmlFor="light">Claro</label>
      <input
        type="radio"
        name="theme"
        id="dark"
        value="dark"
        onClick={handleTheme}
      />
      <label htmlFor="dark">Oscuro</label>
      <button>Iniciar Sesión</button>
    </div>
  );
};

export default Header;