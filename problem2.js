///Get the file extension from a filename


const getFileExtension = (str) => str.slice(str.lastIndexOf('.'))
console.log(getFileExtension('index.html'))
console.log(getFileExtension('image.jpeg'))