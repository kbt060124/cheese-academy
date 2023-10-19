// jsを記述する際はここに記載していく
//画像の設定

// var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
//   if (windowwidth > 768){
//       var responsiveImage = [//PC用の画像
//         { src: '../img/slide_01.jpg'},
//         { src: '../img/slide_02.jpg'},
//         { src: '../img/slide_03.jpg'},
//         { src: '../img/slide_04.jpg'}
//       ];

//       var responsiveStr =[
//         { text: "<p>Text for slider 1.</p>"},
//         { text: "<p>Text for slider 2.</p>"},
//         { text: "<p>Text for slider 2.</p>"},
//         { text: "<p>Text for slider 2.</p>"}
//       ];
//     } else {
//       var responsiveImage = [//タブレットサイズ（768px）以下用の画像
//         { src: '../img/course_01.jpg'},
//         { src: '../img/course_02.jpg'},
//         { src: '../img/course_03.jpg'}
//       ];
//     }

//Vegas全体の設定

// $('#hero--slider').vegas({
//   overlay: true,
//   transition: ['fade2'],
//   transitionDuration: 2000,
//   delay: 5000,
//   animationDuration: 20000,
//   animation: 'random',
//   slides: [ responsiveImage, responsiveStr ],
//   walk: function (index, slideSettings) {
//       $('#vegasSliderInner').html(slideSettings.text);
//   }
// });


$('#hero--slider').vegas({
  overlay: true,
  transition: ['fade2'],
  transitionDuration: 2000,
  delay: 5000,
  animationDuration: 20000,
  animation: 'random',
  slides: [
    { src: '../img/slide_01.jpg', text: "<h1>With cheese</h1><h2>チーズと共に</h2>" },
    { src: '../img/slide_02.jpg', text: "<h3>For the world</h3><h4>世界のために</h4>" },
    { src: '../img/slide_03.jpg', text: "<h5>For myself</h5><h6>己のために</h6>" },
    { src: '../img/slide_04.jpg', text: "<dl>Be muscular</dl><p>マッチョであれ</p>" },
  ],
  timer:false,// プログレスバーを非表示したい場合はこのコメントアウトを外してください
  walk: function (index, slideSettings) {
      $('#vegasSliderInner').html(slideSettings.text);
  }
});

//logoの表示
$(window).on('load',function(){
  $("#splash").delay(2000).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#splash_logo").delay(1500).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});
