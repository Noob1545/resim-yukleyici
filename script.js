let dizi = []
function file(){
    let buton = document.getElementById("buton")
    let file = buton.files[0]
    const reeder = new FileReader()
    reeder.onload = function(e){
        let url = e.target.result
        let create = document.createElement("img")
        create.src = url
        create.style.cursor = "pointer"
        create.onclick = function(){
            let secenek = confirm("bu öğeyi silmek istediğinden emin misin?")
                            if(secenek){
                                create.remove()
                                dizi.splice(dizi.indexOf(create.src), 1)
                                console.log(dizi);
                                let stringfy = JSON.stringify(dizi)
                                localStorage.setItem('dizi', stringfy)
                                let parse = JSON.parse(localStorage.getItem('dizi') || [])
                            }
        }
        create.oncontextmenu = function(event){
            event.preventDefault()
            const url = create.src; // İndirilecek PNG dosyasının URL'si

            const link = document.createElement('a');
            link.href = url;
            link.download = 'image.png'; // İndirilen dosyanın adı (opsiyonel olarak belirtilebilir)
            link.target = '_blank';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
        document.getElementById("imgs").append(create)
        dizi.push(url)
        localStorage.setItem("dizi",JSON.stringify(dizi) || [])
    }
    reeder.readAsDataURL(file)
}
window.addEventListener("load",function(){
    let parse = JSON.parse(localStorage.getItem('dizi') || [])
        for(let i = 0; i < parse.length; i++){
            let create = document.createElement("img")
            create.src = parse[i]
            create.style.cursor = 'pointer'
            create.onclick = function(){
                let secenek = confirm("bu öğeyi silmek istediğinden emin misin?")
                                if(secenek){
                                    create.remove()
                                    dizi.splice(dizi.indexOf(create.src), 1)
                                    console.log(dizi);
                                    let stringfy = JSON.stringify(dizi)
                                    localStorage.setItem('dizi', stringfy)
                                    let parse = JSON.parse(localStorage.getItem('dizi') || [])
                                }
            }
            create.oncontextmenu = function(event){
                event.preventDefault()
                const url = create.src; // İndirilecek PNG dosyasının URL'si
    
                const link = document.createElement('a');
                link.href = url;
                link.download = 'image.png'; // İndirilen dosyanın adı (opsiyonel olarak belirtilebilir)
                link.target = '_blank';

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
            document.getElementById("imgs").append(create)
        }
        let imgs = document.querySelectorAll("img").forEach(function(event){dizi.push(event.src)})
})
