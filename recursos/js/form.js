const miform = document.querySelector("#miformulario");

miform.addEventListener("submit", manejadorEnvios);

async function manejadorEnvios(e) {
    e.preventDefault();
    if (validarCampos()) {
        return;
    }
    const form = new FormData(this);

    const respuesta = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            Accept: "application/json",
        },
    });

    if (respuesta.ok) {
        this.reset();
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Gracias por contactarme, te escribiré pronto.",
            showConfirmButton: false,
            timer: 5000,
        });
    }
}

const campos = document.querySelectorAll(".micontacto-campo");
// const campo = document.querySelector(".micontacto-campo");
    campos.forEach((campo) => {
        campo.addEventListener("blur", () => {
            validarCampo(campo);
        })
    });

function validarCampos() {
    campos.forEach((campo) => {
        if(!validarCampo(campo)) {
            return false;
        }
    });
    return true;
}

function validarCampo(campo) {
    if (campo.value === "") {
        campo.classList.add("invalido");
        campo.nextElementSibling.classList.add("invalido");
        campo.nextElementSibling.innerHTML =
            "El anterior campo no debe estar vacio";
        return false;
    }
    if (
        campo.classList.contains("campo_texto") &&
        !campo.value.match(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/)
    ) {
        campo.classList.add("invalido");
        campo.nextElementSibling.classList.add("invalido");
        campo.nextElementSibling.innerHTML = "Solo se permite texto";
        return false;
    }
    if (
        campo.classList.contains("campo_email") &&
        !campo.value.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
        campo.classList.add("invalido");
        campo.nextElementSibling.classList.add("invalido");
        campo.nextElementSibling.innerHTML = "Formato de correo invalido";
        return false;
    }
    if (
        campo.classList.contains("campo_numeros") &&
        !campo.value.match(/^[0-9]+$/)
    ) {
        campo.classList.add("invalido");
        campo.nextElementSibling.classList.add("invalido");
        campo.nextElementSibling.innerHTML = "Solo se permite números";
        return false;
    }
    if (
        campo.classList.contains("campo_todo") &&
        !campo.value.match(/^[0-9A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/)
    ) {
        campo.classList.add("invalido");
        campo.nextElementSibling.classList.add("invalido");
        campo.nextElementSibling.innerHTML =
            "No se permiten caracteres especiales";
        return false;
    }
    campo.classList.remove("invalido");
    campo.nextElementSibling.classList.remove("invalido");
    campo.nextElementSibling.innerHTML = "";
    return true;
}