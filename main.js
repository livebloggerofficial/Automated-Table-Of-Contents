// Reference the elements

const tocContainer = document.querySelector(".toc-container");
const allHeadings = document.querySelectorAll(".post-body h2");

// Create the TOC

function createTable() {
  const hForIndex = document.createElement("h2");
  hForIndex.classList.add("index-heading");
  hForIndex.innerText = "Table of Contents";

  tocContainer.appendChild(hForIndex);

  const ul = document.createElement("ul");
  ul.classList.add("table-of-contents");

  tocContainer.appendChild(ul);

  addIdToHeadings();

  allHeadings.forEach(i => {
    // console.log(i.innerText);

    const li = document.createElement("li");
    const a = document.createElement("a");
    a.innerText = i.innerText;
    a.setAttribute("href", "#" + i.getAttribute("id"));

    li.appendChild(a);
    ul.appendChild(li);
  });
}

if (tocContainer != null) {
  createTable();
}

// Add ids to the headings

function addIdToHeadings() {
  allHeadings.forEach(i => {
    const id = i.innerText
      .split(" ")
      .join("-")
      .toLowerCase();

    i.setAttribute("id", id);
  });
}
