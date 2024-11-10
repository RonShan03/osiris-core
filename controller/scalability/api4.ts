import fetch from 'node-fetch'; // Importing node-fetch for HTTP requests in Node.js

// Define types for the response data
interface Container {
    id: string;
    cpu_usage: number;
    memory_usage: number;
}

interface GetActiveInstancesResponse {
    containers: Container[];
}

// Define the structure of each active instance that we will return
interface ActiveInstance {
    instance_id: string;
    cpu_usage: number;
    memory_usage: number;
}

async function getActiveInstances(): Promise<ActiveInstance[]> {
    const apiUrl = "https://api.osirisplatform.com/containers/active"; //generic API endpoint

    try {
        // GET request
        const response = await fetch(apiUrl);
        
        // confirm status 200
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        // Parse JSON
        const data: GetActiveInstancesResponse = await response.json();
        
        // Return relevant data
        const activeInstances: ActiveInstance[] = data.containers.map(instance => ({
            instance_id: instance.id,
            cpu_usage: instance.cpu_usage,
            memory_usage: instance.memory_usage
        }));

        return activeInstances;

    } catch (error: any) {
        // Handle errors
        console.error(`Error: ${error.message}`);
        return [];
    }
}


getActiveInstances().then(instances => {
    console.log(instances); // Log active container instances
});
