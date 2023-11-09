export const goal1Pos = (cat, subcat, offset = 0) => {
  var baseX = -186;
  var baseY = 1625;

  let x = baseX + -subcat * 200;
  let y = baseY + cat * 150 + offset;
  return { x, y };
};

export const goal2Pos = (cat, subcat, offset = 0) => {
  var baseX = -186;
  var baseY = 2650;

  let x = baseX + -subcat * 200;
  let y = baseY + cat * 150 + offset;
  return { x, y };
};

export const goal3Pos = (cat, subcat, offset = 0) => {
  var baseX = -186;
  var baseY = 3950;

  let x = baseX + -subcat * 200;
  let y = baseY + cat * 150 + offset;
  return { x, y };
};

export const goal4Pos = (cat, subcat, offset = 0) => {
  var baseX = 1710;
  var baseY = 1625;

  let x = baseX + subcat * 200;
  let y = baseY + cat * 150 + offset;
  return { x, y };
};

export const goal10Pos = (cat, subcat, offset = 0) => {
  var baseX = 1710;
  var baseY = 3190;

  let x = baseX + subcat * 200;
  let y = baseY + cat * 150 + offset;
  return { x, y };
};