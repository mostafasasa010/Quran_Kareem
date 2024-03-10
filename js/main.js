document
  .getElementById("dropdown-toggle")
  .addEventListener("click", function (event) {
    var optionContainer = document.getElementById("option-container");
    if (
      optionContainer.style.display === "none" ||
      optionContainer.style.display === ""
    ) {
      optionContainer.style.display = "block";
    } else {
      optionContainer.style.display = "none";
    }
    event.stopPropagation();
  });

// Close the option container when clicking outside of it
document.addEventListener("click", function (event) {
  var optionContainer = document.getElementById("option-container");
  var dropdownToggle = document.getElementById("dropdown-toggle");
  if (
    !optionContainer.contains(event.target) &&
    event.target !== dropdownToggle
  ) {
    optionContainer.style.display = "none";
  }
});

// Close the option container and set selected value when an option is clicked
var options = document.querySelectorAll(".option");
options.forEach(function (option) {
  option.addEventListener("click", function () {
    var selectedValue = option.getAttribute("data-value");
    var data = dataTable(selectedValue);
    // Check if the clicked option is "مرة"
    if (option.textContent === "مرة") {
      // Generate and show the table
      var tableContainer = document.getElementById("tableContainer");
      var table = createTable(data);
      tableContainer.innerHTML = ""; // Clear existing table content
      tableContainer.appendChild(table);
    } else if (option.textContent === "مرتين") {
      var tableContainer = document.getElementById("tableContainer");
      var table = createTable(data);
      tableContainer.innerHTML = ""; // Clear existing table content
      tableContainer.appendChild(table);
    } else if (option.textContent === "3 مرات") {
      var tableContainer = document.getElementById("tableContainer");
      var table = createTable(data);
      tableContainer.innerHTML = ""; // Clear existing table content
      tableContainer.appendChild(table);
    } else if (option.textContent === "4 مرات") {
      var tableContainer = document.getElementById("tableContainer");
      var table = createTable(data);
      tableContainer.innerHTML = ""; // Clear existing table content
      tableContainer.appendChild(table);
    } else if (option.textContent === "5 مرات") {
      var tableContainer = document.getElementById("tableContainer");
      var table = createTable(data);
      tableContainer.innerHTML = ""; // Clear existing table content
      tableContainer.appendChild(table);
    } else if (option.textContent === "6 مرات") {
      var tableContainer = document.getElementById("tableContainer");
      var table = createTable(data);
      tableContainer.innerHTML = ""; // Clear existing table content
      tableContainer.appendChild(table);
    } else if (option.textContent === "7 مرات") {
      var tableContainer = document.getElementById("tableContainer");
      var table = createTable(data);
      tableContainer.innerHTML = ""; // Clear existing table content
      tableContainer.appendChild(table);
    } else if (option.textContent === "8 مرات") {
      var tableContainer = document.getElementById("tableContainer");
      var table = createTable(data);
      tableContainer.innerHTML = ""; // Clear existing table content
      tableContainer.appendChild(table);
    } else if (option.textContent === "9 مرات") {
      var tableContainer = document.getElementById("tableContainer");
      var table = createTable(data);
      tableContainer.innerHTML = ""; // Clear existing table content
      tableContainer.appendChild(table);
    } else if (option.textContent === "10 مرات") {
      var tableContainer = document.getElementById("tableContainer");
      var table = createTable(data);
      tableContainer.innerHTML = ""; // Clear existing table content
      tableContainer.appendChild(table);
    } else {
      // Hide the table
      document.getElementById("myTable").classList.add("hide");
    }

    // Update the dropdown toggle text and hide the option container
    document.getElementById("dropdown-toggle").textContent = option.textContent;
    document.getElementById("option-container").style.display = "none";
  });
});

