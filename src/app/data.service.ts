import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = 'https://api.themoviedb.org';
  apiVersion = '3';
  querySeries = 'tv/popular';
  apiKey = 'cfb2b338648587f6aabd21fd2342712b';

  constructor( private http: HttpClient) { }

  getMedia(type, page) {
    let _url;
    if ( type === 'serie' ) {
      _url = `${this.baseUrl}/${this.apiVersion}/${this.querySeries}?api_key=${this.apiKey}&page=1`;
    } else {
      _url = `${this.baseUrl}/${this.apiVersion}/${type}/popular?api_key=${this.apiKey}&language=fr-FR&page=${page}`;
    }
    return this.http.get(_url);
  }
  getDetailsMedia(type, id) {
    let _url;
    if (type === 'serie'){
      _url = `${this.baseUrl}/${this.apiVersion}/tv/${id}?api_key=${this.apiKey}&language=fr-FR`;;
    } else {
      _url = `${this.baseUrl}/${this.apiVersion}/movie/${id}?api_key=${this.apiKey}&language=fr-FR`;;
    }
    return this.http.get(_url);
  }
  searchMedia(type, query) {
    let _url;
    if (type === 'serie'){
      _url = `${this.baseUrl}/${this.apiVersion}/search/tv?api_key=${this.apiKey}&query=${query}`;
    } else {
      _url = `${this.baseUrl}/${this.apiVersion}/search/movie?api_key=${this.apiKey}&query=${query}`;
    }
    return this.http.get(_url);
  }

}
