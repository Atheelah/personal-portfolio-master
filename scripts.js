//   function to open modal
function openModal() {
  document.getElementById("modal").classList.toggle("modal-active");
}

// function takes in id and displays the testimonial
function showTestimonial(id) {
  //this is to obtain all the testimonials
  document.querySelectorAll(".test-slider").forEach((test) => {
    //for each testimonial remove active class
    test.classList.remove("test-active");
  });
  //add active class to the testimonial ID received
  document.querySelector(`${id}`).classList.add("test-active");
}
