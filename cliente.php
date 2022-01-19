<?php
$dbHost= 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'cliente';

$conexao = new mysqli ($dbHost,$dbUsername,$dbPassword,$dbName);
if($conexao->connect_errno)
{
    echo "Erro";
}
else{
    echo"Conexão efetuada com sucesso"
}
$sql = mysqli_query($conecta, "SELECT * FROM")
?>