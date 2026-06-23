<?php
require 'db.php';
global $db;


if (!isset($_GET['id'])) {
    die("Geen collectie ID opgegeven.");
}

$id = $_GET['id'];

$stmt = $db->prepare("SELECT * FROM collections WHERE id = ?");
$stmt->execute([$id]);
$collection = $stmt->fetch(PDO::FETCH_ASSOC);

if (!$collection) {
    die("Collectie niet gevonden.");
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $description = $_POST['description'];

    $stmt = $db->prepare("UPDATE collections SET name = ?, description = ? WHERE id = ?");
    $stmt->execute([$name, $description, $id]);

    header("Location: index.php");
    exit;
}
?>

<div class="container mt-5">
    <h2>Collectie bewerken</h2>

    <form method="POST">
        <div class="mb-3">
            <label class="form-label">Naam</label>
            <input type="text" name="name" class="form-control" value="<?= htmlspecialchars($collection['name']) ?>" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Beschrijving</label>
            <textarea name="description" class="form-control" required><?= htmlspecialchars($collection['description']) ?></textarea>
        </div>


        <button type="submit" name="submit" class="btn btn-primary">Opslaan</button>
        <a href="index.php" class="btn btn-secondary">Annuleren</a>
    </form>
</div>

