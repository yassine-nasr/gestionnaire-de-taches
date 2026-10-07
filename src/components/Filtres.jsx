function Filtres({ filtre, onChangerFiltre }) {
  return (
    <div className="filtres">
      <button
        className={filtre === "toutes" ? "actif" : ""}
        onClick={() => onChangerFiltre("toutes")}
      >
        Toutes
      </button>
      <button
        className={filtre === "en-cours" ? "actif" : ""}
        onClick={() => onChangerFiltre("en-cours")}
      >
        En cours
      </button>
      <button
        className={filtre === "terminees" ? "actif" : ""}
        onClick={() => onChangerFiltre("terminees")}
      >
        Terminées
      </button>
    </div>
  );
}

export default Filtres;