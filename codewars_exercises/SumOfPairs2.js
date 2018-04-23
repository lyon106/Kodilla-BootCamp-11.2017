/*
var sum_pairs = function (array, s) {
    var a, i,
        hash = Object.create(null);

    for (i = 0; i < array.length; i++) {
        a = array[i];
        if (hash[s - a]) {
            return [s - a, a];
        }
        if (!hash[a]) {
            hash[a] = true;
        }
    }
};
*/
var sum_pairs=function(ints, s){
    var seen = {}
    for (var i = 0; i < ints.length; ++i) {
        console.log(seen);
        console.log(ints[i]);
        console.log(i);
      if (seen[s - ints[i]]) return [s - ints[i], ints[i]];
      seen[ints[i]] = true
    }
  }