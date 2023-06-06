const getFigureById = async (id) => {
  const url = `http://localhost:8080/${id}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

const getFiguresByCategory = async (category) => {
  const url = `http://localhost:8080/category/${category}`;
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

const getFiguresByDeathDate = async () => {
  const url = "http://localhost:8080/dead";
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

const getAllAlive = async () => {
  const url = "http://localhost:8080/alive";
  const result = await fetch(url);
  const data = await result.json();
  return data;
};

const updateFigure = async (id, newFigure) => {
  const url = `http://localhost:8080/${id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newFigure),
  });
  if (response.status === 204) {
    // Figure updated successfully
    return true;
  } else {
    // Handle error case
    throw new Error("Failed to update figure");
  }
};

const deleteFigureById = async (id) => {
  const url = `http://localhost:8080/${id}`;
  const response = await fetch(url, {
    method: "DELETE",
  });
  if (response.status === 204) {
    // Figure deleted successfully
    return true;
  } else {
    // Handle error case
    throw new Error("Failed to delete figure");
  }
};

const createFigure = async (figure) => {
  const url = "http://localhost:8080/figures";
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(figure),
  });
  if (response.status === 201) {
    const data = await response.json();
    return data;
  } else {
    // Handle error case
    throw new Error("Failed to create figure");
  }
};
