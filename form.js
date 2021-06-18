class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       this.description = createElement('h3') 
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
        this.description.hide();
    }
    display() {
        this.title.html("GO CORONA");
        this.title.position(windowWidth/2-300, 50);
        this.title.style('font-size', '150px');
        this.title.style('color', 'skyblue');
        this.input.position(windowWidth/2-300,windowHeight/2-100);
        this.input.style('width', '1000px');
        this.input.style('height', '100px');
        this.input.style('background', 'lavender');
        this.input.style('font-size','50px')
        this.button.position(windowWidth/2-100,windowHeight/2+50);
        this.button.style('width', '600px');
        this.button.style('height', '120px');
        this.button.style('background', 'lightpink');
        this.button.style('font-size','50px')
        this.reset.position(windowWidth-300, windowHeight-250);
        this.reset.style('width', '250px');
        this.reset.style('height', '75px');
        this.reset.style('background', 'lightpink');
        this.reset.style('font-size','30px')
        this.description.html("DESCRIPTION - THE CITY IS IN THREAT WITH ALL THE CITIZENS LOOKING FOR A HERO TO SAVE THEM ,  KILL THE VIRUS USING MASK/SANITIZER AND SAVE THE CITIZENS BEFORE ITS TOO LATE  :)")
        this.description.position(400,windowHeight/2+250)
        this.description.style('color','red')
        this.description.style('font-size','100px')
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(windowWidth/2,windowHeight/2-100);
            this.greeting.style('color', 'blue');
            this.greeting.style('font-size', '200px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}