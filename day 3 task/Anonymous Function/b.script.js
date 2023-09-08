var str="rocky";
 var titlecase=function(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(1).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
}
console.log(str);
    




