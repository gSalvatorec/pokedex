const contenido=document.querySelector('.contenedor-pokedex');

 function obtenerPokemon(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    .then(lista=>{
        return  lista.json();
    }).then(PokemonLista=>{
        // console.log(PokemonLista);

        const {results}=PokemonLista;
        results.forEach(datosP => {
            // console.log(datosP.name);
            // console.log(datosP.url);
            fetch(datosP.url).then(datosPoke=>{
                return datosPoke.json();
            }).then(datos=>{
                // console.log(datos);
                const {name,order,sprites,species}=datos;
                // console.log(name);
                // console.log(order);
                // console.log(sprites.front_default);
                // console.log(sprites.front_shiny)
                fetch(species.url)
                .then(texto=>{
                    return texto.json();
                }).then(pokeText=>{
                    // console.log(pokeText);
                    const {flavor_text_entries}=pokeText;
                    // console.log(flavor_text_entries);
                    for(let i=0;i<=0;i++){
                        //Creando todo el cuadrito
                        const contenedor=document.createElement('div'),
                        pokedexT=document.createElement('div'),
                        datosP=document.createElement('div'),
                        nombre=document.createElement('div'),
                        parrafoPkd=document.createElement('p'),
                        imgPkd=document.createElement('img'),
                        numPkd=document.createElement('span'),
                        texto=document.createElement('p'),
                        imagenes=document.createElement('div'),
                        imgN=document.createElement('img'),
                        imgS=document.createElement('img');

                        //Agregando estilos
                        contenedor.classList.add('contenido-pokedex');
                        pokedexT.classList.add('pokedex-texto');
                        datosP.classList.add('datos-poke');
                        nombre.classList.add('nombre');
                        parrafoPkd.classList.add('pokedex');
                        numPkd.classList.add('num_poke');
                        texto.classList.add('texto');
                        imagenes.classList.add('imagenes');
                        //agregando contenido
                        nombre.textContent="Nombre: "+name;
                        numPkd.textContent=order;
                        imgPkd.src="https://img.icons8.com/color/48/000000/pokeball-2.png";
                        flavor_text_entries.forEach(text=>{
                            if(text.language.name==="es"){                
                                // console.log(text.flavor_text);
                                const {flavor_text}=text;
                                // console.log(flavor_text);
                                if(flavor_text){
                                    // console.log(flavor_text);
                                    texto.textContent=flavor_text;
                                }
                            }
                        });
                        imgN.src=sprites.front_default;
                        imgS.src=sprites.front_shiny;
                        //Agregando a pantalla
                        datosP.appendChild(nombre);
                        parrafoPkd.appendChild(imgPkd);
                        parrafoPkd.appendChild(numPkd);
                        datosP.appendChild(parrafoPkd)
                        pokedexT.appendChild(datosP);
                        pokedexT.appendChild(texto);
                        imagenes.appendChild(imgN);
                        imagenes.appendChild(imgS);
                        contenedor.appendChild(pokedexT);
                        contenedor.appendChild(imagenes);
                        contenido.appendChild(contenedor);
                    }
                })
            });
        });
    })
}

obtenerPokemon();