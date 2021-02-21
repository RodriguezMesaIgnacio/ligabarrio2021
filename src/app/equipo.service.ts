import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Jugador } from "./models/Jugador";

@Injectable({ providedIn: "root" })
export class EquipoService {
  private url = "https://api-liga20-21.herokuapp.com/";
  constructor(private http: HttpClient) {}
  getEquiposApi() {
    const urlget = `${this.url}equipos`;
    return this.http.get(urlget);
  }

  addEquipo(doc: any) {
    return this.http.post(this.url, doc);
  }

  getEquipo(id: string) {
    const url = `https://api-liga20-21.herokuapp.com/equipo/${id}`;
    return this.http.get(url);
  }

  addJugador(doc: any) {
    const url = "https://api-liga20-21.herokuapp.com/jugador";
    return this.http.post(url, doc);
  }

  updateEquipo(doc: any) {
    const url = `https://api-liga20-21.herokuapp.com/equipo/${doc.id}`;
    return this.http.post(url, doc);
  }

  deleteJugador(jugador: Jugador) {
    const url = `https://api-liga20-21.herokuapp.com/deleteJugador/${
      jugador.dorsal
    }&${jugador.equipo}`;
    return this.http.get(url);
  }

  getJugador(dorsal: string, equipo: string) {
    const url = `https://api-liga20-21.herokuapp.com/jugador/${dorsal}&${equipo}`;
    return this.http.get(url);
  }

  updateJugador(doc: any) {
    const url = `https://api-liga20-21.herokuapp.com/jugador/${doc.dorsal}&${
      doc.equipo
    }`;
    return this.http.post(url, doc);
  }
}
