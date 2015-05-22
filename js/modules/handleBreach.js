define(function () {
  return {
    calculateSalary: function (salary, breachRate) {
      if(breachRate != 0)
        return salary / breachRate;
      else
        return salary
    }
  };
});