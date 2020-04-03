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
    li.style.margin      = '0px'
}

const headTag = document.querySelector('h2')
const input   = document.getElementById('nums')
const button  = document.getElementById('button')
const divTag  = document.getElementById('container')

headTag.style.textDecoration = 'underline'
headTag.style.textAlign      = 'center'
headTag.style.fontSize       = '30px'

divTag.style.textAlign = 'center'
divTag.style.margin    = '10px'

input.style.width       = '602px'
input.style.height      = '35px'
input.style.paddingLeft = '7px'
input.style.fontSize    = '17px'
input.style.borderColor = 'black'

button.style.width           = '180px'
button.style.height          = '41px'
button.style.fontSize        = '17px'
button.style.fontWeight      = 'bold'
button.style.color           = 'white'
button.style.borderColor     = 'green'
button.style.backgroundColor = 'green'

button.addEventListener('click', event => {
    try {
        const input = document.getElementById('nums')
        const num = parseInt(input.value)

        if(isNaN(num)) {
            input['placeholder'] = 'Enter an Integer Value'
            input.value = "" // reset field
        }
        else { // the input is a valid number
            
            input['placeholder'] = 'Generate more numbers...'
            if(num <= 9999)
            {
                // Remove the elements from the table
                const ulList = document.querySelectorAll('ul')
                for( const ul of ulList)
                    if(ul.className == 'table')
                    document.body.removeChild(ul)

                generateTable(num)
            }
            else {
                input['placeholder'] = 'Integer should be between 1-9999'
                input.value = "" // reset field
            }
        }
    }
    catch(error) {}
})

function isPrime(num)
{
    if(num == 1) return false;

    for(let i = 2; i < num; i++) {
        if(num % i == 0)
        return false
    }
    return true;
}

function generateTable(limit)
{
    let num = 1
    while(num <= limit)
    {
        let ul = document.createElement('ul');
        ul.className = 'table'
        ul.style.textAlign = 'center'
        ul.style.padding   = '0px'
        ul.style.margin    = '0px'
    
        for(let j = 0; j < 10; j++) {
    
            let color = 'green' // default green
            if(num <= limit) {
                if(num == 1) color = 'black'
                else if(isPrime(num))
                    color = 'red'
                else if(num % 2 == 1) color = 'orange'
            }
            else color = 'white'
    
            let li = document.createElement('li')
            li.style.backgroundColor = color
            li.textContent = num++
            styleNumber(li)
    
            ul.appendChild(li)
        }
        document.body.appendChild(ul)
    }
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

	<div id="container">
		<input type="text" id = "nums" placeholder="Generate more numbers...">
		<button id = "button">Generate Numbers</button>
	</div>

    <script src="day23.js"></script>
</body>
</html>
*/