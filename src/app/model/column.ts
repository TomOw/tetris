import {Cell} from "./cell";
/**
 * Created by Tomasz on 01/11/2017.
 */
export class Column {
	cells: Cell[];
	value: number;


	constructor() {

	}

	init(size: number) {
		this.cells = [];
		for (let i = 0; i < size; i++) {
			this.cells.push(new Cell(false));
		}
	}

	toggleRandom() {
		let index = Math.floor(Math.random() * (this.cells.length - 1));
		this.cells[index].on = !this.cells[index].on;
	}
}