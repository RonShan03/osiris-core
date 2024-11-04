
//hard coded data
/*
let instances = [
    { instance_id: "i-12345", cpu_usage: 50.0, memory_usage: 45.0 },
    { instance_id: "i-67890", cpu_usage: 40.0, memory_usage: 35.0 },
    { instance_id: "i-54321", cpu_usage: 70.0, memory_usage: 40.0 }
];
*/
function scaleDownInstances(instance_count){
    if (instances.length === 0){
        return false;
    }
    while(instance_count > 0 ){
     instances.pop();   
     instance_count--;
    }

    return instance_count === 0;
}

console.log(scaleDownInstances(0));  
console.log(instances);   