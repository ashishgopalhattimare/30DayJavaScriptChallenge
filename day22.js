function styleNumber(li)
{
    li.style.color       = 'white'
    li.style.fontWeight  = 'bold'
    li.style.fontSize    = '30px'
    li.style.fontFamily  = 'Consolas'

    li.style.display     = 'inline-block'
    li.style.boxSizing   = 'border-box'

    li.style.padding     = '20px 0px 20px 0px'
    li.style.borderStyle = 'solid'
    li.style.height      = '80px'
    li.style.width       = '80px'

    li.style.margin = '0px'
}

const headTag = document.querySelector('h2')

headTag.style.textDecoration = 'underline'
headTag.style.textAlign      = 'center'
headTag.style.fontSize       = '30px'

function isPrime(num)
{
    if(num == 1) return false;

    for(let i = 2; i < num; i++) {
        if(num % i == 0)
        return false
    }
    return true;
}

for(let i = 0; i < 10; i++) {

    let ul = document.createElement('ul');
    ul.style.textAlign = 'center'
    ul.style.padding = '0px'
    ul.style.margin = '0px'

    for(let j = 1; j <= 10; j++) {

        let color = 'green' // default green
        const num = 10*i + j

        if(num == 1) color = 'black'
        else if(isPrime(num))
            color = 'red'
        else if(num % 2 == 1)
            color = 'orange'

        let li = document.createElement('li')
        li.style.backgroundColor = color
        li.textContent = num
        styleNumber(li)

        ul.appendChild(li)
    }
    document.body.appendChild(ul)
}

/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>30DaysOfJavaScript</title>
  
</head>
<body> 
	<h2>Number Generator</h2>

    <script src="day22.js"></script>
</body>
</html>
*/