<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Collectables</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body class="bg-body-tertiary">
<?php session_start(); ?>


<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container">
        <a class="navbar-brand fw-bold" href="index.php">Collectables</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">

                <li class="nav-item">
                    <a class="nav-link active" href="index.php">Home</a>
                </li>

                <?php if (isset($_SESSION['user_id'])): ?>
                    <!-- Gebruiker is ingelogd -->
                    <li class="nav-item">
                        <a class="nav-link" href="logout.php">Uitloggen</a>
                    </li>
                <?php else: ?>

                    <li class="nav-item">
                        <a class="nav-link" href="login.php">Inloggen</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="registration.php">Registreren</a>
                    </li>
                <?php endif; ?>

            </ul>
        </div>
    </div>
</nav>


<header class="py-5 text-center bg-body">
    <div class="container">
        <h1 class="display-5 fw-bold">Alle Verzamelingen</h1>
        <p class="lead text-muted">Bekijk en beheer je favoriete collecties</p>
    </div>
</header>

<main class="container py-4">
    <div class="row g-4">
        <div class="col-md-4">
            <a href="voetbalkaarten.php" class="text-decoration-none text-dark">
                <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h5 class="card-title">Voetbalkaarten</h5>
                        <p class="card-text">Fifa WK 2026 kaarten.</p>
                        <p class="text-muted mb-0">FIFA • 3 items</p>
                    </div>
                </div>
            </a>
        </div>

        <div class="col-md-4">
            <a href="pokemon.php" class="text-decoration-none text-dark">
                <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h5 class="card-title">Pokémon Kaarten</h5>
                        <p class="card-text">Eerste generatie holografische kaarten.</p>
                        <p class="text-muted mb-0">Pokemon collectie • 3 items</p>
                    </div>
                </div>
            </a>
        </div>

        <div class="col-md-4">
            <a href="autos.php" class="text-decoration-none text-dark">
                <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h5 class="card-title">Automodelletjes</h5>
                        <p class="card-text">Miniatuurtjes van auto's.</p>
                        <p class="text-muted mb-0">Auto's • 2 items</p>
                    </div>
                </div>
            </a>
        </div>

    </div>
        <?php
require 'db.php';
global $db;
$stmt = $db->query("SELECT * FROM collections");
$collections = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>


            <div class="container mt-5">
                <a href="add_collection.php" class="btn btn-primary mb-3">Nieuwe collectie maken</a>


                <div class="row g-4">
                    <?php foreach ($collections as $collection): ?>
                        <div class="col-md-4">
                            <div class="card shadow-sm h-100">
                                <div class="card-body">
                                    <h5 class="card-title"><?= htmlspecialchars($collection['name']) ?></h5>
                                    <p class="card-text"><?= htmlspecialchars($collection['description']) ?></p>
                                    <div class="d-flex gap-2">
                                        <a href="<?= htmlspecialchars($collection['name']) ?>.php" class="btn btn-dark btn-sm">Bekijken</a>
                                        <a href="edit_collection.php?id=<?= $collection['ID'] ?>" class="btn btn-warning btn-sm">Bewerken</a>
                                        <a href="delete_collection.php?id=<?= $collection['ID'] ?>" class="btn btn-danger btn-sm">Verwijderen</a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

        </div>
    </div>

        </div>
    </div>

</main>

<footer class=" fixed-bottom mt-auto bg-dark text-light py-3">
    <div class="container text-center">
        <p class="mb-1"> &copy; 2026 Collectables - Gecertificeerde debuggers</p>
    </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
