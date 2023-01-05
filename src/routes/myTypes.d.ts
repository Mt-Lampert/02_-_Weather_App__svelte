type Weather = {
  air_pressure: number;
  collectionId: string;
  collectionName: string;
  created: string;
  humidity: number;
  id: number;
  place: string;
  sky: string;
  temperature: number;
  updated: string;
  wind: number;
};

export type CompState = {
  state: string;
  payload: Weather | any;
  error: string;
};
