namespace Coins {

    let imagePath = "img/";

    export abstract class Coin {
        constructor(public Value: number) {
            this.Value = Value;
        }

        abstract getImageUrl() : string;
    }

    export class Quarter extends Coin {
        constructor() {
            super(.25);
        }

        getImageUrl (): string {
            return imagePath + "Quarter.png";
        }
    }

    export class Dime extends Coin {
        constructor() {
            super(.10);
        }

        getImageUrl (): string {
            return imagePath + "Dime.png";
        }
    }

    export class Half extends Coin {
        constructor() {
            super(.5);
        }

        getImageUrl (): string {
            return imagePath + "Half.png";
        }
    }

    export class Dollar extends Coin {
        constructor() {
            super(1);
        }

        getImageUrl (): string {
            return imagePath + "Dollar.jpg";
        }
    }
}