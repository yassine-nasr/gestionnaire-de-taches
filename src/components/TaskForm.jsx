import { useState } from "react";

function TaskForm({ onAjout }) {
  const [texte, setTexte] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // empêche le rechargement de la page
    if (texte.trim() === "") return; // refuse une tâche vide ou d'espaces
    onAjout(texte.trim());
    setTexte(""); // vide le champ
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nouvelle tâche…"
        value={texte}
        onChange={(e) => setTexte(e.target.value)}
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default TaskForm;