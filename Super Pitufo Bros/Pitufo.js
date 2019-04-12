class Pitufo{

	constructor(img,x,y){
		this.img=img;
		this.x=x;
		this.y=y;
		this.speed=0.6
		this.index=0
	}

	draw(){
		image(this.img[floor(this.index) % 16],this.x,this.y)
		this.index += this.speed
	}
	stop(){
		image(this.img[floor(this.index) % 16],this.x,this.y)
		//this.index += this.speed
	}
	move(){
		this.x+=this.speed;
		//pitufoSprite[indexPitufo++ %16];
	}
	moveX(){
		this.x++;
		//pitufoSprite[indexPitufo++ %16];
	}
}