function createTable(data) {
  var table = document.createElement("table");
  table.id = "myTable";

  var thead = document.createElement("thead");
  var trHead = document.createElement("tr");
  var headers = ["عدد الختمات", "الفجر", "الظهر", "العصر", "المغرب", "العشاء"];
  headers.forEach(function (headerText) {
    var th = document.createElement("th");
    th.textContent = headerText;
    trHead.appendChild(th);
  });
  thead.appendChild(trHead);
  table.appendChild(thead);

  var tbody = document.createElement("tbody");
  data.forEach(function (rowData) {
    var trBody = document.createElement("tr");
    Object.values(rowData).forEach(function (cellData) {
      var td = document.createElement("td");
      td.textContent = cellData;
      trBody.appendChild(td);
    });
    tbody.appendChild(trBody);
  });
  table.appendChild(tbody);

  return table;
}

const dataTable = (selectedValue) => {
  switch (selectedValue) {
    case "1":
      return [
        {
          title: "ختمة واحدة",
          fajr: "4 صفحات",
          dhuhr: "4 صفحات",
          asr: "4 صفحات",
          maghrib: "4 صفحات",
          isha: "4 صفحات",
        },
      ];
    case "2":
      return [
        {
          title: "ختمتين",
          fajr: "8 صفحات",
          dhuhr: "8 صفحات",
          asr: "8 صفحات",
          maghrib: "6 صفحات",
          isha: "10 صفحات",
        },
      ];
    case "3":
      return [
        {
          title: "ثلاث ختمات",
          fajr: "12 صفحات",
          dhuhr: "12 صفحات",
          asr: "12 صفحات",
          maghrib: "10 صفحات",
          isha: "14 صفحات",
        },
      ];
    case "4":
      return [
        {
          title: "اربع ختمات",
          fajr: "16 صفحات",
          dhuhr: "16 صفحات",
          asr: "16 صفحات",
          maghrib: "14 صفحات",
          isha: "18 صفحات",
        },
      ];
    case "5":
      return [
        {
          title: "خمس ختمات",
          fajr: "20 صفحات",
          dhuhr: "20 صفحات",
          asr: "20 صفحات",
          maghrib: "18 صفحات",
          isha: "22 صفحات",
        },
      ];
    case "6":
      return [
        {
          title: "ست ختمات",
          fajr: "24 صفحات",
          dhuhr: "24 صفحات",
          asr: "24 صفحات",
          maghrib: "22 صفحات",
          isha: "26 صفحات",
        },
      ];
    case "7":
      return [
        {
          title: "سبع ختمات",
          fajr: "28 صفحات",
          dhuhr: "28 صفحات",
          asr: "28 صفحات",
          maghrib: "26 صفحات",
          isha: "30 صفحات",
        },
      ];
    case "8":
      return [
        {
          title: "ثمان ختمات",
          fajr: "32 صفحات",
          dhuhr: "32 صفحات",
          asr: "32 صفحات",
          maghrib: "30 صفحات",
          isha: "34 صفحات",
        },
      ];
    case "9":
      return [
        {
          title: "تسع ختمات",
          fajr: "36 صفحات",
          dhuhr: "36 صفحات",
          asr: "36 صفحات",
          maghrib: "34 صفحات",
          isha: "38 صفحات",
        },
      ];
    case "10":
      return [
        {
          title: "عشر ختمات",
          fajr: "40 صفحات",
          dhuhr: "40 صفحات",
          asr: "40 صفحات",
          maghrib: "38 صفحات",
          isha: "42 صفحات",
        },
      ];
  }
};

// Function to update the countdown timer
function updateCountdown() {
  // Set the target date to April 9th of the current year
  var targetDate = new Date();
  targetDate.setMonth(3); // April is month 3 (zero-based index)
  targetDate.setDate(9);
  targetDate.setHours(0, 0, 0, 0);

  // Get the current date and time
  var currentDate = new Date();

  // Calculate the time difference between the current date and the target date
  var timeDifference = targetDate - currentDate;

  // Convert the time difference to days, hours, minutes, and seconds
  var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  // Display the countdown timer
  var countdownElement = document.getElementById("countdown");
  countdownElement.innerHTML =
    days +
    " يوم " +
    hours +
    " ساعة " +
    minutes +
    " دقيقة " +
    seconds +
    " ثانية ";

  // Update the countdown every second
  setTimeout(updateCountdown, 1000);
}

// Call the updateCountdown function to start the countdown timer
updateCountdown();
