export class Forecast {
  constructor(
    public dayTemp: number,
    public nightTemp: number,
    public time: number,
    public weather: string,
    public icon: any
  ) {}
}
