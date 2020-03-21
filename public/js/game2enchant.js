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
  
  core.preload('img/chara1.png',
               'img/game2-background.png',
               'img/icon0.png');
  core.fps = 15;
  core.onload = function() {
    
    // background
    var background = new Sprite(320, 320);  //  320*320 サイズの オブジェクトを生成
        background.image = core.assets['img/game2-background.png'] 
        background.x = 0;
        background.y = 0;

    // label
    var label = new Label();
        label.x = 280;
        label.y = 5;
        label.color = 'red';
        label.font = '14px "Arial"';
        label.text = '0';

    label.on('enterframe', function() {
      label.text = (core.frame / core.fps).toFixed(2);
    });

    // leading-chara-bear 
    var bear1 = new Sprite(32, 32);
    bear1.image = core.assets['img/chara1.png'];
    bear1.x = 0;
    bear1.y = 0;

    bear1.addEventListener('enterframe', function() {
    //   this.x += 2;
    //   if (this.x > 320) this.x = 0;
    if (core.input.left) this.x -= 5;
    if (core.input.right) this.x += 5;
    if (core.input.up) this.y -= 5;
    if (core.input.down) this.y += 5;
    });

    // items(apples)
    Apple = Class.create(Sprite,{
      initialize: function() {
        Sprite.call(this,16,16);
        this.image = core.assets['img/icon0.png'];
      }
    });

    apple1 = new Apple
    apple1.x = 0;
    apple1.y = 304;
    apple1.frame = 15;

    apple2 = new Apple
    apple2.x = 0;
    apple2.y = 288;
    apple2.frame = 15;

    apple3 = new Apple
    apple3.x = 0;
    apple3.y = 272;
    apple3.frame = 15;

    apple4 = new Apple
    apple4.x = 16;
    apple4.y = 304;
    apple4.frame = 15;

    apple5 = new Apple
    apple5.x = 16;
    apple5.y = 288;
    apple5.frame = 15;

    apple6 = new Apple
    apple6.x = 16;
    apple6.y = 272;
    apple6.frame = 15;

    apple7 = new Apple
    apple7.x = 32;
    apple7.y = 304;
    apple7.frame = 15;

    apple8 = new Apple
    apple8.x = 32;
    apple8.y = 288;
    apple8.frame = 15;

    apple9 = new Apple
    apple9.x = 32;
    apple9.y = 272;
    apple9.frame = 15;

     
    core.rootScene.addChild(background);
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
