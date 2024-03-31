//----------------------------- calendar -----------------------------//
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");

const currdate = document
	.querySelector(".calendar-current-date");

const prenexIcons = document
	.querySelectorAll(".calendar-navigation span");

// Array of month names
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

// Function to generate the calendar
const manipulate = () => {

	////// Get the first day of the month
	let dayone = new Date(year, month, 1).getDay();

	////// get the last date of the month
	let lastdate = new Date(year, month + 1, 0).getDate();

	///get the day of the last date of the month
	let dayend = new Date(year, month, lastdate).getDay();

	/////get the last date of the previous month
	let monthlastdate = new Date(year, month, 0).getDate();

	// Variable to store the generated calendar HTML
	let lit = "";

	// Loop to add the last dates of the previous month
	for (let i = dayone; i > 0; i--) {
		lit +=
			`<li class="inactive">${monthlastdate - i + 1}</li>`;
	}

	// Loop to add the dates of the current month
	for (let i = 1; i <= lastdate; i++) {

		// Check if the current date is today
		let isToday = i === date.getDate()
			&& month === new Date().getMonth()
			&& year === new Date().getFullYear()
			? "active"
			: "";
		lit += `<li class="${isToday}">${i}</li>`;
	}

	// Loop to add the first dates of the next month
	for (let i = dayend; i < 6; i++) {
		lit += `<li class="inactive">${i - dayend + 1}</li>`
	}

	// Update the text of the current date element 
	// with the formatted current month and year
	currdate.innerText = `${months[month]} ${year}`;

	// update the HTML of the dates element 
	// with the generated calendar
	day.innerHTML = lit;
}

manipulate();

// Attach a click event listener to each icon
prenexIcons.forEach(icon => {

	// When an icon is clicked
	icon.addEventListener("click", () => {

		// Check if the icon is "calendar-prev"
		// or "calendar-next"
		month = icon.id === "calendar-prev" ? month - 1 : month + 1;

		// Check if the month is out of range
		if (month < 0 || month > 11) {

			// Set the date to the first day of the 
			// month with the new year
			date = new Date(year, month, new Date().getDate());

			// Set the year to the new year
			year = date.getFullYear();

			// Set the month to the new month
			month = date.getMonth();
		}

		else {

			// Set the date to the current date
			date = new Date();
		}

		// Call the manipulate function to 
		// update the calendar display
		manipulate();
	});
});
//------------------------------ calendar -----------------------------// 


//-------------------------------- Sidebar current date ----------------------//
var currentDate = new Date();
var currentDay = currentDate.getDate();

document.getElementById('currentDate').textContent = currentDay; 


// ------------------------------------- tasks list --------------------------//
var modal = document.getElementById('taskModal');

var addTaskButton = document.getElementById('addTaskButton');

var closeBtn = document.getElementsByClassName('close')[0];
 
addTaskButton.onclick = function() {
    modal.style.opacity = '0'; 
    modal.style.display = 'block'; 

    var fadeInDuration = 90; 
    var startTime = performance.now(); 

    function updateOpacity(timestamp) {
        var elapsedTime = timestamp - startTime; 
        var opacity = (elapsedTime / fadeInDuration).toFixed(2); 
        modal.style.opacity = opacity; 

        
        if (elapsedTime < fadeInDuration) {
            requestAnimationFrame(updateOpacity); 
        }
    }

    
    requestAnimationFrame(updateOpacity);
}

closeBtn.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

//  Function to add a new task -------------------------------------
function addTask() {
    var taskName = document.getElementById('taskNameInput').value;
    if (taskName.trim() !== '') {
        var newTaskDiv = document.createElement('div');
        newTaskDiv.classList.add('task');

        var newLabel = document.createElement('label');
        newLabel.textContent = taskName;
		
		var newCheckbox = document.createElement('input');
        newCheckbox.setAttribute('type', 'checkbox');
		

        
        newTaskDiv.appendChild(newCheckbox);
        newTaskDiv.appendChild(newLabel);

        var tasksList = document.querySelector('.tasks-list');
        tasksList.insertBefore(newTaskDiv, tasksList.lastElementChild); // Insert before the add task button

        modal.style.display = 'none';

        document.getElementById('taskNameInput').value = '';
    }
}


var confirmBtn = document.getElementById('confirmAddTask');
var cancelBtn = document.getElementById('cancelAddTask');


confirmBtn.addEventListener('click', addTask);




//--------------------------------- insert task to database -------------------------

//// 

