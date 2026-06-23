<?php
require 'db.php';
global $db;

if (isset($_POST['submit'])) {
    $name = $_POST['name'];
    $description = $_POST['description'];

    $stmt = $db->prepare("INSERT INTO collections (name, description) VALUES (?, ?)");
    $stmt->execute([$name, $description]);

    header("Location: index.php");
    exit;
}
?>


<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <title>Nieuwe Collectie</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>

<div class="container mt-5">
    <h2>Nieuwe Collectie Toevoegen</h2>

    <form method="post" class="mt-4">
        <div class="mb-3">
            <label class="form-label">Naam</label>
            <input type="text" name="name" class="form-control" required>
        </div>

        <div class="mb-3">
            <label class="form-label">Beschrijving</label>
            <textarea name="description" class="form-control"></textarea>
        </div>

        <button type="submit" name="submit" class="btn btn-primary">Opslaan</button>
        <a href="index.php" class="btn btn-secondary">Annuleren</a>
    </form>
</div>

</body>
</html>
