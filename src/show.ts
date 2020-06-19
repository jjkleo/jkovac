export function show(content:String){
  var a=window.document.getElementById('app');
  if(a!=null)
  a.innerText='Hello,'+content;
}