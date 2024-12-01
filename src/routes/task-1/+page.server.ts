import type { PageServerLoad } from "./$types";
import Database from 'better-sqlite3';

export const load: PageServerLoad = async () => {
  try {
    // Initialize the database connection
    const db = new Database('./database/main.db');

    // Define the SQL query
    const query = `
      SELECT 
          a.id AS artist_id, 
          a.name AS artist_name
      FROM 
          artists a
    `;

    // Execute the query
    const data = db.prepare(query).all();

    // Format the output
    const formattedData = data.map(({ artist_id, artist_name }) => `${artist_id}, ${artist_name}`);

    // Log the formatted data to the terminal
    console.log("Formatted Output:");
    formattedData.forEach((line) => console.log(line));

    // Return the data to the frontend
    return {
      artistVisits: formattedData, // Return the raw data for the frontend
    };
  } catch (error) {
    console.error("Error loading artist data:", error);
    return {
      artistVisits: [],
      error: "Failed to load artist data.",
    };
  }
};
