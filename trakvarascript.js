const synad= {
    'teostus': 'реализация',
    'kavand': 'план',
    'algoritm': 'алгоритм',
    'kasutajaliides': 'пользовательский интерфейс',
    'muudel': 'модель',
    'andmebaasiskeem': 'скема базыданных',
    'standart': 'стандарт',
    'tsükkel': 'цыкл',
    'andmetõõtlus': 'обработка данных',
    'andmestruktuur': 'структура данных',
    'arenduskeskkond': 'среда разработки',
    'projektihaldus töörist': 'работник по управлению проектами',
    'kavandamine': 'планирование',
    'iteratsioon': 'итерация',
    'parandus': 'исправление',


}
function randomSyna(){

    const keys = Object.keys(synad)
    //random sõna
    const juhuslikSyna=keys[Math.floor(Math.random()*keys.length)]

    //võtame random sõna masiivist

    //lisame HTML lehele
    document.getElementById("random-sona").innerHTML=juhuslikSyna;
}
function sonakontroll(){

    const syna= document.getElementById("kontroll").value
    document.getElementById("vastus").innerHTML = syna ===synad[document.getElementById("random-sona").innerHTML]

}
