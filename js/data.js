class Dados {
    constructor(root){
        this.root = document.querySelector(root)
        this.allbuttons = document.querySelectorAll('button')
        this.load()
        this.removeAllButtonPlayers()
        this.updateButtons()

    }
    load(){

        this.players = [{
            name: 'Haaland',
        },
        {
            name: 'Neymar',
        },
        {
            name: 'Cristiano Ronaldo',
        },
        {
            name: 'Dybala',
        },
        {
            name: 'Messi',
        },
        {
            name: 'Mbappé',
        },]
    }
    removeAllButtonPlayers(){
        this.allbuttons.forEach(botao=>{
            botao.remove()
        })
    }
    updateButtons(){
        let i = 0;
        this.botoes.forEach(item =>{
           while (i < this.players.length){
                item.innerText = this.players[i].name
                i++;
           } 
        })
    }
}

export class CreateData extends Dados{
    constructor(root){
        super(root)
    }
}