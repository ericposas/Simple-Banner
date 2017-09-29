window.addEventListener('load',start);
function start(){
  var adEnded;
  var b=document.getElementsByClassName('border')[0];
  b.addEventListener('click',openClickTag.bind(b));
  b.addEventListener('mouseover',hover.bind(b));
  b.addEventListener('mouseout',hoverOut.bind(b));
  function openClickTag(){
    open(clickTag,'_blank');
  }
  function hover(){
    if(adEnded==true){
      TweenLite.to('.cta',0.35,{scale:1.1});
      b.classList.add('darken');
    }
  }
  function hoverOut(){
    if(adEnded==true){
      TweenLite.to('.cta',0.35,{scale:1});
      b.classList.remove('darken');
    }
  }
  //animate 
  var tlite=new TimelineLite();
  tlite.from('.t1',1,{x:-300})
  .from('.t2',1,{x:-300},"+0.2")
  .from('.cta',1,{scale:0,ease:Back.easeOut,onComplete:adEnd});
  function adEnd(){
    adEnded=true;
  }
}