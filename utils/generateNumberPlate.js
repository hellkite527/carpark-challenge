const generateNumberPlate = () => {
  const r = (x) => ~~(Math.random() * x) + "";
  const l = (x) => [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"][r(26)];

  return l() + l() + l() + "-" + r(10) + r(10) + r(10) + r(10);
};

export default generateNumberPlate;