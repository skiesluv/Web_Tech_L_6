function ds()
{
    var r = document.form1.a.value;
    var elements = document.getElementsByTagName('input');
    var R;
    for(var i=1; i < elements.length; i++){
    if(elements[i].checked){
    switch (elements[i].id) {
    case 'l':
    R = 2 * 3.14 * r;
    break;
    case 's':
    R = 3.14 * r*r;
    break;
    case 'v':
    R = (4 / 3) * 3.14 * r;
    break;
    case 'kv':
    R = r * r;
    break;
    case 'kr':
    R = 3.14 * r*r;
    break;
    case 'tr':
    R = 0.5 * r*r;
    break;
    default: } } }
    document.getElementById('res').value = R;
}
