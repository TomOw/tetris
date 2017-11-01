/**
 * Created by Tomasz on 01/11/2017.
 */
export class Figure {

	points: any[];
	x: number;
	y: number;


	constructor() {
		this.points = this.initPointMatrix();
	}

	rotate90() {
		let newPoints = this.initPointMatrix();
		for (let i = 0; i < 4; ++i) {
			for (let j = 0; j < 4; ++j) {
				newPoints[i][j] = this.points[3 - j][i];
			}
		}
		this.points = newPoints;
	}

	rotateMinus90() {
		let newPoints = this.initPointMatrix();
		for (let i = 0; i < 4; ++i) {
			for (let j = 0; j < 4; ++j) {
				newPoints[i][j] = this.points[j][3 - i];
			}
		}
		this.points = newPoints;
	}

	initPointArray() {
		let arr = [];
		for (let i = 0; i < 4; i++) {
			arr.push(false);
		}
		return arr;
	}

	initPointMatrix() {
		let points = [];
		for (let i = 0; i < 4; i++) {
			points.push(this.initPointArray());
		}
		return points;
	}

	static getL(): Figure {
		let figure = new Figure();
		figure.points[0][0] = true;
		figure.points[0][1] = true;
		figure.points[0][2] = true;
		figure.points[1][0] = true;
		return figure;
	}
}