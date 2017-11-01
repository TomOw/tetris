/**
 * Created by Tomasz on 01/11/2017.
 */
export class Figure {

	points: any[];
	movable: boolean;
	x: number;
	y: number;


	constructor() {
		this.points = this.initPointMatrix();
		this.movable = true;
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

	static getMirroredL(): Figure {
		let figure = new Figure();
		figure.points[0][2] = true;
		figure.points[0][3] = true;
		figure.points[1][3] = true;
		figure.points[2][3] = true;
		return figure;
	}

	static getChair(): Figure {
		let figure = new Figure();
		figure.points[2][0] = true;
		figure.points[1][0] = true;
		figure.points[1][1] = true;
		figure.points[0][1] = true;
		return figure;
	}

	static getMirroredChair(): Figure {
		let figure = new Figure();
		figure.points[2][3] = true;
		figure.points[1][2] = true;
		figure.points[1][3] = true;
		figure.points[0][2] = true;
		return figure;
	}

	static getStick(): Figure {
		let figure = new Figure();
		figure.points[3][0] = true;
		figure.points[2][0] = true;
		figure.points[1][0] = true;
		figure.points[0][0] = true;
		return figure;
	}

	static getCube(): Figure {
		let figure = new Figure();
		figure.points[1][0] = true;
		figure.points[1][1] = true;
		figure.points[0][0] = true;
		figure.points[0][1] = true;
		return figure;
	}

	static getRandom(): Figure {
		let random = Math.floor(Math.random() * (6));
		console.log(random);
		if (random == 0) {
			return Figure.getL();
		} else if (random == 1) {
			return Figure.getChair();
		} else if (random == 2) {
			return Figure.getCube();
		} else if (random == 3) {
			return Figure.getMirroredChair();
		} else if (random == 4) {
			return Figure.getMirroredL();
		} else {
			return Figure.getStick();
		}
	}
}