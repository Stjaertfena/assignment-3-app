(function main (context, doc) {
  /**
   * Recursively calculates factorial value.
   * @param {Integer} value Value to calculate factorial of
   * @return {Integer} Factorial value
   */
  function getFactorial(value) {
      // Base case, target reached
      if (value < 2) {
        return 1;

      // Recursive case, continue recursion
      } else {
        return value * getFactorial(value - 1);
      }
  }

  var publicAPI = {
    /**
     * Calculates factorial value.
     * @param {Integer} value Value to calculate factorial of
     */
    calcFactorial: function (value) {
      var factorialText = "";

      for (var i = 0; i < value; i += 1) {
        factorialText += (i + 1) + ((i + 1 < value) ? "*" : "");
      }

      doc.querySelector('.factorial').textContent = "Factorial of !" + value + " (" + factorialText + ") = " + getFactorial(value);
    }
  };

  context.calcModule = publicAPI;
}(window, document));
