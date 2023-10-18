export class Account {
    constructor(private name: string, private status: string){}

    getName():string{
        return this.name
    }
    setName(name: string){
        this.name = name
    }

    getStatus(): string{
        return this.status
    }
    setStatus(status: string) {
        this.status = status
    }
}