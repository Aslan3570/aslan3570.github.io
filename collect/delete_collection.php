<?php
require 'db.php';
global $db;

if (!isset($_GET['id'])) {
    die("Geen collectie ID opgegeven.");
}

$collectionId = $_GET['id'];
$stmt = $db->prepare("DELETE FROM collection_items WHERE collection_id = ?");
$stmt->execute([$collectionId]);
$stmt = $db->prepare("DELETE FROM collections WHERE id = ?");
$stmt->execute([$collectionId]);

header("Location: index.php");
exit;
