// fibonacci series
   var num =prompt("enter the numbr");
   num =parseInt(num);
   var a=0;
   var b=1;
   var c=0;
   var count =2;
   console.log(a);
   console.log(b);
   while(count<num)
   {
   c =a+b;
   a=b;
   b=c;
   console.log(c);
   count++;
   }



  