
// ================Navbar==================

document.addEventListener('DOMContentLoaded', function() {
  const navbarContent = document.querySelector('.navbar-content');
  const navbarToggler = document.querySelector('.navbar-toggler');
  
  function checkScreenSize() {
    if (window.innerWidth < 985) {
      navbarContent.style.display = 'none';
      navbarToggler.style.display = 'block';
    } else {
      navbarContent.style.display = 'block';
      navbarToggler.style.display = 'none';
    }
  }

  window.addEventListener('resize', checkScreenSize);
  checkScreenSize();  // Initial check
});

// =========== Alert section ================



function showAlert() {
  var alertElement = document.getElementById('topAlert');
  alertElement.style.display = 'block';
  window.setTimeout(function () {
    alertElement.classList.add('show');
  }, 100); // Delay to allow the transition to work
}


// ============= Navbar lists ================ 


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
});


// ==================Donors section==================

document.addEventListener('DOMContentLoaded', () => {
  const slideTrack = document.querySelector('.sliding-transition');
  const clones = slideTrack.children;

  for (let i = 0; i < clones.length / 2; i++) {
      const clone = clones[i].cloneNode(true);
      slideTrack.appendChild(clone);
  }
});

//========= js for Terms of service ============ 

var tab_lists = document.querySelectorAll(".tabs_list ul li");
var tabs_items = document.querySelectorAll(".tab_item");

tab_lists.forEach(function(list) {
    list.addEventListener("click", function() {
        let tab_data = list.getAttribute("data-tc");

        console.log(tab_data); 

        tab_lists.forEach(function(list) {
            list.classList.remove("active");
        });
        list.classList.add("active"); 

        tabs_items.forEach(function(item) {
            var tab_classes = item.getAttribute("class").split(" ");
            console.log(tab_classes);
            if(tab_classes.includes(tab_data)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});



// ============Afer and Before ==========


$('.post-wrapper').slick({
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplayspeed: 1000,
  nextArrow: $('.next'),
  prevArrow: $('.prev'),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


// // ================Contact Form ===============

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   // Get form data
//   const name = document.getElementById('name').value;
//   const email = document.getElementById('email').value;
//   const message = document.getElementById('message').value;

//   // Send email
//   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
//       from_name: name,
//       from_email: email,
//       message: message
//   }).then(function(response) {
//       alert('Email sent successfully!');
//   }, function(error) {
//       alert('Failed to send email: ' + JSON.stringify(error));
//   });
// });

