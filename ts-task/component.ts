export class Component {
    
    private _color: string;

    constructor(private _numLike?: number, private _isActive?: boolean) {
        this._numLike = _numLike | 0;
        this._color = (this._isActive) ? 'yellow' : 'blue';
        this._isActive = _isActive || false;
    }

    click() {
        this._numLike += (this._isActive) ? -1 : +1;
        this._color = (this._isActive) ? 'blue' : 'yellow';
        this._isActive = !this._isActive;

        console.log(`The button is ${this.isActive}: color - ${this.color}, number of Likes: ${this.numLike}.`);
    }

    get numLike() {
        return this._numLike;
    }

    get isActive() {
        return this._isActive;
    }

    get color() {
        return this._color;
    }
}