function Menu({ active, setActive, setCategory }) {
  const links = [
    { id: 1, name: "Geral", value: "general" },
    { id: 2, name: "Negócios", value: "business" },
    { id: 3, name: "Entretenimento", value: "entertainment" },
    { id: 4, name: "Saúde", value: "health" },
    { id: 5, name: "Ciência", value: "science" },
    { id: 6, name: "Esporte", value: "sports" },
    { id: 7, name: "Tecnologia", value: "technology" }
  ];

  function onClick(id, value) {
    setActive(id)
    setCategory(value)
  }

  return (
    <nav className="menu">
      <ul>
        {links.map((link) => (
          <li
            key={link.id}
            className={active === link.id ? "active" : "inactive"}
            onClick={() => onClick(link.id, link.value)}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Menu;
