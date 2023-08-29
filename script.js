let examCenters = [
    {
        cityName: "Bangalore",
        collegeCode: "123456",
    },
    {
        cityName: "Chennai",
        collegeCode: "789012",
    },
    {
        cityName: "Kolkata",
        collegeCode: "345678",
    },
    {
        cityName: "Mumbai",
        collegeCode: "901234",
    },
    {
        cityName: "Hyderabad",
        collegeCode: "567890",
    },
    {
        cityName: "Pune",
        collegeCode: "234567",
    },
    {
        cityName: "Agra",
        collegeCode: "890123",
    },
    {
        cityName: "Jaipur",
        collegeCode: "456789",
    },
    {
        cityName: "Lucknow",
        collegeCode: "678901",
    },
    {
        cityName: "Patna",
        collegeCode: "901234",
    },
    {
        cityName: "Indore",
        collegeCode: "567890",
    },
    {
        cityName: "Nagpur",
        collegeCode: "234567",
    },
    {
        cityName: "Bhopal",
        collegeCode: "890123",
    },
    {
        cityName: "Amritsar",
        collegeCode: "456789",
    },
    {
        cityName: "Ahmedabad",
        collegeCode: "678901",
    },
];

let name = document.getElementById("name")
let email = document.getElementById("email")
let cityname = document.getElementById("cityname")
let collegecode = document.getElementById("collegecode")
let studentEmail = document.getElementById("student-email")
let studentName = document.getElementById("student-name")
let alertbtn = document.getElementById("alert-btn")
let greetbtn = document.getElementById("greet-btn")
let studetnINfo = document.getElementById("student-info")
let studentAdmitcontainer = document.getElementById("center-container")
let message = document.getElementById('message')

studentAdmitcontainer.classList.add('d-none')
alertbtn.classList.add('d-none')
greetbtn.classList.add('d-none')

let students = []

function getCode(name, email) {
    let studentdata = {
        name: name.value,
        email: email.value
    }

    checkStudent(studentdata)
    console.log(students)
}

function checkStudent(student) {
    let checkStudent = students.filter((currentStudent) => {
        return currentStudent.email == student.email
    })
    if (checkStudent.length == 0) {
        students.push(student)
        assignValue()
        studentAdmitcontainer.classList.remove('d-none')
        studetnINfo.classList.add('d-none')
        message.innerText = "Donwnload your center code information!!!!"
        name.value = ""
        email.value = ""

    } else {
        console.log("student email already used")
        alertbtn.classList.remove('d-none')
        alertbtn.classList.add('alert-btn')
        setTimeout(() => {
            alertbtn.classList.add('d-none')
        }, 3000);
    }
}

function assignValue() {
    let random = Math.floor(Math.random() * 15)
    cityname.innerText = examCenters[random].cityName
    collegecode.innerText = examCenters[random].collegeCode
    studentName.innerText = name.value
    studentEmail.innerText = email.value
}

function downloadCode() {
    greetbtn.classList.remove('d-none')
    greetbtn.classList.add('greet-btn')
    setTimeout(() => {
        greetbtn.classList.remove('greet-btn')
        greetbtn.classList.add('d-none')
        studentAdmitcontainer.classList.add('d-none')
        studetnINfo.classList.remove('d-none')
        message.innerText = "Enter your name and email to get your examination center code."
        cityname.innerText = ''
        collegecode.innerText = ''
        studentName.innerText = ''
        studentEmail.innerText = ''
    }, 3000);
}