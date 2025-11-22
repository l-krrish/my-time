export default function handler(req, res) {
  // Get real Toronto time
  const now = new Date();

  const dateFormatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long"
  });

  const timeFormatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Toronto",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  });

  const date = dateFormatter.format(now);
  const time = timeFormatter.format(now);

  res.status(200).json({
    date: date,
    time: time,
    timezone: "America/Toronto"
  });
}
