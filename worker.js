self.onmessage=function(message){
    console.log(message)
    let sum = 0
    for(let i=1;i<10000000000;i++){
        sum+=i
    }
    self.postMessage(sum)
} 
