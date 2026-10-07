function TaskItem({ tache, onToggle, onSupprimer }) {
  return (
    <li className={tache.terminee ? "item terminee" : "item"}>
      <label>
        <input
          type="checkbox"
          checked={tache.terminee}
          onChange={() => onToggle(tache.id)}
        />
        <span>{tache.texte}</span>
      </label>
      <button className="suppr" onClick={() => onSupprimer(tache.id)}>
        ✕
      </button>
    </li>
  );
}

export default TaskItem;