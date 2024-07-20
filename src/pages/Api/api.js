const API_URL = "https://apiedukuk.vercel.app/videos";

// Para obtener todos los videos
export const fetchVideos = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching videos:", error);
    return [];
  }
};

// Para obtener un video específico por ID
export const fetchVideoById = async (id) => {
  try {
    const response = await fetch(`${API_URL}?id=${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    if (data.length > 0) {
      return data[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching video:", error);
    return null;
  }
};

//para crear un nuevo video
export const createVideo = async (video) => {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating video:", error);
    return null;
  }
};

//para actualizar un video

export const updateVideo = async (id, video) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(video),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating video:", error);
    return null;
  }
};

//para borrar un video

export const deleteVideo = async (id) => {
  try {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return true;
  } catch (error) {
    console.error("Error deleting video:", error);
    return false;
  }
};