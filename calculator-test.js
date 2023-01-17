describe("calculate monthly payment", function () {
  it("should calculate the monthly rate correctly", function () {
    let values = { amount: 30000, years: 10, rate: 3.9 };
    let monthlyPayment = calculateMonthlyPayment(values);
    expect(monthlyPayment).toEqual("302.31");
  });
  it("should return a result with 2 decimal places", function () {
    let values = { amount: 10000, years: 3, rate: 20 };
    let monthlyPayment = calculateMonthlyPayment(values);
    expect(monthlyPayment).toBe("371.64");
  });
});
