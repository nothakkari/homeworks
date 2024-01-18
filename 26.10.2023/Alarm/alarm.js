function setAlarm(time) {
    const timeRegex = /^\d{2}:\d{2}:\d{2}$/;

    if (!timeRegex.test(time)) {
        console.error("Ошибка: Неверный формат времени.");
        return;
    }

    const [hours, minutes, seconds] = time.split(":").map(Number);

    const alarmTime = new Date();
    alarmTime.setHours(hours, minutes, seconds);

    const intervalId = setInterval(() => {
        const currentTime = new Date();
        
        currentTime.setMilliseconds(0);

        if (currentTime.getTime() >= alarmTime.getTime()) {
        console.log("Будильник сработал!");
        clearInterval(intervalId);
        }
    }, 1000);
}
  
setAlarm("17:33:00");