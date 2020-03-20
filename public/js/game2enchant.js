enchant();

window.onload = function() {
  console.log('hello enchant2');

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
  
  core.preload('img/chara1.png', 'img/game2-background.png');
  core.fps = 15;
  core.onload = function() {

    var background = new Sprite(320, 320);  //  320*320 サイズの オブジェクトを生成
        background.image = core.assets['img/game2-background.png'] 
        background.x = 0;
        background.y = 0;
      
    var bear1 = new Sprite(32, 32);
    bear1.image = core.assets['img/chara1.png'];
    bear1.x = 0;
    bear1.y = 0;

    bear1.addEventListener('enterframe', function() {
      this.x += 2;
      if (this.x > 320) this.x = 0;
  });
     
    core.rootScene.addChild(background);
    core.rootScene.addChild(bear1);
      
  }
      
  core.start();

};
