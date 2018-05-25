function cncd_webform_provinceSelect() {
  // get the name of the selected province
  var selectID = this.id;
  var selectedProvince = jQuery('#' + selectID + ' option:selected').text();

  if (selectedProvince) {
    // find the label that ends with this name
    var regex = new RegExp(selectedProvince + "$");
    var labelOfCheckbox = jQuery('label').filter(
        function() {
          return regex.test($(this).text());
        }
    );

    if (labelOfCheckbox) {
      // find the checkbox via the "for" attribute
      var checkboxID = jQuery(labelOfCheckbox).attr('for');
      jQuery('#') + checkboxID).prop("checked");
    }
  }
}

jQuery(document).ready(
    function() {
      // check if we have a select which name ends with province-id, and add hook
      jQuery("select[id$='province-id']").on('change', cncd_webform_provinceSelect);
    }
);