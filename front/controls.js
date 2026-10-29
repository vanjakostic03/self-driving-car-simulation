class Controls{
    constructor(){
        this.forward = false;
        this.reverse = false;
        this.right = false;
        this.left = false;

        this.#addKeyBoardListeners();
    }

    #addKeyBoardListeners(){               //arrow function bcs this refers on attributes
        document.onkeydown=(event)=>{       //on button press
            switch(event.key){
                case "ArrowLeft":
                    this.left=true;
                    break;
                case "ArrowRight":
                    this.right=true;
                    break;
                case "ArrowUp":
                    this.forward=true;
                    break;
                case "ArrowDown":
                    this.reverse=true;
                    break;
            }
        }

        document.onkeyup=(event)=>{         //on button release
            switch(event.key){
                case "ArrowLeft":
                    this.left=false;
                    break;
                case "ArrowRight":
                    this.right=false;
                    break;
                case "ArrowUp":
                    this.forward=false;
                    break;
                case "ArrowDown":
                    this.reverse=false;
                    break;
            }
        }
    }


}