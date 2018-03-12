import { Locale } from "../types/locale";

export const english: Locale = {
  weekdays: {
    shorthand: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    longhand: [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ],
  },
  months: {
    shorthand: [
      "Янв",
      "Фев",
      "Март",
      "Апр",
      "Май",
      "Июнь",
      "Июль",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек",
    ],
    longhand: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 1, // Monday
  ordinal: (nth: number) => {
    const s = nth % 100;
    if (s > 3 && s < 21) return "th";
    switch (s % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  weekAbbreviation: "Нед.",
  rangeSeparator: " — ",
  scrollTitle: "Прокрутите для увеличения",
  toggleTitle: "Нажмите для переключения",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Год",
};

export default english;
