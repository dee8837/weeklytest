function isPrime( n)
{
      if(n == 1 || n == 0) return false;
      for(var i = 2; i < n; i++)
      {
        if(n % i == 0) return false;
      }
      return true;
}

  const N = parseInt(prompt('Enter number: '));

  for(var i = 1; i <= N; i++)
  {
      // check if current number is prime
      if(isPrime(i)) {
        console.log( i );
      }
}