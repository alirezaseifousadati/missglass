document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll(".extend").forEach(
        question_item => {question_item.addEventListener("click", faq_extend)}
    )

    try {
        document.querySelector(".login-password").addEventListener("keyup", login_validate)
    }
    catch (e) {
    }

    try{
        document.getElementById('phone-input').addEventListener("keyup" , phone_validate)
    }
    catch (e){

    }

    try {
        document.querySelectorAll(".auth-code").forEach(
            input_element => {input_element.addEventListener("keyup", vali_code)}
        )
    }
    catch (e) {
    }

    try {
        document.querySelector(".desktop-auth-code").addEventListener("keyup", desktop_code_validate)
    }
    catch (e) {
    }
    
    try {
        document.querySelector(".confirm-button").addEventListener("click", confirm_del)
    }
    catch (e) {
    }


    try{
        document.getElementById('drop-down').addEventListener("click" , dropdown)
    }
    catch (e){

    }


    try {
        document.querySelectorAll(".milify").forEach(
            input_element => { var x = input_element.innerHTML
                x = parseFloat(x)
                x = x.toLocaleString()
                input_element.innerHTML = x
            }
        )
    }
    catch (e) {
    }



    function dropdown() {

        document.querySelector(".drop-down-menu").setAttribute("class", "show-dropdown drop-down-menu")
        document.querySelector(".drop-down-img").setAttribute("src", "icons/hamburger_menu_icon_primary.png")
        document.querySelector("#drop-down-one").setAttribute("class", "no-nav")
        document.querySelector("#drop-down-two").setAttribute("class", "no-nav")
        document.querySelector("#drop-down-three").setAttribute("class", "no-nav")
        document.querySelector("#drop-down-four").setAttribute("class", "no-nav")
        document.querySelector(".navbar").setAttribute("class", "navbar mobile primary-background")
        
        document.querySelector("#drop-down").removeEventListener("click", dropdown)
        document.querySelector("#drop-down").addEventListener("click", dropup)

        
    }


    function dropup() {

        document.querySelector(".drop-down-menu").setAttribute("class", "drop-down-menu")
        document.querySelector(".drop-down-img").setAttribute("src", "icons/hamburger_menu_icon_primary.png")
        document.querySelector("#drop-down-one").setAttribute("class", "nav-item")
        document.querySelector("#drop-down-two").setAttribute("class", "nav-item")
        document.querySelector("#drop-down-three").setAttribute("class", "nav-item")
        document.querySelector("#drop-down-four").setAttribute("class", "account-action")
        document.querySelector(".navbar").setAttribute("class", "navbar mobile")
        
        document.querySelector("#drop-down").removeEventListener("click", dropup)
        document.querySelector("#drop-down").addEventListener("click",  dropdown)

        
    }


    function login_validate() {
        if (this.value.length >= 8){
            var elt = document.querySelector(".login-js")
            if (elt.value.length == 11) {
                try{
                    document.querySelector(".disabled").setAttribute("class", "input-one submit-one")
                }
                catch (e) {

                }
            }
        }
        else{
            try{
                document.querySelector(".submit-one").setAttribute("class", "input-one submit-one disabled")
            }
            catch (e){

            }
        }
        
    }

    function phone_validate() {
        if (this.value.length != 0){
            this.setAttribute("class", "input-one ltr-input")
            if (this.value.length == 11){
                try{
                    document.querySelector(".disabled").setAttribute("class", "input-one submit-one mt-30")
                }
                catch (e){

                }
                
            }
            else {
                try{
                    document.querySelector(".submit-one").setAttribute("class", "input-one submit-one mt-30 disabled")
                }
                catch (e){

                }
            }
        }
        else {
            try{
                this.setAttribute("class", "input-one")
            }
            catch (e){
                
            }
            
        }
    }


    function  desktop_code_validate(){
        
        if (this.value.length != 0){
            this.setAttribute("class", "input-one desktop-auth-code ltr-input")
            if (this.value.length == 5) {
                document.querySelector(".disabled").setAttribute("class", "input-one submit-one mt-30")
            }
            else {
                document.querySelector(".submit-one").setAttribute("class", "input-one submit-one mt-30 disabled")
            }
        }
        else{
            this.setAttribute("class", "input-one desktop-auth-code")
        }
        
    }

    function vali_code(){
        if (this.id != "auth_4"){
            if (this.value.length == 1){
                this.nextElementSibling.focus()
            }
        }
        else {
            document.querySelector(".disabled").setAttribute("class", "input-one submit-one mt-30")
        }
        
    }

    function faq_extend(){
        const icon = this.children.item(0)
        icon.setAttribute("src", "icons/vuesax-linear-minus-cirlce-secondary.png")
        icon.setAttribute("class", "minus")
        this.parentElement.parentElement.children.item(1).setAttribute("class", "answer-seprator")
        this.parentElement.parentElement.children.item(2).setAttribute("class", "answer")
        this.removeEventListener("click", faq_extend)
        this.addEventListener("click", faq_shrink)
    }

    function faq_shrink(){
        const icon = this.children.item(0)
        icon.setAttribute("src", "icons/vuesax-linear-add-circle-secondary.png")
        icon.setAttribute("class", "add")
        this.parentElement.parentElement.children.item(1).setAttribute("class", "answer-seprator hidden")
        this.parentElement.parentElement.children.item(2).setAttribute("class", "answer hidden")
        this.removeEventListener("click", faq_shrink)
        this.addEventListener("click", faq_extend)
    }


    function confirm_del(){
        document.querySelector(".confirm-button").setAttribute("style", "background-color: var(--primary-color)")
        document.querySelector(".disabled").setAttribute("class", "div-button")
        document.querySelector(".confirm-button").removeEventListener("click", confirm_del)
        document.querySelector(".confirm-button").addEventListener("click", not_confirm_del)
    }

    function not_confirm_del(){
        document.querySelector(".confirm-button").setAttribute("style", "background-color: var(--white)")
        document.querySelector(".div-button").setAttribute("class", "div-button disabled")
        document.querySelector(".confirm-button").removeEventListener("click", not_confirm_del)
        document.querySelector(".confirm-button").addEventListener("click", confirm_del)
    }

})