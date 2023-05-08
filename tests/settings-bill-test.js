describe('Setting values for the Settings Bill widget', function(){
    it('should test if the values are set the call cost', function(){
        //Create an instance of the factory function
        let settingsBill = BillWithSettings();
        assert.equal(0, settingsBill.getCallCost());
        settingsBill.setCallCost(2.45);
        assert.equal(2.45, settingsBill.getCallCost());
        
    });

    it('should test if the values are set the sms cost', function(){
        let settingsBill2 = BillWithSettings();
        assert.equal(0, settingsBill2.getSmsCost());
        settingsBill2.setSmsCost(0.45);
        assert.equal(0.45, settingsBill2.getSmsCost());
    });

    it('should test if the values are set for the Warning level', function(){
        let settingsBill3 = BillWithSettings();
        assert.equal(0, settingsBill3.getWarningLevel());
        settingsBill3.setWarningLevel(15);
        assert.equal(15, settingsBill3.getWarningLevel());
    });

    it('should test if the values are set for the Critical level', function(){
        let settingsBill4 = BillWithSettings();
        assert.equal(0, settingsBill4.getCriticalLevel());
        settingsBill4.setCriticalLevel(25);
        assert.equal(25, settingsBill4.getCriticalLevel());
    });
});

describe('Using the values of the Settings bill widget', function(){
    it('should use the value of the call cost set in the widget', function(){
        let settingsBill5 = BillWithSettings();
        settingsBill5.setCallCost(2);
        settingsBill5.makeCall();
        settingsBill5.makeCall();
        assert.equal(4.00, settingsBill5.getTotalCallCost());
    });

    it('should use the value of the sms cost set in the widget', function(){
        let settingsBill6 = BillWithSettings();
        settingsBill6.setSmsCost(0.25);
        settingsBill6.sendSms();
        settingsBill6.sendSms();
        settingsBill6.sendSms();
        settingsBill6.sendSms();
        assert.equal(1.00, settingsBill6.getTotalSmsCost());
    });
});