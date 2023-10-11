import db from "../firebase.js";


export async function createItem(collectionName, item) {
  try {
    const response = await db.collection(collectionName).add(item);
    return response.id;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating item");
  }
}

//lectura del formulario
const createForm = document.getElementById("create-form");
createForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const pb = document.querySelectorAll(".form");
  console.log(pb[0].value);
  const nombre = pb[0].value;
  const correo = pb[1].value;
  const user = pb[2].value;
  const pass = pb[3].value;
  const createItemPromise = createItem("usuario", { nombre, correo, user, pass });

  try {
    await Promise.all([createItemPromise]);
    console.log("Se han guardado correctamente.");
    createForm.reset();
  } catch (error) {
    console.error("Error al guardar los datos:", error);
  }
});


