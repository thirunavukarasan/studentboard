// validating input - accept only alphabate for First Name & Last Name
function valAlphabate(e) {
   
    let val = e.target.value;
    console.log(val)
    if (!val) {
        return;
    }
    console.log(val)
    
    if (!val.match(/^[a-zA-Z]+$/)) {
        $('.enableOnInput').prop('disabled', true);  // disable button
        alert('Only alphabets are allowed');
        return false;
    }
    $('.enableOnInput').prop('disabled', false)  // enable button
    return true;
}


// validating Input -  accept only alphabate and number
function valAlphabateAndNumner() {

    let inputVal = $("[name='class']").val();
    if (!inputVal) {
        return;
    }
    console.log(inputVal)

    if (!inputVal.match(/^[0-9a-zA-Z]+$/)) {
        $('.enableOnInput').prop('disabled', true);
        alert('Only alphabets are allowed');
        return false;
    }
    $('.enableOnInput').prop('disabled', false);
    return true;
}

// validating Input - accept only numbers and condition checked year
function valYearPass() {

    let inputVal = $("[name='yearOfPass']").val();
    if (!inputVal) {
        return;
    }
    console.log(inputVal)

    if (!inputVal.match(/^[0-9]+$/)) {
        $('.enableOnInput').prop('disabled', true);
        alert('Only alphabets are allowed');
        return false;
    }
    if (inputVal > 2017) {
        $('.enableOnInput').prop('disabled', true);
        alert("Year should be less than 2017")
        return;
    }
    $('.enableOnInput').prop('disabled', false);
    return true;
}

// validating Input - accept only numbers 
function valPerofMark() {
    let inputVal = $("[name='perMark']").val();
    if (!inputVal) {
        return;
    }
    console.log(inputVal)

    if (!inputVal.match(/^[0-9]+$/)) {
        $('.enableOnInput').prop('disabled', true);
        alert('Only alphabets are allowed');
        return false;
    }
    $('.enableOnInput').prop('disabled', false);
    return true;
}

// save admission 
function saveAdmission (e) {
    e.preventDefault();      // prevet form submission 
    console.log("test")
    alert("Admission Saved Successfully")
    $("#admissionForm")[0].reset()          // reset a form once form is submitted
}