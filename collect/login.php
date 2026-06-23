<?php
session_start();
require 'db.php';
global $db;

if (isset($_SESSION["user_id"])) {
    header("Location: index.php");

    exit();
}



$message = "";

if (isset($_POST["submit"])) {

    $email = trim($_POST["email"]);
    $password = $_POST["password"];

    $stmt = $db->prepare("
        SELECT * FROM users
        WHERE email = :email
    ");

    $stmt->execute([
            ":email" => $email
    ]);

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user["password"])) {

        $_SESSION["user_id"] = $user["id"];
        $_SESSION["username"] = $user["username"];

        header("Location: index.php");

        exit();

    } else {
        $message = "Ongeldig e-mailadres of wachtwoord.";
    }
}
?>

<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Inloggen Collectables</title>

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
                <li class="nav-item"><a class="nav-link active" href="login.php">Inloggen</a></li>
                <li class="nav-item"><a class="nav-link" href="registration.php">Registreren</a></li>
            </ul>
        </div>
    </div>
</nav>

<header class="py-5 text-center">
    <div class="container">
        <h1>Inloggen</h1>
    </div>
</header>

<main class="container py-1">
    <div class="row justify-content-center">
        <div class="col-md-6">

            <div class="card shadow-sm">
                <div class="card-body">

                    <h4 class="card-title mb-4 text-center">
                        Log in op je account
                    </h4>

                    <?php if (isset($_GET['registered'])): ?>
                        <div class="alert alert-success">
                            Registratie succesvol! Je kunt nu inloggen.
                        </div>
                    <?php endif; ?>

                    <?php if (!empty($message)): ?>
                        <div class="alert alert-danger">
                            <?= htmlspecialchars($message) ?>
                        </div>
                    <?php endif; ?>

                    <form method="post">

                        <div class="mb-3">
                            <label class="form-label">E-mailadres</label>
                            <input
                                    type="email"
                                    name="email"
                                    class="form-control"
                                    required>
                        </div>

                        <div class="mb-3">
                            <label class="form-label">Wachtwoord</label>
                            <input
                                    type="password"
                                    name="password"
                                    class="form-control"
                                    required>
                        </div>

                        <button type="submit" name="submit" class="btn btn-dark w-100">
                            Inloggen
                        </button>

                    </form>

                    <p class="text-center mt-3 mb-0">
                        Nog geen account?
                        <a href="registration.php">Registreer hier</a>
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
