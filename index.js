    const text = document.getElementById('texto');
    const resultado = document.getElementById('resultado');
    const cont = document.querySelector('.cont');
    const copy=document.querySelector('.botonCopiar')

    function encriptar() {
        console.log(text.value);
        texto = text.value;
        console.log(texto.match(/[A-Z!@#$]/g));
        if (texto.match(/[A-Z!@#$]/g) !== null) {
            error();
        } else {
            console.log("Entro al else");
            let e = "enter", a = "ai", o = "ober", i = "imes", u = "ufat";
            let textoEncriptado = texto
                .replace(new RegExp("e", "gi"), e)
                .replace(new RegExp("i", "gi"), i)
                .replace(new RegExp("a", "gi"), a)
                .replace(new RegExp("o", "gi"), o)
                .replace(new RegExp("u", "gi"), u);

            console.log(textoEncriptado, "aaaa");
            cont.style.display = "none";
            resultado.style.display = "block";
            resultado.innerHTML = textoEncriptado;
        }
    }

    function desencriptar() {
        console.log(text.value);
        texto = text.value;
        console.log(texto.match(/[A-Z]/g));
        if (texto.match(/[A-Z]/g) != null) {
            error();
        } else {
            console.log("Entro al else");
            let enter = "e", ai = "a", ober = "o", imes = "i", ufat = "u";
            let textoDesencriptado = texto
                .replace(new RegExp("ober", "gi"), ober)
                .replace(new RegExp("imes", "gi"), imes)
                .replace(new RegExp("ai", "gi"), ai)
                .replace(new RegExp("ufat", "gi"), ufat)
                .replace(new RegExp("enter", "gi"), enter);
    
            console.log(textoDesencriptado, "aaaa");
            cont.style.display = "none";
            resultado.style.display = "block";
            resultado.innerHTML = textoDesencriptado;
        }
    }
    
    

    function error() {
        cont.style.display = "none";
        resultado.style.display = "block";
        resultado.innerHTML = "No se puede encriptar o desencriptar ya que tiene mayusculas o caracteres especiales";
    }

    copy.addEventListener('click', copiarAlPortapapeles);

    async function copiarAlPortapapeles() {
        try {
            console.log(resultado)
            await navigator.clipboard.writeText(resultado.innerText);
            console.log('Contenido copiado al portapapeles');
        } catch (err) {
            console.error('Error al copiar: ', err);
        }
    }