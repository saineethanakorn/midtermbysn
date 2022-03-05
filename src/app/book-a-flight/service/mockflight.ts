import { Flight } from "../Flight";

export class Mockflight {
  public static mflight: Flight[]=[
    {
      fullName: "Thanakorn",
      from: "Thialand",
      to: "Norway",
      type: "One-way",
      departure: new Date(Date.now()),
      arrival: new Date(Date.now()),
      adults: 2,
      children: 0,
      infants: 0
    }
  ];
}
