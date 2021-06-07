var xmlns = "http://www.w3.org/2000/svg",
  xlinkns = "http://www.w3.org/1999/xlink",
  select = function(s) {
    return document.querySelector(s);
  },
  selectAll = function(s) {
    return document.querySelectorAll(s);
  },
    swatchEase = CustomEase.create('swatch','M0,0 C0.982,-0.526 0.702,0.878 1,1')
  

TweenMax.set('svg', {
  visibility: 'visible'
})

TweenMax.set(['.greenSwatch', '.redSwatch', '.yellowSwatch'],{
 autoAlpha:0
 
})
var tl = new TimelineMax({repeat:-1});
tl.from('.pulse', 1, {
 fill:'#F9F7F3',
 attr:{
  r:50
 },
 alpha:0,
 ease:Expo.easeIn
})
 .from('.blueSwatchMask', 1.6, {
 //y:380,
 attr:{
  r:0
 },
 ease:Expo.easeIn
},'-=0.8')
/* .staggerFrom('.blueSwatch rect', 0.6, {
 attr:{
  width:0
 },
 ease:Power2.easeInOut
 //x:112
},0.1,'-=0.3') */
.set(['.greenSwatch', '.redSwatch', '.yellowSwatch'],{
 autoAlpha:1
},'-=0')
.staggerTo(['.blueSwatch', '.yellowSwatch', '.greenSwatch', '.redSwatch'], 1,{
 cycle:{
  rotation:[-85, -60, -35, -10]
 },
 svgOrigin:'578 455',
 ease:swatchEase
},0.1,'-=0')
.from('.bgDrop', 0.5, {
 alpha:0
})
.staggerFrom('.blueSwatch rect', 0.6, {
 attr:{
  height:0
 },
 y:64,
 ease:Power2.easeInOut
 //x:112
},0.061,'-=1.5')
.staggerFrom('.yellowSwatch rect', 0.6, {
 attr:{
  height:0
 },
 y:64,
 ease:Power2.easeInOut
 //x:112
},0.1,'-=1.2')
.staggerFrom('.greenSwatch rect', 0.6, {
 attr:{
  height:0
 },
 y:64,
 ease:Power2.easeInOut
 //x:112
},0.1,'-=1.2')
.staggerFrom('.redSwatch rect', 0.6, {
 attr:{
  height:0
 },
 y:64,
 ease:Power2.easeInOut
 //x:112
},0.1,'-=1.2')


///////////////////

.staggerTo('.blueSwatch rect', 0.6, {
 attr:{
  height:0
 },
 y:0,
 ease:Expo.easeInOut//,
 //x:112
},0.1,'+=1.5')
.staggerTo('.yellowSwatch rect', 0.6, {
 attr:{
  height:0
 },
 y:0,
 ease:Expo.easeInOut//,
 //x:112
},0.1,'-=0.8')
.staggerTo('.greenSwatch rect', 0.6, {
 attr:{
 height:0
 },
 y:0,
 ease:Expo.easeInOut//,
 //x:112
},0.1,'-=0.8')
.staggerTo('.redSwatch rect', 0.6, {
 attr:{
  height:0
 },
 y:0,
 ease:Expo.easeInOut//,
 //x:112
},0.1,'-=0.8')
.staggerTo(['.redSwatch', '.greenSwatch','.yellowSwatch', '.blueSwatch' ], 1,{
 cycle:{
  rotation:[0]
 },
 svgOrigin:'578 455',
 ease:Anticipate.easeOut
},0.1,'-=1.04')
.to('.blueSwatchMask', 1, {
 //y:380,
 attr:{
  r:0
 },
 ease:Power4.easeIn
},'-=0.5')
.set(['.greenSwatch', '.redSwatch', '.yellowSwatch'],{
 autoAlpha:0
},'-=0.56')
.to('.bgDrop', 0.5, {
 alpha:0
},'-=2')
.to('.pulse', 2, {
 attr:{
  r:0
 },
 strokeWidth:80,
 alpha:0
})

//TweenMax.globalTimeScale(0.5)
//ScrubGSAPTimeline(tl);