export class Weather {
  constructor(
    public cityName: string,
    public tempFeel: number,
    public currentTemp: number,
    public cloudLevel: number,
    public humidity: number,
    public windSpeed: number,
    public weather: any,
    public weatherIcon: any,
    public currentTime: any,
    public daily: any,
    public hourly: any
  ) {}
}
