class Bloque{

	constructor(img,x,y,w){
		this.img=img;
		this.x=x;
		this.y=y;
		this.speed=3
		this.w=w
		this.contBlock=0
		this.blockWidth=50
		this.blockHeight=50
		//this.index=0
	}

	draw(){
		if(this.contBlock==0){
			image(this.img/*[floor(this.index) % 16]*/,this.x,this.y,this.blockWidth,this.blockHeight)
		}else if(this.contBlock==1){
			console.log('else de contBlock')
			image(this.img/*[floor(this.index) % 16]*/,this.x,this.y-50,this.blockWidth,this.blockHeight)
		}//this.index += this.speed
	}
	/*stop(){
		image(this.img[floor(this.index) % 16],this.x,this.y)
		//this.index += this.speed
	}*/
	move(){
		this.x-=this.speed;

		if(this.x+50 <= 0 && this.contBlock<1){
			this.x=this.w
			//this.contBlock++

		}
		//console.log("contBock: "+this.contBlock)
		//console.log("bloque x: "+this.x)
		//BloqueSprite[indexBloque++ %16];
	}

	getX(){
		return this.x+15
	}
	getY(){
		return this.y
	}
	getHeight(){
		return this.blockHeight
	}
	getWidth(){
		return this.blockWidth
	}
}