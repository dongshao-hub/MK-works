import './index.scss'

import logo from './logo.png'
import image from './happy.jpg'

console.log('hello webpack!')

var element = document.createElement('div')

// 将图像添加到我们现有的 div。
var img = document.createElement('img')
var img_logo = document.createElement('img')
img.src = image
img_logo.src = logo

element.appendChild(img)
element.appendChild(img_logo)

document.body.appendChild(element)
