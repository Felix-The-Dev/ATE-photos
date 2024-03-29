let PreviousButton = document.getElementById("previous_button");
let NextButton = document.getElementById("next_button");
let Select = document.getElementById("select");

/*On sélectionne le bon titre*/
num_of_options=0;
[...document.getElementsByTagName("option")].forEach(option => {
    num_of_options++;
})



function changePage(page = "next"){
    let Decription_field = document.getElementById("description")
    let actual_page_num = parseInt(document.getElementById("page_num").innerText)
    let new_page_num = null

    

    let Description_content = null

    if (page == "next"){
        if (actual_page_num<num_of_options){
            new_page_num = actual_page_num+1
        }
        else{
            new_page_num = actual_page_num
        }
    }
    else if (page == "previous"){
        if (actual_page_num>1){
            new_page_num = actual_page_num-1
        }
        else{
            new_page_num = actual_page_num
        }
    }
    else{
        new_page_num = page
    }

    console.log("Page : "+new_page_num)

    /*On modifie l'indicateur de page*/
    document.getElementById("page_num").innerText = new_page_num;

    /*On sélectionne le bon titre*/
    [...document.getElementsByTagName("option")].forEach(option => {
        if (!option.selected){
            option.selected == true
        }
    })
    document.getElementById("photo"+new_page_num).selected = true


    /*On affiche le texte de description*/
    Description_content = document.getElementById("description"+new_page_num).innerHTML
    Decription_field.innerHTML = Description_content
}

changePage(1)

PreviousButton.addEventListener("click", ()=>{
    changePage("previous")
});

Select.addEventListener("click", ()=>{
    changePage(1)
});

NextButton.addEventListener("click", ()=>{
    changePage("next")
});

