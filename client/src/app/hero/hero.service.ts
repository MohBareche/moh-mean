import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class HeroService {
    url = 'http://localhost:8080/api';

    constructor(private httpClient: HttpClient){
    }

getTasks(){
    return this.httpClient.get(`${this.url}/tasks`)
}
    
}