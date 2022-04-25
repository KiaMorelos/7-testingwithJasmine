describe("Helpers test (with setup and tear-down)", function() {
    beforeEach(function () {
        billAmtInput.value = 20;
        tipAmtInput.value = 4;
        submitPaymentInfo();
      });
   
      it('should sum all payments and return the correct totals for tips and bills', function(){
        expect(sumPaymentTotal('tipAmt')).toEqual(4)
        expect(sumPaymentTotal('billAmt')).toEqual(20)
        billAmtInput.value = 30;
        tipAmtInput.value = 6;
        submitPaymentInfo();
        expect(sumPaymentTotal('billAmt')).toEqual(50)
        expect(sumPaymentTotal('tipAmt')).toEqual(10)
      });

      it('should calculate the correct tip percent', function(){
        expect(calculateTipPercent('20', '4')).toEqual(20);
      })

      it('should append a new td to a table row its been called for', function(){
          
          let testRow = document.createElement('tr');
          appendTd(testRow, 'test value')
          expect(testRow.childElementCount).toEqual(1);
          expect(testRow.firstChild.innerText).toEqual('test value');
      });

      it('should include a delete button', function(){
        let testRow = document.createElement('tr');
        appendTd(testRow, 'test value')
        appendDeleteBtn(testRow)
        expect(testRow.lastChild.innerText).toEqual('X');
      });

      afterEach(function(){
        paymentId = 0;
        billAmtInput.value = '';
        tipAmtInput.value = '';
        allPayments = {};
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
    })
});

