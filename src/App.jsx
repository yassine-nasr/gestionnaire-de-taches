import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Compteur from "./components/Compteur";
import Filtres from "./components/Filtres";
import "./App.css";

const tachesInitiales = [
  { id: 1, texte: "Réviser le chapitre 3", terminee: false },
  { id: 2, texte: "Envoyer le rapport à M. Dubois", terminee: true },
  { id: 3, texte: "Préparer la réunion de lundi", terminee: false },
];

function App() {
  const [taches, setTaches] = useState(tachesInitiales);
  const [filtre, setFiltre] = useState("toutes"); // "toutes" | "en-cours" | "terminees"

  // Q8 : ajouter sans modifier le tableau existant
  function ajouterTache(texte) {
    const nouvelle = { id: Date.now(), texte: texte, terminee: false };
    setTaches([...taches, nouvelle]);
  }

  // Q10 : inverser "terminee" pour une seule tâche
  function basculerTache(id) {
    setTaches(
      taches.map((t) => (t.id === id ? { ...t, terminee: !t.terminee } : t))
    );
  }

  // Q11 : supprimer une tâche
  function supprimerTache(id) {
    setTaches(taches.filter((t) => t.id !== id));
  }

  // Q12 : supprimer toutes les terminées
  function supprimerTerminees() {
    setTaches(taches.filter((t) => !t.terminee));
  }

  // Q13 : tout marquer comme fait
  function toutMarquer() {
    setTaches(taches.map((t) => ({ ...t, terminee: true })));
  }

  // Q16 : calculé à chaque rendu, SANS useState.
  // Un state serait une mauvaise idée : cette valeur dépend déjà de "taches".
  // Si on la stockait dans un state, il faudrait la mettre à jour à la main
  // à chaque changement de "taches", et on risquerait qu'elle ne suive plus
  // les tâches (deux sources de vérité au lieu d'une).
  const restantes = taches.filter((t) => !t.terminee).length;

  // Q19 : liste filtrée calculée, pas stockée dans un state
  let tachesFiltrees = taches;
  if (filtre === "en-cours") {
    tachesFiltrees = taches.filter((t) => !t.terminee);
  } else if (filtre === "terminees") {
    tachesFiltrees = taches.filter((t) => t.terminee);
  }

  return (
    <div className="app">
      <h1>Mes tâches</h1>

      <TaskForm onAjout={ajouterTache} />

      <TaskList
        taches={tachesFiltrees}
        onToggle={basculerTache}
        onSupprimer={supprimerTache}
      />

      <div className="actions">
        <button onClick={supprimerTerminees}>Supprimer les terminées</button>
        <button onClick={toutMarquer}>Tout marquer comme fait</button>
      </div>

      <div className="barre">
        <Compteur restantes={restantes} />
        <Filtres filtre={filtre} onChangerFiltre={setFiltre} />
      </div>
    </div>
  );
}

export default App;