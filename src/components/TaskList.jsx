import TaskItem from "./TaskItem";

function TaskList({ taches, onToggle, onSupprimer }) {
  if (taches.length === 0) {
    return <p className="vide">Aucune tâche</p>;
  }

  return (
    <ul className="liste">
      {taches.map((tache) => (
        // key = tache.id : identifiant stable et unique
        <TaskItem
          key={tache.id}
          tache={tache}
          onToggle={onToggle}
          onSupprimer={onSupprimer}
        />
      ))}
    </ul>
  );
}

export default TaskList;