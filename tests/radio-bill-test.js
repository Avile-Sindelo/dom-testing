describe('Radio Bill Testing', function(){
    it('should test if the correct call and sms costs is returned', function(){
        let radioBill = RadioBill();
        assert.equal(2.75, radioBill.getRadioCallCost());
        assert.equal(0.75, radioBill.getRadioSmsCost());
    });

    it('should test if you are able to make a call', function(){
        let radioBill = RadioBill();
        radioBill.radioCall();
        assert.equal(2.75, radioBill.getRadioTotal());
    });

    it('should test if you are able to send an SMS', function(){
        let radioBill = RadioBill();
        radioBill.radioSms();
        assert.equal(0.75, radioBill.getRadioTotal());
    });

    it('should test if the correct class name is returned when the warning level is reached', function(){
        let radioBill = RadioBill();
        //make a bunch of calls and SMSs
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioSms();
        radioBill.radioSms();

        assert.equal(31.75, radioBill.getRadioTotal());
    });

    it('should test if the correct class name is returned when the crtitical level is reached', function(){
        let radioBill = RadioBill();
        //make a bunch of calls and SMSs
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioSms();
        radioBill.radioSms();
        radioBill.radioSms();
        radioBill.radioSms();
        radioBill.radioSms();
        radioBill.radioSms();
        radioBill.radioSms();
        radioBill.radioSms();
        radioBill.radioSms();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        radioBill.radioCall();
        

        assert.equal('danger', radioBill.getClassName());
        assert.equal(52.75, radioBill.getRadioTotal());
    });
});