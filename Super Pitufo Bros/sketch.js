const parallaxs = [];
const pitufoSprite=[];
const bloqueSprite=[];
const tuboSprite=[];
let bloque
let bg;
let salto=false
let spritePit;
const size=128;
let spriteX=0;
let spriteY=0;
let spritesData;
let indexPitufo=0;
let limiteSalto=300;
let apareceObjeto=450;
let apareceObjeto2=500;
let pitufoSize	= 128
let jalaX
let objetoX
let objetoY
let ifJala=false
let aumentoAltura = 100
let objetoHeight
let cuboAltura
let cuboAbajo
let tubo
let itemX= 1000
let itemY= 330
let tuboBloque=true
let winChangue=false
let win
let win2
let castillo
let camino=0
let piso = 215


function preload(){
	bg = loadImage('img/fondo.jpg');
	spritePit = loadImage('img/sprite.jpg');
	spritesData=loadJSON('data.json')
	bloque=loadImage('img/normalBlock.jpg')
	bloqueItem=loadImage('img/itemBlock.jpg')
	tubo=loadImage('img/tuberia.gif')
	win=loadImage('img/win.gif')
	win2=loadImage('img/win2.gif')
	castillo=loadImage('img/kindom.gif')

}

function setup() {
	 const animation=[]
	createCanvas(windowWidth, windowHeight);

	for(let i = 0; i <2; i++){
		parallaxs.push(new Parallax(bg,i*width,0,width,height));
	}
	pitufoX = floor(width*0.15);
	pitufoY = 390
	for(let i=0,len=spritesData.sprite.length;i<len; i++){

		let d=spritesData.sprite[i];
		let img=spritePit.get(d.x,d.y,d.s,d.s);
		//
		animation.push(img);
	}
	let p = new Pitufo(animation,pitufoX,pitufoY);
	pitufoSprite.push(p);

	let b = new Bloque(bloque,width,pitufoY+70,width)
	bloqueSprite.push(b)

	let bI = new Bloque(bloqueItem,width,pitufoY,width)
	bloqueSprite.push(b)


	let tub = new Tubo(tubo,width+200,pitufoY,width)
	tuboSprite.push(tub)


	//console.log(spritesData);

}

function draw() {
	background('white');


	if(camino>=470){
		for(let p of parallaxs){
		p.draw();
		}
		for(let pi of pitufoSprite){
			pi.stop();

		}
		if(winChangue){
			image(win2,width-500,piso,100,300)
			fill('yellow')
			textSize(50)
			text("GANASTE",width*0.5-400,height*0.5)
			noLoop()
		}else if(!winChangue){
			image(win,width-500,piso,100,300)
		}
		
		image(castillo,width-400,piso,400,300)
	}else{
		for(let p of parallaxs){
		p.draw();
		}
		for(let pi of pitufoSprite){
			pi.stop();
		}
		for(let blo of bloqueSprite){
			blo.draw();
		}
		for(let tu of tuboSprite){
			tu.draw();
			//console.log('holi')
		}
	}

	
	/*image(bloque,itemX-50,itemY,50,50)
	image(bloqueItem,itemX,itemY,50,50)
	image(bloque,itemX+50,itemY,50,50)
	image(bloqueItem,itemX-100,itemY,50,50)
	image(bloque,itemX-150,itemY,50,50)*/

	
	movBloqueTuboPit()	

	//pitufoSprite[indexPitufo++ %16].draw();

	

}

function movBloqueTuboPit(){
	pitufoSprite.forEach((s)=> {

		if (keyIsDown(RIGHT_ARROW)) {
		apareceObjeto++
		camino++
		
		//itemX-=3
		for(let blo of bloqueSprite){
			jalaX=s.x+89
			
			if(s.x>objetoX-20){
        		pitufoY=390
        		
        	}
			/*if (ifJala) {
				pitufoY=610
				ifJala=false
			}*/
			cuboAbajo=blo.getY()
			if( (s.x+pitufoSize-10 <= blo.getX()) || (s.y+121<=blo.getY()) || (s.y>cuboAbajo) ){
				salto=false;

				if(camino>=470){
					if(winChangue){
				image(win2,width-500,piso,100,300)
					noLoop()
				}else if(!winChangue){
					image(win,width-500,piso,100,300)
				}
					for(let pi of pitufoSprite){
						pi.moveX();
						pi.draw();
					}
					if(s.x>=width-510){
			        	winChangue= true

			        }
				}else{
					for(let p of parallaxs){
						//p.draw();
						p.move();
					}
					for(let pi of pitufoSprite){
						pi.draw();
						//pi.move();
					}
					blo.move();
				}
								
				/*console.log('primer if')
				console.log("pitufoX: "+jalaX)
				console.log("bloqueX: "+blo.getX())
				console.log("pitufoY: "+s.y)
				console.log("bloqueY: "+blo.getY())*/
				objetoX = blo.getX()
				objetoY = blo.getY()
				objetoHeight = blo.getHeight()

			}else if( s.x+94 > blo.getX()){
				//noLoop();
				console.log('--------------------')
		console.log(camino)
		console.log('--------------------')
				if(camino>=470){
					if(winChangue){
			image(win2,width-500,piso,100,300)
			noLoop()
		}else if(!winChangue){
			image(win,width-500,piso,100,300)
		}
					for(let pi of pitufoSprite){
						pi.moveX();
						pi.draw();
					}
					if(s.x==width-510){
			        	winChangue= true

			        }

				}else{
					for(let p of parallaxs){
						//p.draw();
						p.move();
					}
					for(let pi of pitufoSprite){
						pi.draw();
						pi.move();
					}
					blo.move();
				}
				
				/*console.log('segundo if')
				console.log("pitufoX: "+jalaX)
				console.log("bloqueX: "+blo.getX())
				console.log("pitufoY: "+s.y)
				console.log("bloqueY: "+blo.getY())*/
				objetoX = blo.getX()
				objetoY = blo.getY()
				objetoHeight = blo.getHeight()
			}
		}	
    }
       if (keyIsDown(UP_ARROW)) {
        if(!salto){
        	salto=true;
        	if(objetoY<s.y && (s.x+pitufoSize>objetoX-10 && s.x<objetoX)){
        		aumentoAltura=objetoHeight-10
        	}
        	if( s.y >limiteSalto){
	          for (var i = 0; i <aumentoAltura; i+=20) {
	          	s.y-=i;
	          } 
	        }
        }else if (s.y==pitufoY) {
        	salto=false;
        	aumentoAltura=100
        }
      }
      if (s.y<pitufoY) {
        	s.y+=2

        	if(s.y<=objetoY && (s.x+pitufoSize>objetoX-10 && s.x<objetoX-50)){
        		/*console.log("-----------------------")
        		console.log("pitufoY: "+s.y)
        		console.log("pitufoX: "+jalaX)
        		console.log("bloqueX:"+objetoX)
        		console.log("bloqueY:"+objetoY)*/
        		//noLoop()
        		pitufoY=objetoY-pitufoSize
        		//limiteSalto+=300
        		salto=false
        		
        		//ifJala=true
        	}tuboBloque=false;//else{
        //		limiteSalto=300
        //	}
        }

        
       
	});
	
}
