// alerting to fill out the form only on the event page

if (window.location.pathname === "/Events.html"){
    alert("Fill out the Event inquiry form to schedule a consult.")
}

// explaining the next step after submiting the form

if (window.location.pathname === "/Events.html"){
    document.getElementById('submit-btn').onclick = function() {
        alert("Thank you for submiting your Event Inquiry Form! You will be contacted via Email in 1-3 business days. ");
      };
    }


// alerting to fill out the form only on the contact us page

if (window.location.pathname === "/ContactUs.html"){
    alert("Fill out the Contact Us Form with any of your questions or concerns.")
    }


// explainging the next step after submiting the form

if (window.location.pathname === "/ContactUs.html"){
    document.getElementById('contact-btn').onclick = function() {
        alert("Thank you for submiting your Contact Us Form! You will be contacted via Email in 1-3 business days. ");
          };
        }