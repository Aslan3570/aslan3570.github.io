<?php
require "db.php";
global $db;

$message = "";

if (isset($_POST["submit"])) {

    $username = trim($_POST["username"]);
    $email = trim($_POST["email"]);
    $password = $_POST["password"];
    $confirmPassword = $_POST["confirmPassword"];

    if ($password !== $confirmPassword) {
        $message = "Wachtwoorden komen niet overeen.";
    } else {

        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        try {
            $stmt = $db->prepare("
    INSERT INTO users (name, email, password)
    VALUES (:name, :email, :password)
");

            $stmt->execute([
                    ":name" => $username,
                    ":email" => $email,
                    ":password" => $hashedPassword
            ]);

            header("Location: login.php?registered=1");
            exit();

        } catch (PDOException $e) {
            $message = "Gebruikersnaam of e-mailadres bestaat al.";
        }
    }
}
?>




<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Registreren | Collectables</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet">
</head>
<body class="bg-body-tertiary">

<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <div class="container">
        <a class="navbar-brand fw-bold" href="index.php">Collectables</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item"><a class="nav-link" href="login.php">Inloggen</a></li>
                <li class="nav-item"><a class="nav-link active" href="registration.php">Registreren</a></li>
            </ul>
        </div>
    </div>
</nav>

<header class="py-5 text-center">
    <div class="container">
        <h1 class="">Account Registreren</h1>
    </div>
</header>

<main class="container py-1">
    <div class="row justify-content-center">
        <div class="col-md-6">

            <div class="card shadow-sm">
                <div class="card-body">

                    <h4 class="card-title mb-4 text-center">Registreren</h4>

                    <?php if (!empty($message)): ?>
                        <div class="alert alert-danger">
                            <?= htmlspecialchars($message) ?>
                        </div>
                    <?php endif; ?>

                    <form method="post">

                        <div class="mb-3">
                            <label class="form-label">Gebruikersnaam</label>
                            <input type="text" name="username" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">E-mailadres</label>
                            <input type="email" name="email" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Wachtwoord</label>
                            <input type="password" name="password" class="form-control" required>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Bevestig wachtwoord</label>
                            <input type="password" name="confirmPassword" class="form-control" required>
                        </div>

                        <button type="submit" name="submit" class="btn btn-dark w-100">Registreren</button>
                    </form>

                    <p class="text-center mt-3 mb-0">
                        Heb je al een account?
                        <a href="login.php">Log hier in</a>
                    </p>

                </div>
            </div>

        </div>
    </div>
</main>

<footer class="fixed-bottom bg-dark text-light py-3">
    <div class="container text-center">
        <p class="mb-1">&copy; 2026 Collectables - Gecertificeerde debuggers</p>
    </div>
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
