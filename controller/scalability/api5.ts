//Define a function in typescript
//API5

let cpu_threshold: number;
let memory_threshold: number;

function getAutoScalingStatus() : string{
    /*
    Problem: Implement the getAutoScalingStatus API to check if the auto-scaling feature is enabled or disabled.

    Description: The function getAutoScalingStatus returns whether the auto-scaling feature is currently enabled or disabled on the platform.

    Output: A string indicating whether auto-scaling is "enabled" or "disabled".
    */
    // Hard coded data

    let usage: {[key: string]: number}= getCurrentLoad();
    let cpu_usage: number= usage["cpu_usage"];
    let memory_usage: number= usage["memory_usage"];

    let status: string;

    if (cpu_usage > cpu_threshold || memory_usage > memory_threshold){
        status= "enabled";
    }
    else{
        status= "disabled";
    }

    return "auto_scaling: ${status}" ;
}
