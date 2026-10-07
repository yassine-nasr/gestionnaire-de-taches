function Compteur({ restantes }) {
  let texte;
  if (restantes === 0) {
    texte = "Tout est fait";
  } else if (restantes === 1) {
    texte = "1 tâche restante";
  } else {
    texte = restantes + " tâches restantes";
  }

  return <span className="compteur">{texte}</span>;
}

export default Compteur;