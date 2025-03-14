document.addEventListener("DOMContentLoaded", () => {
  const flights = document.querySelectorAll("tbody > tr");
  flights.forEach((flight, index) => {
    flight.style.visibility = "hidden";
  });
  //   flights.forEach((flight, index) => {
  //     const text = flight.textContent;
  //     flight.innerHTML = "";
  //     text.split("").forEach((char, charIndex) => {
  //       const span = document.createElement("span");
  //       span.textContent = char;
  //       span.style.animationDelay = `${charIndex * 0.1}s`;
  //       span.style.setProperty(
  //         "--iteration-count",
  //         Math.floor(Math.random() * 3) + 3
  //       );
  //       flight.appendChild(span);
  //     });
  //   });

  const animateFlights = (index) => {
    if (index >= flights.length) return;
    const flight = flights[index];
    const cells = flight.querySelectorAll("td");
    flight.style.visibility = "visible";
    cells.forEach((cell) => {
      const text = cell.textContent;

      cell.innerHTML = "";
      text.split("").forEach((char, charIndex) => {
        const span = document.createElement("span");
        span.textContent = char;
        span.style.animationDelay = `${charIndex * 0.1}s`;
        span.style.setProperty(
          "--iteration-count",
          Math.floor(Math.random() * 3) + 3
        );
        cell.appendChild(span);
      });

      cell.classList.add("animate");
    });
    const spans = flight.querySelectorAll("td > span");
    const maxIterations = Math.max(
      ...Array.from(spans).map((span) =>
        parseInt(span.style.getPropertyValue("--iteration-count"))
      )
    );

    const duration = spans.length * 100 + maxIterations * 1000;
    setTimeout(() => {
      animateFlights(index + 1);
    }, duration);
  };

  animateFlights(0);
});
