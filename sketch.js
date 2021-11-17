var play,about,playimg,aboutimg,back,backImg,aboutbg,g1Img,g2Img,g3Img,g4Img,g5Img,liftImg,plrWR,plrWL,plrShotR,plrShotL,plrst,plrstl,bul1Img,bul2Img
var bg1,bg2,bg3,bg4;
var wallGroup,wall2Group,wall3Group,wall4Group,gsoundGroup,dsoundGroup,msoundGroup,ssoundGroup,wls,wlss,wlsss,wlssss
var score;
var intelCollected= 0
var hp = 100
var gameState="wait"
var robo,robodie;

function preload(){
    aboutimg=loadImage("buttons/about.png")
    nosoundoimg=loadImage("buttons/mute.png")
    soundimg=loadImage("buttons/sound.png")
    backImg=loadImage("buttons/back.png")
    playimg=loadImage("buttons/play.png")
    logoimg=loadImage("load/Logo.gif")

    bg1=loadImage("maps/bgl1.png")
    bg2=loadImage("maps/bgl2.png")
    bg3=loadImage("maps/bgl3.png")
    bg4=loadImage("maps/bgl4.png")
    aboutbg=loadImage("load/about.jpg")

    g1Img=loadImage("ground/g1.png")
    liftImg=loadImage("ground/lift.png")
    bul1Img=loadImage("shoot/bul1.png")
    bul2Img=loadImage("shoot/bul2.png")


    plrWR = loadAnimation("walk/walking1.png","walk/walking2.png","walk/walking3.png","walk/walking4.png","walk/walking5.png","walk/walking6.png")
    plrWL = loadAnimation("walk/walkingl1.png","walk/walkingl2.png","walk/walkingl3.png","walk/walkingl4.png","walk/walkingl5.png","walk/walkingl6.png")
    plrst=loadAnimation("stand/knife1.png")
    plrstl=loadAnimation("stand/knife2.png")
    plrst.scale = 0.50
   // plrst.setCollider("rectangle",0,0,100,200)

   robo = loadImage("robo/r1.png")
   robodie = loadImage("robo/r2.png")
   robol = loadImage("robo/r3.png")

gs  = loadSound("audio/grass.mp3")
ds = loadSound("audio/dirt.mp3")
ms =loadSound("audio/metal.mp3")
ss = loadSound("audio/shot.mp3")
}

function setup(){
createCanvas(windowWidth,windowHeight)

play=createSprite(100,100,20,20)
play.addImage(playimg)
play.scale=0.5


about=createSprite(100,200,20,20)
about.addImage(aboutimg)
about.scale=0.5

sound=createSprite(100,300,20,20)
sound.addImage(soundimg)
sound.scale=0.5
nosound=createSprite(100,400,20,20)
nosound.addImage(nosoundoimg)
nosound.scale=0.5

back=createSprite(windowWidth/2,windowHeight-50,30,20)
back.visible=false
back.addImage(backImg)

plr=createSprite(200,200,20,50)
plr.visible=false
plr.scale=0.5
plr.addAnimation("standing",plrst)
plr.addAnimation("standingl",plrstl)
plr.addAnimation("walkingR",plrWR)
plr.addAnimation("walkingL",plrWL)
plr.debug = true
plr.setCollider("rectangle",0,0,100,170)




wallGroup = new Group();
wall2Group = new Group();
wall3Group = new Group()
wall4Group = new Group();
bulletGroup = new Group();
gsoundGroup = new Group();
dsoundGroup = new Group();
msoundGroup = new Group();
ssoundGroup = new Group();
enyBulletGroup = new Group();
enybBulletGroup = new Group();
enycBulletGroup = new Group()
}

