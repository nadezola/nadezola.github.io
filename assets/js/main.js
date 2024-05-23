function toggleCitation(event) {
  event.preventDefault();
  const citationContent = event.target.nextElementSibling;
  if (citationContent.style.display === "block") {
    citationContent.style.display = "none";
  } else {
    citationContent.style.display = "block";
  }
}