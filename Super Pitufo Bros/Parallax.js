class Parallax{

	constructor(img,x,y,w,h){
		this.img=img;
		this.x=x;
		this.y=y;
		this.speed=-3;
		this.w=w;
		this.h=h;
	}

	draw(){
		image (this.img,this.x,this.y,width,height)
	}

	move(){
		this.x += this.speed;
		if(this.x <= -this.w){
			this.x=this.w
		}
	}
}