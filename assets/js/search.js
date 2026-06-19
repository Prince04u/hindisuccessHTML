
(function(){
  var data = window.HSS_INDEX || [];
  var input = document.getElementById('site-search');
  var results = document.getElementById('search-results');
  if(!input || !results) return;
  function render(list){
    if(!list.length){results.innerHTML='<p>कोई परिणाम नहीं मिला। कृपया दूसरा कीवर्ड आज़माएँ।</p>';return;}
    results.innerHTML = '<div class="grid grid-3">'+list.map(function(a){
      return '<article class="card"><a href="'+a.url+'" class="thumb thumb-grad-'+a.g+'"><span class="thumb-fill">'+a.title+'</span></a><div class="body"><span class="tag outline">'+a.cat+'</span><h3 style="margin-top:10px"><a href="'+a.url+'">'+a.title+'</a></h3><p class="excerpt">'+a.excerpt+'</p></div></article>';
    }).join('')+'</div>';
  }
  function search(q){
    q=q.trim().toLowerCase();
    if(!q){render(data.slice(0,9));return;}
    render(data.filter(function(a){
      return a.title.toLowerCase().indexOf(q)>-1 || a.excerpt.toLowerCase().indexOf(q)>-1 || a.cat.toLowerCase().indexOf(q)>-1;
    }));
  }
  input.addEventListener('input',function(){search(input.value);});
  var qs = new URLSearchParams(location.search).get('q');
  if(qs){input.value=qs;search(qs);} else {render(data.slice(0,9));}
})();
