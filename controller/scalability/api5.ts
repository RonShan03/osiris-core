//Define a function in typescript
//API5
function getAutoScalingStatus() : string{
    // Hard coded data, don't actually know how to check auto-scaling
    // let usage: {[key: string]: number}= getCurrentLoad();
    // let cpu_usage: number= usage["cpu_usage"];
    // let memory_usage: number= usage["memory_usage"];
    let status: string= "enabled";

    return "auto_scaling: ${status}" ;
}
