class Form{
    constructor(){
        this.input = createInput();
        this.button = createButton("PLAY");
        this.greeting = createElement("h1");

        this.reset = createButton("Reset");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        //create the title
        var title = createElement("h1");
        title.html("Car Racing");
        title.position(displayWidth/2.25, displayHeight/8.5);
        title.style('font-size', '50px');
        title.style('color', 'black');
        this.input.position(displayWidth/2.15, displayHeight/2.5);
        this.button.position(displayWidth/2, displayHeight/2.5 + (displayHeight/20));
        this.button.style('background-color', 'darkblue');
        this.reset.position(10, 10);
        this.reset.style('background-color', 'darkblue');

        //do stuff when you hit the play button
        this.button.mousePressed(()=>{
            title.hide();
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount++;
            player.index = playerCount;
            player.updateName();
            player.updateCount(playerCount);

            this.greeting.html("Welcome " + player.name + "!");
            this.greeting.position(displayWidth/2.1 - player.name.length * (displayWidth/110), 125);
        });

        //reset time
        this.reset.mousePressed(()=>{
            player.updateCount(0);
            game.updateState(0);

            database.ref('/').update({
                players: null,
                finishedPlayers: 0
            })
            window.location.reload();
        });

    }
}