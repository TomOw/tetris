/**
 * Created by Tomasz on 01/11/2017.
 */
import {Column} from "./column";
import {Observable} from "rxjs/Observable";
import {Figure} from "./figure";

export class Matrix {
    columns: Column[];
    figures: Figure[] = [];


    constructor() {
    }

    getClock(clock: number) {
        return Observable.interval(clock);
    }

    init(xSize: number, ySize: number) {
        this.columns = [];
        for (let i = 0; i < xSize; i++) {
            let column = new Column();
            column.init(ySize);
            this.columns.push(column);
        }
    }

    toggle(x: number, y: number) {
        this.columns[x].cells[y].on = !this.columns[x].cells[y].on;
    }

    setCell(x: number, y: number, value: boolean, color: string) {
        if (x < this.columns.length && y < this.columns[0].cells.length && x >= 0 && y >= 0) {
            this.columns[x].cells[y].on = value;
            this.columns[x].cells[y].color = color;
        }
    }

    toggleRandom() {
        let index = Math.floor(Math.random() * (this.columns.length - 1));
        this.columns[index].toggleRandom();
    }

    ripple(x: number, y: number) {
        let clock = this.getClock(30);
        this.setCell(x, y, true, 'orange');
        let counter = 1;
        let s = clock.subscribe(t => {
            if (counter < 15) {
                this.drawCircle(x, y, counter);
                counter++;
            } else {
                s.unsubscribe();
            }
        });
    }

    setFigure(figure: Figure, x: number, y: number, value: boolean) {
        figure.x = x;
        figure.y = y;
        this.figures.push(figure);
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {
                if (figure.points[i][j]) {
                    this.setCell(x + i, y + j, value, figure.color);
                }
            }
        }
    }

    moveFigure(figure: Figure, x: number, y: number) {
        this.checkCollision();
        if (figure.movable) {
            this.setFigure(figure, figure.x, figure.y, false);
            this.setFigure(figure, figure.x + x, figure.y + y, true);
        }
    }

    rotateFigure90() {
        let figure = this.figures[this.figures.length - 1];
        if (figure.movable) {
            this.setFigure(figure, figure.x, figure.y, false);
            if (!figure.rotated) {
                figure.rotate90();
            } else {
                figure.rotateMinus90();
            }
            this.setFigure(figure, figure.x, figure.y, true);
        }
    }

    checkCollision() {
        let figure = this.figures[this.figures.length - 1];
        if (this.columns[figure.x].cells[figure.y - 1].on) {
            figure.movable = false;
            return true;
        }
        return false;
    }

    drawCircle(x0: number, y0: number, radius: number) {
        var x = radius - 1;
        var y = 0;
        var dx = 1;
        var dy = 1;
        var decisionOver2 = dx - (radius << 1);   // Decision criterion divided by 2 evaluated at x=r, y=0
        //var imageWidth = canvas.width;
        //var imageHeight = canvas.height;
        //var context = canvas.getContext('2d');
        //var imageData = context.getImageData(0, 0, imageWidth, imageHeight);
        //var pixelData = imageData.data;


        while (x >= y) {
            this.setCell(x + x0, y + y0, true, 'orange');
            this.setCell(y + x0, x + y0, true, 'orange');
            this.setCell(-x + x0, y + y0, true, 'orange');
            this.setCell(-y + x0, x + y0, true, 'orange');
            this.setCell(-x + x0, -y + y0, true, 'orange');
            this.setCell(-y + x0, -x + y0, true, 'orange');
            this.setCell(x + x0, -y + y0, true, 'orange');
            this.setCell(y + x0, -x + y0, true, 'orange');
            if (decisionOver2 <= 0) {
                y++;
                decisionOver2 += dy; // Change in decision criterion for y -> y+1
                dy += 2;
            }
            if (decisionOver2 > 0) {
                x--;
                dx += 2;
                decisionOver2 += (-radius << 1) + dx; // Change for y -> y+1, x -> x-1
            }
        }
    }
}