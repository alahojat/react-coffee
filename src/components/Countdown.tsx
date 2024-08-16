export const Countdown = () => {
  // The timer displays the amoint time left from now to 250126
  // DEN HÄR SKA MED IMORGON
  //const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  // Current time in hours and seconds
  //   const currentDate = new Date();
  //   const timeStamp = currentDate.toLocaleString();
  //   console.log(timeStamp);
  //   const targetDate = new Date("26-01-2025 00:00:00");

  //const year = new Date().getFullYear();

  const difference = +new Date(`01/26/2025`) - +new Date();
  console.log(difference);

  let timeLeft = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  // GÖR TILL SETTIMELEFT I EN USEEFFECT
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  //setInterval(Countdown, 1000);

  return (
    <div>
      <h2>Countdown to happiness (coffee): </h2>
      <span>{timeLeft.days + " days "}</span>
      <span>{timeLeft.hours + " hours "}</span>
      <span>{timeLeft.minutes + " minutes "}</span>
      <span>{timeLeft.seconds + " seconds "}</span>
    </div>
  );
};

// create a function that cacuclates the remaining time
// set interval to restart the function every 1000ms
