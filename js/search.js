console.log("connected")
const submitBtn = document.getElementById('submitBtn')
const locationInput = document.getElementById('locationVal')
const roleInput = document.getElementById('roleVal')
const canContainer = document.getElementById('candidates-container')
const template1 = `<div class="w-100 my-4">
<div class="card d-flex flex-column flex-md-row justify-content-between align-items-center"
    style="width: 100%;">
    <div class="img-container">
        <img src="./img/austin-distel-7uoMmzPd2JA-unsplash.jpg" class="card-img-top col-3"
            alt="...">
    </div>
    <div class="card-body">
        <h5>`

const template2 = `</h5>
<p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
    libero
    officiis ex similique praesentium, recusandae repudiandae accusantium sunt dolor.</p>
<div class="d-flex flex-row justify-content-start align-items-center">
    <a class="profile-link m-2" href="#"><i class="fa-solid fa-envelope"></i></a>
    <a class="profile-link m-2" href="#"><i class="fa-brands fa-linkedin"></i></a>
    <a class="profile-link m-2" href="#"><i class="fa-solid fa-phone"></i></a>
</div>
<div class="d-flex flex-row align-items-center">
    <i class="fa-sharp fa-solid fa-location-dot m-2"></i>`

const template3 = `, India
    </div>
    <a href="view.html" class="btn btn-primary">View Details</a>
</div>
</div>
</div>`

const getData = async (locationVal, roleVal) => {
    const data = await fetch("../data/data.json");
    const jsonData = await data.json();
    let outputHtml;
    if (!locationVal && !roleVal) {
        outputHtml = jsonData.map((item) => {
            // console.log(item)
            return template1 + item.name + `, ${item.jobRole} ` + template2 + item.city + template3
        }).join("")
    }
    else if (roleVal && locationVal) {
        const filteredData = jsonData.filter((obj) => {
            if (obj.jobRole.toLowerCase() === roleVal.toLowerCase() && obj.city.toLowerCase() === locationVal.toLowerCase()) {
                return true;
            }
        })
        outputHtml = filteredData.map((item) => {
            // console.log(item)
            return template1 + item.name + `, ${item.jobRole} ` + template2 + item.city + template3;
        }).join("")
    }
    else if (locationVal && !roleVal) {
        const filteredData = jsonData.filter((obj) => {
            if (obj.city.toLowerCase() === locationVal.toLowerCase()) {
                return true;
            }
        })
        outputHtml = filteredData.map((item) => {
            // console.log(item)
            return template1 + item.name + `, ${item.jobRole} ` + template2 + item.city + template3
        }).join("")
    }
    else if (roleVal && !locationVal) {
        const filteredData = jsonData.filter((obj) => {
            if (obj.jobRole.toLowerCase() === roleVal.toLowerCase()) {
                return true;
            }
        })
        outputHtml = filteredData.map((item) => {
            // console.log(item)
            return template1 + item.name + `, ${item.jobRole} ` + template2 + item.city + template3
        }).join("")
    }
    locationInput.value = ""
    roleInput.value = ""
    canContainer.innerHTML = (outputHtml)
}

getData()
// canContainer.innerHTML


submitBtn.addEventListener('click', async (e) => {
    e.preventDefault()
    const locationVal = locationInput.value;
    const roleVal = roleInput.value;
    console.log(locationVal)
    console.log(roleVal)
    getData(locationVal, roleVal);
    // const data = await fetch("../data/data.json");
    // const jsonData = await data.json();
    // const filteredData = jsonData.filter((obj) => {
    //     if (obj.city.toLowerCase() === locationVal.toLowerCase() && obj.jobRole.toLowerCase() === roleVal.toLowerCase()) {
    //         return true;
    //     }
    // })
    // console.log(filteredData)
})
