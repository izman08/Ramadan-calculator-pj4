function countdownToRamadan() {
  const ramadanStartDate = new Date('2025-03-10T00:00:00'); 
  const ramadanEndDate = new Date('2025-04-08T23:59:59'); 
  const now = new Date();

  let targetDate;


  if (now >= ramadanStartDate && now <= ramadanEndDate) {
      targetDate = ramadanEndDate;
      document.getElementById('message').textContent = "Ramadan is ongoing!";
  } else if (now < ramadanStartDate) {
      targetDate = ramadanStartDate;
      document.getElementById('message').textContent = "Ramadan is coming soon!";
  } else {
      document.getElementById('message').textContent = "Ramadan has ended for this year.";
      return;
  }

  const timeInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const distance = targetDate - currentTime;

      if (distance <= 0) {
          clearInterval(timeInterval);
          document.getElementById('message').textContent = "Ramadan has ended!";
          return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      document.getElementById('days').textContent = days < 10 ? '0' + days : days;
      document.getElementById('hours').textContent = hours < 10 ? '0' + hours : hours;
      document.getElementById('minutes').textContent = minutes < 10 ? '0' + minutes : minutes;
      document.getElementById('seconds').textContent = seconds < 10 ? '0' + seconds : seconds;
  }, 1000);
}


countdownToRamadan();
