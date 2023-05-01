const selectElement = (selector) => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(
      `Somthing went wrong, make sure that ${selector} exists or is typed correctly.`
    );
  };

  const container = selectElement('.search')
  container.addEventListener('click', (e) => {
    console.log(e);
    container.classList.toggle("active");
  });