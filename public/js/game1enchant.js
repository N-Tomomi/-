enchant();

window.onload = function() {
  // console.log('hello enchant');

  // ファンクション作成
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
               'img/mushroom-pattern.jpeg',
               'img/icon0.png');
  core.fps = 15;

  core.onload = function() {

    var background = new Sprite(320, 320);  //  320*320 サイズの オブジェクトを生成
        background.image = core.assets['img/mushroom-pattern.jpeg'] 
        background.x = 0;
        background.y = 0;

    var score = 0;

    var scoreLabel = new Label('Score: 0');
    scoreLabel.x = 200;
    scoreLabel.y = 7;
    scoreLabel.color = "red";
    scoreLabel.font = "normal normal 19px/1.0 monospace";

    // ご褒美りんご
    var apples = new Sprite(16,16);
    apples.image = core.assets['img/icon0.png'];
    apples.frame = 15;
    apples.x = rand(300);
    apples.y = rand(300);
    
    // ランダムで熊を出没させるための関数
    function rand(n) {
      return Math.floor(Math.random() * (n + 1));
    }
    
    // 本物クマ
    var real_bear = new Sprite(32, 32);
    real_bear.image = core.assets['img/chara1.png'];
    real_bear.x = rand(300);
    real_bear.y = rand(300);
    real_bear.frame = [0, 1, 2];


    real_bear.addEventListener('enterframe', function() {
      this.x += rand(7);
      if (this.x > 320) this.x = 0;
    });

    real_bear.on('touchstart', function(){
      // score++;
      // scoreLabel.text ='Score: ' + score;
      this.x = rand(300);
      this.y = rand(300);
      apples.x = rand(300);
      apples.y = rand(300);
    });
    
    // false bears
    Bear = Class.create(Sprite,{
      initialize: function() {
        Sprite.call(this,32,32);
        this.image = core.assets['img/chara1.png'];
      }
    });
    
    // bear1 frameで動きつけている
    bear1 = new Bear
    bear1.x = 0;
    bear1.y = 320 - 32;
    bear1.frame = [0, 1, 2];

    // bear touchedで姿を変える
    bear2 = new Bear
    bear2.x = 32;
    bear2.y = 320 - 64;
    bear2.frame = [5, 6];
    bear2.addEventListener('touchend', function() {
      this.frame = 8;
    });

    bear3 = new Bear
    bear3.x = 66;
    bear3.y = 320 - 96;
    bear3.frame = [0, 1, 2];
    bear3.addEventListener('enterframe', function() {
      this.x += 2;
      if (this.x > 320) this.x = 0;
    });
    bear3.ontouchstart = function(){    
      //frameアニメーション
      this.frame = 3;
      this.onenterframe = function(){    
         //フェードアウト
         this.opacity  -= 0.07;
         //フェードアウトが完了したらスプライトを削除
         if(this.opacity <= 0){
        this.parentNode.removeChild(this);
        }
       }
    };

     
    core.rootScene.addChild(background);
    core.rootScene.addChild(scoreLabel);
    core.rootScene.addChild(real_bear);
    core.rootScene.addChild(apples);
    core.rootScene.addChild(bear1);
    core.rootScene.addChild(bear2);
    core.rootScene.addChild(bear3);
      
  }
      
  core.start();
  
};

// memo
// ランダムで熊を出没させる
// function rand(n) {
//   return Math.floor(Math.random() * (n + 1));
// }




