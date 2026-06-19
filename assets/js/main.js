
(function(){
  // theme
  var saved = localStorage.getItem('hss-theme');
  if(saved){document.documentElement.setAttribute('data-theme',saved);}
  var tBtn = document.querySelector('[data-theme-toggle]');
  if(tBtn){tBtn.addEventListener('click',function(){
    var cur = document.documentElement.getAttribute('data-theme');
    var next = cur==='dark'?'':'dark';
    if(next){document.documentElement.setAttribute('data-theme',next);}
    else{document.documentElement.removeAttribute('data-theme');}
    localStorage.setItem('hss-theme',next);
  });}

  // mobile menu
  var mBtn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav-main');
  if(mBtn && nav){mBtn.addEventListener('click',function(){nav.classList.toggle('open');});}

  // progress bar
  var bar = document.querySelector('.progress-bar');
  if(bar){
    window.addEventListener('scroll',function(){
      var h = document.documentElement;
      var pct = (h.scrollTop)/(h.scrollHeight-h.clientHeight)*100;
      bar.style.width = pct+'%';
    },{passive:true});
  }

  // back to top
  var tt = document.querySelector('.to-top');
  if(tt){
    window.addEventListener('scroll',function(){
      if(window.scrollY>500) tt.classList.add('show');
      else tt.classList.remove('show');
    },{passive:true});
    tt.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
  }

  // load more (homepage)
  var more = document.querySelector('[data-load-more]');
  if(more){
    more.addEventListener('click',function(){
      document.querySelectorAll('[data-extra]').forEach(function(el){el.style.display='flex';});
      more.style.display='none';
    });
  }

  // newsletter
  document.querySelectorAll('form[data-newsletter]').forEach(function(f){
    f.addEventListener('submit',function(e){e.preventDefault();
      var msg = f.querySelector('.msg'); if(msg) msg.textContent='✓ धन्यवाद! आपकी सदस्यता पंजीकृत हो गई है।';
      f.reset();
    });
  });

  // contact
  var cf = document.querySelector('form[data-contact]');
  if(cf){cf.addEventListener('submit',function(e){e.preventDefault();
    alert('धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है।'); cf.reset();
  });}
})();
