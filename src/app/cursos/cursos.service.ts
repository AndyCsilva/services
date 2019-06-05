import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService {

    static criouNovoCurso = new EventEmitter<string>();
    emitirCursoCriado = new EventEmitter<string>();

    private cursos: string[] = ['Angular 2', 'Java', 'Phonegap'];

    constructor(private _logService: LogService) {
        console.log('CursosService');
    }

    getCursos() {
        this._logService.consoleLog('Obtendo lista de cursos');
        return this.cursos;
    }

    addCurso(curso: string) {
        this._logService.consoleLog(`criando um novo curso : ${ curso }`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}