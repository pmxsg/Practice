function nightButton(self){
    var bodys = document.querySelector('body')
    if(self.value === 'night'){
      bodys.style.backgroundColor = 'black';
      bodys.style.color = 'white';
      self.value = 'day';
  
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = 'yellow';
        i = i + 1;
      }
    } else {
      bodys.style.backgroundColor = 'white';
      bodys.style.color = 'black';
      self.value = 'night';
  
      var alist = document.querySelectorAll('a');
      var i = 0;
      while(i < alist.length){
        alist[i].style.color = 'blue';
        i = i + 1; 
      }
    }
  
  }