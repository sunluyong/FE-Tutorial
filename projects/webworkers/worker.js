function calc(n){
    var result=[];
    for(var i=1;i<10000;i++){
        var tem=i;
        if(i%n==0){
            if(i%(10*n)==0){
                tem+='<br/>';
            }
            result.push(tem);
        }
    }

    self.postMessage(result.join(' '));
    self.close();
}

onmessage = function(e){
    calc(e.data.n);
};
