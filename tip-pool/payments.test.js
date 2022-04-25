describe('test payments js file and clean up', function (){
beforeEach(function(){
    billAmtInput.value = 20;
    tipAmtInput.value = 4;
});

it('should add to the payment object when a payment is submitted', function(){
   
    submitPaymentInfo()
            
    expect(Object.values(allPayments).length).toEqual(1); 
});

it('should not add a payment if the value for bill field is empty', function(){
    billAmtInput.value = '';
    submitPaymentInfo()
    
    expect(Object.values(allPayments).length).toEqual(0);
});

it('should not add a payment if both inputs are empty or zero', function(){
    tipAmtInput.value = '0';
    billAmtInput.value = '0';
    expect(createCurPayment()).toEqual(undefined)

    tipAmtInput.value = '';
    billAmtInput.value = '';
    expect(createCurPayment()).toEqual(undefined)
});

it('should create new payments when requirements are met and the create function is used', function(){
 let somePayment = {
     billAmt: '20',
     tipAmt: '4',
     tipPercent: 20
 }
 expect(createCurPayment()).toEqual(somePayment)
});

it('should still add a payment if just the tip is zero', function(){

    billAmtInput.value = 20; tipAmtInput.value = 0;submitPaymentInfo()
            
    expect(Object.values(allPayments).length).toEqual(1);             
});

it('should calculate the correct average tip percentage', function(){
    submitPaymentInfo()
    billAmtInput.value = 20; 
    tipAmtInput.value = 1;
    submitPaymentInfo()
    updateSummary()
    expect(summaryTds[2].innerHTML).toEqual("13%")
});

it('should create a new table row element for each payment entered in paymentTable', function(){
    
    submitPaymentInfo()
    billAmtInput.value = 20;
    tipAmtInput.value = 1;
    submitPaymentInfo()

    let testRow = document.querySelectorAll("#paymentTable tbody tr");
    expect(testRow.length).toEqual(2);
});

it('should have a delete btn', function(){
    submitPaymentInfo()
    let testRow = document.querySelectorAll("#paymentTable tbody tr td");
    expect(testRow[3].innerHTML).toEqual('X');
})

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
});
});