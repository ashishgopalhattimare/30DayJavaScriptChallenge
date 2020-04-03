const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

const randrgb = () => Math.floor(Math.random() * 200) + 50

function getDateAndTime()
{
  const date = new Date();

  const display = `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
  const time = document.getElementById('clock')
  
  time.innerHTML = display
  time.style.backgroundColor = `rgb(${randrgb()},${randrgb()},${randrgb()})`
}

const headTag = document.querySelector('h2')
const timeTag = document.getElementById('clock')
const ulList = document.querySelector('ul')
const liList = document.querySelectorAll('li')

headTag.style.textDecoration = 'underline'
headTag.style.textAlign      = 'center'

timeTag.style.fontSize   = '20px'
timeTag.style.textAlign  = 'center'
timeTag.style.width      = '30%'
timeTag.style.margin     = 'auto'
timeTag.style.padding    = '5px 5px 5px 5px'

getDateAndTime();
const timeFunc = setInterval(getDateAndTime, 1000)

ulList.style.paddingLeft = '0px'
ulList.style.textAlign   = 'center'
ulList.style.width       = '60%'
ulList.style.margin      = 'auto'

for(let i = 0; i < liList.length; i++)
{
  const text = liList[i].textContent
  let color = ''

  liList[i].style.padding       = '10px 10px 10px 10px'
  liList[i].style.listStyleType = 'none'
  liList[i].style.marginTop     = '3px'
  
  if(text.indexOf('Done') != -1)
  {
    color = 'green'
  }
  else if(text.indexOf('Ongoing') != -1)
  {
    color = 'yellow'
  }
  else
  {
    color = 'orange'
  }

  liList[i].style.backgroundColor = color
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
	<div class="wrapper">
        <h2>30DaysOfJavaScript Challenge</h2>
        
        <h2 id='clock'> </h2>

        <ul>
            <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>
        </ul>
    </div>

    <script src="day21.js"></script>
</body>
</html>
*/