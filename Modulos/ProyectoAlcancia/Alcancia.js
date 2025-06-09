export class Alcancia {
    
    constructor(){
        this.docientos = 0,
        this.quinientos = 0,
        this.mil = 0
    }

    getDocientos(){
        return this.docientos
    }

    getQuinientos(){
        return this.quinientos
    }

    getMil(){
        return this.mil
    }

    setDocientos(docientos){
        this.docientos = docientos
    }

    setQuinientos(quinientos){
        this.quinientos = quinientos
    }

    setMil(mil){
        this.mil = mil
    }

    calcularTotal(){
        let cantidadDocientos = this.docientos * 200;
        let cantidadQuinientos = this.quinientos * 500;
        let cantidadMil = this.mil * 1000;
        return cantidadDocientos + cantidadQuinientos + cantidadMil
    }

    vaciar(){
        this.docientos = 0
        this.quinientos = 0
        this.mil = 0
    }
}