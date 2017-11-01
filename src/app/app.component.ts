import {Component, Inject, OnInit} from '@angular/core';
import {Matrix} from "./model/matrix";
import {Figure} from "./model/figure";
import {DOCUMENT} from "@angular/common";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    constructor(@Inject(DOCUMENT) private document: any) {

    }

    matrix: Matrix;


    ngOnInit(): void {


        this.document.onkeydown = (ev) => {
            console.log(ev.keyCode);
            if(ev.keyCode == 37) {
                this.matrix.moveFigure(this.matrix.figures[this.matrix.figures.length - 1], -1, 0);
            } else if (ev.keyCode == 38) {
                this.matrix.moveFigure(this.matrix.figures[this.matrix.figures.length - 1], 0, 1);
            } else if (ev.keyCode == 39) {
                this.matrix.moveFigure(this.matrix.figures[this.matrix.figures.length - 1], 1, 0);
            } else if (ev.keyCode == 40) {
                this.matrix.moveFigure(this.matrix.figures[this.matrix.figures.length - 1], 0, -1);
            } else if (ev.keyCode == 91) {
                this.matrix.rotateFigure90();
            }
        };
        this.matrix = new Matrix;

        this.matrix.init(20, 20);
        let figure = Figure.getL();

        this.matrix.setFigure(figure, 5, 5, true);

        this.matrix.setCell(0, 0, true);
    }
}
