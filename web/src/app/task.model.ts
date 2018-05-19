export class Task {
  constructor(
    public id:string,
    public name:string,
    public description:string,
    public created:number=Date.now(),
    public updated:number=Date.now()
  ) { }
}
