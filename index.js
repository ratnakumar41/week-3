function myfun(val,minv,maxv)
{
    var a=val.value;
    var b=minv;
    var c=maxv;
    if(a.length<b || a.length>c)
    {
        alert("enter a value greater than " +b+ "and lesser than "+c+ "values");
        return true;
    }
    else
    {
        alert("accepted");
        return false;
    }
}