function draw(){

if (gameState==="wait"){

    background(logoimg)
}
    

if(mousePressedOver(play)){
    gameState="play3"
    plr.visible=true
}
if(mousePressedOver(about)){
    gameState="about"
  
}

if(gameState==="about"){
    background(aboutbg)
    play.visible=false
    about.visible=false
    sound.visible=false
    nosound.visible=false
    back.visible=true
    


    if(mousePressedOver(back)){
        gameState="wait"
        play.visible=true
        about.visible=true
        sound.visible=true 
        nosound.visible=true
        back.visible=false
    }
   
}


if (gameState==="play"){
    background(bg1)
    play.visible=false
    about.visible=false
    sound.visible=false 
    nosound.visible=false
    plr.visible=true
  
    
   
 

    

var wall1=createSprite(windowWidth/2-650,windowHeight/2,5,windowHeight)
wall1.visible=false
var wall2=createSprite(windowWidth,310,5,700)
wall2.visible=false
var wall3=createSprite(windowWidth/2,windowHeight-13,windowWidth,5)
//wall3.visible=false
var wall4=createSprite(windowWidth/2,638,windowWidth,5)
wall4.visible=false
var wall5=createSprite(windowWidth/6,windowHeight/3+30,windowWidth/2.5,63)
//wall5.visible=false
var wall6=createSprite(windowWidth/2+480,windowHeight/3+20,windowWidth/2,50)
wall6.visible=false
var wall7=createSprite(windowWidth/5,windowHeight-70)
wall7.addImage(g1Img)
var wall8=createSprite(windowWidth/2+100,windowHeight/2+70)
wall8.addImage(g1Img)
wall8.setCollider("rectangle",0,-4,465,50)

wls=[wall1,wall2,wall3,wall4,wall5,wall6,wall7,wall8]


for(var i = 0;i<8;i++){
  wallGroup.add(wls[i]);
}

gsoundGroup.add(wall5)
msoundGroup.add(wall7)
msoundGroup.add(wall8)
dsoundGroup.add(wall3)

var exit =createSprite(displayWidth-7,displayHeight/2+183,4,125) 
exit.shapeColor="black"


plrMovement();
spawnplrBullet();
//spawnenyBullet();
audioSound();


     


if(plr.isTouching(exit)){
     gameState="play2"
     plr.x = 62
    plr.y= 390
 }

}


if(gameState==="play2"){
    background(bg2)
    wallGroup.destroyEach();
    play.visible=false
    about.visible=false
    sound.visible=false 
    nosound.visible=false
    plr.visible=true 
    

    var lift1 = createSprite(268,435,50,5);
    lift1.addImage(liftImg);
    lift1.scale = 0.5;
    lift1.debug = true
    var lift2 = createSprite(975,620,50,5);
    lift2.addImage(liftImg);
    lift2.scale = 0.5;
    lift2.debug = true
    
    var wall9 = createSprite(25,windowHeight/2,5,windowHeight)
    wall9.visible = false
    var wall10 = createSprite(windowWidth/2,638,windowWidth,5)
    //wall10.visible = false
    var wall11 = createSprite(windowWidth/2,windowHeight/13,windowWidth,5)
    wall11.visible = false
    var wall12 = createSprite(windowWidth/12,windowHeight/2+200,150,175)
    //wall12.visible = false
    var wall13 = createSprite(windowWidth/2+120,windowHeight/3,90,400)
    wall13.visible = false
    var wall14 = createSprite(windowWidth/2+40,windowHeight/5,5,200)
    wall14.visible = false
    var wall15 = createSprite(windowWidth/2+550,windowHeight/2+79,200,500)
    //wall15.visible = false
    var wall16 = createSprite(windowWidth/3+40,windowHeight/4)
    wall16.addImage(g1Img)
    wall16.scale = 0.5
    var wall17 = createSprite(windowWidth/3+140,windowHeight/2)
    wall17.addImage(g1Img)
    wall17.scale = 0.5

    enya = createSprite(windowWidth/6,windowHeight-60)

    
    var exit2 = createSprite(windowWidth-20,windowHeight/6-10,5,100)

wlss = [lift1,lift2,wall9,wall10,wall11,wall12,wall13,wall14,wall15,wall16,wall17,enya]

for(var i = 0;i<12;i++){
    wall2Group.add(wlss[i]);
  }

  // ading robo
  
  enya.addImage(robo)
  enya.scale = 0.4
  enyhita = createSprite(enya.position.x +200,enya.position.y-18,500,10)
  enyhita.visible = false

  var enyaBullet = createSprite(enya.position.x,enyhita.position.y,10,1)
  enyaBullet.visible=false
  if(enyhita.isTouching(plr)){
      enyaBullet.visible=true;
      enyaBullet.velocityX = 50
      ss.play()
  }    
    if(plr.isTouching(enyBulletGroup)){
        enyBulletGroup.destroyEach()
        hp = hp-1
    }
  
  
  
  enyaBullet.lifetime=100;
  enyBulletGroup.add(enyaBullet)
  

  msoundGroup.add(lift1)
  msoundGroup.add(lift2)
  msoundGroup.add(wall16)
msoundGroup.add(wall17)
dsoundGroup.add(wall10)
dsoundGroup.add(wall15)
dsoundGroup.add(wall12)
    


  if(plr.isTouching(lift1) && keyDown("e")){
      lift1.velocityY = -10
  }

 /* if(lift1.y >=windowHeight-(windowHeight/2+windowHeight/4) ){
    lift1.velocityY = 0
}*/

  if(plr.isTouching(lift2) && keyDown("e")){
      lift2.velocityY = -10
  }

  if(plr.isTouching(exit2)){
      gameState="play3"
   
      plr.x = windowWidth/9
      plr.y = windowHeight/8
  }
 plrMovement()

}

if(gameState === "play3"){
    background(bg3)
    wall2Group.destroyEach()
    play.visible=false
    about.visible=false
    sound.visible=false 
    nosound.visible=false

  
   
     
    var wall18 = createSprite(windowWidth/6.5,windowHeight/3.7,400,20)
   //wall18.visible = false
    var wall19 = createSprite(windowWidth/15,windowHeight/2-5,150,20)
  // wall19.visible = false
    var wall20 = createSprite(windowWidth/6.5,windowHeight/1.3-5,400,20)
   //wall20.visible = false
    var wall21 = createSprite(windowWidth-200,windowHeight/3.7,400,20)
    //wall21.visible = false
    var wall22 = createSprite(windowWidth-60,windowHeight/2-5,150,20)
    //wall22.visible = false
    var wall23 = createSprite(windowWidth-200,windowHeight/1.3-5,400,20)
   // wall23.visible = false
    var wall24 = createSprite(windowWidth*0+20,windowHeight/2,1,windowHeight)
    wall24.visible = false 
    var wall25 = createSprite(windowWidth-13,windowHeight/2,1,windowHeight)
    wall25.visible = false
    var wall26 = createSprite(windowWidth/2,windowHeight/20-20,windowWidth,1)
    wall26.visible = false
    var wall27 = createSprite(windowWidth/2,windowHeight-20,windowWidth,5)
   // wall27.visible = false 
    var liftb = createSprite(windowWidth/2,windowHeight/3.4,800,20)
    

var enyb = createSprite(windowWidth/10,windowHeight/2.4)
enyb.addImage(robo)
enyb.scale = 0.4

var enyc = createSprite(windowWidth-100,windowHeight/2.4)
enyc.addImage(robol)
enyc.scale = 0.4

var enyhitb = createSprite(enyb.position.x +200,enyb.position.y-18,500,10)
enyhitb.visible = false
var enyhitc = createSprite(enyc.position.x -200,enyc.position.y-18,500,10)
enyhitc.visible = false


    var exit3 = createSprite(windowWidth-10,windowHeight/9,5,200)
    var intel1 = createSprite(windowWidth/7,windowHeight-70,320,100)
    intel1.visible = false
    var intel2 = createSprite(windowWidth-200,windowHeight/1.5,320,100)
    intel2.visible = false
    var intel3 = createSprite(windowWidth-250,windowHeight/6.5,200,100)
    intel3.visible =  false

    
    var lift3 = createSprite(windowWidth/2.6,windowHeight/3.5)
    lift3.addImage(liftImg)
    lift3.scale = 0.5
    

    var lift4 = createSprite(windowWidth/1.64,windowHeight-30)
    lift4.addImage(liftImg)
    lift4.scale = 0.5

    wlsss = [wall18,wall19,wall20,wall21,wall22,wall23,wall24,wall25,wall26,wall27,lift3,lift4,enyc,enyb]
     
   for(var i = 0;i<14;i++){
        wall3Group.add(wlsss[i]);
      }

    msoundGroup.add(wall18)
    msoundGroup.add(wall19)
    msoundGroup.add(wall20)
    msoundGroup.add(wall21)
    msoundGroup.add(wall22)
    msoundGroup.add(wall23)
    msoundGroup.add(wall27)
    msoundGroup.add(lift3)
    msoundGroup.add(lift4)


    if(plr.isTouching(enyhitb)){


    }


     /* if(plr.isTouching(intel1)&& keyDown("e")){
         intel1.destroy()
        intelCollected = intelCollected+1
         
      }
      if(plr.isTouching(intel2) && keyDown("e")){
          intel2.destroy()
          intelCollected = intelCollected+1
      }

      if(plr.isTouching(intel3)&& keyDown("e")){
          intel3.destroy()
          intelCollected = intelCollected+1
      }
      
     
      if(plr.isTouching(exit3)){
          gameState = "play4"
          plr.x = windowWidth/8
          plr.y = windowHeight-30
      }*/


      var enybBullet = createSprite(enyb.position.x,enyhitb.position.y,10,1)
      enybBullet.visible=false
      enybBullet.addImage(bul1Img)
      enybBullet.scale = 0.1
      enybBullet.setCollider("rectangle",0,0,10,1)
      enybBullet.debug = true
      if(enyhitb.isTouching(plr)){
          enybBullet.visible=true;
          enybBullet.velocityX = 50

          ss.play()
      }    
        if(plr.isTouching(enyBulletGroup)&&keyWentUp("e")){
            enyBulletGroup.destroyEach()
            hp = hp-5
        }
      
      
      
      enybBullet.lifetime = 60;
      enyBulletGroup.add(enybBullet)

      
      var enycBullet = createSprite(enyc.position.x,enyhitc.position.y,10,1)
      enycBullet.visible=false
      enycBullet.addImage(bul2Img)
      enycBullet.scale = 0.1
      enycBullet.setCollider("rectangle",0,0,10,1)
      enycBullet.debug = true
      if(enyhitc.isTouching(plr)){
          enycBullet.visible=true;
          enycBullet.velocityX = -50
          ss.play()
      }    
        if(plr.isTouching(enyBulletGroup)){
            enyBulletGroup.destroyEach()
            hp = hp-5
        }
      
      
      
      enycBullet.lifetime= 60;
      enyBulletGroup.add(enycBullet)

plrMovement()

}

if(gameState==="play4"){
    wall3Group.destroyEach()
    background(bg4)
    play.visible=false
    about.visible=false
    sound.visible=false 
    nosound.visible=false

    var wall28 = createSprite(windowWidth*0+10,windowHeight/2,5,windowHeight)
    wall28.visible = false
    var wall29 = createSprite(windowWidth-20,windowHeight/2,5,windowHeight)
    wall29.visible = false
    var wall30 = createSprite(windowWidth/2,windowHeight/15,windowWidth,5)
    wall30.visible = false
    var wall31 = createSprite(windowWidth/2,windowHeight-12,windowWidth,5)
    var wall32 = createSprite(windowWidth/3,windowHeight/1.6,windowWidth,50)

    var lift5 = createSprite(windowWidth-120,windowHeight-30)
    lift5.addImage(liftImg)
    lift5.scale = 0.5
    lift5.debug = true

    wlssss = [wall28,wall29,wall30,wall31,wall32,lift5]
     
    for(var i = 0;i<5;i++){
         wall4Group.add(wlssss[i]);
       }

       msoundGroup.add(lift5)
       dsoundGroup.add(wall31)
       gsoundGroup.add(wall32)

    plrMovement()
}




    drawSprites()   
    stroke(90)
    fill("black")
    textSize(20)
text("Intelcollected : "+intelCollected, windowWidth/8,windowHeight/15)
text("Health : "+hp,windowWidth/4,windowHeight/15)

}



