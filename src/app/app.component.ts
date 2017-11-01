import {Component, OnInit} from '@angular/core';
import {Matrix} from "./model/matrix";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    matrix: Matrix;


    ngOnInit(): void {
        this.matrix = new Matrix;
        this.matrix.init(20, 20);
    }
}
