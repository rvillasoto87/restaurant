'use strict';

angular.module('myNewAppApp')
  .factory('PostPay', function () {
    var Value = [];
    var checkoutParameters = {service:"",merchanID:""};
    var i = 0;
    var clearCart = false;
    // Public API here
    return {
      GetValue: function () {
        return Value;
      },
      IngresarValor: function(value){
        value.categorias.forEach(function(item,i){
          item.menu.forEach(function(itm,e){
            if(itm.seleccionado){
              var obj = itm;
              Value.push(obj);
            }
          });
        });
      },
      LimpiarCheckbox: function(){
        Value.categorias.forEach(function(item,i){
          item.menu.forEach(function(itm,e){
            if(itm.seleccionado){
              itm.seleccionado = false;
            }
          });
        });
      },
      checkout: function(serviceName, merchantID){
        // check parameters
        if (serviceName != "PayPal" && serviceName != "Google" && serviceName != "Stripe") {
          throw "serviceName must be 'PayPal' or 'Google' or 'Stripe'.";
        }
        if (merchantID == null) {
          throw "A merchantID is required in order to checkout.";
        }
        // save parameters
       // this.checkoutParameters[serviceName] = new checkoutParameters(serviceName, merchantID);
        checkoutParameters.service = serviceName;
        checkoutParameters.merchanID = merchantID;
        var parms = checkoutParameters;//this.checkoutParameters[serviceName];
        if (parms == null) {
          throw "Cannot get checkout parameters for '" + serviceName + "'.";
        }
        switch (parms.service) {
          case "PayPal":
            this.checkoutPayPal(parms);
            break;
          case "Google":
            this.checkoutGoogle(parms);
            break;
          case "Stripe":
            this.checkoutStripe(parms);
            break;
          default:
            throw "Unknown checkout service: " + parms.service;
        }
      },
      checkoutPayPal: function(parms){
        // global data
        var data = {
          cmd: "_cart",
          business: parms.merchanID,
          upload: "1",
          rm: "2",
          charset: "utf-8"
        };

        // item data
        for (var i = 0; i < this.GetValue().length; i++) {
          var itm = Value[i];
          var ctr = i + 1;
          data["item_number_" + ctr] = itm._id;
          data["item_name_" + ctr] = itm.name;
          data["quantity_" + ctr] = itm.cant;
          data["amount_" + ctr] = itm.precio;
        }

       /* this.GetValue().categorias.forEach(function(item,i){
          item.menu.forEach(function(itm,e){
            var ctr = i + 1;
            data["item_number_" + ctr] = itm._id;
            data["item_name_" + ctr] = itm.name;
            data["quantity_" + ctr] = itm.cant;
            data["amount_" + ctr] = itm.precio;
            i++;
          });
        });*/

        // build form
        var form = $('<form/></form>');
        form.attr("action", "https://www.paypal.com/cgi-bin/webscr");
        form.attr("method", "POST");
        form.attr("style", "display:none;");
        this.addFormFields(form, data);
        this.addFormFields(form, parms.options);
        $("body").append(form);

        // submit form
        //clearCart = clearCart == null || clearCart;
        form.submit();
        form.remove();
      },
      addFormFields :function (form, data) {
      if (data != null) {
        $.each(data, function (name, value) {
          if (value != null) {
            var input = $("<input></input>").attr("type", "hidden").attr("name", name).val(value);
            form.append(input);
          }
        });
      }
    }
    };
  });
