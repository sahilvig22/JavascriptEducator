<?php
$conn = mysqli_connect('localhost', 'root', '', 'jsform');

$query = 'SELECT * FROM users';

//GET RESULT
$result = mysqli_query($conn, $query);

//FETCH DATA
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);

echo json_encode($users); // This will put the asscoiative array that is returned from the databse in json format.
