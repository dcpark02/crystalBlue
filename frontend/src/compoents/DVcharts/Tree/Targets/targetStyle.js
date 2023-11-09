export const layer2SDG = (id) => {
  let color = "";
  switch (id) {
    case 1:
      color = "#E5243B";
      break;
    case 2:
      color = "#DDA63A";
      break;
    case 3:
      color = "#4C9F38";
      break;
    case 4:
      color = "#C5192D";
      break;
    case 5:
      color = "#FF3A21";
      break;
    case 6:
      color = "#26BDE2";
      break;
    case 7:
      color = "#FCC30B";
      break;
    case 8:
      color = "#A21942";
      break;
    case 9:
      color = "#FD6925";
      break;
    case 10:
      color = "#DD1367";
      break;
    case 11:
      color = "#FD9D24";
      break;
    case 12:
      color = "#BF8B2E";
      break;
    case 13:
      color = "#3F7E44";
      break;
    case 14:
      color = "#0A74DA";
      break;
    case 15:
      color = "#56C02B";
      break;
    case 16:
      color = "#00689D";
      break;
    case 17:
      color = "#19486A";
      break;
  }
  return {
    border: `1px solid ${color}`,
    background: color,
    color: "white",
    fontSize: 15,
    padding: 10,
    marginRight: 0,
    borderRadius: 10,
  };
};
