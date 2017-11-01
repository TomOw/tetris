/**
 * Created by Tomasz on 01/11/2017.
 */
export class Figure {

	points: any[];
	x: number;
	y: number;


	constructor() {
		this.points = [];
		for (let i = 0; i < 4; i++) {
			this.points.push(Figure.getArray());
		}
	}

	static getArray() {
		let arr = [];
		for (let i = 0; i < 4; i++ ) {
			arr.push(false);
		}
		return arr;
	}

	static getL(): Figure {
		let figure = new Figure();
		figure.points[0][1] = true;
		figure.points[0][2] = true;
		figure.points[0][3] = true;
		figure.points[1][3] = true;
		return figure;
	}

}