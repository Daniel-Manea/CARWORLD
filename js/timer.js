import {
  app,
  getDatabase,
  set,
  ref,
  get,
  update,
  child
} from "./firebase/app.js";

$('.card').children('button').click(function (event) {
  if (event.target.id == 1) {
    $(`#${event.target.id}`).prop("disabled", true);
    startTimer();
    var mins = 0;
    var seconds = 11;
    async function startTimer() {
      const timex1 = setTimeout(function () {
        seconds--;


        function checkIn() {
          const db = getDatabase(app);
          set(ref(db, `CARWORLD/GARAGE${event.target.id}`), {
            CHECKIN: "HELOOOOOO",
            CHECKOUT: "GELLOOOO"
          });
        }

        checkIn()

        if (seconds < 10 && mins < 10) {
          $(".mins1").text(mins + ':');
          $(".seconds1").text("0" + seconds);

          if (mins < 1 && seconds < 1) {
            clearTimeout(timex1);
            mins = 0;
            seconds = 11;
            $(".mins1").text("Your car is clean!");
            $(".seconds1").text("");

            setTimeout(() => {
              $(".mins1").text("");
              $(".seconds1").text("");
            }, 2000);
            $(`#${event.target.id}`).prop("disabled", false);
            return
          }
        } else if (seconds > 1) {
          $(".mins1").text(mins + ':');
          $(".seconds1").text(seconds);
        } else if (seconds < 1 && mins >= 1) {
          seconds = 59; mins--;
          $(".mins1").text(mins + ':');
          $(".seconds1").text(seconds);
        }
        startTimer();
      }, 1000);
    }

  }

  if (event.target.id == 2) {
    $(`#${event.target.id}`).prop("disabled", true);
    startTimer();
    var mins = 0;
    var seconds = 11;
    async function startTimer() {
      const timex2 = setTimeout(function () {
        seconds--;


        function checkIn() {
          const db = getDatabase(app);
          set(ref(db, `CARWORLD/GARAGE${event.target.id}`), {
            CHECKIN: "HELOOOOOO",
            CHECKOUT: "GELLOOOO"
          });
        }

        checkIn()

        if (seconds < 10 && mins < 10) {
          $(".mins2").text(mins + ':');
          $(".seconds2").text("0" + seconds);

          if (mins < 1 && seconds < 1) {
            clearTimeout(timex2);
            mins = 0;
            seconds = 11;
            $(".mins2").text("Your car is clean!");
            $(".seconds2").text("");

            setTimeout(() => {
              $(".mins2").text("");
              $(".seconds2").text("");
            }, 2000);
            $(`#${event.target.id}`).prop("disabled", false);
            return
          }
        } else if (seconds > 1) {
          $(".mins2").text(mins + ':');
          $(".seconds2").text(seconds);
        } else if (seconds < 1 && mins >= 1) {
          seconds = 59; mins--;
          $(".mins2").text(mins + ':');
          $(".seconds2").text(seconds);
        }
        startTimer();
      }, 1000);
    }

  }

  if (event.target.id == 3) {
    $(`#${event.target.id}`).prop("disabled", true);
    startTimer();
    var mins = 0;
    var seconds = 11;
    async function startTimer() {
      const timex3 = setTimeout(function () {
        seconds--;


        function checkIn() {
          const db = getDatabase(app);
          set(ref(db, `CARWORLD/GARAGE${event.target.id}`), {
            CHECKIN: "HELOOOOOO",
            CHECKOUT: "GELLOOOO"
          });
        }

        checkIn()

        if (seconds < 10 && mins < 10) {
          $(".mins3").text(mins + ':');
          $(".seconds3").text("0" + seconds);

          if (mins < 1 && seconds < 1) {
            clearTimeout(timex3);
            mins = 0;
            seconds = 11;
            $(".mins3").text("Your car is clean!");
            $(".seconds3").text("");

            setTimeout(() => {
              $(".mins3").text("");
              $(".seconds3").text("");
            }, 2000);
            $(`#${event.target.id}`).prop("disabled", false);
            return
          }
        } else if (seconds > 1) {
          $(".mins3").text(mins + ':');
          $(".seconds3").text(seconds);
        } else if (seconds < 1 && mins >= 1) {
          seconds = 59; mins--;
          $(".mins3").text(mins + ':');
          $(".seconds3").text(seconds);
        }
        startTimer();
      }, 1000);
    }

  }

  if (event.target.id == 4) {
    $(`#${event.target.id}`).prop("disabled", true);
    startTimer();
    var mins = 0;
    var seconds = 11;
    async function startTimer() {
      const timex4 = setTimeout(function () {
        seconds--;


        function checkIn() {
          const db = getDatabase(app);
          set(ref(db, `CARWORLD/GARAGE${event.target.id}`), {
            CHECKIN: "HELOOOOOO",
            CHECKOUT: "GELLOOOO"
          });
        }

        checkIn()

        if (seconds < 10 && mins < 10) {
          $(".mins4").text(mins + ':');
          $(".seconds4").text("0" + seconds);

          if (mins < 1 && seconds < 1) {
            clearTimeout(timex4);
            mins = 0;
            seconds = 11;
            $(".mins4").text("Your car is clean!");
            $(".seconds4").text("");

            setTimeout(() => {
              $(".mins4").text("");
              $(".seconds4").text("");
            }, 2000);
            $(`#${event.target.id}`).prop("disabled", false);
            return
          }
        } else if (seconds > 1) {
          $(".mins4").text(mins + ':');
          $(".seconds4").text(seconds);
        } else if (seconds < 1 && mins >= 1) {
          seconds = 59; mins--;
          $(".mins4").text(mins + ':');
          $(".seconds4").text(seconds);
        }
        startTimer();
      }, 1000);
    }

  }
});