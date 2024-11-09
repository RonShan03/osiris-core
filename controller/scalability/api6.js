//Implementation of API 6 for Controller Scalability
function setAutoScalingThreshold(cpu_threshold, memory_threshold) {
    // Check if the input parameters are valid percentages (between 0 and 100).
    // Can be altered based on required performance

    let maxMemoryThreshold = 100
    let maxCpuThreshold = 100

    if (typeof cpu_threshold !== "number" || typeof memory_threshold !== "number" ||
        cpu_threshold < 0 || cpu_threshold > maxCpuThreshold || memory_threshold < 0 || memory_threshold > maxMemoryThreshold) {
        return false;
    }

    // Test response: Apply the thresholds and assume successful application
    const config = {
        cpuThreshold: cpu_threshold,
        memoryThreshold: memory_threshold
    };

    console.log("Auto-Scaling thresholds set:", config);
    return true;
}

/*// Test the function with hard-coded data
const result = setAutoScalingThreshold(80.0, 75.0);*/
console.log("Result:", result); // Expected output: Result: true
