import api from "../axios"

export class WeatherService {
  static getCurrentWeather(coordinates) {
    return api.get(`/weather?lat=${coordinates.lat}&lon=${coordinates.lon}`)
  }
}