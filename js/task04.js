const circleRadius = prompt('What is the circle radius?')
const circleArea = Math.PI * circleRadius ** 2;

if (circleRadius <= 0) alert('The radius cannot be negative or equaled to 0')
else alert('The area of the circle is ' + circleArea);