// date picker
        $('.datepicker').pickadate({
            labelMonthSelect:'Select a month',
            labelYearSelect:'Select a year',
            selectMonth: 'picker__select--month',
            selectYear: 'picker__select--year',
            min: new Date(),
            
        });

        // time picker
        $('.timepicker').pickatime({
            interval: 120,
            min: [9,00],
            max: [18,00],
            
        });
