
it('should calculate the monthly rate correctly', function () {
  let values = { amount: 160000, years: 30, rate: 3 };
  expect(calculateMonthlyPayment(values)).toEqual('674.57');
});

it("should return a result with 2 decimal places", function() {
  let values = { amount: 160000.9232432, years: 30, rate: 3.43434343 };
  expect(calculateMonthlyPayment(values)).toEqual('712.62');
});

it("should handle all zeros", function() {
  let values = { amount: 0, years: 0, rate: 0 };
  expect(calculateMonthlyPayment(values)).toEqual('0');
});

it("should handle no interest", function() {
  let values = { amount: 600, years: 1, rate: 0 };
  expect(calculateMonthlyPayment(values)).toEqual('50.00');
});

/// etc
