const artists = [
 {name:"Artemisia Gentileschi",years:"1593–c.1654",move:"Barroco",region:"Europa",class:"a1",keywords:"Italia mujeres barroco caravaggio pintura historia",visual:"https://upload.wikimedia.org/wikipedia/commons/3/32/Artemisia_Gentileschi_Selfportrait_Martyr.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original",bio:"Pintora italiana del barroco. Alcanzó reconocimiento profesional y desarrolló grandes composiciones históricas, religiosas y mitológicas, en un periodo en el que las mujeres enfrentaban fuertes barreras para acceder a la formación y a las redes artísticas.",why:"Su trayectoria permite estudiar el acceso de las mujeres a la educación artística, el reconocimiento profesional y la representación de figuras femeninas con agencia."},
 {name:"Berthe Morisot",years:"1841–1895",move:"Impresionismo",region:"Europa",class:"a2",keywords:"Francia impresionismo modernidad mujer",visual:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTORy21vcaDThvStdB_Mz-GpOKGRMpttJa8KwsuAzLEJ7oHvaJAK6Xck1g&s=10",bio:"Pintora francesa y figura fundamental del impresionismo. Participó activamente en las exposiciones impresionistas y desarrolló una mirada propia sobre escenas domésticas, espacios sociales y vida moderna.",why:"Ayuda a cuestionar la idea de que las mujeres fueron espectadoras del impresionismo: fueron creadoras y participantes de su desarrollo."},
 {name:"Georgia O'Keeffe",years:"1887–1986",move:"Modernismo",region:"América del Norte",class:"a3",keywords:"Estados Unidos flores abstraccion modernismo paisaje",visual:"https://uploads8.wikiart.org/images/georgia-o-keeffe.jpg!Portrait.jpg",bio:"Artista estadounidense asociada al modernismo. Su lenguaje visual exploró flores, paisajes y formas abstractas con una escala y composición distintivas.",why:"Su carrera muestra cómo una artista puede construir una voz visual propia y convertirse en referente de la historia del arte moderno."},
 {name:"Frida Kahlo",years:"1907–1954",move:"Modernismo",region:"América Latina",class:"a4",keywords:"Mexico identidad autorretrato cuerpo cultura",visual:"https://upload.wikimedia.org/wikipedia/commons/a/a1/Frida_Kahlo%2C_by_Guillermo_Kahlo_2.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original",bio:"Artista mexicana conocida por sus autorretratos y por una obra profundamente vinculada con identidad, cuerpo, experiencia personal, cultura y simbolismo.",why:"Permite conversar sobre identidad, representación del cuerpo y la capacidad del arte para transformar experiencias personales en discursos culturales."},
 {name:"Leonora Carrington",years:"1917–2011",move:"Surrealismo",region:"América Latina",class:"a5",keywords:"Mexico surrealismo fantasia Inglaterra mujer",visual:"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20600%20360%22%3E%0A%3Crect%20width%3D%22600%22%20height%3D%22360%22%20fill%3D%22%23403b54%22/%3E%3Cpath%20d%3D%22M0%20300%20Q150%20210%20300%20290%20T600%20260%20V360%20H0Z%22%20fill%3D%22%235b4c50%22/%3E%0A%3Cellipse%20cx%3D%22300%22%20cy%3D%22150%22%20rx%3D%2265%22%20ry%3D%22100%22%20fill%3D%22%23d5c4aa%22/%3E%3Cpath%20d%3D%22M235%20105%20Q300%2040%20365%20105%20L345%20130%20Q300%2095%20255%20130Z%22%20fill%3D%22%2391a78b%22/%3E%0A%3Cpath%20d%3D%22M175%20330%20Q220%20215%20300%20220%20Q380%20215%20425%20330Z%22%20fill%3D%22%23a76b4f%22/%3E%0A%3Ccircle%20cx%3D%22155%22%20cy%3D%2295%22%20r%3D%2228%22%20fill%3D%22%2391a78b%22/%3E%3Ccircle%20cx%3D%22445%22%20cy%3D%2275%22%20r%3D%2222%22%20fill%3D%22%23d8ad72%22/%3E%0A%3Cpath%20d%3D%22M100%20220%20Q150%20150%20200%20220%22%20fill%3D%22none%22%20stroke%3D%22%23d8ad72%22%20stroke-width%3D%227%22/%3E%0A%3C/svg%3E",bio:"Artista y escritora nacida en Inglaterra y posteriormente vinculada a la escena artística mexicana. Desarrolló un universo visual propio inspirado en mitología, alquimia, animales y mundos fantásticos.",why:"Su obra permite analizar cómo las mujeres surrealistas construyeron imaginarios propios y desafiaron las narrativas dominantes del movimiento."},
 {name:"Louise Bourgeois",years:"1911–2010",move:"Arte contemporáneo",region:"América del Norte",class:"a6",keywords:"Francia Estados Unidos escultura memoria contemporaneo",visual:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQTv88oFFR0D96QkBbK9B9WGif5j-mrEf7tOFWFhiHIHJe8DrUIT4hkA&s=10",bio:"Artista franco-estadounidense cuya práctica incluyó escultura, instalación, dibujo y grabado. Exploró memoria, relaciones familiares, cuerpo y emociones.",why:"Su trayectoria amplía la conversación sobre las mujeres como protagonistas de la escultura y del arte contemporáneo."},
 {name:"Yayoi Kusama",years:"1929–",move:"Arte contemporáneo",region:"Asia",class:"a7",keywords:"Japon puntos instalaciones infinito contemporaneo",visual:"https://uploads7.wikiart.org/00321/images/yayoi-kusama/3-yayoikusama.JPG!Portrait.JPG",bio:"Artista japonesa reconocida por el uso de puntos, patrones repetitivos, instalaciones y espacios inmersivos. Su obra investiga percepción, repetición e infinito.",why:"Es un ejemplo de cómo una creadora puede construir una identidad artística internacional y transformar un recurso visual en un lenguaje reconocible."},
 {name:"Faith Ringgold",years:"1930–2024",move:"Arte feminista",region:"América del Norte",class:"a8",keywords:"Estados Unidos feminismo derechos quilts pintura activismo",visual:"https://visarts.ucsd.edu/_images/people/Faith_Ringgold_in_front_of_Tar_Beach_2_1990_quilt_1993_Photo_by_Kathy_Willens_Fair_Use.jpg",bio:"Artista, autora y activista estadounidense. Trabajó con pintura, textiles, narración y libros infantiles, abordando identidad, raza, género y justicia social.",why:"Su producción demuestra cómo las artes plásticas pueden convertirse en una herramienta para contar historias, visibilizar comunidades y cuestionar desigualdades."},
 {name:"Remedios Varo",years:"1908–1963",move:"Surrealismo",region:"América Latina",class:"a9",keywords:"Mexico España surrealismo ciencia magia",visual:"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20600%20360%22%3E%0A%3Crect%20width%3D%22600%22%20height%3D%22360%22%20fill%3D%22%23463c3b%22/%3E%3Cpath%20d%3D%22M80%20360%20Q150%20170%20300%2070%20Q450%20170%20520%20360Z%22%20fill%3D%22%2369584f%22/%3E%0A%3Cpath%20d%3D%22M300%2040%20L355%20130%20L300%20245%20L245%20130Z%22%20fill%3D%22%238d9b72%22/%3E%0A%3Ccircle%20cx%3D%22300%22%20cy%3D%22110%22%20r%3D%2228%22%20fill%3D%22%23e2c9a8%22/%3E%0A%3Cpath%20d%3D%22M250%20270%20Q300%20215%20350%20270%20L385%20360%20H215Z%22%20fill%3D%22%23c99a5b%22/%3E%0A%3Cpath%20d%3D%22M160%20110%20Q215%2055%20250%20110%22%20fill%3D%22none%22%20stroke%3D%22%23c99a5b%22%20stroke-width%3D%227%22/%3E%0A%3Ccircle%20cx%3D%22450%22%20cy%3D%2295%22%20r%3D%2222%22%20fill%3D%22%238d9b72%22/%3E%0A%3C/svg%3E",bio:"Pintora hispano-mexicana vinculada al surrealismo. Creó escenas imaginarias pobladas de personajes, máquinas, laboratorios y símbolos relacionados con conocimiento y transformación.",why:"Su obra ayuda a recuperar una perspectiva femenina del surrealismo y a explorar la relación entre arte, ciencia, imaginación y autonomía."},
 {name:"Rosa Bonheur",years:"1822–1899",move:"Realismo",region:"Europa",class:"a10",keywords:"Francia animales realismo pintura mujeres",visual:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Andr%C3%A9_Adolphe-Eug%C3%A8ne_Disd%C3%A9ri_%28French_-_%28Rosa_Bonheur%29_-_Google_Art_Project.jpg/960px-Andr%C3%A9_Adolphe-Eug%C3%A8ne_Disd%C3%A9ri_%28French_-_%28Rosa_Bonheur%29_-_Google_Art_Project.jpg?utm_source=es.wikiquote.org&utm_campaign=index&utm_content=thumbnail",bio:"Pintora francesa especializada en representaciones de animales. Alcanzó reconocimiento internacional en el siglo XIX y construyó una carrera artística independiente.",why:"Su vida permite analizar cómo una mujer pudo abrirse camino profesionalmente en un campo con normas sociales muy restrictivas."},
 {name:"María Izquierdo",years:"1902–1955",move:"Modernismo",region:"América Latina",class:"a11",keywords:"Mexico modernismo identidad pintura cultura",visual:"https://upload.wikimedia.org/wikipedia/commons/3/3e/Mar%C3%ADa_Izquierdo.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original",bio:"Pintora mexicana cuya obra incorporó escenas, símbolos y elementos culturales de México con una sensibilidad personal y moderna.",why:"Visibilizarla ayuda a ampliar la historia del arte mexicano más allá de los nombres tradicionalmente canonizados."},
 {name:"Tamara de Lempicka",years:"1898–1980",move:"Modernismo",region:"Europa",class:"a12",keywords:"Polonia art deco retrato modernismo mujeres",visual:"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20600%20360%22%3E%0A%3Crect%20width%3D%22600%22%20height%3D%22360%22%20fill%3D%22%23263c63%22/%3E%0A%3Cpath%20d%3D%22M0%20330%20L160%2060%20L310%20330Z%22%20fill%3D%22%23496b88%22/%3E%3Cpath%20d%3D%22M240%20330%20L430%2030%20L600%20330Z%22%20fill%3D%22%23b99b76%22/%3E%0A%3Cellipse%20cx%3D%22330%22%20cy%3D%22125%22%20rx%3D%2258%22%20ry%3D%2272%22%20fill%3D%22%23e5c9b7%22/%3E%0A%3Cpath%20d%3D%22M270%20115%20Q330%2025%20390%20115%20L370%20135%20Q330%2095%20290%20135Z%22%20fill%3D%22%232a2630%22/%3E%0A%3Cpath%20d%3D%22M255%20320%20Q330%20210%20405%20320Z%22%20fill%3D%22%23b99b76%22/%3E%0A%3Cpath%20d%3D%22M90%20300%20L190%20205%20L220%20330%20M470%20330%20L500%20205%20L580%20300%22%20fill%3D%22none%22%20stroke%3D%22%23e5c9b7%22%20stroke-width%3D%2218%22/%3E%0A%3C/svg%3E",bio:"Pintora de origen polaco asociada al art déco y a la modernidad de entreguerras. Destacó especialmente por sus retratos y figuras de fuerte presencia visual.",why:"Su carrera permite hablar de autonomía artística, representación de mujeres y construcción de identidad en la cultura visual moderna."}
,
 {name:"Alma Thomas",years:"1891–1978",move:"Expresionismo abstracto",region:"América del Norte",class:"a3",keywords:"Estados Unidos abstracto color mosaico afroamericana educación",bio:"Pintora estadounidense que desarrolló un lenguaje abstracto basado en campos de color y pequeñas formas rítmicas. Después de una larga carrera como profesora de arte, alcanzó un amplio reconocimiento por su obra abstracta.",why:"Su trayectoria permite hablar de las barreras de género y raza en el reconocimiento artístico y del valor de la educación artística como espacio de participación.",more:"Thomas estudió arte y dedicó décadas a la enseñanza antes de concentrarse plenamente en su producción artística. Sus composiciones de color muestran cómo la abstracción puede transmitir ritmo, energía y emoción.",visual:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3c9YblpixWsPBAXYeJQptCG2esvRcdjjTlMsNZ2U0JMbUe7waFLh9PSvs&s=10"},
 {name:"Augusta Savage",years:"1892–1962",move:"Arte contemporáneo",region:"América del Norte",class:"a8",keywords:"Estados Unidos escultura Harlem afroamericana retrato educación",bio:"Escultora, educadora y activista estadounidense. Fue una figura importante del Renacimiento de Harlem y trabajó para ampliar las oportunidades de formación artística de jóvenes afroamericanos.",why:"Su vida conecta arte, educación y reducción de desigualdades, mostrando cómo una artista puede contribuir a transformar el acceso a la cultura.",more:"Savage realizó retratos y esculturas y participó en iniciativas educativas y comunitarias. Su trabajo también evidencia cómo el acceso a instituciones y recursos condicionó históricamente las carreras de muchas artistas.",visual:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbVpj0l1yZTl7stA08PD33uPeFYeG0eHq8SGyepi91pQ&s=10"},
 {name:"Betye Saar",years:"1926–",move:"Arte feminista",region:"América del Norte",class:"a6",keywords:"Estados Unidos ensamblaje grabado feminismo afroamericana memoria",bio:"Artista estadounidense conocida por sus ensamblajes, grabados e instalaciones. Su obra explora memoria, identidad, espiritualidad, historia y representación de las comunidades afroamericanas.",why:"Su producción demuestra cómo el arte puede recuperar memorias y cuestionar imágenes estereotipadas relacionadas con género, identidad y poder.",more:"Saar reutiliza objetos y materiales encontrados para construir composiciones cargadas de significado. Su práctica convierte objetos cotidianos en vehículos de memoria y crítica cultural.",visual:"https://upload.wikimedia.org/wikipedia/commons/5/57/Portrait_of_Betye_Saar._Site_Installations%2C_1989._A_Cultural_Presentation_of_the_United_States_of_America._-_DPLA_-_222f_r.jpg?utm_source=es.wikipedia.org&utm_campaign=index&utm_content=original"},
 {name:"Lygia Clark",years:"1920–1988",move:"Arte contemporáneo",region:"América Latina",class:"a12",keywords:"Brasil neoconcretismo participacion escultura sensorial",bio:"Artista brasileña vinculada al neoconcretismo. Transformó progresivamente la obra artística en una experiencia participativa y sensorial, cuestionando la separación tradicional entre objeto, artista y espectador.",why:"Su trabajo amplía la idea de quién participa en la creación artística y muestra el papel de las mujeres latinoamericanas en las vanguardias.",more:"Clark experimentó con formas articuladas, objetos manipulables y propuestas sensoriales. Su obra abrió caminos hacia prácticas participativas y contemporáneas.",visual:"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20600%20360%22%3E%3Crect%20width%3D%22600%22%20height%3D%22360%22%20fill%3D%22%23b85c52%22/%3E%3Cpath%20d%3D%22M60%20290%20Q160%20120%20300%20250%20T540%20120%22%20fill%3D%22none%22%20stroke%3D%22%23e8c9a6%22%20stroke-width%3D%2280%22%20opacity%3D%22.85%22/%3E%3Ccircle%20cx%3D%22300%22%20cy%3D%22125%22%20r%3D%2255%22%20fill%3D%22%235f7890%22/%3E%3Cpath%20d%3D%22M215%20330%20Q300%20205%20385%20330Z%22%20fill%3D%22%23e8c9a6%22/%3E%3C/svg%3E"},
 {name:"Tarsila do Amaral",years:"1886–1973",move:"Modernismo",region:"América Latina",class:"a4",keywords:"Brasil modernismo antropofagia color identidad latinoamerica",bio:"Pintora brasileña fundamental para el modernismo de su país. Su lenguaje combinó formas simplificadas, colores intensos y referencias culturales brasileñas.",why:"Su trayectoria permite reconocer la aportación de las mujeres a la construcción de identidades modernas en América Latina.",more:"Tarsila participó en el ambiente modernista brasileño y desarrolló una estética propia vinculada con paisajes, personajes y símbolos de su país.",visual:"https://uploads3.wikiart.org/00453/images/tarsila-do-amaral/tarsila-do-amaral-2.jpg!Portrait.jpg"},
 {name:"Amrita Sher-Gil",years:"1913–1941",move:"Modernismo",region:"Asia",class:"a11",keywords:"India Hungria modernismo retrato mujeres pintura",bio:"Pintora de ascendencia india y húngara considerada una figura esencial del arte moderno de la India. Su obra combinó influencias europeas con temas y figuras de la vida india.",why:"Su trayectoria muestra cómo las mujeres artistas pueden construir lenguajes híbridos entre culturas y ampliar las narrativas de la modernidad artística.",more:"Sher-Gil estudió arte en Europa y posteriormente desarrolló una obra centrada en personas y escenas de la India. Su carrera, aunque breve, tuvo una influencia duradera.",visual:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPgIZwWqYGFnjyQoE8BaVHFucSUSplueUDT0KXi01RA&s=10"},
 {name:"Mona Hatoum",years:"1952–",move:"Arte contemporáneo",region:"Medio Oriente",class:"a5",keywords:"Palestina Reino Unido instalación cuerpo espacio identidad",bio:"Artista nacida en Beirut en una familia palestina y radicada en el Reino Unido. Trabaja con instalación, escultura, performance y video para explorar cuerpo, desplazamiento, poder y vulnerabilidad.",why:"Su obra ayuda a comprender cómo el arte contemporáneo puede abordar identidad, movilidad, pertenencia y experiencias de mujeres.",more:"Hatoum suele transformar objetos cotidianos en formas ambiguas o inquietantes. Sus instalaciones invitan al espectador a reconsiderar espacios familiares y relaciones de poder.",visual:"https://uploads2.wikiart.org/00347/images/mona-hatoum/ft-mona-hatoum-3.jpg!Portrait.jpg"},
 {name:"Shirin Neshat",years:"1957–",move:"Arte contemporáneo",region:"Medio Oriente",class:"a2",keywords:"Iran fotografia video feminismo identidad islam",bio:"Artista iraní radicada en Estados Unidos, reconocida por fotografía, video y cine. Su obra aborda identidad, género, religión, poder y las experiencias de mujeres en contextos iraníes.",why:"Su trabajo ofrece una perspectiva crítica sobre género y representación cultural y permite discutir cómo las mujeres construyen sus propias narrativas visuales.",more:"Neshat utiliza con frecuencia imágenes en blanco y negro, escritura y puesta en escena para crear contrastes entre lo íntimo y lo político.",visual:"https://thegentlewoman.co.uk/img/TVZOWHU1UGZRQ2VkaHdCdEg3V0V5QT09/shirin-01.jpg"},
 {name:"Njideka Akunyili Crosby",years:"1983–",move:"Arte contemporáneo",region:"África",class:"a7",keywords:"Nigeria Estados Unidos collage pintura migracion identidad contemporaneo",bio:"Artista nigeriano-estadounidense que combina pintura, collage, fotografía transferida y referencias culturales para representar experiencias de identidad, hogar y migración.",why:"Su obra muestra cómo las perspectivas de mujeres africanas y de la diáspora enriquecen el arte contemporáneo y cuestionan fronteras culturales.",more:"Sus composiciones reúnen interiores domésticos, fotografías y patrones que crean capas visuales. La convivencia de referencias nigerianas y estadounidenses es central en su lenguaje.",visual:"https://static01.nyt.com/images/2023/05/22/multimedia/21njideka-crosby1-fmhp/21njideka-crosby1-fmhp-superJumbo.jpg"},
  {name:"Tracey Moffatt",years:"1960–",move:"Arte contemporáneo",region:"Oceanía",class:"a10",keywords:"Australia fotografia video aborigen narrativa identidad",bio:"Artista australiana que trabaja principalmente con fotografía, video y narración visual. Sus obras exploran identidad, memoria, representación y relaciones sociales.",why:"Su trayectoria permite ampliar la representación geográfica de la historia del arte y analizar cómo una artista puede cuestionar las formas tradicionales de contar historias.",more:"Moffatt construye escenas cuidadosamente compuestas y utiliza recursos cinematográficos para crear relatos que pueden ser personales, históricos y críticos.",visual:"https://images.squarespace-cdn.com/content/v1/5702ab9d746fb9634796c9f9/fa97e023-b76c-4ec7-9c80-b50ff04ffbbf/Moffatt_portrait.jpeg"},
 {name:"Yuki Kihara",years:"1975–",move:"Arte contemporáneo",region:"Oceanía",class:"a1",keywords:"Samoa Nueva Zelanda fotografia performance identidad genero oceania",bio:"Artista samoana-neozelandesa cuya práctica combina fotografía, performance, instalación y referencias a la cultura samoana. Explora género, colonialismo, identidad y tradición.",why:"Su trabajo incorpora una perspectiva del Pacífico y muestra la diversidad de experiencias de género y cultura presentes en el arte contemporáneo.",more:"Kihara utiliza autorrepresentación, vestuario y puesta en escena para reinterpretar imágenes históricas y narrativas coloniales desde una perspectiva samoana.",visual:"https://d2935izqpq0pg2.cloudfront.net/transforms/_1920x1440_crop_center-center_75_none_ns/726/Yuki-Kihara-photo-by-Gui-Taccetti.webp"},
 {name:"Lubaina Himid",years:"1954–",move:"Arte feminista",region:"África",class:"a12",keywords:"Tanzania Reino Unido pintura afrodescendiente feminismo historia",bio:"Artista nacida en Zanzíbar y radicada en el Reino Unido. Su pintura aborda historia, colonialismo, diáspora africana, trabajo, representación y experiencias de personas negras.",why:"Su obra recupera historias y sujetos poco representados en el canon artístico y conecta la creación visual con la memoria y la igualdad.",more:"Himid utiliza escenas cuidadosamente construidas, objetos y referencias históricas para imaginar relaciones sociales alternativas y recuperar voces de la diáspora.",visual:"data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20viewBox%3D%220%200%20600%20360%22%3E%3Crect%20x%3D%2275%22%20y%3D%2245%22%20width%3D%22450%22%20height%3D%22270%22%20rx%3D%228%22%20fill%3D%22%23d9bb72%22/%3E%3Ccircle%20cx%3D%22300%22%20cy%3D%22150%22%20r%3D%2262%22%20fill%3D%22%23c77d61%22/%3E%3Cpath%20d%3D%22M205%20315%20Q300%20205%20395%20315Z%22%20fill%3D%22%234c5b57%22/%3E%3Cpath%20d%3D%22M95%2080%20L190%20145%20M505%2080%20L410%20145%22%20stroke%3D%22%234c5b57%22%20stroke-width%3D%2218%22/%3E%3C/svg%3E"},
 {name:"Miriam Makeba",years:"1932–2008",move:"Arte contemporáneo",region:"África",class:"a4",keywords:"Sudafrica cultura musica apartheid mujeres identidad",bio:"Aunque es principalmente conocida como cantante y activista, su figura puede utilizarse como referencia interdisciplinaria sobre representación cultural, identidad y resistencia en el contexto sudafricano.",why:"Su presencia permite conectar las artes visuales con otras expresiones culturales y estudiar cómo las mujeres utilizan la cultura para defender dignidad y participación.",more:"Su trayectoria es útil como cápsula interdisciplinaria, no como ejemplo exclusivo de artes plásticas.",visual:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS37ctOXbrz8FS3iLUjrxMPTt2eMLRjsIhaLXa-HaRAm_fNWs8ymaQY54w&s=10"}];

const gallery=document.getElementById("gallery"), search=document.getElementById("search"), movement=document.getElementById("movement"), region=document.getElementById("region");

function render(){
  const q=search.value.toLowerCase().trim(), m=movement.value, r=region.value;
  const list=artists.filter(a=>(!q || `${a.name} ${a.move} ${a.region} ${a.keywords}`.toLowerCase().includes(q)) && (!m||a.move===m) && (!r||a.region===r));
  document.getElementById("shown").textContent=list.length;
  if(!list.length){gallery.innerHTML='<div class="empty">No encontramos resultados. Prueba con otro nombre, movimiento o región.</div>';return;}
  gallery.innerHTML=list.map((a,i)=>`
    <article class="card">
      <div class="art ${a.class}" style="--artist-image:url('${a.visual}')" aria-label="Imagen artística inspirada en ${a.name}"></div>
      <div class="card-body">
        <span class="tag">${a.move}</span>
        <h3>${a.name}</h3>
        <div class="meta">${a.years} · ${a.region} · ${a.move}</div>
        <p>${a.bio}</p>
        <div class="card-actions">
          <button class="small" onclick="showArtist(${artists.indexOf(a)})">Ver perfil</button>
          <button class="small" onclick="saveArtist('${a.name.replace(/'/g,"\\'")}')">☆ Guardar</button>
        </div>
      </div>
    </article>`).join("");
}
search.addEventListener("input",render); movement.addEventListener("change",render); region.addEventListener("change",render);

function showArtist(i){
  const a=artists[i];
  document.getElementById("modalContent").innerHTML=`
    <div class="modal-portrait" style="background-image:url('${a.visual}')"></div>
    <span class="tag">${a.move}</span>
    <h2>${a.name}</h2>
    <p><strong>${a.years}</strong> · ${a.region}</p>
    <h3>Trayectoria</h3><p>${a.bio}</p>
    <h3>Más sobre su obra</h3><p>${a.more || "Esta sección puede ampliarse con obras, fechas y recursos de investigación."}</p>
    <h3>¿Qué aporta al ODS 5?</h3><p>${a.why}</p>
    <div class="stat"><div>Arte y cultura</div><div>Visibilidad</div><div>Educación</div><div>${a.region}</div></div>`;
  document.getElementById("modal").classList.add("open");
}
function closeModal(){document.getElementById("modal").classList.remove("open")}
document.getElementById("modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
function saveArtist(name){
  let saved=JSON.parse(localStorage.getItem("mujeresArteSaved")||"[]");
  if(!saved.includes(name)) saved.push(name);
  localStorage.setItem("mujeresArteSaved",JSON.stringify(saved));
  alert(`"${name}" se guardó en tu lista de artistas.`);
}
function answerQuiz(btn,correct){
  document.querySelectorAll(".answer").forEach(b=>b.disabled=true);
  const result=document.getElementById("result");
  const reflection=document.getElementById("reflection");
  const reflectionText=document.getElementById("reflectionText");
  if(correct){
    result.textContent="✓ ¡Correcto! El ODS 5 busca lograr la igualdad de género y empoderar a todas las mujeres y niñas.";
    result.style.color="#b9e2c8";
    reflection.hidden=false;
    reflectionText.textContent="Las historias de estas artistas nos recuerdan que crear también es una forma de expresar nuestra voz. No importa si una niña sueña con pintar, dibujar, esculpir, diseñar, fotografiar o imaginar mundos nuevos: su creatividad merece un espacio. Que conocer a estas mujeres sirva para recordar que no existen sueños demasiado grandes ni caminos reservados para otros. Cada idea que una niña convierte en arte puede abrir una puerta para ella y para quienes vengan después. Sigue creando, experimentando y contando tus propias historias: tu mirada también puede transformar el mundo.";
    reflection.scrollIntoView({behavior:"smooth",block:"center"});
  }else{
    result.textContent="Casi. El eje principal de la aplicación es el ODS 5: Igualdad de género.";
    result.style.color="#ffd1b5";
  }
}
render();


/* ==========================================================
   Arte generativo con p5.js: sistema de partículas + ruido Perlin
   ========================================================== */
let artSketch = null;
let artPaused = false;
let artPaletteIndex = 0;
const artPalettes = [
  ['#f4c7d4','#a8c9a5','#f8e8d0','#d7a8c4','#fff7ef'],
  ['#e9b8b7','#8eb9a3','#e9d9a8','#bd8eaa','#fff5e7'],
  ['#f6d1a8','#a9c7b7','#d8a5b8','#f4e9d8','#b8d6c8'],
  ['#e8b6ce','#8da99a','#f2d7ad','#c7a6c8','#fff8ef']
];
function initGenerativeArt(){
  const host = document.getElementById('generativeCanvas');
  if (!host || typeof window.p5 !== 'function') {
    const status = document.getElementById('artStatus');
    if (status) status.textContent = 'La animación necesita conexión para cargar p5.js; el resto de la aplicación sigue disponible.';
    return;
  }
  artSketch = new p5((p) => {
    let particles = [];
    let palette = artPalettes[0];
    let flowSeed = 0;
    let isMobile = false;
    const particleCount = () => Math.min(isMobile ? 90 : 190, Math.max(45, Math.floor((p.width*p.height)/4200)));
    class PetalParticle {
      constructor(randomStart=true){ this.reset(randomStart); }
      reset(randomStart=true){
        this.x = randomStart ? p.random(p.width) : p.random(-25,p.width+25);
        this.y = randomStart ? p.random(p.height) : p.random(-25,p.height+25);
        this.prevX=this.x; this.prevY=this.y;
        this.size=p.random(3.5, isMobile?10:15);
        this.speed=p.random(.35,1.25);
        this.hue=p.random(palette.length);
        this.life=p.random(90,260);
      }
      update(){
        this.prevX=this.x; this.prevY=this.y;
        // Campo vectorial: el ruido Perlin crea trayectorias suaves y orgánicas.
        const n=p.noise(this.x*.0035+flowSeed,this.y*.0035, p.frameCount*.002);
        const angle=n*p.TWO_PI*2.6;
        this.x += Math.cos(angle)*this.speed;
        this.y += Math.sin(angle)*this.speed;
        this.life--;
        if(this.x < -30 || this.x > p.width+30 || this.y < -30 || this.y > p.height+30 || this.life<=0) this.reset(false);
      }
      draw(){
        const c=p.color(palette[Math.floor(this.hue)%palette.length]);
        c.setAlpha(120);
        p.stroke(c); p.strokeWeight(Math.max(1,this.size*.22));
        p.line(this.prevX,this.prevY,this.x,this.y);
        p.noStroke(); c.setAlpha(190); p.fill(c);
        p.ellipse(this.x,this.y,this.size,this.size*.58);
      }
    }
    p.setup=()=>{
      const rect=host.getBoundingClientRect();
      isMobile=window.matchMedia('(max-width: 600px)').matches;
      p.createCanvas(Math.max(280,rect.width),Math.max(220,rect.height)).parent(host);
      p.pixelDensity(Math.min(window.devicePixelRatio||1, isMobile?1.25:1.7));
      p.background('#34434a');
      p.noiseDetail(3,.48);
      rebuild(false);
      p.describe('Partículas suaves en tonos rosa y verde se desplazan siguiendo un campo de ruido Perlin, como un jardín acuático abstracto.');
    };
    function rebuild(clear=true){
      palette=artPalettes[artPaletteIndex];
      flowSeed=p.random(1000);
      particles=Array.from({length:particleCount()},()=>new PetalParticle(true));
      if(clear) p.background('#34434a');
    }
    p.draw=()=>{
      if(artPaused) return;
      p.noStroke(); p.fill(39,47,58,16); p.rect(0,0,p.width,p.height);
      for(const particle of particles){particle.update();particle.draw();}
      // Manchas suaves que evocan nenúfares, sin geometría rígida.
      if(p.frameCount%3===0){
        const x=p.noise(p.frameCount*.003+flowSeed)*p.width;
        const y=p.noise(200+p.frameCount*.003+flowSeed)*p.height;
        const c=p.color(palette[Math.floor(p.noise(p.frameCount*.005)*palette.length)]); c.setAlpha(18);
        p.noStroke();p.fill(c);p.ellipse(x,y,p.random(18,42),p.random(10,24));
      }
    };
    p.windowResized=()=>{
      const rect=host.getBoundingClientRect();
      isMobile=window.matchMedia('(max-width: 600px)').matches;
      p.resizeCanvas(Math.max(280,rect.width),Math.max(220,rect.height));
      rebuild(true);
    };
    p.randomizeComposition=()=>{artPaletteIndex=(artPaletteIndex+1+Math.floor(Math.random()*(artPalettes.length-1)))%artPalettes.length;rebuild(true);};
  }, host);
}
function randomizeArtwork(){
  if(artSketch && typeof artSketch.randomizeComposition==='function') artSketch.randomizeComposition();
  else artPaletteIndex=(artPaletteIndex+1)%artPalettes.length;
  const status=document.getElementById('artStatus');
  if(status) status.textContent='Nueva variación generada. La paleta y el campo de movimiento han cambiado.';
}
function toggleArtworkMotion(force){
  artPaused=typeof force==='boolean' ? force : !artPaused;
  if(artSketch){ if(artPaused) artSketch.noLoop(); else artSketch.loop(); }
  const button=document.getElementById('toggleMotion');
  const status=document.getElementById('artStatus');
  if(button){button.textContent=artPaused?'Reanudar movimiento':'Pausar movimiento';button.setAttribute('aria-pressed',String(artPaused));}
  if(status) status.textContent=artPaused?'Animación pausada.':'La obra está en movimiento.';
}
const randomizeButton=document.getElementById('randomizeArt');
if(randomizeButton) randomizeButton.addEventListener('click',randomizeArtwork);
const toggleButton=document.getElementById('toggleMotion');
if(toggleButton) toggleButton.addEventListener('click',()=>toggleArtworkMotion());

// Respaldo para navegadores con almacenamiento local restringido.
const originalSaveArtist=saveArtist;
saveArtist=function(name){
  try { originalSaveArtist(name); }
  catch(error) { alert('No fue posible guardar la artista en este navegador. Puedes seguir explorando sus perfiles.'); }
};
// Cierre del modal con Escape y retorno del foco más cómodo para teclado.
document.addEventListener('keydown',event=>{if(event.key==='Escape') closeModal();});
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',initGenerativeArt,{once:true});
else initGenerativeArt();
