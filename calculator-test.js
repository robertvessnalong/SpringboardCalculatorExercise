it("should calculate the monthly rate correctly", function () {
  const monthlyPayment = {
    amount: 30000,
    years: 4,
    rate: 7.2,
  };
  expect(calculateMonthlyPayment(monthlyPayment)).toEqual("721.17");
});

it("should return a result with 2 decimal places", function () {
  const monthlyPayment = {
    amount: 32313,
    years: 6,
    rate: 2.9,
  };
  expect(calculateMonthlyPayment(monthlyPayment)).toEqual("489.51");
});

/// etc