function spawnplrBullet(){

var bullet =createSprite(plr.position.x,plr.position.y-17,10,1)
bullet.visible=false
   if(keyDown("q") && keyDown("RIGHT_ARROW") || keyDown("q") && keyDown("d")){
    bullet.visible=true
    bullet.velocityX = 5
    plr.x=plr.x+0
    }

    if(keyDown("q") && keyDown("LEFT_ARROW") || keyDown("q") && keyDown("a")){
        bullet.visible=true
        bullet.velocityX = -5
        }

        bullet.lifetime = 100 ; 
        bulletGroup.add(bullet)
        bullet.lifetime = 50
    
}


function plrMovement(){
    plr.velocityY = 15
plr.collide(wallGroup)
plr.collide(wall2Group)
plr.collide(wall3Group)
plr.collide(wall4Group)

if(keyDown("LEFT_ARROW")||keyDown("a")){
    plr.changeAnimation("walkingL",plrWL)
    plr.x=plr.x-6
}
else if(keyWentUp("LEFT_ARROW")||keyWentUp("a")){
   
    plr.changeAnimation("stop",plrstl)
   
}

if(keyDown("RIGHT_ARROW")||keyDown("d")){
   
    plr.changeAnimation("walkingR",plrWR)
    plr.x=plr.x+10
    plr.scale = 0.5
    //plr.setCollider("rectangle",plr.height,plr.width,5,20)
}
else if(keyWentUp("RIGHT_ARROW")||keyWentUp("d")){
   
    plr.changeAnimation("standingL",plrst)
   
}


if(keyDown("UP_ARROW")||keyDown("w") && plr.y >= 60) {
    plr.velocityY = -16;
}

}

function audioSound(){
    if(keyDown("d") && plr.isTouching(gsoundGroup)){

        if(!gs.isPlaying()){
            gs.play()
          } 
    }
 
}





