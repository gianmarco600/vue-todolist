// Descrizione: Rifare l'esercizio della to do list come fatto assieme in classe:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista

const app = new Vue({
    el:'#app',
    data:{
        list:[
            'Guardare tutti i film di Nanni',
            'Fare il doumentario sull\'Italia, e sulla sua situazione politica',
            'Girare un film su un pasticcere Trotzkista'
        ],
        input:'',
        pref:''
        
    },
    methods:{
        getInput(){
            if (this.input != ''){
                this.list.push(this.input);
            }
            this.input = '';
        },
        remove(indice){
            this.list.splice(indice, 1,);
        },
        fixTop(indice){
            let fixed = this.list[indice];
            this.list.splice(indice, 1,);
            this.list.unshift(fixed);
            this.pref = indice;
        }
    }

})