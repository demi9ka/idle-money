export default (data, click = false) => {
  let profit = 0;
  if (click) {
    profit = data.click_profit * data.prestige;
  }
  if (data.money + profit >= data.prestige_value) {
    return {
      prestige_value: data.prestige_value * data.prestige_multiplier,
      prestige_local: data.prestige_local + data.prestige_profit,
      prestige_profit: data.prestige_profit * 1.2,
    };
  }
  return {};
};
