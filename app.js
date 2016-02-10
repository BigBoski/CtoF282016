   var myModule = angular.module('TemperatureConverter', []);
        
        myModule.controller('TempConverter', 
        
            function ($scope) {
             
                var tc = this;
                
                tc.inputTempValue = 0;
                
        
                tc.farenheit = function addFaren()
                {
                    tc.converted = (tc.inputTempValue * 9.0) / 5.0 + 32;
                }
                
                tc.celcius = function addCelcius()
                {
                    tc.converted = (tc.inputTempValue - 32) * 5.0 / 9.0;
                }
            }
        
        );