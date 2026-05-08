// oop - abstraction - idea, rather than clear implementation

/*
There is two way to do it:
    1. interface
    2. abstract class
*/

//idea
/* interface MediaPlayer {
    play(): void;
    pause(): void;
    stop(): void;
}

//implementation
class MusicPlayer implements MediaPlayer {
    play() {
        console.log(`Playing Music.....`);
    }
    pause() {
        console.log(`Music Paused.`);
    }
    stop() {
        console.log(`Music Stopped.`);
    }
}

const myPlayer = new MusicPlayer(); //instance
myPlayer.play(); */


//idea
abstract class MediaPlayer {
    abstract play(): void;
    abstract pause(): void;
    abstract stop(): void;
}

//implementation
class myPlayer extends MediaPlayer {
    play() {
        console.log(`Playing Music.....`);
    }
    pause() {
        console.log(`Music Paused.`);
    }
    stop() {
        console.log(`Music Stopped.`);
    }
}

const myPlayer1 = new myPlayer(); 
myPlayer1.pause();

