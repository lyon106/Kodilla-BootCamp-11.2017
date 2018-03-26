function sum_pairs(ints, s){
    var out = [];
    var l = 0;
    var x = ints.length;
    var max = ints.reduce(function(a, b) {
        return Math.max(a, b);
      });
    var min = ints.reduce(function(a, b) {
    return Math.min(a, b);
    });
    if(min>s) {
        return undefined;
    }
    for(var i=0; i<x; i++) {
      for(var j=1; j<x; j++) {
        if(ints[i]+ints[j] == s && i<j) {
          if(j-i == 1) {
            return [ints[i],ints[j]];
          }
          if(out.indexOf([ints[i],ints[j]]) == -1) {
            out[l]=[ints[i],ints[j],j-i];
            l += 1;
          }
        }
      }
    }
    var smallest = indexOfSmallest(out);
    if (out[smallest] != undefined) {
      return [out[smallest][0],out[smallest][1]];
      } else {
      return undefined;
      }
};
  
function indexOfSmallest(a) {
    var lowest = 0;
    for (var i = 0; i < a.length; i++) {
        if (a[i][2] < a[lowest][2]) lowest = i;
    }
    return lowest;
}