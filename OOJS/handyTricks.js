// multiple time we have a problem then we check if returned number is positive, where 0 is included. 
// use the bitwise operator `-~` to increase number by 1 to allways pass the compare statment.

// Example: 
```
var a = 0; 

if (-~a) { 
  console.log('ok') 
}
```
