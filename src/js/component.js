export const saludar = (nombre) => {

    const h1 = document.createElement("h1");
    h1.innerHTML = nombre;

    document.body.append(h1);

}