// src/terrain.js

class Terrain {
    constructor(size, tileSize) {
        this.size = size;
        this.tileSize = tileSize;
        this.tiles = this.generateTerrain();
    }

    // Generate a 2D array to represent the terrain
    generateTerrain() {
        const terrain = [];
        for (let x = 0; x < this.size; x++) {
            terrain[x] = [];
            for (let y = 0; y < this.size; y++) {
                terrain[x][y] = this.generateTile(x, y);
            }
        }
        return terrain;
    }

    // Generate a single tile based on its coordinates
    generateTile(x, y) {
        // Example tile generation logic (Perlin noise or random height)
        const height = Math.floor(Math.random() * 100); // Replace with noise function in production
        return {
            x: x * this.tileSize,
            y: y * this.tileSize,
            height: height
        };
    }

    // Method to display the terrain (for testing purposes)
    displayTerrain() {
        console.table(this.tiles);
    }
}

// Example usage
const terrain = new Terrain(10, 1); // 10x10 terrain with tile size 1
terrain.displayTerrain();