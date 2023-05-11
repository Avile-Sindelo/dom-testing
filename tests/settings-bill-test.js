describe('Setting values for the Settings Bill widget', function(){
    it('should test if the values are set the call cost', function(){
        //Create an instance of the factory function
        let settingsBill = BillWithSettings();
        assert.equal(0, settingsBill.getCallCost());
        settingsBill.setCallCost(2.45);
        assert.equal(2.45, settingsBill.getCallCost());
        
    });

    it('should set the value of the sms cost to R0.45 and check if it has been set properly', function(){
        let settingsBill2 = BillWithSettings();
        assert.equal(0, settingsBill2.getSmsCost());
        settingsBill2.setSmsCost(0.45);
        assert.equal(0.45, settingsBill2.getSmsCost());
    });

    it('should set the warning level to R15 and check if it has been set correctly', function(){
        let settingsBill3 = BillWithSettings();
        assert.equal(0, settingsBill3.getWarningLevel());
        settingsBill3.setWarningLevel(15);
        assert.equal(15, settingsBill3.getWarningLevel());
    });

    it('should set the value for the critical level to R25 and check if it has been set correctly', function(){
        let settingsBill4 = BillWithSettings();
        assert.equal(0, settingsBill4.getCriticalLevel());
        settingsBill4.setCriticalLevel(25);
        assert.equal(25, settingsBill4.getCriticalLevel());
    });
});

describe('Using the values of the Settings bill widget', function(){
    it('should set the warning level, critical level, call cost and make a few calls and check if the correct total for calls is returned', function(){
        let settingsBill5 = BillWithSettings();
        settingsBill5.setWarningLevel(15);
        settingsBill5.setCriticalLevel(20)
        settingsBill5.setCallCost(2);
        settingsBill5.makeCall();
        settingsBill5.makeCall();
        assert.equal(4.00, settingsBill5.getTotalCallCost());
    });

    it('should set the warning level, critical level, sms cost and send a few SMSs and check if the correct total for SMSs is returned', function(){
        let settingsBill6 = BillWithSettings();
        settingsBill6.setWarningLevel(10);
        settingsBill6.setCriticalLevel(25);
        settingsBill6.setSmsCost(0.25);
        settingsBill6.sendSms();
        settingsBill6.sendSms();
        settingsBill6.sendSms();
        settingsBill6.sendSms();
        assert.equal(1.00, settingsBill6.getTotalSmsCost());
    });

    it('should set the warning level, critical level, sms cost, call cost and make a few calls and SMSs. And then check if the correct class name is returned', function(){
        let settingsBill7 = BillWithSettings();
        settingsBill7.setSmsCost(0.50);
        settingsBill7.setCallCost(3);
        settingsBill7.setWarningLevel(10);
        settingsBill7.setCriticalLevel(15);

        settingsBill7.makeCall();
        settingsBill7.sendSms();
        settingsBill7.makeCall();
        settingsBill7.sendSms();
        settingsBill7.makeCall();
      
        assert.equal('warning', settingsBill7.getClassName());
    });

    it('should set the call cost, sms cost, warning level and critical level. Make a couple of calls and SMSs until the Critical level is reached. And then check if you CANNOT make calls or send SMSs any further', function(){
        let settingsBill8 = BillWithSettings();
        settingsBill8.setCallCost(4);
        settingsBill8.setSmsCost(2.50);
        settingsBill8.setWarningLevel(15);
        settingsBill8.setCriticalLevel(20);

        settingsBill8.makeCall();
        settingsBill8.sendSms();
        settingsBill8.makeCall();
        settingsBill8.sendSms();
        settingsBill8.makeCall();
        settingsBill8.sendSms();
        settingsBill8.makeCall();
        //Extra calls and SMSs
        settingsBill8.sendSms();
        settingsBill8.makeCall();
        settingsBill8.sendSms();
        settingsBill8.makeCall();
        settingsBill8.sendSms();
        settingsBill8.makeCall();
        settingsBill8.makeCall();
        settingsBill8.sendSms();
        settingsBill8.makeCall();
        settingsBill8.makeCall();
        settingsBill8.makeCall();

        assert.equal(23.5, settingsBill8.getGrandTotal());
        assert.equal('danger', settingsBill8.getClassName());
    });
});