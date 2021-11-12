class Produto{
    constructor() {
        this.id = 1;
        this.arrayProdutos = [];
    }
    salvar(){
        let produto = this.lerDados();
        if(this.validaCampos(produto)){
            this.adicionar(produto);
        }
        this.listaTabela();
    }

listaTabela() {
    let tbody = document.getElementById('tbody');
    tbody.innerText = '';

    for(let i = 0; i < this.arrayProdutos.length; i++ ){
        let tr = tbody.insertRow();

        let td_id = tr.insertCell();
        let td_produto = tr.insertCell();
        let td_valor = tr.insertCell();
        let td_acoes = tr.insertCell();

        td_id.innerText = this.arrayProdutos[1].id;
        td_produto.innerText = this.arrayProdutos[1].nomeProduto;
        td_valor.innerText = this.arrayProdutos[1].nomeValor;
        td_acoes.innerText = this.arrayProdutos[1].nomeAçao;

        td_id.classList.add('center');

        
    }
}
adicionar(produto) { 
    this.arrayProdutos.push(produto);
    this.id++;
}

lerDados() {
    let produto = {}

    produto.id = this.id;
    produto.nomeProduto = document.getElementById('produto').value;
    produto.valor = document.getElementById('valor').value;

    return produto;
}

validaCampos(produto){
    let msg = '';

    if(produto.nomeProduto = ''){

    }
}



excluir(){
    // ...

    alert('Item deletado!')
}
}

var produto = new Produto();