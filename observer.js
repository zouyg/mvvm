function observer(data) {
    if(!data || typeof data !== 'object')  return
    for(var key in data){
        let val = data[key]
        Object.defineProperty(data, key, {
            enumerable: true,
            configurable: true,
            get(){
                console.log(`get ${val}`)
                return val
            },
            set(newVal){
                if(newVal !== val){
                    console.log(`change value ${val} => ${newVal}`)
                    val = newVal
                } 
            }
        })
        if(typeof val === 'object'){
            observe(val)
        }
    }
}

var data = {
    name: 'eric',
    friends: ['tom', 'jack', 'tracy']
}

observe(data)

console.log(data.name)
data.name = 'winfree'
data.friends[0] = 'seeman'