function cncd_webform_provinceSelect() {
  // get the name of the selected province
  var selectID = this.id;
  var selectedProvince = jQuery('#' + selectID + ' option:selected').text();

  // find the matching tag label
  var labelContent = "";
  switch (selectedProvince) {
    case "Antwerpen":
      labelContent = "- - - Flandre ";
      break;
    case "Brabant Wallon":
      labelContent = "- - - Brabant Wallon ";
      break;
    case "Brussels":
      labelContent = "";
      break;
    case "Hainaut":
      labelContent = "";
      break;
    case "Liege":
      labelContent = "";
      break;
    case "Limburg":
      labelContent = "";
      break;
    case "Luxembourg":
      labelContent = "";
      break;
    case "Namur":
      labelContent = "";
      break;
    case "Oost-Vlaanderen":
      labelContent = "";
      break;
    case "West-Vlaanderen":
      labelContent = "";
      break;
    case "Vlaams-Brabant":
      labelContent = "";
  }

  // find the label contains the text
  var checkboxID = jQuery("label:contains('" + labelContent + "'").attr('for');
  if (checkboxID) {
    jQuery('#' + checkboxID).prop("checked");
  }
}

jQuery(document).ready(
    function() {
      // check if we have a select which name ends with province-id, and add hook
      jQuery("select[id$='province-id']").on('change', cncd_webform_provinceSelect);
    }
);