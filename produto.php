<?php

$dbHost= 'localhost';
$dbUsername = 'root';
$dbPassword = '';
$dbName = 'gn-vendas';

$conexao = new mysqli ($dbHost,$dbUsername,$dbPassword,$dbName);

if($conexao->connect_errno)
{
    echo "Erro";
}
else{
    echo"Conexão efetuada com sucesso"
}
?>
