  (function(){
  function valueFoundInRow(val, tr) {
    //regular text match
    if (tr.toLowerCase().indexOf(val.toLowerCase()) > -1) return true;
   //phone number match
    var phoneVal = val.replace(/[-)+ (]/g, ''),
        phoneTr = tr.replace(/[-)+ (]/g, '');
    if (phoneTr.indexOf(phoneVal) > -1) return true;
    //date match
    if (val.match(/\d+/)) {
      valArr = val.split('/');
      valArr = valArr.map(function(n){
        if (n[0] == '0') 
          return n[1];
        else
          return n
      });
      
      val = valArr.join('/');
      if (tr.indexOf(val) > -1) return true
    } 
    //no match
    return false;
  }
  
  //works for single table on page
  var srcBr = document.getElementById('searchBar'),
      tbody = document.getElementById('searchable_tbody'),
      trs = tbody.getElementsByTagName('tr');

  srcBr.addEventListener('input', function(){
    var val = this.value;

    for (var i = trs.length-1; i >=0; i--){
      var tr = trs[i].innerText;
      if (valueFoundInRow(val, tr)) {
        trs[i].style.display = 'table-row'
      } else {
        trs[i].style.display = 'none'
      }
    }
  });
}());