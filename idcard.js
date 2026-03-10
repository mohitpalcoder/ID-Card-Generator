// Color Inputs
const upperColor = document.querySelector("#uppercolor");
const lowerColor = document.querySelector("#lowercolor");

// Institute Details
const instituteName = document.querySelector("#inst_name");
const instituteAddress = document.querySelector("#insta_add");

// Student Details
const studentName = document.querySelector("#name");
const course = document.querySelector("#course");
const phone = document.querySelector("#phone");
const address = document.querySelector("#address");

// Image Input
const imageInput = document.querySelector("#image");

// Submit Button
const submitBtn = document.querySelector("#submit");

const form = document.querySelector("form");




const mainForm = document.querySelector(".mainform");
const formContainer = document.querySelector(".form");
const mainCard = document.querySelector(".maincard");
const card = document.querySelector(".card");
const mainSection = document.querySelector(".main");
const extraSection = document.querySelector(".extra");
const photo = document.querySelector(".photo img");
const details = document.querySelector(".details");





const cardPhoto = document.querySelector(".carxx");
const cardName = document.querySelector("#cardname");
const cardCourse = document.querySelector("#cardcourse");
const cardPhone = document.querySelector("#cardphone");
const cardAddress = document.querySelector("#cardadd");


const mainh = document.querySelector("#mainh");
const mainp = document.querySelector("#mainp");



form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    
    mainSection.style.backgroundColor = uppercolor.value;
    extraSection.style.backgroundColor = lowercolor.value;
    mainh.textContent= instituteName.value;
    mainp.textContent = instituteAddress.value;
    // cardPhoto.src = imageInput.value;

    const file = imageInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            cardPhoto.src = e.target.result;
            
        };

        reader.readAsDataURL(file);
    }

    cardName.textContent = studentName.value ;
    cardCourse.textContent = course.value;
    cardPhone.textContent = phone.value;
    cardAddress.textContent = address.value;

    studentName.value = "";
    course.value = "";
    phone.value = "";
    address.value = "";
    imageInput.value = null;
    
    

    });



    const saveBtn = document.querySelector("#saveCard");

        saveBtn.addEventListener("click", function() {
        html2canvas(card).then(canvas => {
        const link = document.createElement("a");
        link.download = "id-card.png";
        link.href = canvas.toDataURL();
        link.click();
        });
    });

