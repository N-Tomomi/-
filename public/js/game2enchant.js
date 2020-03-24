enchant();

window.onload = function() {

  var moveStageToCenter = function(core) {
    var stagePos = {
     top: (window.innerHeight - (core.height * core.scale)) /1.3,
     left: (window.innerWidth - (core.width * core.scale)) / 2,
    };
    var stage = document.getElementById('enchant-stage');
    stage.style.position = 'absolute';
    stage.style.top = stagePos.top + 'px';
    stage.style.left = stagePos.left + 'px';
    core._pageX = stagePos.left;
    core._pageY = stagePos.top;
   };
  
    
  var core = new Core(320, 320);

  moveStageToCenter(core);
  
  core.preload('img/chara1.png',
               'img/game2-background.jpeg',
               'img/icon0.png',
               'img/map0.gif');
  core.fps = 15;

  core.onload = function() {

    var background = new Sprite(320, 320);  //  320*320 画面サイズ
        background.image = core.assets['img/game2-background.jpeg',] 
        background.x = 0;
        background.y = 0;

        var backgroundMap = new Map(16, 16);
        backgroundMap.image = game.assets['img/map0.gif'];
        backgroundMap.loadData([
            [7,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,28,28],
            [7,113,113,113,113,113,113,81,81,81,113,113,113,113,113,113,113,113,37,37],
            [7,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,37,37],
            [7,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,37,37],
            [7,113,97,97,97,97,97,97,97,97,97,97,97,97,97,97,113,113,37,37],
            [7,113,97,97,97,97,97,97,97,97,97,97,97,97,97,97,113,113,37,37],
            [7,113,97,97,97,97,97,97,97,97,97,97,97,97,97,97,113,113,37,37],
            [7,113,97,97,97,97,97,97,97,97,97,97,97,97,97,97,113,113,37,37],
            [7,113,97,97,97,97,97,97,97,97,97,97,97,97,97,97,113,113,37,37],
            [7,81,97,97,97,97,97,97,97,97,97,97,97,97,97,97,113,113,37,37],
            [7,81,113,97,97,97,97,97,97,97,97,97,97,97,97,97,113,113,37,37],
            [7,81,113,97,97,97,97,97,97,97,97,97,97,97,97,97,113,113,37,37],
            [7,81,113,97,97,97,97,97,97,97,97,97,97,97,97,97,113,113,37,37],
            [7,81,113,113,97,97,97,97,97,97,97,97,97,97,97,97,97,113,37,37],
            [7,81,113,113,97,97,97,97,97,97,97,97,97,97,97,97,97,113,37,37],
            [7,113,113,113,97,97,97,97,97,97,97,97,97,97,97,97,97,113,37,37],
            [7,113,113,113,113,113,97,97,97,97,97,97,97,97,97,97,97,113,37,37],
            [7,113,113,113,113,113,97,97,97,97,97,97,97,97,97,97,97,113,37,37],
            [7,29,113,113,113,113,113,113,113,113,113,113,113,113,113,113,113,98,28,28],
            [23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23]
        ],[
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
            [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
        ]);
        backgroundMap.collisionData = [
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
            [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
        ];
        

         var label = new Label();
             label.x = 265;
             label.y = 17;
             label.color = 'pink';
             label.font = '17px "Arial"';
             label.text = '0';

         label.on('enterframe', function() {
           label.text = (core.frame / core.fps).toFixed(2);
         });

         var shotInterval = 15;    //弾の発射間隔
         var shotSpeed = 5;    //弾の速さ（１フレームに何px動くか）

         // leading-chara-bear 
         var bear1 = new Sprite(32, 32);
         bear1.image = core.assets['img/chara1.png'];
         // bear1.x = 15;
         // bear1.y = 15;
         bear1.moveTo(120, 120);
         bear1.frame = 2;
         // bear1.walk = [0,1,0,2];
         bear1.time = 0;


         bear1.addEventListener('enterframe', function() {
         //   this.x += 2;
         //   if (this.x > 320) this.x = 0;
         if (core.input.left) this.x -= 5;
         if (core.input.right) this.x += 5;
         if (core.input.up) this.y -= 5;
         if (core.input.down) this.y += 5;
         });


         bear1.onenterframe = function () {  //毎フレーム毎に実行する関数
           this.time++;    //フレーム毎にtimeを加算する
           if (this.time % shotInterval == 0) {    //shotIntervalフレーム経ったら弾発射
               const bullet = createBullet(this);  //弾を自分の座標に設置
               // scene.addChild(bullet); //sceneに弾を貼り付ける
               core.rootScene.addChild(bullet);
           }
         }
         
         //TIPS:引数のspriteを発射元にして赤四角の弾を作成して返す関数
         function createBullet(bear1) {
           const bullet = new Sprite(8, 8);   //width:8px,height:8pxのSpriteを設置
           bullet.moveTo(bear1.x + 11, bear1.y + 17);  //発射元の座標に弾を合わせる
           bullet.backgroundColor = "#ff0000"; //赤に設定
           bullet.onenterframe = function () { //毎フレーム毎に実行する関数
               this.x += shotSpeed;    //真yokoに向けて移動する
               if (bullet.x <= -30 || bullet.x >= 320 || bullet.y <= -30 || bullet.y >= 320) { //画面外か判定
                   this.parentNode.removeChild(this);  //画面外なら自身を削除する
               }
           }
           return bullet; //上で作成したspriteを返す
         }
    
         // items(apples)
         Apple = Class.create(Sprite,{
           initialize: function() {
             Sprite.call(this,16,16);
             this.image = core.assets['img/icon0.png'];
             this.frame = 15;
           }
         });

         apple1 = new Apple
         apple1.x = 32;
         apple1.y = 288;
         
         apple2 = new Apple
         apple2.x = 32;
         apple2.y = 272;

         apple3 = new Apple
         apple3.x = 32;
         apple3.y = 256;

         apple4 = new Apple
         apple4.x = 48;
         apple4.y = 288;

         apple5 = new Apple
         apple5.x = 48;
         apple5.y = 272;

         apple6 = new Apple
         apple6.x = 48;
         apple6.y = 256;

         apple7 = new Apple
         apple7.x = 64;
         apple7.y = 288;

         apple8 = new Apple
         apple8.x = 64;
         apple8.y = 272;

         apple9 = new Apple
         apple9.x = 64;
         apple9.y = 256;

         core.rootScene.addChild(background);

         core.rootScene.addChild(backgroundMap)

         core.rootScene.addChild(label);
         core.rootScene.addChild(bear1);

         // items
         core.rootScene.addChild(apple1);
         core.rootScene.addChild(apple2);
         core.rootScene.addChild(apple3);
         core.rootScene.addChild(apple4);
         core.rootScene.addChild(apple5);
         core.rootScene.addChild(apple6);
         core.rootScene.addChild(apple7);
         core.rootScene.addChild(apple8);
         core.rootScene.addChild(apple9);
           
 }
       core.start(); 
};
