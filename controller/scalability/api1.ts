//unsure how to get the metrics from osiris will have to figure it out

interface LoadMetrics {
    cpu_usage: number;
    memory_usage: number;
  }
  
  function getCurrentLoad(): LoadMetrics {
    return {
      cpu_usage: 45.0,
      memory_usage: 70.5
    };
  }