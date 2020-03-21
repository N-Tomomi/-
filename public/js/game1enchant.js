enchant();

window.onload = function() {

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

    var background = new Sprite(320, 320);  //  320*320 画面サイズ
        background.image = core.assets['img/mushroom-pattern.jpeg'] 
        background.x = 0;
        background.y = 0;

    var score = 0;
    var timeLeft = 15 * core.fps;

    var scoreLabel = new Label('Score: 0');
    scoreLabel.x = 200;
    scoreLabel.y = 7;
    scoreLabel.color = "red";
    scoreLabel.font = "normal normal 19px/1.0 monospace";

    var timeLabel = new Label('Time: ?');
        timeLabel.x = 10;
        timeLabel.y = 7;
        timeLabel.color = "blue";
        timeLabel.font = "normal normal 19px/1.0 monospace";

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
      this.x = rand(300);
      this.y = rand(300);
      this.frame = rand(8);
      core.rootScene.addChild(apples);
      apples.x = rand(300);
      apples.y = rand(300);
    });

    // りんごクリック
    apples.on('touchstart', function(){
      score++;
      scoreLabel.text ='Score: ' + score;
    
      this.parentNode.removeChild(this);
    });

    // gameover
    var gameOverScene = new Scene();
        gameOverScene.backgroundColor = '#f59a00';

    var gameover_label = new Label("white");
    gameover_label.x = 110;
    gameover_label.y = 130;
       //  gameover_label.text = "Game Over!!";
    gameover_label.width = 120;
    gameover_label.font = "normal normal 19px/1.0 monospace";
    // gameover_label.text = ('Game Over        Your score: ' + score);
    gameOverScene.addChild(gameover_label);

    core.on('enterframe', function() {
      timeLeft--;
      timeLabel.text = 'Time: ' + timeLeft;
      if (timeLeft <= 0) {
          // alert('Your score: ' + score);
          this.pushScene(gameOverScene);
          // alert('Your score: ' + score);
          gameover_label.text = ('Game Over     Score: ' + score);
          this.stop();
          // core.pushScene(gameOverScene);
          //       core.stop();
      }
     });
    

    //  var gameover_label = new CenterLabel("white");
    //  gameover_label.y = 150;
    // //  gameover_label.text = "Game Over!!";
    //  gameover_label.text = 'Game Over: Your score: ' + score ;
    //  gameOverScene.addChild(gameover_label);


    
    // false bears/ Bear Class
    Bear = Class.create(Sprite,{
      initialize: function() {
        Sprite.call(this,32,32);
        this.image = core.assets['img/chara1.png'];
        this.x = rand(300);
        this.y = rand(300);
        
        // クマ左右端から端まで歩かせる
        this.addEventListener('enterframe', function() {
          if (this.scaleX == 1) {
            this.x += rand(7);
            if (this.x > 320 -32) this.scaleX = -1;
          }
          else {
            this.x -= rand(7);
            if (this.x <0 ) this.scaleX = 1;
          }
        })
      } 
    });
    
    // false bears/ StandingBear Class
    StandingBear = Class.create(Sprite,{
      initialize: function() {
        Sprite.call(this,32,32);
        this.image = core.assets['img/chara1.png'];
        this.x = rand(300);
        this.y = rand(300);
      } 
    });
    
    // bear1 frameで動きつけている
    bear1 = new Bear
    bear1.frame = [0, 1, 2];

    // bear touchedで姿を変える
    bear2 = new Bear
    bear2.frame = [5, 6];
    bear2.addEventListener('touchend', function() {
      this.frame = 8;
    });

    bear3 = new Bear
    bear3.frame = [0, 1, 2];
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

    bear4 = new Bear
    bear4.frame = [10, 11, 12];
    bear4.scaleX = -1;
    bear4.scaleY = 1;

    bear5 = new Bear
    bear5.frame = [10, 11, 12];
    bear5.scaleX = -1;
    bear5.scaleY = 1;

    bear6 = new Bear
    bear6.frame = [5, 6, 7];
    bear6.scaleX = -1;
    bear6.scaleY = 1;

    bear7 = new Bear
    bear7.frame = 4;
    bear7.scaleX = -1;
    bear7.scaleY = 1;

    bear8 = new Bear
    bear8.frame = 4;
    bear8.scaleX = -1;
    bear8.scaleY = 1;

    bear9 = new Bear
    bear9.frame = [10, 11, 12];
    bear9.ontouchstart = function(){    
      this.frame = 13;
      this.onenterframe = function(){    
         this.opacity  -= 0.07;
         if(this.opacity <= 0){
        this.parentNode.removeChild(this);
        }
      }
    };

    bear10 = new Bear
    bear10.frame = [5, 6, 7];
    bear10.ontouchstart = function(){    
      this.frame = 8;
      this.onenterframe = function(){    
         this.opacity  -= 0.07;
         if(this.opacity <= 0){
        this.parentNode.removeChild(this);
        }
      }
    };

    // standing_bear
    standing_bear1 = new StandingBear
    standing_bear1.frame = [0, 1, 2];
    standing_bear1.ontouchstart = function(){    
      this.frame = 3;
      this.onenterframe = function(){    
         this.opacity  -= 0.07;
         if(this.opacity <= 0){
        this.parentNode.removeChild(this);
        }
      }
    };

    standing_bear2 = new StandingBear
    standing_bear2.frame = [0, 1, 2];
    standing_bear2.ontouchstart = function(){    
      this.frame = 3;
      this.onenterframe = function(){    
         this.opacity  -= 0.07;
         if(this.opacity <= 0){
        this.parentNode.removeChild(this);
        }
      }
    };

    standing_bear3 = new StandingBear
    standing_bear3.frame = [5, 6];
    standing_bear1.ontouchstart = function(){    
      this.frame = 8;
      this.onenterframe = function(){    
         this.opacity  -= 0.07;
         if(this.opacity <= 0){
        this.parentNode.removeChild(this);
        }
      }
    };

    standing_bear4 = new StandingBear
    standing_bear4.frame = [10, 11, 12];
    standing_bear1.ontouchstart = function(){    
      this.frame = 13;
      this.onenterframe = function(){    
         this.opacity  -= 0.07;
         if(this.opacity <= 0){
        this.parentNode.removeChild(this);
        }
      }
    };


    core.rootScene.addChild(background);
    core.rootScene.addChild(scoreLabel);
    core.rootScene.addChild(timeLabel);
    core.rootScene.addChild(real_bear);
    core.rootScene.addChild(apples);

    core.rootScene.addChild(bear1);
    core.rootScene.addChild(bear2);
    core.rootScene.addChild(bear3);
    core.rootScene.addChild(bear4);
    core.rootScene.addChild(bear5);
    core.rootScene.addChild(bear6);
    core.rootScene.addChild(bear7);
    core.rootScene.addChild(bear8);
    core.rootScene.addChild(bear9);
    core.rootScene.addChild(bear10);

    core.rootScene.addChild(standing_bear1);
    core.rootScene.addChild(standing_bear2);
    core.rootScene.addChild(standing_bear3);
    core.rootScene.addChild(standing_bear4);
      
  }
      
  core.start();
  
};

// memo
// ランダムで熊を出没させる
// function rand(n) {
//   return Math.floor(Math.random() * (n + 1));
// }

