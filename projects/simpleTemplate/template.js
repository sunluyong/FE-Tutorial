function tmpl(id, data){
  var html=document.getElementById(id).innerHTML;
  var result = '';

  for(key in data){
  	result += 'var '+ key +' = obj["'+ key +'"];';
  }

  result += "var p='';p+='"
      +html.replace(/[\r\n\t]/g," ")
      .replace(/<%=(.*?)%>/g,"'+$1+'")
      .replace(/<%/g,"';")
      .replace(/%>/g,"p+='")
      +"';return p;";

  var fn = new Function("obj", result);
  return fn(data);
}

function tmpl2(id, data){
  var html=document.getElementById(id).innerHTML;
  var result = '';

  for(key in data){
  	result += 'var '+ key +' = this["'+ key +'"];';
  }

  result += "var p='';p+='"
      +html.replace(/[\r\n\t]/g," ")
      .replace(/<%=(.*?)%>/g,"'+$1+'")
      .replace(/<%/g,"';")
      .replace(/%>/g,"p+='")
      +"';return p;";

  var fn = new Function("obj", result);
  return fn.call(data);
}
