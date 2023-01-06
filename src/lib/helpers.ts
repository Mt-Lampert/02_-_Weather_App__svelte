import type { Weather } from "./myTypes";

/** 
  * returns an SVG clipart file name depending on weather conditions
  * 
  * @param desc description for the weather condition
  * @returns the name of the clipart file
  */
export function getSVGfor(desc: string): string {
  let mySVG = "";
  switch (desc) {
    case "cloudy":
      mySVG = "cloudy.svg";
      break;
    case "few clouds":
    case "sunny":
      mySVG = "sunny.svg";
      break;
    case "light snow":
      mySVG = "light_snow.svg";
      break;
    case "overcast":
      mySVG = "overcast.svg";
      break;
    case "rain":
      mySVG = "rain.svg";
      break;
    default:
      return "EH?";
  }
  return mySVG;
}

export let defaultCompState: Weather = {
  air_pressure: 0,
  collectionId: '',
  collectionName: '',
  created: '',
  humidity: 0,
  id: 0,
  place: '',
  sky: '',
  temperature: -999,
  updated: '',
  wind: -1
}
