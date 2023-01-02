//refrence

var contactFormDB = firebase.database().ref('Reports');

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var dob = getElementVal("dob");
  var bloodgroup = getElementVal("bloodgroup");
  var adn = getElementVal("adn");
  var medicalhistory = getElementVal("medicalhistory");
  var msgContent = getElementVal("msgContent");
  saveMessages(name, dob, bloodgroup, allergy, adn, medicalhistory, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";
  
  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, dob, bloodgroup, allergy, adn, medicalhistory, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    dob: dob,
    bloodgroup: bloodgroup,
    allergy: allergy,
    adn: adn,
    medicalhistory: medicalhistory,
 msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};


//QR Code
//name id changed
qrdata = document.getElementById('name');
qrdob = document.getElementById('dob');
qrbloodgroup = document.getElementById('bloodgroup');
qrallergy = document.getElementById('allergy');
qrmail = document.getElementById('emailid');
qrmedicalhistory = document.getElementById('medicalhistory');
qrmedicalreports = document.getElementById('msgContent');


//QR Styling

const qrCode = new QRCodeStyling({
  width: 300,
  height: 300,
  data: "Please enter the data and then try to scan me.",
  image: "",
  dotsOptions: {
    color: "#203354",
    type: "square"
  },
});

const updateqrdata = ()=>{
  newqrdata=qrdata.value;
  qrCode.update({
    data: newqrdata
  });
};
const updateqrdob = ()=>{
  newqrdata=qrdata.value+qrdob.value;
  qrCode.update({
    data:newqrdata
  });
};
const updateqrbloodgroup = ()=>{
  newqrdata=qrdata.value+qrdob.value+qrbloodgroup.value;
  qrCode.update({
    data:newqrdata
  });
};
const updateqrallergy = ()=>{
  newqrdata=qrdata.value+qrdob.value+qrbloodgroup.value+qrallergy.value;
  qrCode.update({
    data:newqrdata
  });
};

//button

const download =() => qrCode.download("jepeg");

qrCode.append(document.getElementById('canvas'));