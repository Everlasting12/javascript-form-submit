let formData = document.getElementById("formdata");
// console.log(formData);
// let formData1 = document.getElementById("formdata").children;
// console.log(formData1);

function getElement(eleId) {
  return document.getElementById(eleId);
}

function getFormData(formDataEle) {
  return formData.elements[formDataEle];
}
formData.addEventListener("submit", (event) => {
  event.preventDefault();
  let table = document.getElementById("table");
  table.classList.remove("displayNone");
  table.classList.add("displayBlock");
  getElement("displayDate").innerText = getFormData("date").value;
  getElement("displayFullName").innerText = getFormData("fullname").value;
  getElement("displayInformation").innerText = getFormData("info").value;
  getElement("displayEmailId").innerText = getFormData("email").value;
  getElement("displaySelection").innerText = getFormData("laptop").value;
  getElement("displayMobileNumber").innerText =
    getFormData("mobileNumber").value;

  if (getFormData("gender")[0].checked) {
    getElement("displayGender").innerText = "Male";
  } else if (getFormData("gender")[1].checked) {
    getElement("displayGender").innerText = "Female";
  } else {
    getElement("displayGender").innerText = "";
  }

  if (getFormData("terms_condition").checked) {
    getElement("displayTermsAndCondition").innerText = "Yes";
  } else {
    getElement("displayTermsAndCondition").innerText = "No";
  }
});

// let promptPassword = prompt("Please Enter the password: ");
// console.log(promptPassword);
