export class Flight {
  constructor(
  public fullName: string,
  public from: string,
  public to: string,
  public type: string,
  public departure: Date,
  public arrival: Date,
  public adults: number,
  public children: number,
  public infants: number,
  ) {}
  }
