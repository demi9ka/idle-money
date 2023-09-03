export default (data) => {
  const profit = data.click_profit * data.prestige;
  const check_up_prestige = data.money + profit >= data.prestige_value;
  if (check_up_prestige) {
    const result = {
      prestige_value: data.prestige_value * data.prestige_multiplier,
      prestige_local: data.prestige_local + data.prestige_profit,
      prestige_profit: data.prestige_profit + 6,
    };
    return result;
  }
  return {};
};
