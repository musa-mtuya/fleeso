function customSelect(event) {
    document.getElementById("projectsLabel").classList.remove("labelActive");
    document.getElementById("designsLabel").classList.remove("labelActive");
    
    var id = event.target.id;

    if(id == "designs") {
        document.getElementById("designsLabel").classList.add("labelActive");
    }else {
        document.getElementById("projectsLabel").classList.add("labelActive");
    }

}


function selectItem(event) {
    var text = event.target.innerText;
    var output = "<span onclick='remove(event)'>"+text+" &nbsp; &nbsp; x</span>";

    var selectedItem = document.getElementById("selectedItem");
    selectedItem.innerHTML += output;
    event.target.style.display = "none";
    document.getElementById("selectInput").value = "";
}


function searchItem(e){
    var text = e.target.value.toLowerCase();
    var skillsItem = document.getElementById("skillsItem");
    
    var skillsItems = skillsItem.children;

    for(var i = 0; i < skillsItems.length; i++) {
        var chirdText = skillsItems[i].innerText.trim().toLowerCase();

        if(chirdText.search(text) != -1) {
            skillsItems[i].style.display="block";
        }else {
            skillsItems[i].style.display="none";
        }

        if(text.trim().length == 0) {
            skillsItems[i].style.display="none";
        }
    }
}


function remove(event) {
    event.target.style.display = "none";
}