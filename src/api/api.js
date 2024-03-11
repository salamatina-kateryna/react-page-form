const API_URL = "https://frontend-test-assignment-api.abz.agency/api/v1";

const getData = async (page = 1) => {
  try {
    const response = await fetch(`${API_URL}/users?page=${page}&count=6`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default getData;
