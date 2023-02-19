function tabuada() {
    let n = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        alert('Número Inválido!')
    } else {
        let num = Number(n.value) // pega o valor de n e tranforma para numero
        let c = 1
        tab.innerHTML = '' // serve para limpar a tabela da tabuada anterior em caso de nova tabuada
        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${num} x ${c} = ${num*c}`
            item.value = `tab${c}`
            tab.appendChild(item) // vai adicionar um elemento filho "item" na tabela(tab)
            c++
        }

    }

}